docker rm -f serverfour

cd ..\Server4
docker build -t serverfour .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name serverfour -p 8118:1334 serverfour
