## Домашние задания по курсу «NDTNF - TypeScript, Nest.js, Yandex Cloud»

### Блок 2: Nest.js


#### Домашнее задание к занятию «2.8. Вебсокеты в NestJS»

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/016-websocket-NESTJS).

Файлы для проверки:
* [app.gateway.ts](books-library/src/app.gateway.ts) (AppGateway)
* [index.html](books-library/http/index.html) (для тестирования WebSocket)

<details>
<summary>Включает в себя предыдущие задания</summary>

<details>

<summary>Домашнее задание к занятию «2.2. Погружение в Nest.js»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/006-nestjs-ext).
</details>

<details>

<summary>Домашнее задание к занятию «2.3. Подключение базы данных к Nest.js: модуль для MongoDB»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/008-nestjs-db).
</details>

<details>
<summary>Домашнее задание к занятию «2.4. Потоки RxJS»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/009-rxjs).

Быстрый переход к файлам с решением:
[rxjs-example.service.ts](books-library/src/modules/rxjs-example/rxjs-example.service.ts)

Можно проверить результат командой (`поисковой_запрос` заменить на необходимую фразу):
`curl http://localhost:3002/rxjs-example/repositories/поисковой_запрос`
</details>

<details>
<summary>Домашнее задание к занятию «2.5. Валидация и обработка ошибок. Interceptors, pipes»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/010-nestjs-validation).

Быстрый переход к файлам с решением:
* Задание 1. [format-response.interceptor.ts](books-library/src/interceptors/format-response.interceptor.ts)
* Задание 2. [id.validation.pipe.ts](books-library/src/validators/id.validation.pipe.ts)
* Задание 3. [dto.validation.pipe.ts](books-library/src/validators/dto.validation.pipe.ts)
* Задание 4. [unified.exception.filter.ts](books-library/src/filters/unified.exception.filter.ts)
</details>

<details>
<summary>Домашнее задание к занятию «2.6. Аутентификация в NestJS, Passport.js, Guards»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/011-nestjs-authentication).
</details>

<details>
<summary>Домашнее задание к занятию «2.7. Тестирование. Библиотека Jest»</summary>

ТЗ доступно по [ссылке](https://github.com/netology-code/ndtnf-homeworks/tree/master/012-Test-Jest).

Файлы с тестами:
* [books.service.spec.ts](books-library/src/modules/books/books.service.spec.ts)
* [books.controller.spec.ts](books-library/src/modules/books/books.controller.spec.ts)
* [e2e.books.service.spec.ts](books-library/src/modules/books/e2e.books.service.spec.ts)
</details>

</details>

Использование:
* `docker compose up`

При стандартных настройках приложение будет доступно по адресу [http://localhost:3002/](http://localhost:3002/).

Примеры запросов доступны в файле [books.http](books-library/http/books.http)

Можно изменить настройки запуска docker-compose с помощью .env. Пример файла: [.env-example](config/.env.example)

Нужно переименовать его в `.env` и запускать приложение добавив конфиг:
* `docker compose --env-file config/.env up`

<details>
<summary>Описание настроек .env для docker-compose</summary>

* `DB_NAME` - название БД
* `DB_USERNAME` - имя пользователя
* `DB_PASSWORD` - имя пользователя

Важно! Вышеуказанные настройки корректно проинициализируются в MongoDB только при первом запуске.
Если в дальнейшем их изменить, то эффекта не будет. Для применения нужно будет очистить папку `db` и после этого запускать `docker-compose`

* `LIBRARY_SERVICE_PORT` - порт, по которому будет доступно приложение библиотека на локальном компьютере
* `MONGODB_PORT` - внешний порт для подключения к MongoDb
* `MONGO_EXPRESS_PORT` - внешний порт, по которому будет доступна админка MONGO EXPRESS
</details>


