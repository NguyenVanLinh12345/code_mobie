**FastAPI JWT Authentication**
**Refresh Token:** Token dùng để lấy access token mới

>Chạy:
```
d:
cd D:\code_mobie
.\env\Scripts\activate
cd gateway

python main.py
```


> Cài đặt
```
> python -m venv venv
> venv\Scripts\activate
> python -m pip install --upgrade pip
> pip install -r requirements.txt
```

> Biến môi trường: tạo file .env
```
DB_HOST   = localhost
DB_PORT   = 3306
DB_USER   = root
DB_PASS   = 1234
DB_SCHEMA = mobile_user
DB_URL = mysql://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_SCHEMA}

# JWT SETTINGS
JWT_SECRET_KEY             = a895ff6e028ab6d7352a609d3f032f4dcf937dab445b1bb433be70ee35c272a1
JWT_ALGORITHM              = HS256

JWT_ACCESS_TOKEN_EXP_MINUTES  = 30
JWT_REFRESH_TOKEN_EXP_DAYS = 365
```

> Database Migrations
```
> aerich init -t migrations.settings
> aerich init-db
```

# Đăng ký: http://127.0.0.1:8000/api/v1/register
{
    "email": "admin@gmail.com",
    "first_name": "Admin",
    "last_name": "Last Admin",
    "password": "12345678"
}

# Đăng nhập: http://127.0.0.1:8000/api/v1/login
{
    "email": "admin@gmail.com",
    "password": "12345678"
}