<?
    $connect=mysqli_connect( "localhost", "kkmame02", "Kk8414680", "kkmame02") or  
        die( "SQL server에 연결할 수 없습니다.");

        mysqli_select_db($connect , "kkmame02");
?>