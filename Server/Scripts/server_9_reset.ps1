docker rm -f servernine

cd ..\Server9
docker build -t servernine .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name servernine -p 4562:9999 servernine
