#!/bin/bash
echo 'Iniciando ambiente...'
docker compose up -d --build
echo 'Aplicação disponível em http://localhost:8080'