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

## API

```sh
http://localhost:8000/api/
```

```sh
http://localhost:8000/api/tasks/
```

## Checking API with Postman

Download Postman for Desktop.  
Send "GET" request, and enter query in JSON format.  

```sh
{
 "sepal length (cm)": 6.5,
 "sepal width (cm)":3,
 "petal length (cm)":2,
 "petal width (cm)":1
}
```

## Running frontend (React)

```sh
npm start
```
