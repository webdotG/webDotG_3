import fs from 'fs';
import path from 'path';

// Получение пути к каталогу текущего файла
const __dirname = path.dirname(new URL(import.meta.url).pathname);

// Путь к папке dist
const distPath = path.join(__dirname, 'dist');

// Создание каталога dist, если он не существует
if (!fs.existsSync(distPath)) {
  fs.mkdirSync(distPath, { recursive: true });
}

// Необходимый адрес для CNAME
const cnameContent = 'www.example.com'; // Замените на нужный адрес

// Путь к файлу CNAME в папке dist
const cnameFilePath = path.join(distPath, 'CNAME');

// Создание файла CNAME
fs.writeFileSync(cnameFilePath, cnameContent);

// Прочие операции для публикации или развертывания
// ...
