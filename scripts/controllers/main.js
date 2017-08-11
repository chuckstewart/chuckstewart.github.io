'use strict';

/**
 * @ngdoc function
 * @name portfolio3App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the portfolio3App
 */
angular.module('portfolio3App')
  .controller('MainCtrl', function ($scope, $interval) {

 var vm = this;

        // SLIDES WITH CAPTIONS
        //===================================
        $scope.slides = [
            {'src': '../images/health2.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.'},
            {'src': '../images/health3.jpg', caption: 'Lorem ipsum dolor sit amet '},
            {'src': '../images/ailes2.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. '},
            {'src': '../images/ailes3.jpg', caption: 'Lorem ipsum dolor sit amet,  Enim, maxime.'},
            {'src': '../images/sports.jpg', caption: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, maxime.'}
        ];

        $scope.options = {
            clicking: true,
            sourceProp: 'src',
            visible: 7,
            perspective: 35,
            startSlide: 0,
            border: 0,
            dir: 'ltr',
            width: 360,
            height: 270,
            space: 280,
            autoRotationSpeed: 0,
            loop: true
        };


        // ANY HTML
        //===================================
 





var politics = true;
  	$scope.sections = [
  	politics={sectionname:'politics', linkname:'#politics'},
  	ny={sectionname:'N.Y.',linkname:'#ny'},
  	business={sectionname:'Business', linkname:'#business'},
  	opinion={sectionname:'Opinion', linkname:'#opinion'},
  	science={sectionname:'Science', linkname:'#science'},
  	sports={sectionname:'Sports', linkname:'#sports'},
  	health={sectionname:'Health', linkname:'.#health'},
  	tech={sectionname:'Tech', linkname:'.#tech'}
  	];
 
  	$scope.buttonPressed = true;
    $scope.linkpressed = true;

  	$scope.showSections = function(){
  		$scope.buttonPressed = false;
  	}
  	$scope.sectionSelect = function(){
  		console.log("hello function");
  	}
    $scope.showArticles = function(part){
      part.show = false;
    }



   var vm = this
    
    var slides = [
       "../images/turkey-img1-videoLarge.jpg",
          "../images/17turkey8-master675.jpg",
           "../images/17turkey9-master675.jpg"
    ];

  $scope.slide = slides[0];


    
$scope.counter = 0;

$scope.counter2 = 0;

    $interval(function(){
    if($scope.counter2 === 0 ){   
    $scope.counter2 = 1;
  }
    else {$scope.counter2 = 0;};

  if($scope.counter === 0 ){   
    $scope.counter = 1;
  }
    else if($scope.counter === 2){
    $scope.counter = 0;}
    else {$scope.counter = 2;}; 
      },9000);


    
console.log($scope.counter);


   var long =["1","2","3"]
var politicsarticles = ["Trump Inherits a Secret Cyberwar Against North Korean Missiles","Tracking Trump’s Agenda, Step by Step","How a Special Counsel Alters the Russia Investigation", "Washington Is Abuzz With Surround Sound of Scandal", "Robert Mueller, New Special Counsel, Is Known for Independence"];
var nyarticles = ["Money Out of Your Pocket’: New Yorkers Tell of Subway Delay Woes", "New York City Police Sergeant Charged With Murder in Bronx Woman’s Death", "Where the Teacher’s Pet Sleeps in a Dog Bed", "Looking for (Another) $1.1 Billion to Finish an Amusement Mall"];
var businessarticles = ["China’s New Cybersecurity Law Leaves Foreign Firms Guessing", "Chinese Maker of Ivanka Trump’s Shoes Looks for Cheaper Labor", "Express Scripts Sues Maker of Overdose Drug, Intensifying Feud", "Steady Jobs, but With Pay and Hours That Are Anything But", "Exxon Mobil Shareholders Demand Accounting of Climate Change Policy Risks"];
var opinionarticles = ["Rule-Benders Require New Rules", "The Complexities of James Comey", "Oh Dear. The Trumps Keep Multiplying.", "The Womb Is No Protection From Toxic Chemicals"];
var healtharticles = ["Express Scripts Sues Maker of Overdose Drug, Intensifying Feud", "Boost Your Workouts With Caffeine, Even if You Chug Coffee Daily", "Drug Lobbyists’ Battle Cry Over Prices: Blame the Others", "Gay and Transgender Patients to Doctors: We’ll Tell. Just Ask."];
var sportsarticles = ["Players Want Margaret Court Arena Renamed Over Remarks on Gays", "LeBron James Responds to Racial Vandalism: ‘Being Black in America Is Tough’", "The Warriors, Once the N.B.A.’s Darlings, Flirt With the Villains’ Role", "Yankees Slugger Aaron Judge Is Third in Early A.L. All-Star Voting"];
var sciencearticles = ["Newly Named NASA Spacecraft Will Aim Straight for the Sun", "Challenging Mainstream Thought About Beauty’s Big Hand in Evolution", "Thar She Glows! How the Natural History Museum Cleans Its Blue Whale", "New York Blood Center Reaches a Deal to Help Care for Research Chimps"];
var techarticles = ["China’s New Cybersecurity Law Leaves Foreign Firms Guessing", "Uber Fires Former Google Engineer at Heart of Self-Driving Dispute", "A Price Amazon Is Content to Keep High: $1,000 a Share", "The Ringer, Bill Simmons’s Site, Will Switch Its Host to Vox Media", "So Your Phone Ran Out of Juice. Here Are the Top Chargers for It."];

 $scope.sectionsarticles = [politicsarticles, nyarticles, businessarticles, opinionarticles, healtharticles, sportsarticles, sciencearticles, techarticles];
 


    $scope.picdescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    

 $interval(function(){
      if($scope.slide == slides[0]){
      	$scope.picdescrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "   
      }
      else if($scope.slide == slides[1]){
      	    $scope.picdescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
      }
      else {
      	$scope.picdescrip = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " }
    }, 8000, 0);



       
(function ($) {

  $(document).ready(function(){
    
	// hide .navbar first
	$(".navbar1").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 300) {
				$('.navbar1').fadeIn();
			} else {
				$('.navbar1').fadeOut();
			}
		});

	
	});

});
  }(jQuery));

