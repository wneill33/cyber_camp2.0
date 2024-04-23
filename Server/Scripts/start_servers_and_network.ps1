
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

Write-Host "Building server seven part one..."
cd .\Server7
docker build -t serverseven .
cd ..

Write-Host "Building server seven part two..."
cd .\Server7_2
docker build -t serverseven2 .
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
docker run -d --network cyber_camp_servers --name serverone -p 4000:4000 serverone

Write-Host "Running server Two container..."
docker run -d --network cyber_camp_servers --name servertwo -p 3450:3450 servertwo

Write-Host "Running server Three container..."
docker run -d --network cyber_camp_servers --name serverthree -p 6770:6770 serverthree

Write-Host "Running server Four container..."
docker run -d --network cyber_camp_servers --name serverfour -p 5555:5555 serverfour

Write-Host "Running server Five container..."
docker run -d --network cyber_camp_servers --name serverfive -p 1334:1334 serverfive

Write-Host "Running server Six container..."
docker run -d --network cyber_camp_servers --name serversix -p 8850:8850 serversix

Write-Host "Running server Seven container..."
docker run -d --network cyber_camp_servers --name serverseven -p 3355:3355 serverseven

Write-Host "Running server Seven container part two..."
docker run -d --network cyber_camp_servers --name serverseven2 -p 4455:4455 serverseven2 # TODO *****  change this port number  *****

Write-Host "Running server Eight container..."
docker run -d --network cyber_camp_servers --name servereight -p 6771:6771 servereight

Write-Host "Running server Nine container..."
docker run -d --network cyber_camp_servers --name servernine -p 9999:9999 servernine

Write-Host "Running server Ten container..."
docker run -d --network cyber_camp_servers --name serverten -p 1111:1111 serverten

Write-Host "******************** On docker network cyber_camp_servers******************************"
Write-Host "***************************************************************************************"
docker ps -a
Write-Host "******************** All servers built and running! ***********************************"