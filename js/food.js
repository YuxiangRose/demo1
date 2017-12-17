var restaurants = [
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	},
	{
		"name":"Titos",
		"type":"Ethnic",
		"address":"122 Walter Hardwick Ave 305 Vancouver"
	}

]


$(document).ready(function(){
	console.log('hello world');
	//first way.
	// restaurants.forEach(function(restaurant){
	// 	var foodBox = '<div class="food-box row-2">';
	// 	foodBox += '<h5>' + restaurant.name +'</h5>';
	// 	foodBox += '<h6>' + restaurant.type +'</h6>';
	// 	foodBox += '<p>' + restaurant.address +'</p>';
	// 	foodBox += '</div>'
	// 	$(".food-container").append(foodBox);
	// });

	//second way.
	// for (var i = restaurants.length - 1; i >= 0; i--) {
	// 	$('.food-container').append(
	// 	  $('<div/>')
	// 	    .addClass("food-box row-2")
	// 	    .append($('<h5/>').text(restaurants[i].name))
	// 	    .append($('<h6/>').text(restaurants[i].type))
	// 	    .append($('<p/>').text(restaurants[i].address))
	// 	);
	// }
});









