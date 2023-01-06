# Django Todo

Simple task manager made with Django and React

## Local development

Access issues

```sh
Set-ExecutionPolicy Unrestricted -Scope Process
```

Run venv

```sh
.\env\Scripts\activate.ps1
```

## Migration

```sh
python manage.py makemigrations
python manage.py migrate
```

## Running Server (Backend)

```sh
python manage.py runserver
```

## Admin management

```sh
http://127.0.0.1:8000/admin/login/?next=/admin/
```

## API

```sh
http://localhost:8000/api/
```

```sh
http://localhost:8000/api/tasks/
```

## Running frontend (React)

```sh
npm start
```
