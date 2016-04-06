jQuery(document).ready(function($) {

var container = $('.container');
var imagesArray = ["adjust", "anchor", "archive", "arrows", "asterisk", "car", "ban", "bank", "barcode", "bars", "bed", "beer", "bell", "bicycle", "binoculars", "bluetooth", "bolt", "bomb", "book", "bookmark", "briefcase", "bug", "building", "bullhorn", "bullseye", "bus", "cab", "calculator", "calendar", "camera", "cc", "certificate", "check", "child", "circle", "clone", "close", "cloud", "code", "coffee", "cog", "cogs", "cube", "cutlery", "database", "diamond", "desktop", "envelope", "download", "fax", "adjust", "anchor", "archive", "arrows", "asterisk", "car", "ban", "bank", "barcode", "bars", "bed", "beer", "bell", "bicycle", "binoculars", "bluetooth", "bolt", "bomb", "book", "bookmark", "briefcase", "bug", "building", "bullhorn", "bullseye", "bus", "cab", "calculator", "calendar", "camera", "cc", "certificate", "check", "child", "circle", "clone", "close", "cloud", "code", "coffee", "cog", "cogs", "cube", "cutlery", "database", "diamond", "desktop", "envelope", "download", "fax"];



//pozivamo funkciju kako bi napravila i ubacila boxove u nas sajt
createBoxes();


//funkcija koja dodaje 100 boksova u kontejner sajta
function createBoxes(){
	for(var i = 0; i<100; i++){
		//Random dodeljivanje slika u boksove. Math.floor zaokruzuje vrednost na manji broj (5.6 je 5)!
		//Math.random pomnozim sa brojem podataka u areju kako bi dobio brojeve od 0 do 100 i na osnovu njih ubacivao slike u boksove
		var random = Math.floor(Math.random()*imagesArray.length);
		container.append('<div class="box"><div class="back"><i class="fa fa-'+imagesArray[random]+' fa-3x"></i></div><div class="front"></div></div>');
		imagesArray.splice(random, 1);
	}
}


//deo koda koji se odnosi na klik i okretanje boksova front i back
//ako je x manje ili jednako od y okreni kartice.
var x = 0;
var y = 2;
var a;
$('.box').click(function() {
	x++;
	a = $(this).html();
	if (x <= y){
		$(this).find('.front').css({
			transform: 'perspective(900px) rotateY(180deg)'
		});
		$(this).find('.back').css({
			transform: 'perspective(900px) rotateY(0deg)'
		});
	}
	//else {
	// 	$(this).find('.front').css({
	// 		transform: 'perspective(900px) rotateY(180deg)'
	// 	});
	// 	$(this).find('.back').css({
	// 		transform: 'perspective(900px) rotateY(0deg)'
	// 	});
	// }
});

});