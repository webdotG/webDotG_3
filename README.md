# <img src="https://raw.githubusercontent.com/webdotG/webDotG_3/93b00ef83ac30d3f89aadc2b96f0bd7d7dd1722c/CLIENT/src/svg/G_md.svg" width="25px" height="25px"> WebDotG  
(релиз 2.0 в июне 2024)

## Обзор

WebDotG - это SPA приложение портфолио/магазин, состоящее из трех основных компонентов:  
+ Client
+ Server
+ DB

## Стэк
+ JavaScript
+ TypeScript
+ Sass (.module.scss)
+ React Rouer Dom 6
+ React Redux
+ ReduxToolkit (AsuncThunk)
+ Axios
+ JsonWebToken
+ Bcrypt
+ PG
+ Framer-Motion
+ NodeJs
+ ExpressJs
+ PostgreSQL
+ RestAPI с CRUD
+ SQL queries

## Установка и заупск

Клонируйте репозиторий на ваш компьютер
```
 git clone git@github.com:webdotG/webDotG_3.git
```

Установите все необходимые зависимости
```
npm install
```
 
Из корневой паки таким образом вы запустите сразу SERVER и CLIENT ( "..."/webDotG_3  )
```
npm run dev
```

Для запусука части CLIENT перейдите в папку CLIENT ( "..."/webDotG_3/CLIENT )
```
cd CLIENT
npm run dev
```

Для запусука части SERVER вернитесь в корневую папку ( "..."/webDotG_3 )

```
npm run server
```
 

### Клиент

Фронтенд-часть проекта построена с использованием **Vite**, **React** и **TypeScript**. 
Представляет собой интернет-магазин без функции онлайн-оплаты. 
Включает следующие страницы: 
+ Домашняя страница 
+ Портфолио
+ Магазин 
+ Логин
+ Регистрация
+ Доска обьявлений
+ Кабинет

### Сервер

Бэкенд-часть проекта построена на **NodeJs** + **ExpressJS** и взаимодействует с базой данных через **SQL-запросы**. 
Имеет маршруты для пользователей, постов, тегов и корзины.

### База данных (БД)

База данных размещена на удаленном сервере и использует **PostgreSQL** с таблицами для **пользователей**, **заказов**, **постов** и **тегов**.  
Для взаимодействия с базой данных используются **SQL-запросы** с использованием библиотеки **pg**.  
Настройки базы данных (адрес сервера, логин, пароль, порт) должны храниться в **.ENV** файле серверной части проекта.

## Хостинг и домены

Проект был перенесен на удаленный сервер с использованием **Docker**.  
Образ проекта размещен на **Docker-hub**.  
На удаленный сервер установлен **Docker**, скачан **docker** **image** и развёрнут контейнер с указанием внешнего порта 80 и внутреннего порта 1111.   
Домен **www.webdotg.ru** привязан к **IP-адресу** сервера **http://89.111.171.246/** путем изменения записи A в настройках DNS.

## Dockerfile

Dockerfile для создания образа Docker, включающего в себя как серверную, так и клиентскую части проекта.

```Dockerfile
# Указываем базовый образ для Node.js
FROM node AS build

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем файлы package.json и package-lock.json
COPY package*.json /app

# Устанавливаем зависимости для серверной части
RUN npm install

# Копируем серверную часть
COPY . .

# Переходим в директорию клиента
WORKDIR /app/CLIENT

# Устанавливаем зависимости для клиентской части
RUN npm install

# Собираем клиентскую часть
RUN npm run build

# Возвращаемся в корневую директорию
WORKDIR /app

# Открываем порт 1111 в контейнере для доступа извне
EXPOSE 1111

# Команда для запуска сервера и клиента
CMD ["npm", "run", "deploy"]
# Это запустит NPM RUN START и NPM RUN CLIENT-BUILD
# NPM RUN START запустит NODE и папку ./BIN/WWW
# NPM RUN CLIENT-BUILD запустит из папки client NPM RUN BUILD, который выполнит TSC && VITE BUILD

```

### Более полное описание находится здесь  
[ссылка на PDF описания проекта](https://github.com/webdotG/project_description_WebDotg3.0/blob/11279c44f40a8dc5a509749d3c1bb9c66c213037/%D0%94%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D1%86%D0%B8%D1%8F%203.0%20WebdotG3.0.pdf)
