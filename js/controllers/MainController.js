app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Curriculum Vitae';
  $scope.gegevens = {
      	icon: 'img/profile.jpg', 
	    title: 'Persoonlijke Gegevens',
	    name: 'Michèle Go', 
	    dateofbirth: new Date('1995', '09', '03'),
	    nationality: 'Nederlandse',
	    adress: 'prive',
	    email: 'mijn@mail.com',
	    phone: '0612345678',
	    };
	    
	 $scope.educations = [
	    {
	    title: 'Opleidingen',
	    },
	    {
  	    name: 'Vrije Universiteit',
  	    location: 'Amsterdam',
  	    course: 'Lifestyle Informatics',
  	    date: '2015 - heden',
  	    diploma: 'Nee',
	    },
	    {
  	    name: 'Vrije Universiteit',
  	    location: 'Amsterdam',
  	    course: 'Gezondheid en Leven',
  	    date: '2014 - 2015',
  	    diploma: 'Nee',
	    },
	    {
	    name: 'Bertrand Russell College',
	    location: 'Krommenie',
	    course: 'VWO Natuur en Gezondheid',
  	    date: '2008 - 2014',
  	    diploma: 'Ja',
	    }
	   ];
	   
	 $scope.courses = [
	 	{
	 	title: 'Cursussen',
	 	},
	 	{
	 	name: 'Chinese School Fa Yin',
	 	date: '2013 - 2015',
	 	location: 'Amsterdam',
	 	course: 'Cantonees en Mandarijn',
	 	level: 'Groep 8 t/m middelbare school 1e klas',
	 	diploma: 'Ja',	
	 	},
	 	{
	 	name: 'FluXus',
	 	date: '2012 - 2013',
	 	location: 'Zaandam',
	 	course: 'Muziekexamen',
	 	level: 'Niveau A voor piano (met theorie niveau B)',
	 	diploma: 'Ja',
	 	},
	 	{
	 	name: 'Chinese School Kai Wah',
	 	date: '2009 - 2011',
	 	location: 'Amsterdam',
	 	course: 'Mandarijn',
	 	level: 'Beginner',
	 	diploma: 'Nee',
	 	},
	 	{
	 	name: 'Chinese School Fa Yin',
	 	date: '2000 - 2008',
	 	location: 'Amsterdam',
	 	course: 'Cantonees en Mandarijn',
	 	level: 'Kleuterklas t/m groep 7',
	 	diploma: 'Nee',
	 	}
	 	];
	 	
	 $scope.experiences = [
	 	{
	 	title: 'Werkervaring',
	 	},
	 	{
	 	functie: 'Flexkracht via Uitzendbureau BQ',
	 	date: 'Sep 2015 - heden',
	 	location: 'Horeca: Amsterdam RAI Convention Centre. Promotiewerk: verschillend',
	 	taken: 'Horecamedewerkster: bedienen, foodlopen, debrasseren, achter de bar staan, schoonmaken, op- en afbouwen. Promotiewerker: flyeren.',
	 	},
	 	{
	 	functie: 'Horecamedewerkster',
	 	date: 'Feb 2014 - Mrt 2015',
	 	location: 'Snackbar Bengs Snacks in Krommenie',
	 	taken: 'Bestellingen opnemen, bedienen, milkshakes maken, schoonmaken',
	 	},
	 	{
	 	functie: 'Vrijwilligster',
	 	date: 'Okt 2011 - Dec 2011',
	 	location: 'Molenmuseum in Koog aan de Zaan',
	 	taken: 'Gasten verwelkomen, koffie zetten en verkopen, kaartjes controleren, folders bijvullen', 
	 	},
	 	{
	 	functie: 'Vrijwilligster',
	 	date: 'Okt 2011 - Nov 2011',
	 	location: 'SCWO in Wormer',
	 	taken: 'Voorbereidingswerk, kinderen begeleiden, opruimen',
	 	}
	 	];
	 	
	 $scope.skills = [
	 	{
	 	title: 'Vaardigheden',
	 	},
	 	{
	 	name: 'Taalvaardigheid',
	 	cat1: 'Nederlands',
	 	lvl1: 'vloeiend in spreken, lezen en schrijven',
	 	cat2: 'Engels',
	 	lvl2: 'goed in spreken, lezen en schrijven',
	 	cat3: 'Cantonees',
	 	lvl3: 'goed in spreken, redelijk in lezen en schrijven',
	 	cat4: 'Mandarijn',
	 	lvl4: 'redelijk in spreken, lezen en schrijven',
	 	cat5: 'Frans en Duits',
	 	lvl5: 'basis in spreken, lezen en schrijven',
	 	},
	 	{
	 	name: 'ICT vaardigheden',
	 	cat1: 'Microsoft Office (Word, Excel, Powerpoint)',
	 	lvl1: 'goed',
	 	cat2: 'SPSS',
	 	lvl2: 'redelijk',
	 	cat3: 'HTML/CSS',
	 	lvl3: 'redelijk',
	 	cat4: 'Python',
	 	lvl4: 'basis',
	 	cat5: 'Matlab',
	 	lvl5: 'basis',
	 	},
	 	{
	 	name: 'Rijbewijs',
	 	cat1: 'AM + B (sinds 2015)',
	 	}
	 	];
	 $scope.interests = {
	 	title: 'Hobbies en Interesses',
	 	dog: 'Lezen, reizen, piano, badminton.',
	 };
}]);
