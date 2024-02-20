docker rm -f servertwo

cd ..\Server2
docker build -t servertwo .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name servertwo -p 4350:3450 servertwo
