# AstroCharts - Backend

## The app actually started generating money
#### Probably enough to run a month on AWS
Hence giving it an upate


## For all it's worth
#### It deserves it's own backend for atleast a year.

## Running it with 4 astrocharts-rest containers
```shell
docker-compose up --scale astrocharts-rest=4 --build -d
```
Logging
```shell
docker-compose logs -f --tail=15
```