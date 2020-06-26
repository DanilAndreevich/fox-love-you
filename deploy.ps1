Get-ChildItem 'forDeploy\' | Where-Object {$_.Name -match ".ps1"} | ForEach-Object {
  & $_.FullName
}
