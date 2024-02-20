docker rm -f serverthree

cd ..\Server3
docker build -t serverthree .
cd ..\Scripts

docker run -d --network cyber_camp_servers --name serverthree -p 4569:5555 serverthree
