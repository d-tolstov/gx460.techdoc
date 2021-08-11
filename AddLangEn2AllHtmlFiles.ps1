$path = 'rm14k1e'
$filter = '*.html'
$n = 0

function transform(){
    $newFileContent = $regex.Replace($fileContent,'<html lang="en">');
    [System.IO.File]::WriteAllText($file.FullName,$newFileContent);
}

foreach ( $file in Get-ChildItem -Path $path -Filter $filter -Recurse) {

    if ($n -gt 500000){
        break;
    }
    
    $file.FullName
    
    $fileContent = [System.IO.File]::ReadAllText($file.FullName);

    $regex = New-Object System.Text.RegularExpressions.Regex '<html>';
    $match = $regex.Matches($fileContent);
    if ($match.Count -eq 1){
        transform(1);
        $n++
    }

    $regex = New-Object System.Text.RegularExpressions.Regex '<HTML>';
    $match = $regex.Matches($fileContent);
    if ($match.Count -eq 1){
        transform(1);
        $n++
    }
    #Rename-Item -Path $file.FullName -NewName ([io.path]::ChangeExtension($file.Name, $newExtension)) -Verbose
}
$n