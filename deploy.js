const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Путь к файлу CNAME в папке CLIENT
const cnameSourcePath = path.join(__dirname, 'CLIENT', 'CNAME');

// Путь, куда нужно скопировать файл CNAME (в папку dist)
const cnameDestinationPath = path.join(__dirname, 'dist', 'CNAME');

// Копирование файла CNAME в папку dist
fs.copyFile(cnameSourcePath, cnameDestinationPath, (err) => {
  if (err) {
    console.error('Ошибка при копировании файла CNAME:', err);
    return;
  }

  console.log('Файл CNAME скопирован в папку dist.');

  // Публикация содержимого с помощью ghpages.publish()
  ghpages.publish('dist', {}, function(err) {
    if (err) {
      console.error(err);
    } else {
      console.log('Содержимое успешно опубликовано на GitHub Pages с файлом CNAME.');
    }
  });
});
