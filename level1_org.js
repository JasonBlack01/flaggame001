//Your function won't run if you don't close the bars for another function, 
// if your code isn't running for a function, check if the other funcitons are closed


console.log("hi");

var PartX
var PartY
var PartZ
var info
var this_numb= 0
var maxQs = 10;
var bufferVar;
var orderArray;
var tipClass

var Is_Top_True
var Is_Mid_True
var Is_Bottom_True

var extraTops 
var extraMids
var extraBotts
var alternativeBox_Top = [];
var alternativeBox_Mid = [];
var alternativeBox_Bott = [];
var check_clicked =0;

var username;
var points = 0;


        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous">

        function SubForm (){
            $.ajax({
                url:"https://api.apispreadsheets.com/data/WA68KnGGM23nuMni/",
                type:"post",
                data:$("#myForm").serializeArray(),
                success: function(){
                    alert("Form Data Submitted :)")
                },
                error: function(){
                    alert("There was an error :(")
                }
            });
        }

function presentStart(){

    
    document.getElementById("form1").style.display = "none"
    username = document.getElementById("uname").value;
    document.getElementById("next").style.visibility = "visible"
}

function extraRandoms(){
   //the only thing that matters here is 3 variables (extra random pieces), that change whenever the function is run to a random value

    var extraRandom = Math.floor(Math.random()* 10) +1;
    console.log(extraRandom)
   
    switch (extraRandom){
        // rmemeber it's case 1: not case: 1
        case 1: 
        // Ghana pieces
        
        extraTops = document.getElementById('red1').src;
        extraMids = document.getElementById('GHmid').src;
        extraBotts = document.getElementById('Green1').src;
        break;
        case 2: 
        // South Africa  pieces
        
        extraTops = document.getElementById('SouthAfrTop').src;
        extraMids = document.getElementById('SouthAFrMid').src;
        extraBotts = document.getElementById('SouthAfrBott').src;
        break;
        case 3: 
        // India  pieces
        
        extraTops = document.getElementById('IndiaTop').src;
        extraMids = document.getElementById('IndiaMid').src;
        extraBotts = document.getElementById('IndiaBottom').src;
        break;
        case 4: 
        // Yemen pieces
        
        extraTops = document.getElementById('YemenTop').src;
        extraMids = document.getElementById('YemenMid').src;
        extraBotts = document.getElementById('YemenBott').src;
        break;
        case 5: 
        // Venezuela pieces
        
        extraTops = document.getElementById('VenezTop').src;
        extraMids = document.getElementById('VenezMid').src;
        extraBotts = document.getElementById('VenezBott').src;
        break;
        case 6:
        // Palestine pieces
        
        extraTops = document.getElementById('PalestineTop').src;
        extraMids = document.getElementById('PalestineMid').src;
        extraBotts = document.getElementById('PalestineBott').src;
        break;
        case 7:
        // Germany pieces
        extraTops = document.getElementById('GermanyTop').src;
        extraMids = document.getElementById('GermanyMid').src;
        extraBotts = document.getElementById('GermanyBott').src;
        break;
        case 8:
        // Cambodia pieces
       
        extraTops = document.getElementById('CambodiaTop').src;
        extraMids = document.getElementById('CambodiaMid').src;
        extraBotts = document.getElementById('CambodiaBott').src;
        break;
        case 9: 
        // Bolivia pieces
        extraTops = document.getElementById('BoliviaTop').src;
        extraMids = document.getElementById('BoliviaMid').src;
        extraBotts = document.getElementById('BoliviaBott').src;
        break;
        case 10: 
        // Albania pieces
        extraTops = document.getElementById('AlbaniaTop').src;
        extraMids = document.getElementById('AlbaniaMid').src;
        extraBotts = document.getElementById('AlbaniaBott').src;
        break;
        
    }
   }
   
function RandomQorder(){

    var holder, numb_picked
    var numbs_picked = [];
    orderArray = [0,1,2,3,4,5,6,7,8,9,10];

    for (var i = 0; i<orderArray.length; i++)
    {
        //problem, i'm designign an agorythm to randommly swithch around the numbers in the array
        //but i'm doign nothing with the holder nummber and I'm cutting off the array by movign it towards the end when 

        holder = orderArray[i];
       numb_picked =Math.floor(Math.random() * 11);
       orderArray[i] = orderArray[numb_picked];
       orderArray[numb_picked] = holder;
    }
    return orderArray;
}

