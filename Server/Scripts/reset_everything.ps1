Write-Host "Docekr login"
docker login

Write-Host "Deleting servers"

docker rm -f serverone
docker rm -f servertwo
docker rm -f serverthree
docker rm -f serverfour
docker rm -f serverfive
docker rm -f serversix
docker rm -f serverseven
docker rm -f servereight
docker rm -f servernine
docker rm -f serverten

Write-Host "***************Servers Deleted***********************"
docker network rm cyber_camp_servers
Write-Host "***************Network Deleted***********************"
docker ps

Write-Host "Docker login"

Write-Host "creating network"

docker network create cyber_camp_servers

Write-Host "starting build"

Write-Host "Building server one..."
cd ..\Server1
docker build -t serverone .
cd ..

Write-Host "Building server two..."
cd .\Server2
docker build -t servertwo .
cd ..

Write-Host "Building server three..."
cd .\Server3
docker build -t serverthree .
cd ..

Write-Host "Building server four..."
cd .\Server4
docker build -t serverfour .
cd ..

Write-Host "Building server five..."
cd .\Server5
docker build -t serverfive .
cd ..

Write-Host "Building server six..."
cd .\Server6
docker build -t serversix .
cd ..

Write-Host "Building server seven..."
cd .\Server7
docker build -t serverseven .
cd ..

Write-Host "Building server eight..."
cd .\Server8
docker build -t servereight .
cd ..

Write-Host "Building server nine..."
cd .\Server9
docker build -t servernine .
cd ..

Write-Host "Building server ten..."
cd .\Server10
docker build -t serverten .
cd ..


cd .\Scripts

Write-Host "Running serverone container..."
docker run -d --network cyber_camp_servers --name serverone -p 4000:1000 serverone

Write-Host "Running server Two container..."
docker run -d --network cyber_camp_servers --name servertwo -p 4350:3450 servertwo

Write-Host "Running server Three container..."
docker run -d --network cyber_camp_servers --name serverthree -p 4569:5555 serverthree

Write-Host "Running server Four container..."
docker run -d --network cyber_camp_servers --name serverfour -p 8118:1334 serverfour

Write-Host "Running server Five container..."
docker run -d --network cyber_camp_servers --name serverfive -p 5532:8850 serverfive

Write-Host "Running server Six container..."
docker run -d --network cyber_camp_servers --name serversix -p 5543:6770 serversix

Write-Host "Running server Seven container..."
docker run -d --network cyber_camp_servers --name serverseven -p 3500:6771 serverseven

Write-Host "Running server Eight container..."
docker run -d --network cyber_camp_servers --name servereight -p 6473:3355 servereight

Write-Host "Running server Nine container..."
docker run -d --network cyber_camp_servers --name servernine -p 4562:9999 servernine

Write-Host "Running server Ten container..."
docker run -d --network cyber_camp_servers --name serverten -p 8117:1111 serverten

Write-Host "******************** On docker network cyber_camp_servers******************************"
Write-Host "***************************************************************************************"
docker ps -a
Write-Host "******************** All servers built and running! ***********************************"