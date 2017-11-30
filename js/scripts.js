function Pizza(name, size) {
  this.name = name;
  this.size = size;
	this.toppings = [];
  this.toppingPrice = 0;
};

Pizza.prototype.Price = function() {
  return this.size + this.toppingPrice;
};


$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var size = parseInt($("input:radio[name=Size]:checked").val());
    var newPizza = new Pizza(inputtedName, size);
    $("input:checkbox[name=topping]:checked").each(function(){
      newPizza.toppingPrice += parseFloat($(this).val());
    });
    $("input:checkbox[name=topping]:checked").each(function(){
      newPizza.toppings += parseFloat($(this).val());
    });
    newPizza.Price();

    console.log(newPizza.toppingPrice);
    console.log(newPizza.size);
    console.log(newPizza.name);
    console.log(newPizza.Price());
  });
});
