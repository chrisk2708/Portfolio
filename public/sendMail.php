<?php

$recipient = 'chris.k2708@gmail.com';
$allowedOrigin = '*';

header('Access-Control-Allow-Origin: ' . $allowedOrigin);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    exit;
}

$data = json_decode(file_get_contents('php://input'), true);

$name = trim(strip_tags($data['name'] ?? ''));
$email = trim($data['email'] ?? '');
$message = trim(strip_tags($data['message'] ?? ''));

if (mb_strlen($name) < 2 || !filter_var($email, FILTER_VALIDATE_EMAIL) || mb_strlen($message) < 10) {
    http_response_code(400);
    echo 'Invalid input';
    exit;
}

$name = str_replace(["\r", "\n"], ' ', $name);

$subject = 'Portfolio contact from ' . $name;
$body = "Name: {$name}\nE-Mail: {$email}\n\n{$message}\n";
$headers = [
    'From: noreply@' . ($_SERVER['SERVER_NAME'] ?? 'localhost'),
    'Reply-To: ' . $email,
    'Content-Type: text/plain; charset=utf-8',
];

if (mail($recipient, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers))) {
    http_response_code(200);
    echo 'OK';
} else {
    http_response_code(500);
    echo 'Mail could not be sent';
}
