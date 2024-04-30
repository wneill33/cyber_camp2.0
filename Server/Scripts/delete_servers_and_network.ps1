

Write-Host "Deleting servers"

docker rm -f deadwoodsaloon
docker rm -f sheriffoffice
docker rm -f desertoasis
docker rm -f canyonhideout
docker rm -f bankrobbery
docker rm -f ghosttown
docker rm -f trainheist
docker rm -f traincar
docker rm -f goldrush
docker rm -f finalshowdown
docker rm -f legend

Write-Host "***************Servers Deleted***********************"
docker network rm cyber_camp_servers
Write-Host "***************Network Deleted***********************"
docker ps