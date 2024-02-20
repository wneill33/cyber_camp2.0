docker rm -f servereight

cd ..\Server8
docker build -t servereight .
cd ..\Scripts
docker run -d --network cyber_camp_servers --name servereight -p 6473:3355 servereight
