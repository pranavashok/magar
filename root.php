<?php 
  $hksubdir = getenv('SUBDIR');
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
  if ('<?php echo $subdir; ?>' == '') {
    var subDir = '';
  }
  else {
    var subDir = '<?php echo $subDir; ?>';
  }
</script>
