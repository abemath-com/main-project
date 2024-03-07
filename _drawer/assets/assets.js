/* assets.js/abemath.js file was authored by M. Syamsir.Alam (syamsiralam.id@gmail.com) for such mathematical software & factories (www.abemath.com). */
/* All of these activity on our responsible and code or all of my property which privately coded already in creative common license. */
/* Any use can be allowed without permission or permission itself. */

	// import * as testCatch from "/utilities/handler.js";
	
	// document.getElementById("demo").innerHTML = testCatch.test();

	// document.body set attribute overflow hidden
            $(function () {
  	    $('body').css({
	      'overflow':'hidden'})
  		$(document).bind('scroll',function () { 
  			window.scrollTo(0,0); 
  		});

	// jQuery javaScript library v1.9.1
	// Dragging function that mathematical object
	    $(".tarik-objek").draggable({
	      snap: '.garis'});
	    });

/* Arc object, base object 23px since additional object was 30px, multiply additional object after base object counted then obtain calculated arc. */
function garis() {

 // [A1] = Base;
 // [A2] = Object Colors;
 // [A3] = Base Object;
 // [A4] = Tool Object;
 // [A5] = List Object;
 // [A6] = Event Object;
 // [A7] = Object Tools

 var label = Math.random(); var random = Math.random() // used identified several element, we're to lazy to write so just use old function.
 var sized = 'left:' + random * window.innerWidth / 2 * 2 + 'px' + ';'
		     + 'top:' + window.innerHeight / 2 + 'px';

 var slider = document.getElementById(label);

 // this element represent those moving object which taking as a base.
 // (input, info, slider, even that shapes has been include here for function)
 // Start================================[A1]=================================
 var mainGroundElement = document.createElement("div");

 	mainGroundElement
		.setAttribute("class", "tarik-objek");
	mainGroundElement
		.setAttribute("style", sized);
 	mainGroundElement
		.setAttribute("id", label);

 // Coloring such an objects.
 // Start================================[A2]=================================
 var ColorGroundElement = document.createElement("a");

 	ColorGroundElement
		.setAttribute("href", "javascript:void(0)");
 	ColorGroundElement
		.setAttribute("class", "hapus");

 mainGroundElement.appendChild(ColorGroundElement);
 // End================================[A2]===================================

 // On this element wroted as a "span actually for adding base object".
 // ............
 var baseGroundElement = document.createElement("span");

 	baseGroundElement
		.setAttribute("id", label);

 mainGroundElement.appendChild(baseGroundElement);

 // Information object that create.
 // Start================================[A3]=================================
 var infoGroundElement = document.createElement("div");

 	infoGroundElement
		.setAttribute("id", label);
 	infoGroundElement
		.setAttribute("class", "panel-layer");

 mainGroundElement.appendChild(infoGroundElement);
 // End================================[A3]===================================

 // Input, slider, and checkbox for interacting with base object.
 // Start================================[A4]=================================
 // ID input...
 var idUtilGroundElement = document.createElement("input");

 	idUtilGroundElement
		.setAttribute("type", "text");
 	idUtilGroundElement
		.setAttribute("class", "id-0");

 mainGroundElement.appendChild(idUtilGroundElement);

 // Width input...
 var widtUtilGroundElement = document.createElement("input");

 	widtUtilGroundElement
		.setAttribute("type", "text");
 	widtUtilGroundElement
		.setAttribute("class", "width-1");
 	widtUtilGroundElement
		.setAttribute("min", "23");
	widtUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(widtUtilGroundElement);

 // Height input...
 var heighUtilGroundElement = document.createElement("input");

 	heighUtilGroundElement
		.setAttribute("type", "text");
 	heighUtilGroundElement
		.setAttribute("class", "height-1");
 	heighUtilGroundElement
		.setAttribute("min", "23");
	heighUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(heighUtilGroundElement);

 // Rotate slider...
 var rotatUtilGroundElement = document.createElement("input"); 
 var rotatMaxValueElement = 360 / 2;

 	rotatUtilGroundElement
		.setAttribute("type", "range");
 	rotatUtilGroundElement
		.setAttribute("class", "slider");
 	rotatUtilGroundElement
		.setAttribute("max", rotatMaxValueElement);
 	rotatUtilGroundElement
		.setAttribute("step", "1");
 	rotatUtilGroundElement
		.setAttribute("value", '0');

 mainGroundElement.appendChild(rotatUtilGroundElement);

 // End================================[A4]===================================

 // Element div for listing an objects, etc.
 // [=] if already can see that...
 // Start================================[A5]=================================
// var listGroundElement = document.createElement("div"); // cloned function not work : note
//
// 	listGroundElement
//		.setAttribute("id", "mySidenav");
// 	listGroundElement
//		.setAttribute("class", "sidenav");
//
// document.body.appendChild(listGroundElement);

   var mainSidenavGroundElement = document.getElementById("sidenavMarkup");

 // Close that sidenav.#
// var closeNavGroundElement = document.createElement("a");
// var stringNavGroundElement = document.createTextNode('×');

// 	closeNavGroundElement
//		.setAttribute("href", "javascript:void(0)");
// 	closeNavGroundElement
//		.setAttribute("class", "closebtn");
// 	closeNavGroundElement
//		.setAttribute("onclick", "closeNav()");
//
// closeNavGroundElement.appendChild(stringNavGroundElement);
// mainSidenavGroundElement.appendChild(closeNavGroundElement);

 // AppendParent! for panel.
 var panelGroundElement = document.createElement("div");

 	panelGroundElement
		.setAttribute("id", label);

 mainSidenavGroundElement.appendChild(panelGroundElement);

 // Tagging using image pictures.
 var panelImgGroundElement = document.createElement("canvas");
 
 	panelImgGroundElement
		.setAttribute("id", label);
 	panelImgGroundElement
		.setAttribute("class", "canvas");

 panelGroundElement.appendChild(panelImgGroundElement);

 // Checkbox for element mostly to load event.
 var panelCheckboxGroundElement = document.createElement("div");

 	panelCheckboxGroundElement
		.setAttribute("id", label);
 	panelCheckboxGroundElement
		.setAttribute("class", "sidenavDivStylesheet");

 panelGroundElement.appendChild(panelCheckboxGroundElement);

 // Checkbox hide...
 var checkVisibleGroundElement = document.createElement("input");
 
 	checkVisibleGroundElement
		.setAttribute("type", "checkbox");
 	checkVisibleGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkVisibleGroundElement);

 var labelCheckVisibleGroundElement = document.createElement("label");
 var labelTextCheckVisibleGroundElement = document.createTextNode("Hide");

 	labelCheckVisibleGroundElement
		.setAttribute("class", "label");

 labelCheckVisibleGroundElement.appendChild(labelTextCheckVisibleGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckVisibleGroundElement);

 // Checkbox lock...
 var checkKeyGroundElement = document.createElement("input");
 
 	checkKeyGroundElement
		.setAttribute("type", "checkbox");
 	checkKeyGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkKeyGroundElement);

 var labelCheckKeyGroundElement = document.createElement("label");
 var labelTextCheckKeyGroundElement = document.createTextNode("Lock");

 	labelCheckKeyGroundElement
		.setAttribute("class", "label");

 labelCheckKeyGroundElement.appendChild(labelTextCheckKeyGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckKeyGroundElement);
 
 // Checkbox erase...
 var checkDumpGroundElement = document.createElement("input");
 
 	checkDumpGroundElement
		.setAttribute("type", "checkbox");
 	checkDumpGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkDumpGroundElement);

 var labelCheckDumpGroundElement = document.createElement("label");
 var labelTextCheckGroundElement = document.createTextNode("Erase");

 	labelCheckDumpGroundElement
		.setAttribute("class", "label");

 labelCheckDumpGroundElement.appendChild(labelTextCheckGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckDumpGroundElement);
 // End================================[A5]===================================

 // Function checkbox that matter. function already easier on this event, if else doesn't really need but able.
 // Calling my checkbox element to wrote this.onclick, onclick because not that input but click.
 //
 // Start================================[A6]=================================
