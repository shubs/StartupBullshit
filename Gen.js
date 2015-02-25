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
	new Array("lâ€™E-commerce",	0)
	new Array("les chaines",	1)
	new Array("les archtectures",	1)
	new Array("les systems",	0)
	new Array("lâ€™E-Marketing",	0)
	new Array("les applications",	1)
	new Array("le contenu",	0)
	new Array("la convergence",	0)
	new Array("le meeting",	0)
	new Array("lâ€™E-Business",	0)
	new Array("les E-services",	1)
	new Array("lexperience",	0)
	new Array("les livrables",	1)
	new Array("les actions",	1)
	new Array("les insfrastructures",	1)
	new Array("lâ€™initiative",	0)
	new Array("le market",	0)
	new Array("les modeles",	1)
	new Array("le ROI",	0)
	new Array("les synergies",	1)
	new Array("le schema",	0)
	new Array("la solution",	0)
	new Array("les utilisateurs",	1)
	new Array("les web services",	1)
	new Array("le relationnel",	0)
	new Array("les plateformes",	1)
	new Array("les partenariats",	1)
	new Array("lEco-system",	0)
	new Array("les paradigms",	1)
	new Array("les niches",	1)
	new Array("le reseau",	0)
	new Array("lâ€™intelligence",	0)
	new Array("la generation",	0)
	new Array("linterference",	0)
	new Array("l'impact",	0)
	new Array("la loi",	0)
	new Array("le Big-Data",	0)
	new Array("la soliditÃ©",	0)
	new Array("un positionnement",	0)
	);

//Adjectivs
array3 = new Array(
	new Array("innovant",		"innovants"),	
	new Array("novateur",		"novateurs"),
	new Array("temps rÃ©el",		"temps rÃ©el"),
	new Array("24/365",			"24/365"),
	new Array("24/7",			"24/7"),
	new Array("B2B",			"B2B"),
	new Array("B2C",			"B2C"),
	new Array("back-end",		"back-end"),
	new Array("collaboratif",	"collaboratifs"),
	new Array("distribuÃ©",		"distribuÃ©s"),
	new Array("virtualisÃ©",		"virtualisÃ©s"),
	new Array("end-to-end",		"end-to-end"),
	new Array("global",			"globaux"),
	new Array("efficace",		"efficaces"),
	new Array("prÃ©cieux",		"prÃ©cieux"),
	new Array("granulaire",		"granulaires"),
	new Array("intuitif",		"intuitifs"),
	new Array("interactif",		"interactifs"),
	new Array("one-to-one",		"one-to-one"),
	new Array("next-generation",	"next-generation"),
	new Array("nouvelle-generation",	"nouvelle-generation"),
	new Array("open-source",	"open-source"),
	new Array("robuste",		"robuste"),
	new Array("riche",			"riches"),
	new Array("extensible",		"extensibles"),
	new Array("plug-and-play",	"plug-and-play"),
	new Array("neuf",			"neufs"),
	new Array("sexy",			"sexy"),
	new Array("nouveau",		"nouveaux"),
	new Array("disjoint",		"disjoints"),
	new Array("sans-fil",		"sans-fil"),
	new Array("abstrait",		"abstraits"),
	new Array("virtuel",		"virtuels"),
	new Array("virale",			"virales"),
	new Array("transparent",	"transparents"),
	new Array("visionaire",		"visionnaires"),
	new Array("stratÃ©gique",	"stratÃ©giques"),
	new Array("subversif",		"subversifs"),
	new Array("libre",	"libres")
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
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][0]);
		}
		else if ((array2[index2][1] == 1)){
			jQuery("#my_bullshit").text(array1[index1] + " " + array2[index2][0] + " " + array3[index3][3]);
		}
	});
});