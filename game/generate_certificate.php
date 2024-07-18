<?php
require('fpdf/fpdf.php');

$db = new mysqli('localhost', 'root', '', 'web_dev_quiz');

if ($db->connect_error) {
    die('Database connection failed');
}

$id = intval($_GET['id']);

$stmt = $db->prepare("SELECT username, completed_at FROM players WHERE id = ? AND current_level = 5");
$stmt->bind_param("i", $id);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $player = $result->fetch_assoc();
    
    $pdf = new FPDF();
    $pdf->AddPage();
    $pdf->SetFont('Arial', 'B', 16);
    $pdf->Cell(0, 10, 'Certificate of Completion', 0, 1, 'C');
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(0, 10, 'This is to certify that', 0, 1, 'C');
    $pdf->SetFont('Arial', 'B', 14);
    $pdf->Cell(0, 10, $player['username'], 0, 1, 'C');
    $pdf->SetFont('Arial', '', 12);
    $pdf->Cell(0, 10, 'has successfully completed the Web Dev Quiz', 0, 1, 'C');
    $pdf->Cell(0, 10, 'on ' . date('F j, Y', strtotime($player['completed_at'])), 0, 1, 'C');
    
    $pdf->Output('certificate.pdf', 'D');
} else {
    echo "Player not eligible for certificate";
}

$stmt->close();
$db->close();