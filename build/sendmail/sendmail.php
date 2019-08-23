<?php

require_once __DIR__ . '/src/PHPMailer.php';

class SendMail
{
    public $errors = [];

    public function __construct() {
        $mail = new PHPMailer;
        var_dump('dsfgdfg');die;
        $this->data = [
            'name' => 'Grish',
            'email' => 'example@example.com',
            'message' => 'message'
        ];

        $this->rules = [
            'name' => 'required|min:3|max:30|string',
            'email' => 'required|email',
            'message' => 'required|min:2',
        ];

        $this->make();
    }

    public function make() {
        $rules =$this->rules;

        foreach ($rules as $field => $rule) {
            $parts = explode('|', $rule);

            foreach ($parts as $part) {
                $this->validate($field, $part);
            }
        }

        if(!empty($this->errors)) {
            echo json_encode($this->errors);
            exit;
        }

        $this->send();
    }

    public function validate ($field, $part) {
        $data = $this->data;
        $rule = explode(':', $part);
        $ruleName = $rule[0];
        $ruleArg = $rule[1] ?? '';

        switch ($ruleName) {
            case 'required':
                if(!isset($data[$field])) {
                    $this->errors[] = [
                        $field => "Field $field is required"
                    ];
                }
                break;
            case 'min' :
                if(strlen($data[$field]) < $ruleArg) {
                    $this->errors[] = [
                        $field => "This field value must be higher $ruleArg"
                    ];
                }
                break;
            case 'max':
                if(strlen($data[$field]) > $ruleArg) {
                    $this->errors[] = [
                        $field => "This field value must be higher $ruleArg"
                    ];
                }
                break;
            case 'string' :
                if( !is_string($data[$field]) ) {
                    $this->errors[] = [
                        $field => "Field $field must be string"
                    ];
                }
                break;
            case 'email' :
                $pattern = "/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ix";
                $matches = preg_match($pattern, $data[$field]);

                if(!$matches) {
                    $this->errors[] = [
                        $field => "Email address is not valid"
                    ];
                }

                break;
        }
    }

    public function send () {

    }
}

$sendMail = new SendMail();
