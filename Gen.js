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
array2 = new Array(
	new Array("lâ€™E-commerce",	0,	0),
	new Array("les chaines",	1,	1),
	new Array("les archtectures",	1,	1),
	new Array("les systems",	0,	1),
	new Array("lâ€™E-Marketing",	0,	0),
	new Array("les applications",	1,	1),
	new Array("le contenu",	0,	0),
	new Array("la convergence",	0,	1),
	new Array("le meeting",	0,	0),
	new Array("lâ€™E-Business",	0,	0),
	new Array("les E-services",	1,	0),
	new Array("lexperience",	0,	1),
	new Array("les livrables",	1,	0),
	new Array("les actions",	1,	1),
	new Array("les insfrastructures",	1,	1),
	new Array("lâ€™initiative",	0,	1),
	new Array("le market",	0,	0),
	new Array("les modeles",	1,	0),
	new Array("le ROI",	0,	0),
	new Array("les synergies",	1,	1),
	new Array("le schema",	0,	0),
	new Array("la solution",	0,	1),
	new Array("les utilisateurs",	1,	0),
	new Array("les web services",	1,	0),
	new Array("le relationnel",	0,	0),
	new Array("les plateformes",	1,	1),
	new Array("les partenariats",	1,	0),
	new Array("lEco-system",	0,	0),
	new Array("les paradigms",	1,	0),
	new Array("les niches",	1,	1),
	new Array("le reseau",	0,	0),
	new Array("lâ€™intelligence",	0,	1),
	new Array("la generation",	0,	1),
	new Array("linterference",	0,	1),
	new Array("l'impact",	0,	0),
	new Array("la loi",	0,	1),
	new Array("le Big-Data",	0,	0),
	new Array("la soliditÃ©",	0,	1),
	new Array("un positionnement",	0,	0)
	);

array3 = new Array(
	new Array("innovant",		"innovants",	"innovante",	"innovantes"),	
	new Array("novateur",		"novateurs",	"novatrice",	"novatrices"),
	new Array("temps rÃ©el",		"temps rÃ©el",	"temps rÃ©el",	"temps rÃ©el"),
	new Array("24/365",			"24/365",	"24/365",	"24/365"),
	new Array("24/7",			"24/7",	"24/7",	"24/7"),
	new Array("B2B",			"B2B",	"B2B",	"B2B"),
	new Array("B2C",			"B2C",	"B2C",	"B2C"),
	new Array("back-end",		"back-end",	"back-end",	"back-end"),
	new Array("collaboratif",	"collaboratifs",	"collaborative",	"collaboratives"),
	new Array("distribuÃ©",		"distribuÃ©s",	"distribuÃ©e",	"distribuÃ©es"),
	new Array("virtualisÃ©",		"virtualisÃ©s",	"virtualisÃ©e",	"virtualisÃ©es"),
	new Array("end-to-end",		"end-to-end",	"end-to-end",	"end-to-end"),
	new Array("global",			"globaux",	"globale",	"globales"),
	new Array("efficace",		"efficaces",	"efficace",	"efficaces"),
	new Array("prÃ©cieux",		"prÃ©cieux",	"prÃ©cieuse",	"prÃ©cieuses"),
	new Array("granulaire",		"granulaires",	"granulaire",	"granulaires"),
	new Array("intuitif",		"intuitifs",	"intuitive",	"intuitives"),
	new Array("interactif",		"interactifs",	"interactive",	"interactives"),
	new Array("one-to-one",		"one-to-one",	"one-to-one",	"one-to-one"),
	new Array("next-generation",	"next-generation",	"next-generation",	"next-generation"),
	new Array("nouvelle-generation",	"nouvelle-generation",	"nouvelle-generation",	"nouvelle-generation"),
	new Array("open-source",	"open-source",	"open-source",	"open-source"),
	new Array("robuste",		"robuste",	"robuste",	"robustes"),
	new Array("riche",			"riches",	"riche",	"riches"),
	new Array("extensible",		"extensibles",	"extensible",	"extensibles"),
	new Array("plug-and-play",	"plug-and-play",	"plug-and-play",	"plug-and-play"),
	new Array("neuf",			"neufs",	"neuve",	"neuves"),
	new Array("sexy",			"sexy",	"sexy",	"sexy"),
	new Array("nouveau",		"nouveaux",	"nouvelle",	"nouvelles"),
	new Array("disjoint",		"disjoints",	"disjointe",	"disjointes"),
	new Array("sans-fil",		"sans-fil",	"sans-fil",	"sans-fil"),
	new Array("abstrait",		"abstraits",	"abstraite",	"abstraites"),
	new Array("virtuel",		"virtuels",	"virtuelle",	"virtuelles"),
	new Array("virale",			"virales",	"virale",	"virales"),
	new Array("transparent",	"transparents",	"transparente",	"transparentes"),
	new Array("visionaire",		"visionnaires",	"visionnaire",	"visionnaires"),
	new Array("stratÃ©gique",	"stratÃ©giques",	"stratÃ©gique",	"stratÃ©giques"),
	new Array("subversif",		"subversifs",	"subversive",	"subversives"),
	new Array("libre",	"libres",	"libre",	"libres")
	);


Array.prototype.count = function () {
	return (this.length - 1);
}

jQuery(document).ready(function(){
	jQuery("#click_bullshit").click(function(){
		index1 = Math.round(Math.random() * array1.count());	
		index2 = Math.round(Math.random() * array2.count());	
		index3 = Math.round(Math.random() * array3.count());

		if ((array2[index2][1] == 0) && (array2[index2][2] == 0)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][0]);
		}
		else if ((array2[index2][1] == 1) && (array2[index2][2] == 0)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][1]);
		}
		else if ((array2[index2][1] == 0) && (array2[index2][2] == 1)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][2]);
		}
		else if ((array2[index2][1] == 1) && (array2[index2][2] == 1)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][3]);
		}
	});
});