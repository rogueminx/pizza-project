function Pizza(name, size) {
  this.name = name;
  this.size = size;
	this.toppings = [];
  this.totalPrice = 0;
};

Pizza.prototype.Price = function() {
  for (var index = 0; index < this.toppings.length; index += 1) {
    if (this.toppings[index] === "Peppers" || this.toppings[index] === "Extra Mozzarella" || this.toppings[index] === "Mushrooms" || this.toppings[index] === "Fresh Basil"){
    this.totalPrice += .50
    } else if (this.toppings[index] === "Goat Cheese" || this.toppings[index] === "Sun Dried Tomatoes"){
    this.totalPrice += 1.00
    } else {
    this.totalPrice += 2.00
    };
  };
  if (this.size === "Extra Large"){
    this.totalPrice += 25.00
  } else if (this.size === "Large"){
    this.totalPrice += 20.00
  } else {
    this.totalPrice += 15.00
  };
};

$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var size = $("input:radio[name=Size]:checked").val();
    var newPizza = new Pizza(inputtedName, size);
    // $("input:checkbox[name=topping]:checked").each(function(){
    //   newPizza.totalPrice += parseFloat($(this).val());
    // });
    $("input:checkbox[name=topping]:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });
    newPizza.Price();
    $("#Total").text("$" + newPizza.totalPrice.toFixed(2));
    $("#Order").show();
    console.log(newPizza.toppings);
    console.log(newPizza.totalPrice);
    console.log(newPizza.size);
    console.log(newPizza.name);
    // console.log(newPizza.Price());

  });
});
