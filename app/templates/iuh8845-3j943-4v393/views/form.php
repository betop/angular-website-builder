<?php

$EmailFrom = "test@test.com";
$EmailTo = "you@yourwebsite.com";
$Subject = "Website Contact Form";
$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['phone'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Reason = Trim(stripslashes($_POST['reason'])); 
$Date = Trim(stripslashes($_POST['date'])); 
$Message = Trim(stripslashes($_POST['message'])); 

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Phone: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Reason: ";
$Body .= $Reason;
$Body .= "\n";
$Body .= "Requested Date: ";
$Body .= $Date;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page 
if ($success){
  $status = "Your Request Has Been Sent";
  $message = "One of our team will be in touch as soon as possible";
}
else{
   $status = "Error - Your Request Has Not Been Sent";	
	  $message = "Please try again later or use the phone number above.";

}
?>

<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Caravan Holiday Home</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="icon" href="assets/img/favicon.ico" type="image/x-icon" />

        <link rel="stylesheet" href="assets/css/reset.css">
        <link rel="stylesheet" href="assets/css/main.css">
        <link rel="stylesheet" href="assets/css/font-awesome.css">
        <link rel="stylesheet" href="assets/css/lightbox.css">
		<link href='http://fonts.googleapis.com/css?family=PT+Sans:400,700%7CPacifico' rel='stylesheet' type='text/css'>
    </head>
    <body>
        <div class="wrap">
			<div class="pre-header">
				<div class="grid">
					<span class="header-phone"><i class="fa fa-phone"></i>01457-855-467</span>
					<span class="header-social right">
						<a href=""><i class="fa fa-twitter"></i></a>
						<a href=""><i class="fa fa-facebook"></i></a>
						<a href=""><i class="fa fa-instagram"></i></a>
					</span>
				</div>
			</div>
			<div class="header clearfix">
				<div class="grid">
					<div class="branding col3">
						<h1 class="logo">Caravan Hire</h1>
						<span class="logo-description">Family Caravan Holidays</span>
					</div>
					<div class="navigation col9 right last">
						<ul class="header-navigation">
							<li><a href="index.html">Home</a></li>
							<li><a href="location.html">Location</a>
								<ul>
									<li><a href="facilities.html">Facilities</a></li>
									<li><a href="gallery.html">Gallery</a></li>
								</ul>
							</li>
							<li><a href="booking.html">Booking</a>
								<ul>
									<li><a href="faqs.html">FAQs</a></li>									
									<li><a href="terms.html">Terms</a></li>
								</ul>
							</li>
							<li><a href="reviews.html">Reviews</a></li>
							<li class="last"><a href="contact.html">Contact</a></li>
						</ul>
					</div>
				</div>
			</div>
			
			<div class="entry-header">
				<h2 class="entry-title"><?php echo $status; ?></h2>
				<p class="entry-intro"><?php echo $message; ?></p>
			</div>
			
			
			<div class="footer grid clearfix">
				<div class="widget footer-widget col3">
					<h3 class="widget-title">Caravan Hire</h3>
					<p>Our caravan offers a beautiful sea view and easily accessible beach. There's plenty to do for both adults and children on our feature-packed park ground.</p>
					<p>Up to 8 people can share this stunning 8 berth caravan.</p>
				</div>
				<div class="widget footer-widget col3" ng-include="'templates/iuh8845-3j943-4v393/views/address.html'">
				</div>				
				<div class="widget footer-widget col3">
					<h3 class="widget-title">Latest News</h3>
					<ul class="recent-posts">
						<li class="first"><a href="">Summers Savings Now Live</a></li>
						<li><a href="">Top 10 Caravanning Locations</a></li>
						<li><a href="">19 Reasons You Need a Holiday</a></li>
						<li><a href="">Explorers Guide to Wales</a></li>
					</ul>
				</div>
				<div class="widget footer-widget col3 last">
					<h3 class="widget-title">Visitor Photos</h3>
					<img class="footer-image" src="assets/img/small/small-1.jpg" alt="small caravan pic"/>
					<img class="footer-image" src="assets/img/small/small-2.jpg" alt="small caravan pic"/>
					<img class="footer-image last" src="assets/img/small/small-3.jpg" alt="small caravan pic"/>
					<img class="footer-image" src="assets/img/small/small-4.jpg" alt="small caravan pic"/>
					<img class="footer-image" src="assets/img/small/small-5.jpg" alt="small caravan pic"/>
					<img class="footer-image last" src="assets/img/small/small-6.jpg" alt="small caravan pic"/><img class="footer-image" src="assets/img/small/small-1.jpg" alt="instagram caravan pic"/>
					<img class="footer-image" src="assets/img/small/small-2.jpg" alt="small caravan pic"/>
					<img class="footer-image last" src="assets/img/small/small-3.jpg" alt="small caravan pic"/>
				</div>

			</div>
		</div>
		
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.3.min.js"><\/script>')</script>
		<script src="assets/js/tinynav.js"></script>
		<script src="assets/js/scripts.js"></script>
    </body>
</html>