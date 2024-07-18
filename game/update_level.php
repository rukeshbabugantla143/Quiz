<?php
header('Content-Type: application/json');

$db = new mysqli('localhost', 'root', '', 'web_dev_quiz');

if ($db->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

$id = intval($_POST['id']);
$level = intval($_POST['level']);

$stmt = $db->prepare("UPDATE players SET current_level = ? WHERE id = ?");
$stmt->bind_param("ii", $level, $id);
$stmt->execute();

if ($stmt->affected_rows > 0) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false]);
}

$stmt->close();
$db->close();