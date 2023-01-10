# Flask Mobile Backend

Python Flask with API.  
This is the backend for Android frontend.

## Local development

Access issues

```sh
Set-ExecutionPolicy Unrestricted -Scope Process
```

Run venv

```sh
.\env\Scripts\activate.ps1
```

## Checking API

Download Postman Desktop.  
The method is POST <http://127.0.0.1:5000/predict>.  
Enter in body as form-data (key, value).

```sh
{
    "cgpa": 5.97,
    "iq": 106,
    "profile_score": 61
}
```