function touched(e) {
  e
 }
 
 var shiftKeyPressed = checkVisibleGroundElement.shiftKey

 checkVisibleGroundElement.onclick = function() {	// panelCheckboxGroundElement hide function
  	var infoGround = infoGroundElement.classList.toggle("visible-check");
  	var widtUtilGround = widtUtilGroundElement.classList.toggle("visible-check");
  	var heighUtilGround = heighUtilGroundElement.classList.toggle("visible-check");
  	var rotatUtilGround = rotatUtilGroundElement.classList.toggle("visible-check");

  if (!checkVisibleGroundElement) {
      	}
	else if (shiftKeyPressed) {
		 	checkVisibleHidden = infoGround[A=0] + widtUtilGround[B=1]
					 	 + heighUtilGround[C=2] + rotatUtilGround[D=3]; // Tagging secondary
	}
 }

 checkKeyGroundElement.onclick = function() {		// panelCheckboxGroundElement lock function
   if (checkKeyGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }

 checkDumpGroundElement.onclick = function() {		// panelCheckboxGroundElement erase function
   if (checkDumpGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }
 // End================================[A6]===================================

 document.body.appendChild(mainGroundElement);
 // End================================[A1]===================================

 // Slider that produce writed code, to implementing slider to work.
 // logic simpler to understand, what is work on this slider definitely another effortless action.
 // Writed before "span adding an object" that because these input work.
 // everytime........................continue later because still not finishing yet.
 // Start================================[A7]=================================
 rotatUtilGroundElement.innerHTML = rotatUtilGroundElement.value;
 heighUtilGroundElement.innerHTML = heighUtilGroundElement.value;
 widtUtilGroundElement.innerHTML = widtUtilGroundElement.value;
 idUtilGroundElement.innerHTML = idUtilGroundElement.value;

 let rotatUtilGround = rotatUtilGroundElement.value;

 // Rotate
 rotatUtilGroundElement.addEventListener('input', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';

 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran-rad ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let rotatUtilGrounDispatch = new Event('input');
 document.dispatchEvent(rotatUtilGrounDispatch); // Not used, in the future

 let heighUtilGround = heighUtilGroundElement.value;

 // Height
 heighUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran-rad ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let heighUtilGroundDispatch = new Event('change');
 document.dispatchEvent(heighUtilGroundDispatch); // Not used, in the future

 let widtUtilGround = widtUtilGroundElement.value;

 // Width
 widtUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran-rad ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let widtGrounDispatch = new Event('change');
 document.dispatchEvent(widtGrounDispatch); // Not used, in the future

 // ID input function...
 idUtilGroundElement.onchange = function(e) { 
 var captureImgDataDispatch;

 transImgData = captureImgDataDispatch;

 // Drag that catching an object but for idUtilGroundElement
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

  if (idUtilGroundElement.type == null) {
	}

	else {
  		infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
							 	+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
							 	+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
							 	+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
  				baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'edge' + '"'
							 		+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran-rad ' + 'ui-draggable' + '"'
							 		+ 'style='
										+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
							 			+ 'width:' + widtUtilGroundElement.value + 'px;'
							 			+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
		}
  return null;
 }

// WORKING ON IT...... // f, [named], function () {} function 
 panelImgGroundElement.addEventListener(change, function () {
 var captureImgGroundElement = new HTMLImageElement(HTMLDivElement('edge'));

 captureImgGroundElement.width = 80; captureImgGroundElement.height = 80;
 captureImgData = captureImgGroundElement;

 });

 let captureImgDataDispatch = new Event('change');
 idUtilGroundElement.dispatchEvent(captureImgDataDispatch);

 (function (e) { // Range

 var slider = new scroll;

 // Range ->
 function range(e) {
 	zipper = i++;
  		for (var zipper =+ 0; slider.range < unrange; i++) { 
  			slider += range();
  	console.log(slider);
 }

 // Unrange <-
 function unrange(e) {
 	while (i < 5) {
  		for (var range =+ 0; slider.unrange < range; i++) {
  	}
  	range();
    			}
   		}
  	}
 })
 // End================================[A7]===================================

 // Drag that catching an object
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

}; // Closing arc recursively function

/* Square object, base object 23px since additional object was 30px, multiply additional object after base object counted then obtain calculated square. NOTE: shapes object actually translated from bahasa */
function kotak() {

 // [A1] = Base;
 // [A2] = Object Colors;
 // [A3] = Base Object;
 // [A4] = Tool Object;
 // [A5] = List Object;
 // [A6] = Event Object;
 // [A7] = Object Tools

 var label = Math.random(); var random = Math.random() // used identified several element, we're to lazy to write so just use old function.
 var sized = 'left:' + random * window.innerWidth / 2 * 2 + 'px' + ';'
		     + 'top:' + window.innerHeight / 2 + 'px';

 var slider = document.getElementById(label);

 // this element represent those moving object which taking as a base.
 // (input, info, slider, even that shapes has been include here for function)
 // Start================================[A1]=================================
 var mainGroundElement = document.createElement("div");

 	mainGroundElement
		.setAttribute("class", "tarik-objek");
	mainGroundElement
		.setAttribute("style", sized);
 	mainGroundElement
		.setAttribute("id", label);

 // Coloring such an objects.
 // Start================================[A2]=================================
 var ColorGroundElement = document.createElement("a");

 	ColorGroundElement
		.setAttribute("href", "javascript:void(0)");
 	ColorGroundElement
		.setAttribute("class", "hapus");

 mainGroundElement.appendChild(ColorGroundElement);
 // End================================[A2]===================================

 // On this element wroted as a "span actually for adding base object".
 // ............
 var baseGroundElement = document.createElement("span");

 	baseGroundElement
		.setAttribute("id", label);

 mainGroundElement.appendChild(baseGroundElement);

 // Information object that create.
 // Start================================[A3]=================================
 var infoGroundElement = document.createElement("div");

 	infoGroundElement
		.setAttribute("id", label);
 	infoGroundElement
		.setAttribute("class", "panel-layer");

 mainGroundElement.appendChild(infoGroundElement);
 // End================================[A3]===================================

 // Input, slider, and checkbox for interacting with base object.
 // Start================================[A4]=================================
 // ID input...
 var idUtilGroundElement = document.createElement("input");

 	idUtilGroundElement
		.setAttribute("type", "text");
 	idUtilGroundElement
		.setAttribute("class", "id-0");

 mainGroundElement.appendChild(idUtilGroundElement);

 // Width input...
 var widtUtilGroundElement = document.createElement("input");

 	widtUtilGroundElement
		.setAttribute("type", "text");
 	widtUtilGroundElement
		.setAttribute("class", "width-1");
 	widtUtilGroundElement
		.setAttribute("min", "23");
	widtUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(widtUtilGroundElement);

 // Height input...
 var heighUtilGroundElement = document.createElement("input");

 	heighUtilGroundElement
		.setAttribute("type", "text");
 	heighUtilGroundElement
		.setAttribute("class", "height-1");
 	heighUtilGroundElement
		.setAttribute("min", "23");
	heighUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(heighUtilGroundElement);

 // Rotate slider...
 var rotatUtilGroundElement = document.createElement("input"); 
 var rotatMaxValueElement = 360 / 2;

 	rotatUtilGroundElement
		.setAttribute("type", "range");
 	rotatUtilGroundElement
		.setAttribute("class", "slider");
 	rotatUtilGroundElement
		.setAttribute("max", rotatMaxValueElement);
 	rotatUtilGroundElement
		.setAttribute("step", "1");
 	rotatUtilGroundElement
		.setAttribute("value", '0');

 mainGroundElement.appendChild(rotatUtilGroundElement);

 // End================================[A4]===================================

 // Element div for listing an objects, etc.
 // [=] if already can see that...
 // Start================================[A5]=================================
// var listGroundElement = document.createElement("div"); // cloned function not work : note
//
// 	listGroundElement
//		.setAttribute("id", "mySidenav");
// 	listGroundElement
//		.setAttribute("class", "sidenav");
//
// document.body.appendChild(listGroundElement);

   var mainSidenavGroundElement = document.getElementById("sidenavMarkup");

 // Close that sidenav.#
// var closeNavGroundElement = document.createElement("a");
// var stringNavGroundElement = document.createTextNode('×');

// 	closeNavGroundElement
//		.setAttribute("href", "javascript:void(0)");
// 	closeNavGroundElement
//		.setAttribute("class", "closebtn");
// 	closeNavGroundElement
//		.setAttribute("onclick", "closeNav()");
//
// closeNavGroundElement.appendChild(stringNavGroundElement);
// mainSidenavGroundElement.appendChild(closeNavGroundElement);

 // AppendParent! for panel.
 var panelGroundElement = document.createElement("div");

 	panelGroundElement
		.setAttribute("id", label);

 mainSidenavGroundElement.appendChild(panelGroundElement);

 // Tagging using image pictures.
 var panelImgGroundElement = document.createElement("canvas");
 
 	panelImgGroundElement
		.setAttribute("id", label);
 	panelImgGroundElement
		.setAttribute("class", "canvas");

 panelGroundElement.appendChild(panelImgGroundElement);

 // Checkbox for element mostly to load event.
 var panelCheckboxGroundElement = document.createElement("div");

 	panelCheckboxGroundElement
		.setAttribute("id", label);
 	panelCheckboxGroundElement
		.setAttribute("class", "sidenavDivStylesheet");

 panelGroundElement.appendChild(panelCheckboxGroundElement);

 // Checkbox hide...
 var checkVisibleGroundElement = document.createElement("input");
 
 	checkVisibleGroundElement
		.setAttribute("type", "checkbox");
 	checkVisibleGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkVisibleGroundElement);

 var labelCheckVisibleGroundElement = document.createElement("label");
 var labelTextCheckVisibleGroundElement = document.createTextNode("Hide");

 	labelCheckVisibleGroundElement
		.setAttribute("class", "label");

 labelCheckVisibleGroundElement.appendChild(labelTextCheckVisibleGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckVisibleGroundElement);

 // Checkbox lock...
 var checkKeyGroundElement = document.createElement("input");
 
 	checkKeyGroundElement
		.setAttribute("type", "checkbox");
 	checkKeyGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkKeyGroundElement);

 var labelCheckKeyGroundElement = document.createElement("label");
 var labelTextCheckKeyGroundElement = document.createTextNode("Lock");

 	labelCheckKeyGroundElement
		.setAttribute("class", "label");

 labelCheckKeyGroundElement.appendChild(labelTextCheckKeyGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckKeyGroundElement);
 
 // Checkbox erase...
 var checkDumpGroundElement = document.createElement("input");
 
 	checkDumpGroundElement
		.setAttribute("type", "checkbox");
 	checkDumpGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkDumpGroundElement);

 var labelCheckDumpGroundElement = document.createElement("label");
 var labelTextCheckGroundElement = document.createTextNode("Erase");

 	labelCheckDumpGroundElement
		.setAttribute("class", "label");

 labelCheckDumpGroundElement.appendChild(labelTextCheckGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckDumpGroundElement);
 // End================================[A5]===================================

 // Function checkbox that matter. function already easier on this event, if else doesn't really need but able.
 // Calling my checkbox element to wrote this.onclick, onclick because not that input but click.
 //
 // Start================================[A6]=================================
 checkVisibleGroundElement.onclick = function() {	// panelCheckboxGroundElement hide function
  	var infoGround = infoGroundElement.classList.toggle("visible-check");
  	var widtUtilGround = widtUtilGroundElement.classList.toggle("visible-check");
  	var heighUtilGround = heighUtilGroundElement.classList.toggle("visible-check");
  	var rotatUtilGround = rotatUtilGroundElement.classList.toggle("visible-check");

  if (checkVisibleGroundElement == null) {
      }
  	else {
  		checkVisibleHidden = infoGround[A=0] + widtUtilGround[B=1]
					 + heighUtilGround[C=2] + rotatUtilGround[D=3]; // Tagging secondary
      }
 }

 checkKeyGroundElement.onclick = function() {		// panelCheckboxGroundElement lock function
   if (checkKeyGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }

 checkDumpGroundElement.onclick = function() {		// panelCheckboxGroundElement erase function
   if (checkDumpGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }
 // End================================[A6]===================================

 document.body.appendChild(mainGroundElement);
 // End================================[A1]===================================

 // Slider that produce writed code, to implementing slider to work.
 // logic simpler to understand, what is work on this slider definitely another effortless action.
 // Writed before "span adding an object" that because these input work.
 // everytime........................continue later because still not finishing yet.
 // Start================================[A7]=================================
 rotatUtilGroundElement.innerHTML = rotatUtilGroundElement.value;
 heighUtilGroundElement.innerHTML = heighUtilGroundElement.value;
 widtUtilGroundElement.innerHTML = widtUtilGroundElement.value;
 idUtilGroundElement.innerHTML = idUtilGroundElement.value;

 let rotatUtilGround = rotatUtilGroundElement.value;

 // Rotate
 rotatUtilGroundElement.addEventListener('input', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';

 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'kotak ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let rotatUtilGrounDispatch = new Event('input');
 document.dispatchEvent(rotatUtilGrounDispatch); // Not used, in the future

 let heighUtilGround = heighUtilGroundElement.value;

 // Height
 heighUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'kotak ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let heighUtilGroundDispatch = new Event('change');
 document.dispatchEvent(heighUtilGroundDispatch); // Not used, in the future

 let widtUtilGround = widtUtilGroundElement.value;

 // Width
 widtUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'kotak ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let widtGrounDispatch = new Event('change');
 document.dispatchEvent(widtGrounDispatch); // Not used, in the future

 // ID input function...
 idUtilGroundElement.onchange = function(e) { 
 var captureImgDataDispatch;

 transImgData = captureImgDataDispatch;

 // Drag that catching an object but for idUtilGroundElement
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

  if (idUtilGroundElement.type == null) {
	}

	else {
  		infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
							 	+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
							 	+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
							 	+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
  				baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'edge' + '"'
							 		+ 'class=' + '"' + 'tarik-slider ' + 'kotak ' + 'ui-draggable' + '"'
							 		+ 'style='
										+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
							 			+ 'width:' + widtUtilGroundElement.value + 'px;'
							 			+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
		}
  return null;
 }

// WORKING ON IT...... // f, [named], function () {} function 
 panelImgGroundElement.addEventListener(change, function () {
 var captureImgGroundElement = new HTMLImageElement(HTMLDivElement('edge'));

 captureImgGroundElement.width = 80; captureImgGroundElement.height = 80;
 captureImgData = captureImgGroundElement;

 });

 let captureImgDataDispatch = new Event('change');
 idUtilGroundElement.dispatchEvent(captureImgDataDispatch);

 (function (e) { // Range

 var slider = new scroll;

 // Range ->
 function range(e) {
 	zipper = i++;
  		for (var zipper =+ 0; slider.range < unrange; i++) { 
  			slider += range();
  	console.log(slider);
 }

 // Unrange <-
 function unrange(e) {
 	while (i < 5) {
  		for (var range =+ 0; slider.unrange < range; i++) {
  	}
  	range();
    			}
   		}
  	}
 })
 // End================================[A7]===================================

 // Drag that catching an object
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

}; // Closing square recursively function

/* Circle object, base object 23px since additional object was 30px, multiply additional object after base object counted then obtain calculated circle. NOTE: shapes object actually translated from bahasa */
function lingkaran() {

 // [A1] = Base;
 // [A2] = Object Colors;
 // [A3] = Base Object;
 // [A4] = Tool Object;
 // [A5] = List Object;
 // [A6] = Event Object;
 // [A7] = Object Tools

 var label = Math.random(); var random = Math.random() // used identified several element, we're to lazy to write so just use old function.
 var sized = 'left:' + random * window.innerWidth / 2 * 2 + 'px' + ';'
		     + 'top:' + window.innerHeight / 2 + 'px';

 var slider = document.getElementById(label);

 // this element represent those moving object which taking as a base.
 // (input, info, slider, even that shapes has been include here for function)
 // Start================================[A1]=================================
 var mainGroundElement = document.createElement("div");

 	mainGroundElement
		.setAttribute("class", "tarik-objek");
	mainGroundElement
		.setAttribute("style", sized);
 	mainGroundElement
		.setAttribute("id", label);

 // Coloring such an objects.
 // Start================================[A2]=================================
 var ColorGroundElement = document.createElement("a");

 	ColorGroundElement
		.setAttribute("href", "javascript:void(0)");
 	ColorGroundElement
		.setAttribute("class", "hapus");

 mainGroundElement.appendChild(ColorGroundElement);
 // End================================[A2]===================================

 // On this element wroted as a "span actually for adding base object".
 // ............
 var baseGroundElement = document.createElement("span");

 	baseGroundElement
		.setAttribute("id", label);

 mainGroundElement.appendChild(baseGroundElement);

 // Information object that create.
 // Start================================[A3]=================================
 var infoGroundElement = document.createElement("div");

 	infoGroundElement
		.setAttribute("id", label);
 	infoGroundElement
		.setAttribute("class", "panel-layer");

 mainGroundElement.appendChild(infoGroundElement);
 // End================================[A3]===================================

 // Input, slider, and checkbox for interacting with base object.
 // Start================================[A4]=================================
 // ID input...
 var idUtilGroundElement = document.createElement("input");

 	idUtilGroundElement
		.setAttribute("type", "text");
 	idUtilGroundElement
		.setAttribute("class", "id-0");

 mainGroundElement.appendChild(idUtilGroundElement);

 // Width input...
 var widtUtilGroundElement = document.createElement("input");

 	widtUtilGroundElement
		.setAttribute("type", "text");
 	widtUtilGroundElement
		.setAttribute("class", "width-1");
 	widtUtilGroundElement
		.setAttribute("min", "23");
	widtUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(widtUtilGroundElement);

 // Height input...
 var heighUtilGroundElement = document.createElement("input");

 	heighUtilGroundElement
		.setAttribute("type", "text");
 	heighUtilGroundElement
		.setAttribute("class", "height-1");
 	heighUtilGroundElement
		.setAttribute("min", "23");
	heighUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(heighUtilGroundElement);

 // Rotate slider...
 var rotatUtilGroundElement = document.createElement("input"); 
 var rotatMaxValueElement = 360 / 2;

 	rotatUtilGroundElement
		.setAttribute("type", "range");
 	rotatUtilGroundElement
		.setAttribute("class", "slider");
 	rotatUtilGroundElement
		.setAttribute("max", rotatMaxValueElement);
 	rotatUtilGroundElement
		.setAttribute("step", "1");
 	rotatUtilGroundElement
		.setAttribute("value", '0');

 mainGroundElement.appendChild(rotatUtilGroundElement);

 // End================================[A4]===================================

 // Element div for listing an objects, etc.
 // [=] if already can see that...
 // Start================================[A5]=================================
// var listGroundElement = document.createElement("div"); // cloned function not work : note
//
// 	listGroundElement
//		.setAttribute("id", "mySidenav");
// 	listGroundElement
//		.setAttribute("class", "sidenav");
//
// document.body.appendChild(listGroundElement);

   var mainSidenavGroundElement = document.getElementById("sidenavMarkup");

 // Close that sidenav.#
// var closeNavGroundElement = document.createElement("a");
// var stringNavGroundElement = document.createTextNode('×');

// 	closeNavGroundElement
//		.setAttribute("href", "javascript:void(0)");
// 	closeNavGroundElement
//		.setAttribute("class", "closebtn");
// 	closeNavGroundElement
//		.setAttribute("onclick", "closeNav()");
//
// closeNavGroundElement.appendChild(stringNavGroundElement);
// mainSidenavGroundElement.appendChild(closeNavGroundElement);

 // AppendParent! for panel.
 var panelGroundElement = document.createElement("div");

 	panelGroundElement
		.setAttribute("id", label);

 mainSidenavGroundElement.appendChild(panelGroundElement);

 // Tagging using image pictures.
 var panelImgGroundElement = document.createElement("canvas");
 
 	panelImgGroundElement
		.setAttribute("id", label);
 	panelImgGroundElement
		.setAttribute("class", "canvas");

 panelGroundElement.appendChild(panelImgGroundElement);

 // Checkbox for element mostly to load event.
 var panelCheckboxGroundElement = document.createElement("div");

 	panelCheckboxGroundElement
		.setAttribute("id", label);
 	panelCheckboxGroundElement
		.setAttribute("class", "sidenavDivStylesheet");

 panelGroundElement.appendChild(panelCheckboxGroundElement);

 // Checkbox hide...
 var checkVisibleGroundElement = document.createElement("input");
 
 	checkVisibleGroundElement
		.setAttribute("type", "checkbox");
 	checkVisibleGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkVisibleGroundElement);

 var labelCheckVisibleGroundElement = document.createElement("label");
 var labelTextCheckVisibleGroundElement = document.createTextNode("Hide");

 	labelCheckVisibleGroundElement
		.setAttribute("class", "label");

 labelCheckVisibleGroundElement.appendChild(labelTextCheckVisibleGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckVisibleGroundElement);

 // Checkbox lock...
 var checkKeyGroundElement = document.createElement("input");
 
 	checkKeyGroundElement
		.setAttribute("type", "checkbox");
 	checkKeyGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkKeyGroundElement);

 var labelCheckKeyGroundElement = document.createElement("label");
 var labelTextCheckKeyGroundElement = document.createTextNode("Lock");

 	labelCheckKeyGroundElement
		.setAttribute("class", "label");

 labelCheckKeyGroundElement.appendChild(labelTextCheckKeyGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckKeyGroundElement);
 
 // Checkbox erase...
 var checkDumpGroundElement = document.createElement("input");
 
 	checkDumpGroundElement
		.setAttribute("type", "checkbox");
 	checkDumpGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkDumpGroundElement);

 var labelCheckDumpGroundElement = document.createElement("label");
 var labelTextCheckGroundElement = document.createTextNode("Erase");

 	labelCheckDumpGroundElement
		.setAttribute("class", "label");

 labelCheckDumpGroundElement.appendChild(labelTextCheckGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckDumpGroundElement);
 // End================================[A5]===================================

 // Function checkbox that matter. function already easier on this event, if else doesn't really need but able.
 // Calling my checkbox element to wrote this.onclick, onclick because not that input but click.
 //
 // Start================================[A6]=================================
 checkVisibleGroundElement.onclick = function() {	// panelCheckboxGroundElement hide function
  	var infoGround = infoGroundElement.classList.toggle("visible-check");
  	var widtUtilGround = widtUtilGroundElement.classList.toggle("visible-check");
  	var heighUtilGround = heighUtilGroundElement.classList.toggle("visible-check");
  	var rotatUtilGround = rotatUtilGroundElement.classList.toggle("visible-check");

  if (checkVisibleGroundElement == null) {
      }
  	else {
  		checkVisibleHidden = infoGround[A=0] + widtUtilGround[B=1]
					 + heighUtilGround[C=2] + rotatUtilGround[D=3]; // Tagging secondary
      }
 }

 checkKeyGroundElement.onclick = function() {		// panelCheckboxGroundElement lock function
   if (checkKeyGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }

 checkDumpGroundElement.onclick = function() {		// panelCheckboxGroundElement erase function
   if (checkDumpGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }
 // End================================[A6]===================================

 document.body.appendChild(mainGroundElement);
 // End================================[A1]===================================

 // Slider that produce writed code, to implementing slider to work.
 // logic simpler to understand, what is work on this slider definitely another effortless action.
 // Writed before "span adding an object" that because these input work.
 // everytime........................continue later because still not finishing yet.
 // Start================================[A7]=================================
 rotatUtilGroundElement.innerHTML = rotatUtilGroundElement.value;
 heighUtilGroundElement.innerHTML = heighUtilGroundElement.value;
 widtUtilGroundElement.innerHTML = widtUtilGroundElement.value;
 idUtilGroundElement.innerHTML = idUtilGroundElement.value;

 let rotatUtilGround = rotatUtilGroundElement.value;

 // Rotate
 rotatUtilGroundElement.addEventListener('input', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';

 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let rotatUtilGrounDispatch = new Event('input');
 document.dispatchEvent(rotatUtilGrounDispatch); // Not used, in the future

 let heighUtilGround = heighUtilGroundElement.value;

 // Height
 heighUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let heighUtilGroundDispatch = new Event('change');
 document.dispatchEvent(heighUtilGroundDispatch); // Not used, in the future

 let widtUtilGround = widtUtilGroundElement.value;

 // Width
 widtUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let widtGrounDispatch = new Event('change');
 document.dispatchEvent(widtGrounDispatch); // Not used, in the future

 // ID input function...
 idUtilGroundElement.onchange = function(e) { 
 var captureImgDataDispatch;

 transImgData = captureImgDataDispatch;

 // Drag that catching an object but for idUtilGroundElement
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

  if (idUtilGroundElement.type == null) {
	}

	else {
  		infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
							 	+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
							 	+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
							 	+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
  				baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'edge' + '"'
							 		+ 'class=' + '"' + 'tarik-slider ' + 'lingkaran ' + 'ui-draggable' + '"'
							 		+ 'style='
										+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
							 			+ 'width:' + widtUtilGroundElement.value + 'px;'
							 			+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
		}
  return null;
 }

// WORKING ON IT...... // f, [named], function () {} function 
 panelImgGroundElement.addEventListener(change, function () {
 var captureImgGroundElement = new HTMLImageElement(HTMLDivElement('edge'));

 captureImgGroundElement.width = 80; captureImgGroundElement.height = 80;
 captureImgData = captureImgGroundElement;

 });

 let captureImgDataDispatch = new Event('change');
 idUtilGroundElement.dispatchEvent(captureImgDataDispatch);

 (function (e) { // Range

 var slider = new scroll;

 // Range ->
 function range(e) {
 	zipper = i++;
  		for (var zipper =+ 0; slider.range < unrange; i++) { 
  			slider += range();
  	console.log(slider);
 }

 // Unrange <-
 function unrange(e) {
 	while (i < 5) {
  		for (var range =+ 0; slider.unrange < range; i++) {
  	}
  	range();
    			}
   		}
  	}
 })
 // End================================[A7]===================================

 // Drag that catching an object
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

}; // Closing circle recursively function

/* Semi-Circle object, base object 23px since additional object was 30px, multiply additional object after base object counted then obtain calculated semi-circle. NOTE: shapes object actually translated from bahasa */
function semilingkaran() {

 // [A1] = Base;
 // [A2] = Object Colors;
 // [A3] = Base Object;
 // [A4] = Tool Object;
 // [A5] = List Object;
 // [A6] = Event Object;
 // [A7] = Object Tools

 var label = Math.random(); var random = Math.random() // used identified several element, we're to lazy to write so just use old function.
 var sized = 'left:' + random * window.innerWidth / 2 * 2 + 'px' + ';'
		     + 'top:' + window.innerHeight / 2 + 'px';

 var slider = document.getElementById(label);

 // this element represent those moving object which taking as a base.
 // (input, info, slider, even that shapes has been include here for function)
 // Start================================[A1]=================================
 var mainGroundElement = document.createElement("div");

 	mainGroundElement
		.setAttribute("class", "tarik-objek");
	mainGroundElement
		.setAttribute("style", sized);
 	mainGroundElement
		.setAttribute("id", label);

 // Coloring such an objects.
 // Start================================[A2]=================================
 var ColorGroundElement = document.createElement("a");

 	ColorGroundElement
		.setAttribute("href", "javascript:void(0)");
 	ColorGroundElement
		.setAttribute("class", "hapus");

 mainGroundElement.appendChild(ColorGroundElement);
 // End================================[A2]===================================

 // On this element wroted as a "span actually for adding base object".
 // ............
 var baseGroundElement = document.createElement("span");

 	baseGroundElement
		.setAttribute("id", label);

 mainGroundElement.appendChild(baseGroundElement);

 // Information object that create.
 // Start================================[A3]=================================
 var infoGroundElement = document.createElement("div");

 	infoGroundElement
		.setAttribute("id", label);
 	infoGroundElement
		.setAttribute("class", "panel-layer");

 mainGroundElement.appendChild(infoGroundElement);
 // End================================[A3]===================================

 // Input, slider, and checkbox for interacting with base object.
 // Start================================[A4]=================================
 // ID input...
 var idUtilGroundElement = document.createElement("input");

 	idUtilGroundElement
		.setAttribute("type", "text");
 	idUtilGroundElement
		.setAttribute("class", "id-0");

 mainGroundElement.appendChild(idUtilGroundElement);

 // Width input...
 var widtUtilGroundElement = document.createElement("input");

 	widtUtilGroundElement
		.setAttribute("type", "text");
 	widtUtilGroundElement
		.setAttribute("class", "width-1");
 	widtUtilGroundElement
		.setAttribute("min", "23");
	widtUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(widtUtilGroundElement);

 // Height input...
 var heighUtilGroundElement = document.createElement("input");

 	heighUtilGroundElement
		.setAttribute("type", "text");
 	heighUtilGroundElement
		.setAttribute("class", "height-1");
 	heighUtilGroundElement
		.setAttribute("min", "23");
	heighUtilGroundElement
		.setAttribute("value", "0");

 mainGroundElement.appendChild(heighUtilGroundElement);

 // Rotate slider...
 var rotatUtilGroundElement = document.createElement("input"); 
 var rotatMaxValueElement = 360 / 2;

 	rotatUtilGroundElement
		.setAttribute("type", "range");
 	rotatUtilGroundElement
		.setAttribute("class", "slider");
 	rotatUtilGroundElement
		.setAttribute("max", rotatMaxValueElement);
 	rotatUtilGroundElement
		.setAttribute("step", "1");
 	rotatUtilGroundElement
		.setAttribute("value", '0');

 mainGroundElement.appendChild(rotatUtilGroundElement);

 // End================================[A4]===================================

 // Element div for listing an objects, etc.
 // [=] if already can see that...
 // Start================================[A5]=================================
// var listGroundElement = document.createElement("div"); // cloned function not work : note
//
// 	listGroundElement
//		.setAttribute("id", "mySidenav");
// 	listGroundElement
//		.setAttribute("class", "sidenav");
//
// document.body.appendChild(listGroundElement);

   var mainSidenavGroundElement = document.getElementById("sidenavMarkup");

 // Close that sidenav.#
// var closeNavGroundElement = document.createElement("a");
// var stringNavGroundElement = document.createTextNode('×');

// 	closeNavGroundElement
//		.setAttribute("href", "javascript:void(0)");
// 	closeNavGroundElement
//		.setAttribute("class", "closebtn");
// 	closeNavGroundElement
//		.setAttribute("onclick", "closeNav()");
//
// closeNavGroundElement.appendChild(stringNavGroundElement);
// mainSidenavGroundElement.appendChild(closeNavGroundElement);

 // AppendParent! for panel.
 var panelGroundElement = document.createElement("div");

 	panelGroundElement
		.setAttribute("id", label);

 mainSidenavGroundElement.appendChild(panelGroundElement);

 // Tagging using image pictures.
 var panelImgGroundElement = document.createElement("canvas");
 
 	panelImgGroundElement
		.setAttribute("id", label);
 	panelImgGroundElement
		.setAttribute("class", "canvas");

 panelGroundElement.appendChild(panelImgGroundElement);

 // Checkbox for element mostly to load event.
 var panelCheckboxGroundElement = document.createElement("div");

 	panelCheckboxGroundElement
		.setAttribute("id", label);
 	panelCheckboxGroundElement
		.setAttribute("class", "sidenavDivStylesheet");

 panelGroundElement.appendChild(panelCheckboxGroundElement);

 // Checkbox hide...
 var checkVisibleGroundElement = document.createElement("input");
 
 	checkVisibleGroundElement
		.setAttribute("type", "checkbox");
 	checkVisibleGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkVisibleGroundElement);

 var labelCheckVisibleGroundElement = document.createElement("label");
 var labelTextCheckVisibleGroundElement = document.createTextNode("Hide");

 	labelCheckVisibleGroundElement
		.setAttribute("class", "label");

 labelCheckVisibleGroundElement.appendChild(labelTextCheckVisibleGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckVisibleGroundElement);

 // Checkbox lock...
 var checkKeyGroundElement = document.createElement("input");
 
 	checkKeyGroundElement
		.setAttribute("type", "checkbox");
 	checkKeyGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkKeyGroundElement);

 var labelCheckKeyGroundElement = document.createElement("label");
 var labelTextCheckKeyGroundElement = document.createTextNode("Lock");

 	labelCheckKeyGroundElement
		.setAttribute("class", "label");

 labelCheckKeyGroundElement.appendChild(labelTextCheckKeyGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckKeyGroundElement);
 
 // Checkbox erase...
 var checkDumpGroundElement = document.createElement("input");
 
 	checkDumpGroundElement
		.setAttribute("type", "checkbox");
 	checkDumpGroundElement
		.setAttribute("class", "check");

 panelCheckboxGroundElement.appendChild(checkDumpGroundElement);

 var labelCheckDumpGroundElement = document.createElement("label");
 var labelTextCheckGroundElement = document.createTextNode("Erase");

 	labelCheckDumpGroundElement
		.setAttribute("class", "label");

 labelCheckDumpGroundElement.appendChild(labelTextCheckGroundElement);
 panelCheckboxGroundElement.appendChild(labelCheckDumpGroundElement);
 // End================================[A5]===================================

 // Function checkbox that matter. function already easier on this event, if else doesn't really need but able.
 // Calling my checkbox element to wrote this.onclick, onclick because not that input but click.
 //
 // Start================================[A6]=================================
 checkVisibleGroundElement.onclick = function() {	// panelCheckboxGroundElement hide function
  	var infoGround = infoGroundElement.classList.toggle("visible-check");
  	var widtUtilGround = widtUtilGroundElement.classList.toggle("visible-check");
  	var heighUtilGround = heighUtilGroundElement.classList.toggle("visible-check");
  	var rotatUtilGround = rotatUtilGroundElement.classList.toggle("visible-check");

  if (checkVisibleGroundElement == null) {
      }
  	else {
  		checkVisibleHidden = infoGround[A=0] + widtUtilGround[B=1]
					 + heighUtilGround[C=2] + rotatUtilGround[D=3]; // Tagging secondary
      }
 }

 checkKeyGroundElement.onclick = function() {		// panelCheckboxGroundElement lock function
   if (checkKeyGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }

 checkDumpGroundElement.onclick = function() {		// panelCheckboxGroundElement erase function
   if (checkDumpGroundElement == null) {
       }
   	else {
   		mainGroundElement.classList.toggle("unmove");
       }
 }
 // End================================[A6]===================================

 document.body.appendChild(mainGroundElement);
 // End================================[A1]===================================

 // Slider that produce writed code, to implementing slider to work.
 // logic simpler to understand, what is work on this slider definitely another effortless action.
 // Writed before "span adding an object" that because these input work.
 // everytime........................continue later because still not finishing yet.
 // Start================================[A7]=================================
 rotatUtilGroundElement.innerHTML = rotatUtilGroundElement.value;
 heighUtilGroundElement.innerHTML = heighUtilGroundElement.value;
 widtUtilGroundElement.innerHTML = widtUtilGroundElement.value;
 idUtilGroundElement.innerHTML = idUtilGroundElement.value;

 let rotatUtilGround = rotatUtilGroundElement.value;

 // Rotate
 rotatUtilGroundElement.addEventListener('input', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';

 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'semi-lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let rotatUtilGrounDispatch = new Event('input');
 document.dispatchEvent(rotatUtilGrounDispatch); // Not used, in the future

 let heighUtilGround = heighUtilGroundElement.value;

 // Height
 heighUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'semi-lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let heighUtilGroundDispatch = new Event('change');
 document.dispatchEvent(heighUtilGroundDispatch); // Not used, in the future

 let widtUtilGround = widtUtilGroundElement.value;

 // Width
 widtUtilGroundElement.addEventListener('change', function () {

 infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
			 			+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
			 			+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
			 			+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
 		baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + label + '"'
			 				+ 'class=' + '"' + 'tarik-slider ' + 'semi-lingkaran ' + 'ui-draggable' + '"'
			 				+ 'style='
								+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
								+ 'width:' + widtUtilGroundElement.value + 'px;'
								+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
 });

 let widtGrounDispatch = new Event('change');
 document.dispatchEvent(widtGrounDispatch); // Not used, in the future

 // ID input function...
 idUtilGroundElement.onchange = function(e) { 
 var captureImgDataDispatch;

 transImgData = captureImgDataDispatch;

 // Drag that catching an object but for idUtilGroundElement
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

  if (idUtilGroundElement.type == null) {
	}

	else {
  		infoGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'pinfo' + '"' + 'class=' + '"' + 'panel-info' + '"' + '>'
							 	+ '|Rotate|' + ' ' + rotatUtilGroundElement.value + '' + 'deg' + '\n' + '<p>'
							 	+ '|Width|' + ' ' + widtUtilGroundElement.value + '' + 'px' + '' + '\n' + '<p>'
							 	+ '|Height|' + ' ' + heighUtilGroundElement.value + '' + 'px' + '';
  				baseGroundElement.innerHTML = '<div ' + 'id=' + '"' + 'edge' + '"'
							 		+ 'class=' + '"' + 'tarik-slider ' + 'semi-lingkaran ' + 'ui-draggable' + '"'
							 		+ 'style='
										+ 'transform:' + 'rotate' + '(' + rotatUtilGroundElement.value + 'deg);'
							 			+ 'width:' + widtUtilGroundElement.value + 'px;'
							 			+ 'height:' + heighUtilGroundElement.value + 'px;' + '>' ;
		}
  return null;
 }

// WORKING ON IT...... // f, [named], function () {} function 
 panelImgGroundElement.addEventListener(change, function () {
 var captureImgGroundElement = new HTMLImageElement(HTMLDivElement('edge'));

 captureImgGroundElement.width = 80; captureImgGroundElement.height = 80;
 captureImgData = captureImgGroundElement;

 });

 let captureImgDataDispatch = new Event('change');
 idUtilGroundElement.dispatchEvent(captureImgDataDispatch);

 (function (e) { // Range

 var slider = new scroll;

 // Range ->
 function range(e) {
 	zipper = i++;
  		for (var zipper =+ 0; slider.range < unrange; i++) { 
  			slider += range();
  	console.log(slider);
 }

 // Unrange <-
 function unrange(e) {
 	while (i < 5) {
  		for (var range =+ 0; slider.unrange < range; i++) {
  	}
  	range();
    			}
   		}
  	}
 })
 // End================================[A7]===================================

 // Drag that catching an object
 $(function () { $(".tarik-objek").draggable({ snap: '.garis' }); $(".timpa-objek").droppable({ accept: ".tarik-objek" });});

}; // Closing semi-circle recursively function

	/* Sidenav function for open/close */
	function sidenavOpen() {	// Open sidenav function
	  	document.getElementById("sidenavMarkup")
			.style.width = "250px";
	  	document.getElementById("sidenavObjectSheet")
			.style.marginLeft = "250px";
	  	document.getElementById("sidenavObjectSheet")
			.style.visibility = "hidden";
	}

			function sidenavClose() { // Close sidenav function
				document.getElementById("sidenavMarkup")
					.style.width = "0";
		  		document.getElementById("sidenavObjectSheet")
					.style.marginLeft= "0";
		  		document.getElementById("sidenavObjectSheet")
					.style.visibility = "unset";
			}

					/* document.body and element using Id set attribute every aspect that had been listed for change*/
					function change() { // .........................................
						var element = document.body;
   							element.classList.toggle("dark-mode");
   						var elemen = document.getElementById("width");
   							elemen.classList.toggle("dark-w");
   						var eleme = document.getElementById("height");
   							eleme.classList.toggle("dark-h");
   						var elem = document.getElementById("pinfo");
   							elem.classList.toggle("dark-p");
}

/* Some editable example from Javascript Cookbook ISBN*/
function displayPopup() {
 // Create overlay and append to page
 var overlay = document.createElement("div");

 	overlay
		.setAttribute("id","overlay");
 	overlay
		.setAttribute("class", "overlay");

 document.body.appendChild(overlay);

 // Create message and append to overlay
 var msg = document.createElement("div");
 var txt = document.createTextNode("Welcome");
 
 	msg
		.setAttribute("id", "msg")
 	msg
		.setAttribute("class","overlaymsg");

 msg.appendChild(txt);

 // Click to close and lined some argument
 msg.onclick=push;

 // Append message to overlay
 document.body.appendChild(msg);
}

// Restore page to normal
function push() {
	document.body
		.removeChild(document.getElementById("msg"));
        document.body
		.removeChild(document.getElementById("overlay"));
}

window.onload=function() {
	displayPopup();
}