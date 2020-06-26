$deployDestination = 'deploy'

if(Test-Path $deployDestination)
{
   Remove-Item $deployDestination -Recurse -Force
}
mkdir $deployDestination -ErrorAction Stop | Out-Null