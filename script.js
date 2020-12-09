var data=[{
		"id": "0001",
		"type": "donut",
		"name": "Cake",
		"ppu":0.78,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" },
						{ "id": "1003", "type": "Blueberry" },
						{ "id": "1004", "type": "Devil's Food" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5007", "type": "Powdered Sugar" },
				{ "id": "5006", "type": "Chocolate with Sprinkles" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0002",
		"type": "donut",
		"name": "Raised",
		"ppu": 0.55,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5005", "type": "Sugar" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	},
	{
		"id": "0003",
		"type": "donut",
		"name": "Old Fashioned",
		"ppu":0.26,
		"batters":
			{
				"batter":
					[
						{ "id": "1001", "type": "Regular" },
						{ "id": "1002", "type": "Chocolate" }
					]
			},
		"topping":
			[
				{ "id": "5001", "type": "None" },
				{ "id": "5002", "type": "Glazed" },
				{ "id": "5003", "type": "Chocolate" },
				{ "id": "5004", "type": "Maple" }
			]
	}];


	function gittopping() 
{

	for (var i = 0; i< data.length; i++) 
	{
	 var array1 = data[i].topping;
   for (var j= 0; j< array1.length;j++ )
   {
  console.log(array1[j].type);
    
   }
	}
}


function batter(){
var array2=[];
for(var i=0;i<data.length;i++){
	
	
	 array2 = data[i].batters.batter;


for(var j = 0 ; j< array2.length ; j++ )
   {
     console.log(array2[j].type);
   }}
}
function ppuavg()
{
  array3 = []
  var  avareage = 0;
  for( var i =0 ; i<data.length; i++) 
{ 
 var x  = array3.push(data[i].ppu)
 for (var p =0 ; p <array3.length ; p++)
 {
   
 avarege= avarege+(array3[p]/array3.length);
 }

  }
  console.log(avarege);
}

function ppusum()
{
  
 var sum = 0;
  for( var i =0 ; i<data.length; i++) 
{ 
 sum= sum+data[i].ppu; 
 
}
 
 console.log(sum)
}

function lastFunction(){
data.forEach(element =>console.log(element .id))
data.forEach(element => element.batters.batter.forEach(b => console.log(b.id)))
data.forEach(element => element.topping.forEach(t => console.log(t.id)))

}
	 
gittopping(); 
batter();
 ppusum();
 ppuavg(); 
lastFunction();
