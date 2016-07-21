app.controller('MainController', ['$scope', function($scope) {
  $scope.title = 'Curriculum Vitae';
  $scope.gegevens = {
      	icon: 'img/profile.jpg', 
	    title: 'Persoonlijke Gegevens',
	    name: 'Naam', 
	    dateofbirth: new Date('1995', '09', '03'),
	    nationality: 'NL',
	    adress: 'prive',
	    email: 'mijn@mail.com',
	    phone: '0612345678',
	    };
	    
	 $scope.educations = [
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
	    course: 'VWO Natuur en Gezondheid',
  	    date: '2008 - 2014',
  	    diploma: 'Ja',
	    }
	   ];
	   
	 $scope.courses = [
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
	 	course: 'Mandarijn',
	 	level: 'Beginner',
	 	diploma: 'Nee',
	 	},
	 	{
	 	name: 'Chinese School Fa Yin',
	 	date: '2000 - 2008',
	 	course: 'Cantonees en Mandarijn',
	 	level: 'Kleuterklas t/m groep 7',
	 	diploma: 'Nee',
	 	}
	 	];
	 	
	 $scope.experiences = [
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
	 
}]);
