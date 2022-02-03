$(".powerButton").click(function() {
    var powers = $(".powerInput").val();
    var ages = $(".ageInput").val();
    $(".page1").hide();
    
    if (powers === "Super strength") { 
    $(".superman").show();
        
}
  if (powers === "Super speed") { 
    $(".flash").show();
}  
    if (powers === "Super intelligence") { 
    $(".batman").show();
}
    if (powers === "Immortality") { 
    $(".wonderWoman").show();
}
    
    
});
    

