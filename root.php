<?php 
  if (getenv('SUBDIR')) {
    $hksubdir = getenv('SUBDIR');
  }
  else {
    $hksubdir = $_SERVER['SUBDIR'];
  }
  if ($hksubdir == "")
  {
    $subDir = "/";
  }
  else
  {
    $subDir = "/".$hksubdir."/";
  }
?>
<script>
  if ('<?php echo $subDir; ?>' == '') {
    var subDir = '';
  }
  else {
    var subDir = '<?php echo $subDir; ?>';
  }
</script>
