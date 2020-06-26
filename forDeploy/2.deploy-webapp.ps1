$deployDestination = 'deploy\fly.webapp'
if(Test-Path $deployDestination)
{
   Remove-Item $deployDestination -Recurse -Force
}

mkdir $deployDestination -ErrorAction Stop | Out-Null
pushd $deployDestination
Copy-Item -Path ..\..\build\* -Force -Recurse
Copy-Item -Path ..\..\forDeploy\Fly.Front\* -Force -Recurse
