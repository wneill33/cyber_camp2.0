docker rm -f serverseven

cd ..\Server7
docker build -t serverseven .
cd ..\Scripts
docker run -d --network cyber_camp_servers --name serverseven -p 3500:6771 serverseven
