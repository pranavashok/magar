<?php
require_once("initdb.php");
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <title>Ragam 2013 - Get Participant and Event Details</title>
  <meta name="viewport" content = "width = device-width, initial-scale = 1.0, minimum-scale = 1.0, maximum-scale = 1.0, user-scalable = no" />
  
  <link href="css/favicon.ico" rel="icon" type="image/x-icon" />
  <link href="css/footable-0.1.css" rel="stylesheet" type="text/css" />
  
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.4/jquery.min.js" type="text/javascript"></script>
  <script src="js/footable-0.1.js" type="text/javascript"></script>
  <script src="js/footable.sortable.js" type="text/javascript"></script>
  <script src="js/footable.filter.js" type="text/javascript"></script>
  <script type="text/javascript">
    $(function() {
      $('table').footable();
    });
  </script>
</head>
<body>
	<?php if(isset($_GET['stats'])) { ?>
	<h3>Registration Detais</h3><br />
	<table class="footable" style="width:400px">
		<thead><th>Quick Links</th></thead>
		<tr><td><a href="?participants=all">All Active Participants</a></td></tr>
		<tr><td><a href="?participants=nonnit">Non-NIT Active Participants</a></td></tr>
		<tr><td><a href="?participants=collegewise">College-wise Participants</a></td></tr>
		<tr><td><a href="?events=all">All Events Registrations</a></td></tr>
		<tr><td><a href="?events=nonnit">Non-NIT Events Registrations</a></td></tr>
	</table>
	<br /><br />
	<?php } else { ?>
		<a href="?stats">Go Back</a><br /><br />
	<?php } ?>
