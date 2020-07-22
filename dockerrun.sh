#!/bin/sh
#!/bin/bash

cd ./rest_api/

docker-compose up -d

docker exec -ti bryapp chmod -R 777 /application/storage

docker exec -ti bryapp php artisan migrate

# docker exec -ti bryapp php artisan db:seed

cd ../web/

ng serve --open
