#!/bin/bash
set -ex # e - exit on error, x - print command before execution

git reset --hard HEAD
git pull
docker-compose down -v --remove-orphans --rmi local
docker-compose up --build --force-recreate --no-deps -d -V --remove-orphans