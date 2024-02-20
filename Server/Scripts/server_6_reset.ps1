docker rm -f serversix

cd ..\Server6
docker build -t serversix .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name serversix -p 5543:6770 serversix
