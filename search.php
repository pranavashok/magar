<p id="searchresults">
<?php
   $count =0;
   // PHP5 Implementation - uses MySQLi.
   // mysqli('localhost', 'yourUsername', 'yourPassword', 'yourDatabase');
   require_once("manager/initdb.php");
   require_once("root.php");
   // Is there a posted query string?
   if(isset($_POST['q'])) {
      $queryString = $mysqli->real_escape_string($_POST['q']);

      // Is the string length greater than 0?
      if(strlen($queryString) >0)
      $query = $mysqli->query("SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.name LIKE '%".$queryString."%' UNION SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.tags LIKE '%".$queryString."%' UNION SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.longdesc LIKE '% ".$queryString." %' OR events.longdesc LIKE '% ".$queryString.".%' ORDER BY category ASC, name ASC LIMIT 8");
      if($mysqli->affected_rows < 4)
         $query = $mysqli->query("SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.name LIKE '%".$queryString."%' UNION SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.tags LIKE '%".$queryString."%' UNION SELECT events.name, events.shortdesc, events.longdesc, events.tags, event_cats.name category, event_cats.par_cat parent_id, (SELECT name FROM event_cats WHERE cat_id = parent_id) parent_category  FROM events INNER JOIN event_cats ON `event_cats`.cat_id = `events`.cat_id WHERE events.longdesc LIKE '%".$queryString."%' ORDER BY category ASC, name ASC LIMIT 8");
      if($mysqli->affected_rows == 0)
            echo '<span class="nomatch"> <br/>No matches found </span>';
      if($query) {
      // While there are results loop through them - fetching an Object.

         // Store the category id
         $category = "";
         while ($result = $query->fetch_assoc()) {
               //echo '<a href="#!'.$result->article_hash.'">'; article hash should be created
               //echo '<img src="styles/images/search_thumbs/'.$result->article_hash.'.jpg" alt="" />';  article hash probs
               if($result["category"] != $category) { // check if the category changed
                  echo '<span class="category">'.$result["category"].'</span>';
                  $category = $result["category"];
               }
               $title = $result["name"];
               if(strlen($title) > 35) { 
                  $title = substr($title, 0, 35) . "...";
               }              
               $link = $subDir.$result["parent_category"]."/".$result["category"]."/".preg_replace('/ /', '_', $result["name"]);
               echo '<a href="'.$link.'""><span class="searchheading">'.$title.'</span>';
               
               $description = strip_tags($result["longdesc"]);
               $pos = strpos($description, $queryString);
               if(strlen($description) > 100) { 
                  $min = $pos-10;
                  if($min<0) $min=0;
                  else if($min+100 > strlen($description)) $min= $pos-100;
                  $description = substr($description, $min, 100);
                  $min = strpos($description, " ");
                  $max = strrpos($description, " ");
                  $description = substr($description, $min, $max-$min);
                  $description = preg_replace('/'.$queryString.'/', '<strong>'.$queryString.'</strong>', $description);
               }
               
               echo '<span>'.$description.'...</span></a>';
         }
      } else {
            echo 'ERROR: There was a problem with the query.';
      }
   }
?>
</p>