function Back(){

    //prevent it from lagging and going below question 1
    if (this_numb >1)
    {
        this_numb--;
    }
    console.log("Question "  + this_numb);

    document.getElementById('Answer').style.display = "none"
    document.getElementById("_top").src = document.getElementById("orgTop").src;
    document.getElementById("_middle").src = document.getElementById("orgMid").src;
    document.getElementById("_bottom").src = document.getElementById("orgBott").src;

    Is_Top_True = false
    Is_Bottom_True = false
    Is_Mid_True = false
    document.getElementById('next').innerHTML = "Next"

    //restsart function for each question 
    Start_This();
    }

function Play_Next(){

    //prevent it from exceding max questions
    if (this_numb < maxQs+1)
    {
        this_numb++;
    }
    console.log("Question " +  this_numb);
    
    //unhide all the pieces that were hidden at the beginning of the game
    var showText = document.getElementsByClassName('hide');
    for (var i = 0; i<showText.length; i++){
    showText[i].style.visibility = "visible";
    }

    var info = document.getElementById('info').innerHTML

    document.getElementById("user1").style.visibility = "visible"
    document.getElementById("user1").innerHTML = "User: " + username

    document.getElementById("direct").style.display = "none";
    document.getElementById("direct_box").style.display = "inline-block";
    document.getElementById('Answer').style.display = "none"
    document.getElementById("_top").src = document.getElementById("orgTop").src;
    document.getElementById("_middle").src = document.getElementById("orgMid").src;
    document.getElementById("_bottom").src = document.getElementById("orgBott").src;

    Is_Top_True = false
    Is_Bottom_True = false
    Is_Mid_True = false
    document.getElementById('next').innerHTML = "Next"

    //restart function for each question, resets data for that specific question   
    document.getElementById("back").style.display = "none"
    Start_This();
    keyPresses();
    check_clicked = 0;

    points += points_added - points_deducted
    if (points <0)
    {points = 0}
    document.getElementById("points").innerHTML = "Points: " + points;

    points_added = 0;
    points_deducted = 0;
}


