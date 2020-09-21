<?php

$cwd = getcwd();
$month = date("m");
$year = date("Y");

while (true) {
  $monthPad = str_pad($month, 2, '0', STR_PAD_LEFT);
  $path = realpath($cwd . "/articles/" . $year . "/" . $monthPad . "/recently/index.html");

  if (file_exists($path)) {
    header("Location: /articles/" . $year . "/" . $monthPad . "/recently/");
    return;
  } else {
    $month--;

    if ($month <= 0) {
      $month = 12;
      $year--;
    }
  }
}
