# Указываю базовый образ, который будем использовать для создания контейнера
FROM node 

# Устанавливаю рабочую директорию внутри контейнера
WORKDIR /app

# Копирую все файлы из текущего контекста сборки внутрь контейнера в директорию /app
COPY . .

# Запускаю установку зависимостей Node.js из файла package.json
# https://www.richardkotze.com/top-tips/install-bcrypt-docker-image-exclude-host-node-modules
# RUN apk add --no-cache make gcc g++ python && \
#   npm install && \
#   npm rebuild bcrypt --build-from-source && \
#   apk del make gcc g++ python
# Модуль bcrypt - это библиотека, написанная на C/C++, используемая для хэширования паролей в Node.js. Она зависит от нативного бинарного кода, который компилируется при установке модуля.
# Однако, проблема с модулем bcrypt часто возникает при использовании его внутри Docker контейнеров, особенно если образ был собран на одной архитектуре (например, x86_64) и запущен на другой (например, ARM или на другой версии Linux).
# Ошибка "invalid ELF header" указывает на то, что бинарный файл (в данном случае, bcrypt_lib.node), который был собран для определенной архитектуры (например, x86_64), не совместим с архитектурой или операционной системой контейнера, в котором он пытается выполниться.
# Решение этой проблемы заключается в том, чтобы пересобрать модуль bcrypt внутри Docker контейнера, чтобы он мог быть адаптирован к архитектуре и операционной системе контейнера. Для этого часто требуются инструменты для сборки, такие как компилятор C/C++ (build-essential) и Python (используется для некоторых модулей Node.js с нативным кодом).
# RUN apt-get update && apt-get install -y \
#     build-essential \
#     python-is-python3

# Запускаю установку зависимостей Node.js из файла package.json
# https://medium.com/@devontem/solved-invalid-elf-header-with-docker-and-bcrypt-444426d63605
RUN npm install
# RUN npm rebuild bcrypt


# Открываю порт 1111 в контейнере, чтобы он был доступен извне
EXPOSE 1111

# Задаю команду по умолчанию для запуска контейнера
CMD ["npm", "start"]
