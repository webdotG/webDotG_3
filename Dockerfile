# Указываю базовый образ для Node.js
FROM node AS build

# Устанавливаю рабочую директорию
WORKDIR /app

# Копирую файлы package.json и package-lock.json
COPY package*.json /app

# Устанавливаю зависимости для серверной части
RUN npm install

# Копирую серверную часть
COPY . .

# Перехожу в директорию клиента
WORKDIR /app/CLIENT

# Устанавливаю зависимости для клиентской части
RUN npm install

# Собираю клиентскую часть
RUN npm run build
#!!!!!!!!!удалить после сборки nodemodules 
# Копирование результатов сборки в контейнер
#Если цель - включить результаты сборки клиентской части в Docker-образ, 
#чтобы запускать приложение в контейнере, 
#то необходимо скопировать эти результаты в контейнер. 
#COPY CLIENT/dist /app/CLIENT/dist

# Возвращаюсь в корневую директорию
WORKDIR /app

# Указываю базовый образ для Nginx
FROM nginx:latest

# Копирую конфигурационный файл Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Копирую собранные файлы клиентской части
COPY --from=build /app/CLIENT/dist /usr/share/nginx/html

# Открываю порт 80 в контейнере, чтобы он был доступен извне
EXPOSE 80

# Команда для запуска Nginx
CMD ["nginx", "-g", "daemon off;"]



