// Verbs

array1 = new Array(
	"Cultivate",
	"Fear",
	"Consume",
	"Penetrate",
	"Reach",
	"Imagine",
	"Invent",
	"Elaborate",
	"Access",
	"Understand",
	"Launch",
	"Initiate",
	"Perfect",
	"Succeed",
	"Inprove",
	"Fine tune",
	"Lead",
	"Conduct",
	"Watch",
	"Visualize",
	"Exploit",
	"Evaluate",
	"Deploy",
	"Amplify",
	"Increase",
	"Maximize",
	"Orchestrate",
	"Grow",
	"Optimize",
	"Synthetize",
	"Plan",
	"evolve",
	"Target",
	"revolutionize",
	"Master",
	"Conceptualize",
	"Assert");

//0 singluer
//1 pluriel

//masculain
//feminin

// Nouns
array2 = new Array(
	new Array("e-commerce",	0),
	new Array("chanels",	1),
	new Array("archtectures",	1),
	new Array("systems",	0),
	new Array("E-Markting",	0),
	new Array("applications",	1),
	new Array("contenu",	0),
	new Array("convergence",	0),
	new Array("meeting",	0),
	new Array("E-Business",	0),
	new Array("E-services",	1),
	new Array("Experience",	0),
	new Array("Actions",	1),
	new Array("Infrastructues",	1),
	new Array("Initiatives",	0),
	new Array("Market",	0),
	new Array("Money",	1),
	new Array("ROI",	0),
	new Array("Synergies",	1),
	new Array("Scheme",	0),
	new Array("Solution",	0),
	new Array("User",	1),
	new Array("web services",	1),
	new Array("Network",	0),
	new Array("plateforms",	1),
	new Array("Partnerships",	1),
	new Array("Eco-system",	0),
	new Array("paradigms",	1),
	new Array("niches",	1),
	new Array("Intelligence",	0),
	new Array("Generation",	0),
	new Array("Interference",	0),
	new Array("Imnpact",	0),
	new Array("Law",	0),
	new Array("Big-Data",	0),
	new Array("Positionning",	0)
	);

//Adjectivs
array3 = new Array(
	new Array("innovative",		"innovative"),	
	new Array("Real-time",		"Real-time"),
	new Array("24/365",			"24/365"),
	new Array("24/7",			"24/7"),
	new Array("B2B",			"B2B"),
	new Array("B2C",			"B2C"),
	new Array("back-end",		"back-end"),
	new Array("Collaborative",	"Collaborative"),
	new Array("Ditributed",		"Ditributed"),
	new Array("Virtualised",		"Virtualised"),
	new Array("end-to-end",		"end-to-end"),
	new Array("global",			"Global"),
	new Array("efiicient",		"efiicient"),
	new Array("granular",		"granular"),
	new Array("intuitive",		"intuitive"),
	new Array("interactiv",		"interactiv"),
	new Array("one-to-one",		"one-to-one"),
	new Array("next-generation",	"next-generation"),
	new Array("new-generation",	"new-generation"),
	new Array("open-source",	"open-source"),
	new Array("reliable",		"reliable"),
	new Array("rich",			"rich"),
	new Array("Scalable",		"Scalable"),
	new Array("plug-and-play",	"plug-and-play"),
	new Array("sexy",			"sexy"),
	new Array("new",		"new"),
	new Array("disjoint",		"disjoint"),
	new Array("wireless",		"wireless"),
	new Array("abstract",		"abstract"),
	new Array("virale",			"virales"),
	new Array("transparent",	"transparent"),
	new Array("visionairy",		"visionairie"),
	new Array("strategic",	"strategic"),
	new Array("subversif",		"subversif"),
	new Array("free",	"free")
	);


Array.prototype.count = function () {
	return (this.length - 1);
}

jQuery(document).ready(function(){
	jQuery("#click_bullshit").click(function(){
		index1 = Math.round(Math.random() * array1.count());	
		index2 = Math.round(Math.random() * array2.count());	
		index3 = Math.round(Math.random() * array3.count());

		if ((array2[index2][1] == 0)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array3[index3][0] + " " + array2[index2][0]);
		}
		else if ((array2[index2][1] == 1)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array3[index3][1] + " " + array2[index2][0]);
		}
	});
});