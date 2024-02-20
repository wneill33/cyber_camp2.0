docker rm -f serverone

cd ..\Server1
docker build -t serverone .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name serverone -p 4000:1000 serverone