var times = 0 
function directions(){
    times++; 
    var directions = document.getElementById("direct");

    if (times%2 ==1)
    {
        directions.style.display = "inline-block"
        document.getElementById("direct_box").innerHTML = "Hide Directions"
    }
    else 
    {
        directions.style.display = "none"
        document.getElementById("direct_box").innerHTML = "Show Directions"


    }
}
//resets the data for each specific question 
function Start_This(){

switch (this_numb) {
case 1:

//Country 1 ~ Ghana 
document.getElementById('QNumber').innerHTML = "Country 1: Ghana"
PartX = document.getElementById('red1').src;
PartY = document.getElementById('GHmid').src;
PartZ = document.getElementById('Green1').src;
info = document.getElementsByClassName('GhanaInfo');
alternativeBox_Top = ["BoliviaTop", "VenezBott", "YemenTop", "GermanyMid"];
alternativeBox_Mid = []
alternativeBox_Bott = ["BoliviaBott", "IndiaBottom",]
tipClass = "GhanaInfo"
break;
case 2:

//Country 2 ~ South Africa  

Is_Top_True = false
Is_Bottom_True = false
Is_Mid_True = false


//Resets the Game pieces to the default: top, middle, bottom missing pieces


document.getElementById('QNumber').innerHTML = "Country 2: South Africa"

PartX = document.getElementById('SouthAfrTop').src;
PartY = document.getElementById('SouthAFrMid').src;
PartZ = document.getElementById('SouthAfrBott').src;
info = document.getElementsByClassName('SouthAfrInfo');

 alternativeBox_Top = [];
 alternativeBox_Mid = [];
 alternativeBox_Bott = [];

 tipClass = "SouthAfrInfo"
break;
case 3:
document.getElementById('QNumber').innerHTML = "Country 3: India"

PartX = document.getElementById('IndiaTop').src;
PartY = document.getElementById('IndiaMid').src;
PartZ = document.getElementById('IndiaBottom').src;
info = document.getElementsByClassName('IndiaInfo');

 alternativeBox_Top = [];
 alternativeBox_Mid = [];
 alternativeBox_Bott = ["BoliviaBott", "Green1"];

 tipClass = "IndiaInfo";
break;

case 4:
document.getElementById('QNumber').innerHTML = "Country 4: Yemen"

PartX = document.getElementById('YemenTop').src;
PartY = document.getElementById('YemenMid').src;
PartZ = document.getElementById('YemenBott').src;
info = document.getElementsByName('YemenInfo');

alternativeBox_Top = ["BoliviaTop", "VenezBott","red1", "GermanyMid"];
 alternativeBox_Mid = [];
 alternativeBox_Bott = ["GermanyTop"];

 tipClass = "YemenInfo"
break;
case 5:
document.getElementById('QNumber').innerHTML = "Country 5: Venezuela"

PartX = document.getElementById('VenezTop').src;
PartY = document.getElementById('VenezMid').src;
PartZ = document.getElementById('VenezBott').src;
info = document.getElementsByClassName('VenezInfo')

alternativeBox_Top = [];
alternativeBox_Mid = [];
alternativeBox_Bott = ["red1", "BoliviaTop","YemenTop", "GermanyMid"];

tipClass = "VenezInfo"
break;

case 6:

document.getElementById('QNumber').innerHTML= "Country 6: Palestine"
PartX = document.getElementById('PalestineTop').src;
PartY = document.getElementById('PalestineMid').src;
PartZ = document.getElementById('PalestineBott').src;
info = document.getElementsByClassName('PalestineInfo');

alternativeBox_Top = [];
alternativeBox_Mid = [];
alternativeBox_Bott = [];
tipClass = "PalestineInfo"
break;
case 7:

document.getElementById('QNumber').innerHTML= "Country 7: Germany"

PartX = document.getElementById('GermanyTop').src;
PartY = document.getElementById('GermanyMid').src;
PartZ = document.getElementById('GermanyBott').src;
info = document.getElementsByClassName('GermanyInfo');

alternativeBox_Top = ["YemenBott"];
alternativeBox_Mid = ["red1", "BoliviaTop","YemenTop", "VenezTop"];
alternativeBox_Bott = [];
tipClass = "GermanyInfo"

break;
case 8:
 document.getElementById('QNumber').innerHTML= "Country 8: Cambodia"
PartX = document.getElementById('CambodiaTop').src;
PartY = document.getElementById('CambodiaMid').src;
PartZ = document.getElementById('CambodiaBott').src;
info = document.getElementsByClassName('CambodiaInfo').innerHTML
    
alternativeBox_Top = [];
alternativeBox_Mid = [];
alternativeBox_Bott = [];
tipClass = "CambodiaInfo"
break;
case 9:

document.getElementById('QNumber').innerHTML= "Country 9: Bolivia"
PartX = document.getElementById('BoliviaTop').src;
PartY = document.getElementById('BoliviaMid').src;
PartZ = document.getElementById('BoliviaBott').src;
info = document.getElementsByClassName('BoliviaInfo')

alternativeBox_Top = ["red1", "GermanyMid","YemenTop", "VenezTop"];
alternativeBox_Mid = [];
alternativeBox_Bott = ["IndiaBottom", "Green1"];
tipClass = "BoliviaInfo"
break;
case 10:

document.getElementById('next').innerHTML = "End" 

document.getElementById('QNumber').innerHTML= "Country 10: Albania"
PartX = document.getElementById('AlbaniaTop').src;
PartY = document.getElementById('AlbaniaMid').src;
PartZ = document.getElementById('AlbaniaBott').src;
info = document.getElementsByClassName('AlbaniaInfo')

alternativeBox_Top = ["red1", "GermanyMid","YemenTop", "VenezTop"];
alternativeBox_Mid = [];
alternativeBox_Bott = ["IndiaBottom", "Green1"];
tipClass =  "AlbaniaInfo"
break;
case 11: 
var showText = document.getElementsByClassName('hide');
    for (var i = 0; i<showText.length; i++){
    showText[i].style.display = "none";
    }
   
    document.getElementById("endgame").style.display = "inline-block";
    document.getElementById("direct").style.display = "none";
    document.getElementById("scored").innerHTML = "You scored " + points + " points!";

    var game_title;
    if (points<10)
    {
        game_title = "Historian of Territorial Knowedge"
    }
    else if (points>10 && points<20)
    {
        game_title = "Diplomat of Global Knowledge"
    }
    else if (points>20 && points <30)
    {
        game_title = "Ambassador of World Entities"
    }
    else if (points>30 && points<40)
    {
        game_title = "Ruler of Global Territories"
    }
    else if (points >40)
    {
        game_title= " Supreme Commander of the Earth"
    }
    document.getElementById("title").innerHTML = "Title Earned: " + game_title ;
    document.getElementById("name1").value = username;
    document.getElementById("score1").value = points;



break;
}

}

