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
    	{"USD": 4561, "población": 79749461, "nombre": "Turquía"},
		{"USD": 2937, "población":  114975406, "nombre": "México"},
		{"USD": 1033, "población": 248216193, "nombre": "Indonesia"}
	]
  	
  	
  	
  	
  var visualization = d3plus.viz()
    .container("#ciudadano_graph")
    .data(ciudadanos)
    .type("chart")
    .legend(false)
    .id("nombre")
	//    .size("value")
   .x("población")         // key for x-axis
    .y("USD") 
    .draw()
    
    
    
     /**
	*	gráficamos pib  por país
	* 	------------------------------------------------------------------------------
 	* 		
 	*/
    
         // lo metemos directo para ahorrar tiempo de desarrollo
  var pib_pais = [
  		//México
		{"año":1972, "name":"México", "value":"	45178119327	 "},
		{"año":1973, "name":"México", "value":"   55271303176 	 "},
		{"año":1974, "name":"México", "value":"   71976542927 	 "},
		{"año":1975, "name":"México", "value":"   88003982689 	 "},
		{"año":1976, "name":"México", "value":"   89023916067 	 "},
		{"año":1977, "name":"México", "value":"   81825780564 	 "},
		{"año":1978, "name":"México", "value":"   102517450026	 "},
		{"año":1979, "name":"México", "value":"   134540322293	 "},
		{"año":1980, "name":"México", "value":"   194356825709	 "},
		{"año":1981, "name":"México", "value":"   250083027275	 "},
		{"año":1982, "name":"México", "value":"   173720847691	 "},
		{"año":1983, "name":"México", "value":"   148866911934	 "},
		{"año":1984, "name":"México", "value":"   175632163244	 "},
		{"año":1985, "name":"México", "value":"   184473097296	 "},
		{"año":1986, "name":"México", "value":"   129440191340	 "},
		{"año":1987, "name":"México", "value":"   140263673924	 "},
		{"año":1988, "name":"México", "value":"   183144276294	 "},
		{"año":1989, "name":"México", "value":"   222977042347	 "},
		{"año":1990, "name":"México", "value":"   262709785593	 "},
		{"año":1991, "name":"México", "value":"   314453895612	 "},
		{"año":1992, "name":"México", "value":"   363609268789	 "},
		{"año":1993, "name":"México", "value":"   510190972634	 "},
		{"año":1994, "name":"México", "value":"   534119249743	 "},
		{"año":1995, "name":"México", "value":"   347270048647	 "},
		{"año":1996, "name":"México", "value":"   401777516321	 "},
		{"año":1997, "name":"México", "value":"   486229121799	 "},
		{"año":1998, "name":"México", "value":"   507980069262	 "},
		{"año":1999, "name":"México", "value":"   586690161461	 "},
		{"año":2000, "name":"México", "value":"   692177614210	 "},
		{"año":2001, "name":"México", "value":"   733461550751	 "},
		{"año":2002, "name":"México", "value":"   750477694898	 "},
		{"año":2003, "name":"México", "value":"   722164975397	 "},
		{"año":2004, "name":"México", "value":"   774800766586	 "},
		{"año":2005, "name":"México", "value":"   870215085181	 "},
		{"año":2006, "name":"México", "value":"   966249852838	 "},
		{"año":2007, "name":"México", "value":"   1043459078120 "},
		{"año":2008, "name":"México", "value":"   1099070673263 "},
		{"año":2009, "name":"México", "value":"   895354565567	 "},
		{"año":2010, "name":"México", "value":"   1047368841686 "},
		{"año":2011, "name":"México", "value":"   1159889566239 "},
		{"año":2012, "name":"México", "value":"   1178126184343 "},  
		
		//Turquía 
		{"año":1972, "name":"Turquía", "value":"	    20431095406"},
		{"año":1973, "name":"Turquía", "value":"     25724381625   "},
		{"año":1974, "name":"Turquía", "value":"     35599913836   "},
		{"año":1975, "name":"Turquía", "value":"     44633707243   "},
		{"año":1976, "name":"Turquía", "value":"     51280134554   "},
		{"año":1977, "name":"Turquía", "value":"     58676813687   "},
		{"año":1978, "name":"Turquía", "value":"     65147022486   "},
		{"año":1979, "name":"Turquía", "value":"     89394085658   "},
		{"año":1980, "name":"Turquía", "value":"     68789289566   "},
		{"año":1981, "name":"Turquía", "value":"     71040020140   "},
		{"año":1982, "name":"Turquía", "value":"     64546332581   "},
		{"año":1983, "name":"Turquía", "value":"     61678280115   "},
		{"año":1984, "name":"Turquía", "value":"     59989909458   "},
		{"año":1985, "name":"Turquía", "value":"     67234948265   "},
		{"año":1986, "name":"Turquía", "value":"     75728009963   "},
		{"año":1987, "name":"Turquía", "value":"     87172789528   "},
		{"año":1988, "name":"Turquía", "value":"     90852814005   "},
		{"año":1989, "name":"Turquía", "value":"     107143348667  "},
		{"año":1990, "name":"Turquía", "value":"     150676291094  "},
		{"año":1991, "name":"Turquía", "value":"     151041248184  "},
		{"año":1992, "name":"Turquía", "value":"     159095003188  "},
		{"año":1993, "name":"Turquía", "value":"     180422294772  "},
		{"año":1994, "name":"Turquía", "value":"     130690172297  "},
		{"año":1995, "name":"Turquía", "value":"     169485941048  "},
		{"año":1996, "name":"Turquía", "value":"     181475555283  "},
		{"año":1997, "name":"Turquía", "value":"     189834649111  "},
		{"año":1998, "name":"Turquía", "value":"     269287100115  "},
		{"año":1999, "name":"Turquía", "value":"     249751470869  "},
		{"año":2000, "name":"Turquía", "value":"     266567531990  "},
		{"año":2001, "name":"Turquía", "value":"     196005288838  "},
		{"año":2002, "name":"Turquía", "value":"     232534560775  "},
		{"año":2003, "name":"Turquía", "value":"     303005302818  "},
		{"año":2004, "name":"Turquía", "value":"     392166274991  "},
		{"año":2005, "name":"Turquía", "value":"     482979839238  "},
		{"año":2006, "name":"Turquía", "value":"     530900095205  "},
		{"año":2007, "name":"Turquía", "value":"     647155133932  "},
		{"año":2008, "name":"Turquía", "value":"     730337495966  "},
		{"año":2009, "name":"Turquía", "value":"     614553921823  "},
		{"año":2010, "name":"Turquía", "value":"     731144392556  "},
		{"año":2011, "name":"Turquía", "value":"     774775177386  "},
		{"año":2012, "name":"Turquía", "value":" 	789257487307   "},		
		//Indonesia

		{"año":1972,"name":"Indonesia", "value":"	    11605084560"},
		{"año":1973,"name":"Indonesia", "value":"     17171181163  "},
		{"año":1974,"name":"Indonesia", "value":"     27227710999  "},
		{"año":1975,"name":"Indonesia", "value":"     32147953008  "},
		{"año":1976,"name":"Indonesia", "value":"     39328674730  "},
		{"año":1977,"name":"Indonesia", "value":"     48396143465  "},
		{"año":1978,"name":"Indonesia", "value":"     54298158340  "},
		{"año":1979,"name":"Indonesia", "value":"     55122620334  "},
		{"año":1980,"name":"Indonesia", "value":"     78013206038  "},
		{"año":1981,"name":"Indonesia", "value":"     92473878832  "},
		{"año":1982,"name":"Indonesia", "value":"     94715163814  "},
		{"año":1983,"name":"Indonesia", "value":"     85369201879  "},
		{"año":1984,"name":"Indonesia", "value":"     87612439197  "},
		{"año":1985,"name":"Indonesia", "value":"     87338874330  "},
		{"año":1986,"name":"Indonesia", "value":"     80060657612  "},
		{"año":1987,"name":"Indonesia", "value":"     75929617715  "},
		{"año":1988,"name":"Indonesia", "value":"     88787623310  "},
		{"año":1989,"name":"Indonesia", "value":"     101455197786 "},
		{"año":1990,"name":"Indonesia", "value":"     114426498045 "},
		{"año":1991,"name":"Indonesia", "value":"     128167999847 "},
		{"año":1992,"name":"Indonesia", "value":"     139116270052 "},
		{"año":1993,"name":"Indonesia", "value":"     158006849879 "},
		{"año":1994,"name":"Indonesia", "value":"     176892148243 "},
		{"año":1995,"name":"Indonesia", "value":"     202132032844 "},
		{"año":1996,"name":"Indonesia", "value":"     227369671349 "},
		{"año":1997,"name":"Indonesia", "value":"     215748854647 "},
		{"año":1998,"name":"Indonesia", "value":"     95445548017  "},
		{"año":1999,"name":"Indonesia", "value":"     140001352527 "},
		{"año":2000,"name":"Indonesia", "value":"     165021012262 "},
		{"año":2001,"name":"Indonesia", "value":"     160446947638 "},
		{"año":2002,"name":"Indonesia", "value":"     195660611034 "},
		{"año":2003,"name":"Indonesia", "value":"     234772458818 "},
		{"año":2004,"name":"Indonesia", "value":"     256836883305 "},
		{"año":2005,"name":"Indonesia", "value":"     285868610017 "},
		{"año":2006,"name":"Indonesia", "value":"     364570525997 "},
		{"año":2007,"name":"Indonesia", "value":"     432216737775 "},
		{"año":2008,"name":"Indonesia", "value":"     510244548960 "},
		{"año":2009,"name":"Indonesia", "value":"     539579959053 "},
		{"año":2010,"name":"Indonesia", "value":"     709190822691 "},
		{"año":2011,"name":"Indonesia", "value":"     846341443778 "},
		{"año":2012,"name":"Indonesia", "value":" 	878043027882   "}		 
      ]

  
   // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#pib_graph")  // container DIV to hold the visualization
    .data(pib_pais)  // data to use with the visualization
    .type("line")       // visualization type
    .id("name")         // key for which our data is unique on
    .color({
    	"heatmap": ["#000","#ccc", "#555"]})
    .text("name")       // key to use for display text
    .y("value")         // key to use for y-axis
    .x("año")          // key to use for x-axis
    .draw()             // finally, draw the visualization!
    
    
    
     /**
	*	gráficamos deudaperperson por persona por país
	* 	------------------------------------------------------------------------------
 	* 		
 	*/
     // lo metemos directo para ahorrar tiempo de desarrollo
  var deudaperperson_pais = [
  		//México
    	{"año": 1972, "name":"México", "value":	"148	"},
		{"año": 1973, "name":"México", "value":	"183	"},
		{"año": 1974, "name":"México", "value":	"235	"},
		{"año": 1975, "name":"México", "value":	"298	"},
		{"año": 1976, "name":"México", "value":	"380	"},
		{"año": 1977, "name":"México", "value":	"481	"},
		{"año": 1978, "name":"México", "value":	"536	"},
		{"año": 1979, "name":"México", "value":	"625	"},
		{"año": 1980, "name":"México", "value":	"818	"},
		{"año": 1981, "name":"México", "value":	"1090	"},
		{"año": 1982, "name":"México", "value":	"1175	"},
		{"año": 1983, "name":"México", "value":	"1244	"},
		{"año": 1984, "name":"México", "value":	"1244	"},
		{"año": 1985, "name":"México", "value":	"1247	"},
		{"año": 1986, "name":"México", "value":	"1273	"},
		{"año": 1987, "name":"México", "value":	"1354	"},
		{"año": 1988, "name":"México", "value":	"1203	"},
		{"año": 1989, "name":"México", "value":	"1115	"},
		{"año": 1990, "name":"México", "value":	"1215	"},
		{"año": 1991, "name":"México", "value":	"1300	"},
		{"año": 1992, "name":"México", "value":	"1253	"},
		{"año": 1993, "name":"México", "value":	"1425	"},
		{"año": 1994, "name":"México", "value":	"1482	"},
		{"año": 1995, "name":"México", "value":	"1735	"},
		{"año": 1996, "name":"México", "value":	"1608	"},
		{"año": 1997, "name":"México", "value":	"1493	"},
		{"año": 1998, "name":"México", "value":	"1582	"},
		{"año": 1999, "name":"México", "value":	"1634	"},
		{"año": 2000, "name":"México", "value":	"1466	"},
		{"año": 2001, "name":"México", "value":	"1575	"},
		{"año": 2002, "name":"México", "value":	"1492	"},
		{"año": 2003, "name":"México", "value":	"1519	"},
		{"año": 2004, "name":"México", "value":	"1550	"},
		{"año": 2005, "name":"México", "value":	"1589	"},
		{"año": 2006, "name":"México", "value":	"1547	"},
		{"año": 2007, "name":"México", "value":	"1755	"},
		{"año": 2008, "name":"México", "value":	"1798	"},
		{"año": 2009, "name":"México", "value":	"1716	"},
		{"año": 2010, "name":"México", "value":	"2067	"},
		{"año": 2011, "name":"México", "value":	"2399	"},
		{"año": 2012, "name":"México", "value":	"2937	"},
		//Turquía
		
		{"año": 1972, "name":"Turquía", "value":"	97	"},	
		{"año": 1973, "name":"Turquía", "value":"   113	"},	
		{"año": 1974, "name":"Turquía", "value":"   121	"},	
		{"año": 1975, "name":"Turquía", "value":"   129	"},	
		{"año": 1976, "name":"Turquía", "value":"   150	"},	
		{"año": 1977, "name":"Turquía", "value":"   279	"},	
		{"año": 1978, "name":"Turquía", "value":"   354	"},	
		{"año": 1979, "name":"Turquía", "value":"   371	"},	
		{"año": 1980, "name":"Turquía", "value":"   436	"},	
		{"año": 1981, "name":"Turquía", "value":"   428	"},	
		{"año": 1982, "name":"Turquía", "value":"   429	"},	
		{"año": 1983, "name":"Turquía", "value":"   432	"},	
		{"año": 1984, "name":"Turquía", "value":"   449	"},	
		{"año": 1985, "name":"Turquía", "value":"   529	"},	
		{"año": 1986, "name":"Turquía", "value":"   656	"},	
		{"año": 1987, "name":"Turquía", "value":"   800	"},	
		{"año": 1988, "name":"Turquía", "value":"   786	"},	
		{"año": 1989, "name":"Turquía", "value":"   784	"},	
		{"año": 1990, "name":"Turquía", "value":"   915	"},	
		{"año": 1991, "name":"Turquía", "value":"   926	"},	
		{"año": 1992, "name":"Turquía", "value":"   1013"},	
		{"año": 1993, "name":"Turquía", "value":"   1210"},	
		{"año": 1994, "name":"Turquía", "value":"   1150"},	
		{"año": 1995, "name":"Turquía", "value":"   1261"},	
		{"año": 1996, "name":"Turquía", "value":"   1343"},	
		{"año": 1997, "name":"Turquía", "value":"   1403"},	
		{"año": 1998, "name":"Turquía", "value":"   1581"},	
		{"año": 1999, "name":"Turquía", "value":"   1635"},	
		{"año": 2000, "name":"Turquía", "value":"   1849"},	
		{"año": 2001, "name":"Turquía", "value":"   1762"},	
		{"año": 2002, "name":"Turquía", "value":"   1992"},	
		{"año": 2003, "name":"Turquía", "value":"   2163"},	
		{"año": 2004, "name":"Turquía", "value":"   2366"},	
		{"año": 2005, "name":"Turquía", "value":"   2541"},	
		{"año": 2006, "name":"Turquía", "value":"   3054"},	
		{"año": 2007, "name":"Turquía", "value":"   3719"},	
		{"año": 2008, "name":"Turquía", "value":"   4107"},	
		{"año": 2009, "name":"Turquía", "value":"   3892"},	
		{"año": 2010, "name":"Turquía", "value":"   4147"},	
		{"año": 2011, "name":"Turquía", "value":"   4181"},	
		{"año": 2012, "name":"Turquía", "value":"   4561"},

		//Indonesia
		{"año":1972,"name":"Indonesia", "value":"	49		"},
		{"año":1973,"name":"Indonesia", "value":"	59		"},
		{"año":1974,"name":"Indonesia", "value":"	72		"},
		{"año":1975,"name":"Indonesia", "value":"	89		"},
		{"año":1976,"name":"Indonesia", "value":"	106		"},
		{"año":1977,"name":"Indonesia", "value":"	121		"},
		{"año":1978,"name":"Indonesia", "value":"	130		"},
		{"año":1979,"name":"Indonesia", "value":"	131		"},
		{"año":1980,"name":"Indonesia", "value":"	144		"},
		{"año":1981,"name":"Indonesia", "value":"	153		"},
		{"año":1982,"name":"Indonesia", "value":"	165		"},
		{"año":1983,"name":"Indonesia", "value":"	194		"},
		{"año":1984,"name":"Indonesia", "value":"	201		"},
		{"año":1985,"name":"Indonesia", "value":"	226		"},
		{"año":1986,"name":"Indonesia", "value":"	259		"},
		{"año":1987,"name":"Indonesia", "value":"	311		"},
		{"año":1988,"name":"Indonesia", "value":"	314		"},
		{"año":1989,"name":"Indonesia", "value":"	338		"},
		{"año":1990,"name":"Indonesia", "value":"	391		"},
		{"año":1991,"name":"Indonesia", "value":"	437		"},
		{"año":1992,"name":"Indonesia", "value":"	476		"},
		{"año":1993,"name":"Indonesia", "value":"	474		"},
		{"año":1994,"name":"Indonesia", "value":"	564		"},
		{"año":1995,"name":"Indonesia", "value":"	641		"},
		{"año":1996,"name":"Indonesia", "value":"	654		"},
		{"año":1997,"name":"Indonesia", "value":"	681		"},
		{"año":1998,"name":"Indonesia", "value":"	746		"},
		{"año":1999,"name":"Indonesia", "value":"	737		"},
		{"año":2000,"name":"Indonesia", "value":"	688		"},
		{"año":2001,"name":"Indonesia", "value":"	624		"},
		{"año":2002,"name":"Indonesia", "value":"	596		"},
		{"año":2003,"name":"Indonesia", "value":"	613		"},
		{"año":2004,"name":"Indonesia", "value":"	621		"},
		{"año":2005,"name":"Indonesia", "value":"	632		"},
		{"año":2006,"name":"Indonesia", "value":"	597		"},
		{"año":2007,"name":"Indonesia", "value":"	640		"},
		{"año":2008,"name":"Indonesia", "value":"	674		"},
		{"año":2009,"name":"Indonesia", "value":"	755		"},
		{"año":2010,"name":"Indonesia", "value":"	832		"},
		{"año":2011,"name":"Indonesia", "value":"	922		"},
		{"año":2012,"name":"Indonesia", "value":"	1033	"}		
   
  ]

  
   // instantiate d3plus
  var visualization = d3plus.viz()
    .container("#deudaperperson_graph")  // container DIV to hold the visualization
    .data(deudaperperson_pais)  // data to use with the visualization
    .type("line")       // visualization type
    .id("name")         // key for which our data is unique on
    .text("name")       // key to use for display text
    .y("value")         // key to use for y-axis
    .x("año")          // key to use for x-axis
     .color("name")
    .draw()             // finally, draw the visualization!

    
    
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
    .container("#viz_graph")  // container DIV to hold the visualization
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
	$("#deudaperperson").hide();
	$("#ciudadano").hide();
	$("#pib").hide();
	$(".citizens").on('click', function() {
		$("#ciudadano").toggle();
		$("a").removeClass('current');		
		$(".citizens").addClass('current');
		$("#viz").hide();
		$("#deudaperperson").hide();
		$("#pib").hide();
	});

	$(".graphs").on('click', function() {
		$("#ciudadano").hide();
		$("a").removeClass('current');
		$(".graphs").addClass('current');
		$("#viz").toggle();
		$("#deudaperperson").hide();
		$("#pib").hide();
	});
	
	$(".deudaperperson").on('click', function() {
		$("#ciudadano").hide();
		
		$("a").removeClass('current');
		$(".deudaperperson").addClass('current');
		$("#viz").hide();
		$("#deudaperperson").toggle();
		$("#pib").hide();
	});
	
	$(".pib").on('click', function() {
		$("#ciudadano").hide();
		
		$("a").removeClass('current');
		$(".pib").addClass('current');
		$("#viz").hide();
		$("#deudaperperson").hide();
		$("#pib").toggle();
	});
	


});