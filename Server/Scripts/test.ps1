



Write-Host "Building server one..."
cd ..\Server1
docker build -t serverone .
cd ..

Write-Host "Building server two..."
# cd .\Server2
# docker build -t servertwo .
# cd ..

cd .\Scripts

Write-Host "Running serverone container..."
docker run -d --network cyber_camp_servers --name serverone -p 4000:1000 serverone

Write-Host "Running server Two container..."
# docker run -d --network cyber_camp_servers --name servertwo -p 4350:3450 servertwo