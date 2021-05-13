from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import os 

# This is the Database Connection for Azure
# server = ''
# database = ''
# username = ''
# password = ''   
# driver= '{ODBC Driver 17 for SQL Server}'

# SECRET_KEY = os.environ.get('SECRET_KEY') or 'secret-key'
# SQL_SERVER = os.environ.get('SQL_SERVER') or server 
# SQL_DATABASE = os.environ.get('SQL_DATABASE') or database 
# SQL_USER_NAME = os.environ.get('SQL_USER_NAME') or username
# SQL_PASSWORD = os.environ.get('SQL_PASSWORD') or password 
# SQLALCHEMY_DATABASE_URI = 'mssql+pyodbc://' + SQL_USER_NAME + '@' + SQL_SERVER + ':' + SQL_PASSWORD + '@' + SQL_SERVER + ':1433/' + SQL_DATABASE + '?driver=ODBC+Driver+17+for+SQL+Server' 
# SQLALCHEMY_TRACK_MODIFICATIONS = False 

# This is the database connection for SQL Lite
SQLALCHEMY_DATABASE_URL = "sqlite:///./meetings.db"


engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)
# Intermidary to database
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()