function show(){
document.getElementById('pHide').style.visibility = "visible"
}

function hide(){
document.getElementById('pHide').style.visibility = "hidden"
}


//Structure for Key Presses  (asd)
function keyPresses(){

document.onkeyup=function(e){
var e = e || window.event; // for IE to cover IEs window event-object
if(e.which == 65) {
randomerTop();
return false;
}
else if (e.which == 83) {
randomerMid();
return false;

}
else if (e.which == 68){
randomerBottom();
return false;
}
else if (e.which == 67){
check();
return false;
}
}

}

//_top
function randomerTop(){

//Generates 5 ranndom numbers 
var randomgen = Math.floor(Math.random() * 6) + 1;
console.log(randomgen);

//another swtich-case to change the actual images of the top piece
switch (randomgen)
{
    case 1:
        document.getElementById('_top').src = PartX;

        
        //
        Is_Top_True = true;
    break;
    case 2:
        document.getElementById('_top').src = PartY;
        Is_Top_True = false;

    break;
    case 3:
        document.getElementById('_top').src = PartZ;
        Is_Top_True = false;
    break;
    case 4:
        //this is smart, I didn't make these random pieces, 
        extraRandoms();
        document.getElementById('_top').src = extraMids;
        Is_Top_True = false;
        checkAltenratives_Top(extraMids);

    break;
    case 5:
        extraRandoms();
        document.getElementById('_top').src = extraBotts;
        Is_Top_True = false;
        checkAltenratives_Top(extraBotts);

    break;
    case 6: 
        extraRandoms();
        document.getElementById('_top').src = extraTops;

        if (extraTops == PartX)
            {
                Is_Top_True = true;
                console.log("special case");
            }
        else
            {
                Is_Top_True = false;
            }
        checkAltenratives_Top(extraTops);

    break;

}
console.log("case " + randomgen);
}

//_middle
function randomerMid(){

var randomgen = Math.floor(Math.random() * 6) + 1;
console.log(randomgen);

switch (randomgen)
{
case 1:
document.getElementById('_middle').src = PartX;
// document.getElementById('red1').src
Is_Mid_True = false;

break;
case 2:
document.getElementById('_middle').src = PartY;
// document.getElementById('GHmid').src
Is_Mid_True = true;
break;
case 3:
document.getElementById('_middle').src = PartZ;
// document.getElementById('Green1').src
Is_Mid_True = false;
break;
case 4:
    
extraRandoms();
document.getElementById('_middle').src = extraTops;
Is_Mid_True = false;
checkAltenratives_Mid(extraTops);

break;
case 5:
extraRandoms();
document.getElementById('_middle').src = extraBotts;
Is_Mid_True = false;
checkAltenratives_Mid(extraBotts);


break;
case 6: 
extraRandoms();
        document.getElementById('_middle').src = extraMids;

        if (extraMids == PartY)
            {
                Is_Mid_True = true;
                console.log("special case");
            }
        else
            {
                Is_Mid_True = false;
            }
        checkAltenratives_Mid(extraMids);

break;

}
}

//bottoms
function randomerBottom(){

var randomgen = Math.floor(Math.random() * 6) + 1;
console.log(randomgen);

switch (randomgen)
{
case 1:
document.getElementById('_bottom').src = PartX;
//document.getElementById('red1').src
Is_Bottom_True = false;

break;
case 2:
document.getElementById('_bottom').src = PartY;
// document.getElementById('GHmid').src;
Is_Bottom_True = false;

break;
case 3:
document.getElementById('_bottom').src = PartZ;
// document.getElementById('Green1').src;
Is_Bottom_True = true;
break;
case 4:
    
extraRandoms();
document.getElementById('_bottom').src = extraTops;
Is_Bottom_True = false;
checkAltenratives_Bott(extraTops);


break;
case 5:
extraRandoms();
document.getElementById('_bottom').src = extraMids;
Is_Bottom_True = false;
checkAltenratives_Bott(extraMids);


break;
case 6:

extraRandoms();
        document.getElementById('_bottom').src = extraBotts;

        if (extraBotts == PartZ)
            {
                Is_Bottom_True = true;
                console.log("special case");
            }
        else
            {
                Is_Bottom_True = false;
            }
            
        checkAltenratives_Bott(extraBotts);

break;

}


}


