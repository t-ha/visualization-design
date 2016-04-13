// 16 bacteria
var bac = ['Aerobacter aerogenes', 'Brucella abortus','Brucella anthracis','Diplococcus pneumoniae','Escherichia coli',
'Klebsiella pneumoniae', 'Mycobacterium tuberculosis', 'Proteus vulgaris', 'Pseudomonas aeruginosa',
'Salmonella (Eberthella) typhosa', 'Salmonella schottmuelleri', 'Staphylococcus albus', 'Staphylococcus aureus',
'Streptococcus fecalis', 'Streptococcus hemolyticus', 'Streptococcus viridans'];

// antibiotics
// drug 1: Penicilin
var drugP = [870, 1, 100, 0.001, 0.005, 850, 800, 3, 850, 1, 10, 0.007, 0.03, 1, 0.001, 0.005];
var drugPavg = [];
// drug 2: Streptomycin
var drugS = [1, 2, 0.4, 0.01, 11, 1.2, 5, 0.1, 2, 0.4, 0.8, 0.1, 0.3, 1, 14, 10];
// drug 3: Neomycin
var drugN = [1.6, 0.02, 0.007, 10 ,0.1, 1, 2, 0.1, 0.4, 0.008, 0.09, 0.001, 0.001, 0.1, 10, 40];
// Gram Staining: Gram-negative & Gram-positive
var gramS = ['n', 'n', 'p', 'p', 'n', 'n', 'n', 'n', 'n', 'n', 'n', 'p', 'p', 'p', 'p', 'p'];


// scatter plots
var trace1 = {
    x: bac,
    y: drugP,
    marker: {
    	size: 10,
    	color: 'rgb(46, 204, 113)'
    },
    line: {
    	width: 4
    },
    name: 'Penicilin',
    mode: 'lines+markers',
    type: 'scatter'
};

var trace2 = {
    x: bac,
    y: drugS,
    marker: {
    	size: 10,
    	color: 'rgb(52, 152, 219)'
    },
    line: {
    	width: 4
    },
    name: 'Streptomycin',
    mode: 'lines+markers',
    type: 'scatter'
};

var trace3 = {
    x: bac,
    y: drugN,
    marker: {
    	size: 10,
    	color: 'rgb(231, 76, 60)'
    },
    line: {
    	width: 4
    },
    name: 'Neomycin',
    mode: 'lines+markers',
    type: 'scatter'
};

var data = [trace1, trace2, trace3];

var layout = {
	title: 'Effectiveness of Anitbiotics on 16 Bacteria',
	autosize: true,
	width: 800,
	height: 600,
	xaxis: {
		type: 'category',
		title: 'Bacteria',
		showline: true,
		tickangle: 30
	},
	yaxis: {
		type: 'log',
		title: 'Minimum Inhibitory Concentration(MIC)',
		autorange: true,
		showline: true
	},
	margin: {
		b: 100
	}
};

Plotly.newPlot('graph', data, layout, {staticPlot: true});



// scatter: gram staining
// Gram-positive

// var posBac = bac.slice(2, 4).concat(bac.slice(11, 16)); //bacteria
var posP = drugP.slice(2, 4).concat(drugP.slice(11, 16)); // Penicilin
var posS = drugS.slice(2, 4).concat(drugS.slice(11, 16)); // Streptomycin
var posN = drugN.slice(2, 4).concat(drugN.slice(11, 16)); //Neomycin

// sums of MIC
var sumPosP = posP.reduce(function(a, b) { return a + b; }, 0);
var sumPosS = posS.reduce(function(a, b) { return a + b; }, 0);
var sumPosN = posN.reduce(function(a, b) { return a + b; }, 0);

// Gram-negative 

// var negBac = bac.slice(0, 2).concat(bac.slice(4, 11));
var negP = drugP.slice(0, 2).concat(drugP.slice(4, 11));
var negS = drugS.slice(0, 2).concat(drugS.slice(4, 11));
var negN = drugN.slice(0, 2).concat(drugN.slice(4, 11));

// sums of MIC
var sumNegP = negP.reduce(function(a, b) { return a + b; }, 0);
var sumNegS = negS.reduce(function(a, b) { return a + b; }, 0);
var sumNegN = negN.reduce(function(a, b) { return a + b; }, 0);

var gPos = {
	x: ['Penicilin', 'Streptomycin', 'Neomycin'],
	y: [sumPosP, sumPosS, sumPosN],
	marker: {
		color: 'rgb(126, 52, 157)'
	},
	name: 'Gram-positive',
	type: 'bar'
};

var gNeg = {
	x: ['Penicilin', 'Streptomycin', 'Neomycin'],
	y: [sumNegP, sumNegS, sumNegN],
	marker: {
		color: 'rgb(255, 124, 184)'
	},
	name: 'Gram-negative',
	type: 'bar'
};

var gramLayout = {
	title: 'Overall Effectiveness of Anitbiotics in Relation to Gram Staining',
	barmode: 'group',
	xaxis: {
		type: 'category',
		title: 'Anitbiotics',
		showline: true
	},
	yaxis: {
		type: 'log',
		title: 'Total Minimum Inhibitory Concentration(MIC)',
		autorange: true,
		showline: true
	},
}

Plotly.newPlot('graphTwo', [gPos, gNeg], gramLayout, {staticPlot: true});



var com1 = {
	x: drugS,
	y: drugN,
	marker: {
		size: 10,
		opacity: 0.5,
		color: 'rgb(0, 55, 128)'
	},
	mode: 'markers',
	type: 'scatter'
};

var comLayout = {
	title: 'Streptomycin vs Neomycin MIC Comparison',
	xaxis: {
		type: 'log',
		title: 'Streptomycin MIC',
		autorange: true,
		showline: true
	},
	yaxis: {
		type: 'log',
		title: 'Neomycin MIC',
		autorange: true,
		showline: true
	}
}

Plotly.newPlot('graphThree', [com1], comLayout, {staticPlot: true});









