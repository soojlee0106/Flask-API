# Django ML

Python Django with Rest API, combined with React frontend.  
Django version must be 3.2 for authorization (This is a temporary fix)  

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

## Checking API with Postman

Download Postman for Desktop.  
Send "GET" request, and enter query in JSON format.  

Query for prediction <http://127.0.0.1:8000/api/predict/>

```sh
{
 "sepal length (cm)": 6.5,
 "sepal width (cm)":3,
 "petal length (cm)":2,
 "petal width (cm)":1
}
```

Query for login <http://127.0.0.1:8000/api/auth/login/>

```sh
{
 "username": "sample_user",
 "password": "sample_password"
}
```

Query for logout <http://127.0.0.1:8000/api/auth/logout/>  
Enter key: "Authorization", value: "token"  

Query for new password <http://127.0.0.1:8000/api/auth/update_password/>
Enter Authorization header  
Enter new_password1, new_password2

## Authorization (PostgreSQL)

Check the schema under predictiondb.  
The tables related to all login are located there.  

## Running frontend (React)

```sh
npm start
```
