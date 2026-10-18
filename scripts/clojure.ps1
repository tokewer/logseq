$ErrorActionPreference = 'Stop'
Import-Module ClojureTools
Invoke-Clojure @args
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
