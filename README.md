# Django ML

Python Django with Rest API, combined with React frontend.

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

## Database

Download PostgreSQL  
<https://www.postgresql.org/download/>  
The database name is predictiondb.  
Use pgAdmin to maintain DB.  

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