(function ($) {

  $(document).ready(function(){
    
	// hide .navbar first
	$(".scrollmenu1").hide();
	
	// fade in .navbar
	$(function () {
		$(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
			if ($(this).scrollTop() > 300) {
				$('.scrollmenu1').fadeIn();
			} else {
				$('.scrollmenu1').fadeOut();
			}
		});

	
	});

});
  }(jQuery));

var today = new Date();
var options = { year: 'numeric', month: 'long', day: 'numeric' };
$scope.todaydate = today.toLocaleDateString("en-US",options);



$('#homeheader').backstretch("../images/ink6.jpg");
      $scope.image = '../images/turkey-img1-videoLarge.jpg';
  		$scope.title = "Erdogan Claims Vast New Powers After Narrow Victory in Turkish Referendum"
  		$scope.article ="ISTANBUL — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."
 


var politics = {show:true, linkname:'#politics', author:"Bob Smith", sectiontitle:"politics", title:"Robert Mueller, Former F.B.I. Director, Is Named Special Counsel for Russia Investigation", slides:["../images/mueller.jpg", "../images/mueller2.jpg"], article:"Washington — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000.", articles: ["Trump Inherits a Secret Cyberwar Against North Korean Missiles","Tracking Trump’s Agenda, Step by Step","How a Special Counsel Alters the Russia Investigation", "Washington Is Abuzz With Surround Sound of Scandal", "Robert Mueller, New Special Counsel, Is Known for Independence"]};
var ny = {show:true, linkname:'#ny', author:"Bob Anderson", sectiontitle:"ny", articles: ["Money Out of Your Pocket’: New Yorkers Tell of Subway Delay Woes", "New York City Police Sergeant Charged With Murder in Bronx Woman’s Death", "Where the Teacher’s Pet Sleeps in a Dog Bed", "Looking for (Another) $1.1 Billion to Finish an Amusement Mall"], title:"De Blasio Quietly Seeks Allies in Battle Over Homeless Shelters", slides:["../images/ny1.jpg", "../images/ny2.jpg", "../images/ny3.jpg"], article:"NYC — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var business = {show:true, linkname:'#business', author:"Shirley Smith", sectiontitle:"business", articles:["China’s New Cybersecurity Law Leaves Foreign Firms Guessing", "Chinese Maker of Ivanka Trump’s Shoes Looks for Cheaper Labor", "Express Scripts Sues Maker of Overdose Drug, Intensifying Feud", "Steady Jobs, but With Pay and Hours That Are Anything But", "Exxon Mobil Shareholders Demand Accounting of Climate Change Policy Risks"], title:"Roger Ailes, Who Built Fox News Into an Empire, Dies at 77", slides:[ "../images/ailes2.jpg", "../images/ailes3.jpg"],article:"Roger Ailes, who shaped the images that helped elect three Republican presidents ISTANBUL — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var opinion = {show:true, linkname:'#opinion', author:"Shirley Johnson", sectiontitle:"opinion", articles: ["Rule-Benders Require New Rules", "The Complexities of James Comey", "Oh Dear. The Trumps Keep Multiplying.", "The Womb Is No Protection From Toxic Chemicals"], title:"Robert Mueller: The Special Counsel America Needs", slides:["../images/opinion.jpg"],article:"WASHINGTON D.C. — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var health = {show:true, linkname:'.#health', author:"Michael Johnson", sectiontitle:"health", articles: ["Express Scripts Sues Maker of Overdose Drug, Intensifying Feud", "Boost Your Workouts With Caffeine, Even if You Chug Coffee Daily", "Drug Lobbyists’ Battle Cry Over Prices: Blame the Others", "Gay and Transgender Patients to Doctors: We’ll Tell. Just Ask."], title:"Babies From Skin Cells? Prospect Is Unsettling to Some Experts", slides:["../images/health.jpg", "../images/health2.jpg", "../images/health3.jpg"], article:"NEW YORK — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var sports = {show:true, linkname:'#sports', author:"Michael Taylor", sectiontitle:"sports", articles: ["Players Want Margaret Court Arena Renamed Over Remarks on Gays", "LeBron James Responds to Racial Vandalism: ‘Being Black in America Is Tough’", "The Warriors, Once the N.B.A.’s Darlings, Flirt With the Villains’ Role", "Yankees Slugger Aaron Judge Is Third in Early A.L. All-Star Voting"], title:"Paul Pogba Can’t Save Manchester United Alone. Nobody", slides:["../images/sports.jpg", "../images/sports2.jpg", "../images/sports3.jpg"], article:"PARIS — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var science = {show:true, linkname:'#science', author:"Cynthia Johnson", sectiontitle:"science", articles:["Newly Named NASA Spacecraft Will Aim Straight for the Sun", "Challenging Mainstream Thought About Beauty’s Big Hand in Evolution", "Thar She Glows! How the Natural History Museum Cleans Its Blue Whale", "New York Blood Center Reaches a Deal to Help Care for Research Chimps"], title:"MILES OF ICE COLLAPSING INTO THE SEA", model:"500", slides:["../images/science.jpg"], color:"white",article:" THE ACCELERATION is making some scientists fear that Antarctica’s ice sheet may have entered the early stages of an unstoppable disintegration. ISTANBUL — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};
var tech = {show:true, linkname:'.#tech', author:"Cynthia Taylor", sectiontitle:"tech", articles:["China’s New Cybersecurity Law Leaves Foreign Firms Guessing", "Uber Fires Former Google Engineer at Heart of Self-Driving Dispute", "A Price Amazon Is Content to Keep High: $1,000 a Share", "The Ringer, Bill Simmons’s Site, Will Switch Its Host to Vox Media", "So Your Phone Ran Out of Juice. Here Are the Top Chargers for It."], title:"E.U. Fines Facebook $122 Million Over Disclosures in WhatsApp Deal", model:"500", slides:["../images/tech.jpg"], color:"white",article:"SAN FRANCISCO — A slim majority of Turkish voters agreed on Sunday to grant sweeping powers to their president, in a watershed moment that the country’s opposition fears may cement a system of authoritarian rule within one of the critical power brokers of the Middle East. With nearly 99 percent of votes in a referendum counted on Sunday night, supporters of the proposal had 51.3 percent of votes cast, and opponents had 48.7 percent, the country’s electoral commission announced.\n\nThe result will take days to confirm, and the main opposition party said it would demand a recount of about 37 percent of ballot boxes, containing around 2.5 million votes. But on Sunday night the result was already a political reality, as President Recep Tayyip Erdogan hailed his victory in front of a crowd of supporters in Istanbul. “We are enacting the most important governmental reform of our history,” he said.\n\nThe constitutional change will allow the winner of the 2019 presidential election to assume full control of the government, ending the current parliamentary political system. The ramifications, however, are immediate. The “yes” vote in the referendum is a validation of the current leadership style of Mr. Erdogan, who has been acting as a de facto head of government since his election in 2014 despite having no constitutional right to wield such power. \n\nThe office of Turkey’s president was meant to be an impartial role without full executive authority. The result tightens Mr. Erdogan’s grip on the country, which is one of the leading external actors in the Syrian civil war, a major way station along the migration routes to Europe and a crucial Middle Eastern partner of the United States and Russia. Many analysts were surprised by the close result, saying they had expected Mr. Erdogan to achieve a larger majority because he had held the referendum within an atmosphere of fear.\n\nSince a failed coup last summer, Turkey has been under a state of emergency, a situation that allowed the government to fire or suspend about 130,000 people suspected of being connected to the failed putsch, and to arrest about 45,000."};

 $scope.parts = [politics, ny, opinion, health, science, sports, business, tech];

 
 });