//alternatives function 
//fetch the image file of each piece ,
//if it is one of the alternatives as well, set the variable to true

function checkAltenratives_Top(altTop){

    if (alternativeBox_Top.length != 0)
{
    for (var i = 0; i <alternativeBox_Top.length; i++)
    {
        var topAlt = alternativeBox_Top[i];
        var altSection = document.getElementById(topAlt).src;
        console.log(altSection)
        if (altTop == altSection)
        {Is_Top_True = true;
            //you've been usign the comparison operator (==) instead of the assignment operator
            i = alternativeBox_Top.length;
        //even if true does appear, that could easily be overriden when it checks the next one; so you need to exit as soon as true appears, so you need a function
    }
    }
}
}

function checkAltenratives_Mid(altMid){
    if (alternativeBox_Mid.length != 0)
{
    for (var i = 0; i <alternativeBox_Mid.length; i++)
    {
        var midAlt = alternativeBox_Mid[i];
        var altSection = document.getElementById(midAlt).src;
        console.log(altSection);
        if (altMid == altSection)
        {Is_Mid_True =true;
            i = alternativeBox_Mid.length}
}
}
}

function checkAltenratives_Bott(altBott){

    if (alternativeBox_Bott.length != 0)
{
    for (var i = 0; i <alternativeBox_Bott.length; i++)
    {
        var bottAlt = alternativeBox_Bott[i];
        var altSection = document.getElementById(bottAlt).src;
        console.log(altSection);
        if (altBott == altSection)
        {Is_Bottom_True = true;
        i = alternativeBox_Bott.length}
}
}
}

var pick = 0, pick_prev = 1;

function pickRecurse(){
    
    pick_prev = pick
    pick =  Math.floor(Math.random()*3) + 1

    if (pick == pick_prev)
        {pickRecurse();}
    else
       {return pick }

}

var points_deducted = 0;
function revealPiece(){

    points_deducted++;
    pick ++    
    switch (pick)
    {
        case 1: 
        document.getElementById('_top').src = PartX;
        Is_Top_True = true
    
        break;
        case 2: 
        document.getElementById('_middle').src = PartY;
        Is_Mid_True = true
        break;
        case 3:
        document.getElementById('_bottom').src = PartZ;
        Is_Bottom_True = true
        pick =0;
        break;
    }

}

var tips = -1;
function revealHint(){
    var tipNumb = document.getElementsByClassName(tipClass)
    tips ++
    console.log(tipNumb[tips]);

    document.getElementById("info").innerHTML = tipNumb[tips].innerHTML;

    if (tips== tipNumb.length-1)
        {
            tips = -1;
        }
       
}

var points_added = 0;
function check() {
    check_clicked++
if (Is_Top_True  && Is_Bottom_True && Is_Mid_True)
{
document.getElementById('Answer').style.display = "inline-block"
document.getElementById('Answer').innerHTML = " Correct!"

points_added = 5;
}

else if (Is_Top_True == false && Is_Bottom_True && Is_Mid_True) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: The Top Piece is Wrong."

    points_added = 4
}
else if (Is_Top_True && Is_Bottom_True && Is_Mid_True == false) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: The Middle Piece is Wrong."
    points_added = 4

}
else if (Is_Top_True && Is_Bottom_True == false && Is_Mid_True) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: The Bottom Piece is Wrong."

    points_added = 4

}
else if (Is_Top_True == false && Is_Bottom_True && Is_Mid_True ==false) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: Both the Top and Middle Pieces are Wrong."

    points_added = 3

}
else if (Is_Top_True == false && Is_Bottom_True == false && Is_Mid_True) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: Both the Top and Bottom Pieces are Wrong."

    points_added = 3
}
else if (Is_Top_True && Is_Bottom_True == false && Is_Mid_True ==false) 

{
    document.getElementById('Answer').style.display = "inline-block"
    document.getElementById('Answer').innerHTML = "Incorrect: Both the Middle and Bottom Pieces are Wrong."

    points_added = 3
}
else {

document.getElementById('Answer').style.display = "inline-block" 
document.getElementById('Answer').innerHTML = " Incorrect: Try Again"

    points_added = 2
}

}
