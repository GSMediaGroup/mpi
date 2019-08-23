<?php

use PHPMailer\PHPMailer\PHPMailer;

class SendMail
{
    private $fromName = null;
    private $fromEmail = null;
    private $message = null;
    private $errors = [];

    public function __construct($email, $name, $message)
    {
        $this->rules = [
            'name' => 'required|min:3|max:30|string',
            'email' => 'required|email',
            'message' => 'required|min:2',
        ];

        $this->fromEmail = $email;
        $this->fromName = $name;
        $this->message = $message;

        $this->make();
    }

    private function make()
    {
        $rules = $this->rules;
        $data = [
            'name' => $this->fromName,
            'email' => $this->fromEmail,
            'message' => $this->message,
        ];

        foreach ($rules as $field => $rule) {
            $parts = explode('|', $rule);
            foreach ($parts as $part) {
                $this->validate($data, $field, $part);
            }
        }


        if (!empty($this->errors)) {
            echo "";
            $this->respond($this->errors);
        } else {
            $this->send();
            $this->respond();
        }
    }

    private function validate($data, $field, $part)
    {
        $rule = explode(':', $part);
        $ruleName = $rule[0];
        $ruleArg = isset($rule[1]) ? $rule[1] : '';

        switch ($ruleName) {
            case 'required':
                if (!isset($data[$field])) {
                    $this->errors[$field] = "Field $field is required";
                }
                break;
            case 'min' :
                if (strlen($data[$field]) < $ruleArg) {
                    $this->errors[$field] = "This field value must be higher $ruleArg";
                }
                break;
            case 'max':
                if (strlen($data[$field]) > $ruleArg) {
                    $this->errors[$field] = "This field value must be higher $ruleArg";
                }
                break;
            case 'string' :
                if (!is_string($data[$field])) {
                    $this->errors[$field] = "Field $field must be string";
                }
                break;

            case 'email' :
                if (!filter_var($data[$field], FILTER_VALIDATE_EMAIL)) {
                    $this->errors[$field] = "Email address is not valid";
                }

                break;
        }
    }

    private function send()
    {
        try {
            $mail = new PHPMailer(true);
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'rado196test@gmail.com';
            $mail->Password = 'rado.196';
            $mail->SMTPSecure = 'ssl';
            $mail->Port = 465;

            //Recipients
            $mail->setFrom('contact@myperfectidea.net', 'MPI');
            $mail->addBCC('haruta@myperfectidea.net', 'Harut Aghayan');
            $mail->addBCC('skarpioners1@gmail.com', 'Gor Stepanyan');

            // Content
            $mail->isHTML(true);
            $mail->Subject = 'MPI Contact';
            $mail->Body = 'Message from <b>' . $this->fromName . ' (' . $this->fromEmail . ')</b><br /><br />Message:<br />' . $this->message;

            $mail->send();
        } catch (Exception $e) {
            $this->respond(['message' => 'Something want wrong.']);
        }
    }

    public function respond($errors = null)
    {
        $args = is_null($errors)
            ? ['status' => 'success']
            : ['status' => 'failed', 'errors' => $errors,];

        echo json_encode($args, JSON_UNESCAPED_UNICODE);
    }
}

try {
    // Allow from any origin
    if (isset($_SERVER['HTTP_ORIGIN'])) {
        header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
        header('Access-Control-Allow-Credentials: true');
        header('Access-Control-Max-Age: 86400');
    }

    // Access-Control headers are received during OPTIONS requests
    if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD'])) {
            header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
        }

        if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS'])) {
            header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        }

        exit(0);
    }

    spl_autoload_register(function ($className) {
        if ('PHPMailer\PHPMailer' == substr($className, 0, 19)) {
            $file = __DIR__ . '/src/' . substr($className, 20) . '.php';
            require $file;
        }
    });

    $sendMail = new SendMail($_POST['email'], $_POST['name'], $_POST['message']);
} catch (Throwable $e) {
    $sendMail->respond(['message' => 'Something want wrong.']);
}
