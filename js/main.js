/**
 * graficamos
 * -----------------------------------------------------------
 * vamos a graficar con d3plus para ahorrar tiempo
 *
 *
 * 	@author	 	Hugo Osorio <hugo@vectores.in>
 *	@url		http://hugoosorio.com
 *	@twitter	@hugovom
 * 	@version 	1.1
 */
$(document).ready(function(e) {

	/**
	*	gráficamos deuda por ciudadano
	* 	------------------------------------------------------------------------------
 	* 		
 	*/
    var ciudadanos = [
    	{"value": 4561, "name": "Turquía"},
		{"value": 2937, "name": "México"},
		{"value": 1033, "name": "Indonesia"}
	]
  	
  	
  	
  	
  var visualization = d3plus.viz()
    .container("#ciudadano")
    .data(ciudadanos)
    .type("tree_map")
    .id("name")
    .size("value")
    .draw()
    
    
    
    
  /**
	*	gráficamos deuda por país
	* 	------------------------------------------------------------------------------
 	* 		
 	*/
  
  // lo metemos directo para ahorrar tiempo de desarrollo
  var deuda_publica = [
  	// México
  	{"año": 1972, "name":"México", "value": "8351504000"}, 	
  	{"año": 1973, "name":"México", "value": "10667131000"}, 	
  	{"año": 1974, "name":"México", "value": "14080544000"}, 	
  	{"año": 1975, "name":"México", "value": "18381409000"}, 	
  	{"año": 1976, "name":"México", "value": "24139106000"}, 	
  	{"año": 1977, "name":"México", "value": "31382400000"}, 	
  	{"año": 1978, "name":"México", "value": "35905340000"}, 	
  	{"año": 1979, "name":"México", "value": "42974451000"}, 	
  	{"año": 1980, "name":"México", "value": "57574362000"}, 	
  	{"año": 1981, "name":"México", "value": "78412643000"}, 	
  	{"año": 1982, "name":"México", "value": "86274651000"}, 	
  	{"año": 1983, "name":"México", "value": "93158281000"}, 	
  	{"año": 1984, "name":"México", "value": "95016519000"}, 	
  	{"año": 1985, "name":"México", "value": "97063213000"}, 	
  	{"año": 1986, "name":"México", "value": "101083076000"}, 	
  	{"año": 1987, "name":"México", "value": "109652607000"}, 	
  	{"año": 1988, "name":"México", "value": "99399527000"}, 	
  	{"año": 1989, "name":"México", "value": "94016246000"}, 	
  	{"año": 1990, "name":"México", "value": "104604453000"}, 	
  	{"año": 1991, "name":"México", "value": "114219788000"}, 	
  	{"año": 1992, "name":"México", "value": "112440669000"}, 	
  	{"año": 1993, "name":"México", "value": "130645772000"}, 	
  	{"año": 1994, "name":"México", "value": "138656950000"}, 	
  	{"año": 1995, "name":"México", "value": "165476102000"}, 	
  	{"año": 1996, "name":"México", "value": "156339589000"}, 	
  	{"año": 1997, "name":"México", "value": "147778832000"}, 	
  	{"año": 1998, "name":"México", "value": "159250431000"}, 	
  	{"año": 1999, "name":"México", "value": "167187656000"}, 	
  	{"año": 2000, "name":"México", "value": "152260437000"}, 	
  	{"año": 2001, "name":"México", "value": "165913875000"}, 	
  	{"año": 2002, "name":"México", "value": "159276402000"}, 	
  	{"año": 2003, "name":"México", "value": "164114746000"}, 	
  	{"año": 2004, "name":"México", "value": "169544771000"}, 	
  	{"año": 2005, "name":"México", "value": "175917833000"}, 	
  	{"año": 2006, "name":"México", "value": "173454286000"}, 	
  	{"año": 2007, "name":"México", "value": "199217871000"}, 	
  	{"año": 2008, "name":"México", "value": "206735519000"}, 	
  	{"año": 2009, "name":"México", "value": "199806819000"}, 	
  	{"año": 2010, "name":"México", "value": "243635379000"}, 	
  	{"año": 2011, "name":"México", "value": "286382367000"}, 	
  	{"año": 2012, "name":"México", "value": "354896871000"}, 	
  	//Turquía
  	{"año": 1972, "name":"Turquía", "value": "3554567000"}, 	
  	{"año": 1973, "name":"Turquía", "value": "4204213000"}, 	
  	{"año": 1974, "name":"Turquía", "value": "4632821000"}, 	
  	{"año": 1975, "name":"Turquía", "value": "5058838000"}, 	
  	{"año": 1976, "name":"Turquía", "value": "6001278000"}, 	
  	{"año": 1977, "name":"Turquía", "value": "11452267000"}, 	
  	{"año": 1978, "name":"Turquía", "value": "14854965000"}, 	
  	{"año": 1979, "name":"Turquía", "value": "15928439000"}, 	
  	{"año": 1980, "name":"Turquía", "value": "19131091000"}, 	
  	{"año": 1981, "name":"Turquía", "value": "19235547000"}, 	
  	{"año": 1982, "name":"Turquía", "value": "19715952000"}, 	
  	{"año": 1983, "name":"Turquía", "value": "20324057000"}, 	
  	{"año": 1984, "name":"Turquía", "value": "21608629000"}, 	
  	{"año": 1985, "name":"Turquía", "value": "26012629000"}, 	
  	{"año": 1986, "name":"Turquía", "value": "32933707000"}, 	
  	{"año": 1987, "name":"Turquía", "value": "40943571000"}, 	
  	{"año": 1988, "name":"Turquía", "value": "40992856000"}, 	
  	{"año": 1989, "name":"Turquía", "value": "41577123000"}, 	
  	{"año": 1990, "name":"Turquía", "value": "49424156000"}, 	
  	{"año": 1991, "name":"Turquía", "value": "50873480000"}, 	
  	{"año": 1992, "name":"Turquía", "value": "56553854000"}, 	
  	{"año": 1993, "name":"Turquía", "value": "68604754000"}, 	
  	{"año": 1994, "name":"Turquía", "value": "66249182000"}, 	
  	{"año": 1995, "name":"Turquía", "value": "73781102000"}, 	
  	{"año": 1996, "name":"Turquía", "value": "79829428000"}, 	
  	{"año": 1997, "name":"Turquía", "value": "84719907000"}, 	
  	{"año": 1998, "name":"Turquía", "value": "96952958000"}, 	
  	{"año": 1999, "name":"Turquía", "value": "101781508000"}, 	
  	{"año": 2000, "name":"Turquía", "value": "116786858000"}, 	
  	{"año": 2001, "name":"Turquía", "value": "112930844000"}, 	
  	{"año": 2002, "name":"Turquía", "value": "129521508000"}, 	
  	{"año": 2003, "name":"Turquía", "value": "142600620000"}, 	
  	{"año": 2004, "name":"Turquía", "value": "158159902000"}, 	
  	{"año": 2005, "name":"Turquía", "value": "172130539000"}, 	
  	{"año": 2006, "name":"Turquía", "value": "209581206000"}, 	
  	{"año": 2007, "name":"Turquía", "value": "258442787000"}, 	
  	{"año": 2008, "name":"Turquía", "value": "288978071000"}, 	
  	{"año": 2009, "name":"Turquía", "value": "277270055000"}, 	
  	{"año": 2010, "name":"Turquía", "value": "299183168000"}, 	
  	{"año": 2011, "name":"Turquía", "value": "305481015000"}, 	
  	{"año": 2012, "name":"Turquía", "value": "337491987000"}, 
  	
  	//Indonesia
  	{"año": 1972, "name":"Indonesia", "value": "5863064000"}, 	
  	{"año": 1973, "name":"Indonesia", "value": "7270798000"}, 	
  	{"año": 1974, "name":"Indonesia", "value": "9100923000"}, 	
  	{"año": 1975, "name":"Indonesia", "value": "11497813000"}, 	
  	{"año": 1976, "name":"Indonesia", "value": "14010055000"}, 	
  	{"año": 1977, "name":"Indonesia", "value": "16470547000"}, 	
  	{"año": 1978, "name":"Indonesia", "value": "18045709000"}, 	
  	{"año": 1979, "name":"Indonesia", "value": "18623753000"}, 	
  	{"año": 1980, "name":"Indonesia", "value": "20937702000"}, 	
  	{"año": 1981, "name":"Indonesia", "value": "22761141000"}, 	
  	{"año": 1982, "name":"Indonesia", "value": "25133287000"}, 	
  	{"año": 1983, "name":"Indonesia", "value": "30229381000"}, 	
  	{"año": 1984, "name":"Indonesia", "value": "32025242000"}, 	
  	{"año": 1985, "name":"Indonesia", "value": "36714624000"}, 	
  	{"año": 1986, "name":"Indonesia", "value": "42914289000"}, 	
  	{"año": 1987, "name":"Indonesia", "value": "52526345000"}, 	
  	{"año": 1988, "name":"Indonesia", "value": "54053868000"}, 	
  	{"año": 1989, "name":"Indonesia", "value": "59380148000"}, 	
  	{"año": 1990, "name":"Indonesia", "value": "69848499000"}, 	
  	{"año": 1991, "name":"Indonesia", "value": "79523030000"}, 	
  	{"año": 1992, "name":"Indonesia", "value": "87978588000"}, 	
  	{"año": 1993, "name":"Indonesia", "value": "89146947000"}, 	
  	{"año": 1994, "name":"Indonesia", "value": "107808954000"}, 	
  	{"año": 1995, "name":"Indonesia", "value": "124388680000"}, 	
  	{"año": 1996, "name":"Indonesia", "value": "128988712000"}, 	
  	{"año": 1997, "name":"Indonesia", "value": "136322465000"}, 	
  	{"año": 1998, "name":"Indonesia", "value": "151466804000"}, 	
  	{"año": 1999, "name":"Indonesia", "value": "151788595000"}, 	
  	{"año": 2000, "name":"Indonesia", "value": "143655149000"}, 	
  	{"año": 2001, "name":"Indonesia", "value": "132347307000"}, 	
  	{"año": 2002, "name":"Indonesia", "value": "128114943000"}, 	
  	{"año": 2003, "name":"Indonesia", "value": "133779579000"}, 	
  	{"año": 2004, "name":"Indonesia", "value": "137487822000"}, 	
  	{"año": 2005, "name":"Indonesia", "value": "141820095000"}, 	
  	{"año": 2006, "name":"Indonesia", "value": "135959423000"}, 	
  	{"año": 2007, "name":"Indonesia", "value": "147854466000"}, 	
  	{"año": 2008, "name":"Indonesia", "value": "157906449000"}, 	
  	{"año": 2009, "name":"Indonesia", "value": "179394490000"}, 	
  	{"año": 2010, "name":"Indonesia", "value": "200267097000"}, 	
  	{"año": 2011, "name":"Indonesia", "value": "224838015000"}, 	
  	{"año": 2012, "name":"Indonesia", "value": "254898523000"}, 
   
  ]
 
 
 

  // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#viz")  // container DIV to hold the visualization
    .data(deuda_publica)  // data to use with the visualization
    .type("line")       // visualization type
    .id("name")         // key for which our data is unique on
    .text("name")       // key to use for display text
    .y("value")         // key to use for y-axis
    .x("año")          // key to use for x-axis
    .draw()             // finally, draw the visualization!

 /**
	*	aparecemos ocultamos
	* 	------------------------------------------------------------------------------
 	* 		
 	*/
	$("#cocas").hide();
	$("#ciudadano").hide();
	$(".citizens").on('click', function() {
		$("#ciudadano").toggle();
		$(".citizens").addClass('current');
		$(".graphs").removeClass('current');
		$("#viz").toggle();
	});
	$("#ciudadano").hide();
	$(".graphs").on('click', function() {
		$("#ciudadano").toggle();
		$(".graphs").addClass('current');
		$(".citizens").removeClass('current');
		$("#viz").toggle();
	});


});