function Pizza(name, size, delivery, address, phone) {
  this.name = name;
  this.address = address;
  this.phoneNumber = phone;
  this.size = size;
  this.delivery = delivery;
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
  if (this.delivery === "yes"){
    this.totalPrice += 5.00
    $("#deliver").show()
  } else {
    $("#picking-up").show();
  };
};

function resetFields() {
  $("input#name").val("");
  $("input:radio[name=Size]:checked").val("");
  $("input:checkbox[name=topping]:checked").val("");
  $("input.new-city").val("");
  $("input.new-state").val("");
};

$(document).ready(function(){
  $("form#pizza-form").submit(function(event){
    event.preventDefault();
    var inputtedName = $("#name").val();
    var size = $("input:radio[name=Size]:checked").val();
    var delivery = $("input:radio[name=delivery]:checked").val();
    var address = $("#street").val();
    var phone = $("#phone-number").val();
    newPizza = new Pizza(inputtedName, size, delivery, address, phone);
    $("input:checkbox[name=topping]:checked").each(function(){
      newPizza.toppings.push($(this).val());
    });
    newPizza.Price();
    $("#Total").text("$" + newPizza.totalPrice.toFixed(2));
    $("#customerName").text(newPizza.name);
    $("#pizzaSize").text(newPizza.size.toLowerCase());
    $("#deliveryAddress").text(newPizza.address);
    $("#customerPhoneNumber").text(newPizza.phoneNumber);
    $("ul#pizzaToppings").text("");
       newPizza.toppings.forEach(function(topping) {
         $("ul#pizzaToppings").append("<li>" + topping + "</li>");
       });
    $("#Order").show();
    $(".name").hide();
    $("#address").hide();
  });
  $("#delivery").click(function() {
    $("#address").show();
  });
  $("#pick-up").click(function() {
    $("#address").hide();
  });
});
