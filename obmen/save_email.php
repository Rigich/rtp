<?php
// Получаем почту из POST-запроса
$email = $_POST['email'];

// Удаляем записанную почту из файла email.txt
$lines = file('email.txt'); // Читаем все строки файла в массив
unset($lines[0]); // Удаляем первую строку
file_put_contents('email.txt', implode('', $lines)); // Записываем обновленный массив в файл

// Возвращаем успешный ответ
echo 'Success';
?>
