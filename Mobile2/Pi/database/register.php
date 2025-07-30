<?php
header('Content-Type: application/json');

// Lê os dados do POST
$data = json_decode(file_get_contents("php://input"), true);

// Validação básica
if (!$data['name'] || !$data['email'] || !$data['password']) {
    echo json_encode(['success' => false, 'message' => 'Preencha todos os campos']);
    exit;
}

// Cria (ou abre) o banco
$db = new SQLite3(__DIR__ . '/bd_filipe');

// Garante que a tabela existe
$db->exec("CREATE TABLE IF NOT EXISTS usuarios (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome TEXT,
  email TEXT UNIQUE,
  senha TEXT
)");

// Tenta inserir o usuário
$stmt = $db->prepare("INSERT INTO usuarios (nome, email, senha) VALUES (:nome, :email, :senha)");
$stmt->bindValue(':nome', $data['name']);
$stmt->bindValue(':email', $data['email']);
$stmt->bindValue(':senha', $data['password']);

try {
    $stmt->execute();
    echo json_encode(['success' => true, 'message' => 'Usuário cadastrado com sucesso']);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Email já cadastrado']);
}
