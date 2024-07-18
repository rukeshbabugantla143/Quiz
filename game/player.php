<?php
header('Content-Type: application/json');

$db = new mysqli('localhost', 'root', '', 'web_dev_quiz');

if ($db->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

$username = $db->real_escape_string($_POST['username']);
$email = $db->real_escape_string($_POST['email']);

$stmt = $db->prepare("SELECT id, current_level FROM players WHERE username = ? AND email = ?");
$stmt->bind_param("ss", $username, $email);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $player = $result->fetch_assoc();
    echo json_encode(['id' => $player['id'], 'current_level' => $player['current_level']]);
} else {
    $stmt = $db->prepare("INSERT INTO players (username, email) VALUES (?, ?)");
    $stmt->bind_param("ss", $username, $email);
    $stmt->execute();
    echo json_encode(['id' => $db->insert_id, 'current_level' => 1]);
}

$stmt->close();
$db->close();