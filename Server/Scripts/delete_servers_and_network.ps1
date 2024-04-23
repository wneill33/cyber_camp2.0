

Write-Host "Deleting servers"

docker rm -f serverone
docker rm -f servertwo
docker rm -f serverthree
docker rm -f serverfour
docker rm -f serverfive
docker rm -f serversix
docker rm -f serverseven
docker rm -f traincar
docker rm -f servereight
docker rm -f servernine
docker rm -f serverten

Write-Host "***************Servers Deleted***********************"
docker network rm cyber_camp_servers
Write-Host "***************Network Deleted***********************"
docker ps