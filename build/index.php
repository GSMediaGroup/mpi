<?php

if ('POST' == strtoupper($_SERVER['REQUEST_METHOD'])) {
    require __DIR__ . '/sendmail/sendmail.php';
} else {
    require __DIR__ . '/index.html';
}
