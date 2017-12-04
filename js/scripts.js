function Pizza(name, size) {
  this.name = name;
  this.size = size;
	this.toppings = [];
  this.toppingPrice = 0;
};

Pizza.prototype.Price = function() {
  for (var index = 0; index < this.toppings.length; index += 1) {
    if (this.toppings[index] === "Peppers" || this.toppings[index] === "Extra Mozzarella" || this.toppings[index] === "Mushrooms" || this.toppings[index] === "Fresh Basil"){
    this.toppingPrice += .50
    } else if (this.toppings[index] === "Goat Cheese" || this.toppings[index] === "Sun Dried Tomatoes"){
    this.toppingPrice += 1.00
    } else {
    this.toppingPrice += 2.00
  };
  };
};

$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var size = parseInt($("input:radio[name=Size]:checked").val());
    var newPizza = new Pizza(inputtedName, size);
    // $("input:checkbox[name=topping]:checked").each(function(){
    //   newPizza.toppingPrice += parseFloat($(this).val());
    // });
    $("input:checkbox[name=topping]:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });
    // $("#Total").text("$" + newPizza.Price().toFixed(2));
    $("#Order").show();
    newPizza.Price();
    console.log(newPizza.toppings);
    console.log(newPizza.toppingPrice);
    console.log(newPizza.size);
    console.log(newPizza.name);
    // console.log(newPizza.Price());

  });
});