<?php
if(isset($_GET['e'])) {
	$event_id = $mysqli->real_escape_string($_GET['e']);
	$query = $mysqli->query("SELECT team_id, teamleader_id, teammember_id, college FROM team, participants WHERE team.teamleader_id = participants.ragID AND event_id = '$event_id';");
	if($query) {
		$list = array();
		while($l = $query->fetch_assoc()) {
			$list[] = $l;
		}
		echo '<input id="filter" type="text" placeholder="filter" /><br />';
		echo "<table data-filter='#filter' class='footable'>";
		echo '
		<thead>
        <tr>
          <th data-sort-initial="true">
            Team ID
          </th>
          <th>
            Teamleader ID
          </th>
          <th>
            Teammember ID
          </th>
          <th>
            College
          </th>
        </tr>
      	</thead>';
		$j = 0;
		foreach($list as $a) {
		    echo "<tr>";
		    $i = 0;
	        foreach($a as $v) {
	        	if($i==0) {
	        		echo "<td>$event_id$v</td>";
	        	}
	        	else if($i==1) {
	        		echo "<td>RAG$v</td>";
	        	}
	        	else if($i==2)
	        		echo "<td><a href='getdetails.php?id=$v'>RAG$v</a></td>";	
	        	else
	        		echo "<td>$v</td>";
	        	$i++;
	        }
	    	echo "</tr>";
	    	$j++;
		}
		echo "</table>";
		echo "Total participants: $j";
	}
	else {
		//Couldn't run query	
	}
}
else if(isset($_GET['id'])) {
	$ragam_id = $mysqli->real_escape_string($_GET['id']);
	$query = $mysqli->query("SELECT `ragID`, `name`, `email`, `college`, `phone`, `accommodation`, `timestamp` FROM `participants` WHERE `ragID` = $ragam_id;");
	if($query) {
		$p = $query->fetch_assoc();
		echo "<h3>User Details</h3><br />";
		echo "<table data-filter='#filter' class='footable'>";
		echo "<thead><th data-sort-initial='true'>ID</th><th>Name</th><th>E-Mail</th><th>College</th><th>Phone</th><th>Accommodation</th><th>Timestamp</th></thead>";
		echo "<tr>";
		$i = 0;
		foreach($p as $v) {
			if($i == 3)
				echo "<td><a href=?participants=".urlencode($v).">$v</td>";
			else
	        	echo "<td>$v</td>";
	        $i++;
	    }
	    echo "</tr></table>";
	}
	else {

	}
	$query = $mysqli->query("SELECT event_name, team.event_id, team_id FROM `team`, `eventinfo` WHERE `team`.event_id = `eventinfo`.event_id AND teammember_id=$ragam_id;");
	if($query) {
		$list = array();
		while($l = $query->fetch_assoc()) {
			$list[] = $l;
		}
		echo "<br /><h3>Events Registered</h3><br />";
		echo "<table data-filter='#filter' class='footable' style='width:400px'>";
		echo "<thead><th>Event Name</th><th>Team ID</th></thead>";
		echo "<tr>";
		$j = 0;
		foreach($list as $a) {
		    echo "<tr>";
			$i = 0;
			foreach($a as $v) {
				if($i==1) {
					$code = $v;
				}
				else if($i==2)
					$team = $v;
				else
		        	$event = $v;
		        $i++;
		    }
		    echo "<td><a href=?e=$code>$event</a></td><td>$code$team</td>";
	    	echo "</tr>";
	    	$j++;
		}

	    echo "</table>";
	}
	else {

	}
}
else if(isset($_GET['participants'])) {
	$participants = $mysqli->real_escape_string($_GET['participants']);
	if($participants=='all') {
		$query = $mysqli->query("SELECT `ragID`, `name`, `email`, `college`, `phone` FROM `participants` WHERE `active` = 1");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>All Active Participants</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th data-sort-initial='true'>ID</th><th>Name</th><th>E-Mail</th><th>College</th><th>Phone</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?id=$v'>RAG$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	$i++;
		        }
		    	echo "</tr>";
		    	$j++;
			}
			echo "</table>";
			echo "Total participants: $j";
		}
		else {
			//Couldn't run query	
		}
	}
	else if($participants=='nonnit') {
		$query = $mysqli->query("SELECT `ragID`, `name`, `email`, `college`, `phone` FROM `participants` WHERE `college` NOT LIKE 'NIT, Calicut' AND `active` = 1");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>Non-NIT Participants</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th>ID</th><th>Name</th><th>E-Mail</th><th>College</th><th>Phone</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?id=$v'>RAG$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	$i++;
		        }
		    	echo "</tr>";
		    	$j++;
			}
			echo "</table>";
			echo "Total participants: $j";
		}
		else {
			//Couldn't run query	
		}
	}
	else if($participants=='collegewise') {
		$query = $mysqli->query("SELECT `college`, count(*) FROM `participants` WHERE `college` NOT LIKE 'NIT, Calicut' AND  `active` = 1 GROUP BY college ORDER BY `participants`.`college` ASC");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>College-wise Participants</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th>College</th><th>Participants</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?participants=".urlencode($v)."'>$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	$i++;
		        }
		    	echo "</tr>";
		    	$j++;
			}
			echo "</table>";
			echo "Total participants: $j";
		}
		else {
			//Couldn't run query	
		}
	}
	else {
		$query = $mysqli->query("SELECT `ragID`, `name`, `email`, `college`, `phone` FROM `participants` WHERE `college` LIKE '$participants' AND `active` = 1");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>Participants from $participants</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th>ID</th><th>Name</th><th>E-Mail</th><th>College</th><th>Phone</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?id=$v'>RAG$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	$i++;
		        }
		    	echo "</tr>";
		    	$j++;
			}
			echo "</table>";
			echo "Total participants: $j";
		}
		else {
			//Couldn't run query	
		}		
	}
}
else if(isset($_GET['events'])) {
	$events = $mysqli->real_escape_string($_GET['events']);
	//Returns list of Event Name, Team ID and Teamleader ID of $ragamid
	if($events=='all') {
		$query = $mysqli->query("SELECT a.event_id, a.event_name, count(*) FROM (SELECT `team`.`event_id`,  `eventinfo`.`event_name` , COUNT( * ) FROM  `team` ,  `eventinfo` WHERE  `team`.`event_id` =  `eventinfo`.`event_id` GROUP BY `event_id`, `team_id`) a GROUP BY a.event_id");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>All Team Registrations</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th>Event ID</th><th>Event Name</th><th>Teams</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?e=$v'>$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	if($i==2)
		        		$j+=$v;
		        	$i++;
		        }
		    	echo "</tr>";
			}
			echo "</table>";
			echo "Total registered teams: $j";
		}
		else {
			//Couldn't run query	
		}
	}
	else if($events=='nonnit') {
		$query = $mysqli->query("SELECT a.event_id, a.event_name, count(*) FROM (SELECT `team`.`event_id`,  `eventinfo`.`event_name` , COUNT( * ) FROM  `team` ,  `eventinfo`, `participants` p WHERE  `team`.`event_id` =  `eventinfo`.`event_id` AND p.`ragID` = `team`.`teamleader_id` AND p.college NOT LIKE 'NIT, Calicut' GROUP BY `event_id`, `team_id`) a GROUP BY a.event_id");
		if($query) {
			$list = array();
			while($l = $query->fetch_assoc()) {
				$list[] = $l;
			}
			echo "<h3>Non-NIT Team Registrations</h3><br />";
			echo '<input id="filter" type="text" placeholder="filter" /><br />';
			echo "<table data-filter='#filter' class='footable'>";
			echo "<thead><th>Event ID</th><th>Event Name</th><th>Teams</th></thead>";
			$j = 0;
			foreach($list as $a) {
			    echo "<tr>";
			    $i = 0;
		        foreach($a as $v) {
		        	if($i==0)
		        		echo "<td><a href='getdetails.php?e=$v'>$v</a></td>";	
		        	else
		        		echo "<td>$v</td>";
		        	if($i==2)
		        		$j+=$v;
		        	$i++;
		        }
		    	echo "</tr>";
			}
			echo "</table>";
			echo "Total registered teams: $j";
		}
		else {
			//Couldn't run query	
		}
	}
}
else if(isset($_GET['stats'])) {
	echo "<h3>Statistics</h3><br />";
	echo "<table class='footable' style='width:400px'>";
	echo "<thead><th>Stats</th><th>Count</th></thead>";
	echo "<tr><td>Total Sign Ups</td><td>";
	$query = $mysqli->query("SELECT count(*) FROM `participants`"); //registrations
	if($query) $count = $query->fetch_assoc();
	echo $count['count(*)'];
	
	echo "</td></tr><tr><td><a href='?participants=all'>Total Active Accounts</a></td><td>";
	$query = $mysqli->query("SELECT count(*) FROM `participants` WHERE active = 1"); //active registrations
	if($query) $count = $query->fetch_assoc();
	echo $count['count(*)'];
	
	echo "</td></tr><tr><td>Non-NIT Sign Ups</td><td>";
	$query = $mysqli->query("SELECT count(*) FROM `participants` WHERE college NOT LIKE 'NIT, Calicut'"); //non-nit registrations
	if($query) $count = $query->fetch_assoc();
	echo $count['count(*)'];
	
	echo "</td></tr><tr><td><a href='?participants=nonnit'>Non-NIT Active Accounts</a></td><td>";
	$query = $mysqli->query("SELECT count(*) FROM `participants` WHERE college NOT LIKE 'NIT, Calicut' AND active = 1"); //active non-nit registrations
	if($query) $count = $query->fetch_assoc();
	echo $count['count(*)'];
	
	echo "</td></tr><tr><td><a href='?events=all'>Total Registered for Events</a></td><td>";
	$query = $mysqli->query("SELECT count(DISTINCT teammember_id) AS count FROM `team`"); //people who have registered for some event
	if($query) $count = $query->fetch_assoc();
	echo $count['count'];
	
	echo "</td></tr><tr><td><a href='?events=nonnit'>Non-NIT Registered for Events</a></td><td>";
	$query = $mysqli->query("SELECT count(DISTINCT teammember_id) AS count FROM `team`, `participants` WHERE `team`.`teammember_id` = `participants`.`ragID` AND `participants`.`college` NOT LIKE 'NIT, Calicut'"); //non-nit people who have registered for some event
	if($query) $count = $query->fetch_assoc();
	echo $count['count'];
	echo "</td></tr></table>";
}
?>