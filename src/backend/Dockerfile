FROM python:3.9.4-slim
LABEL maintainer "Ian Mungovan <Ian.Mungovan1@gmail.com>"
RUN apt-get update \
    && apt-get upgrade -y \
    ** apt-get install -y \
    && apt-get -y install apt-utils netcat gunicorn libpq-dev python3-dev gcc libpq-dev build-essential vim \
    && apt-get autoremove -y \
    && apt-get clean all
ENV INSTALL_PATH /usr/mec/static
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
RUN mkdir -p $INSTALL_PATH
COPY requirements.txt .
RUN pip install --upgrade pip setuptools wheel
RUN pip install -v uvloop
RUN pip install -r requirements.txt
COPY . .