docker rm -f serverten

cd ..\Server10
docker build -t serverten .
cd ..\Scripts
docker run -d --network cyber_camp_servers --name serverten -p 8117:1111 serverten
