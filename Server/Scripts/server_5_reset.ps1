docker rm -f serverfive

cd ..\Server5
docker build -t serverfive .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name serverfive -p 5532:8850 serverfive
