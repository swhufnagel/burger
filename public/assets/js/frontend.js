

$(document).ready(function(){
   console.log("loaded javascript");
   
   $(".devourButt").on("click",function(){
      
      var id = $(this).attr("id");
      var devouredState = {
         devoured: true
      }
      
      $.ajax("/api/burgers/" + id, { 
         type: "PUT",
         data: devouredState
      }).then(function(){
         location.reload();
      })
      
   })

   $(".submit").on("click",function(){
      event.preventDefault();
      var newBurger = {
         burger_name: $(".newBurger").val().trim(),
         devoured: 0
      }

      $.ajax("/api/burgers", {
         type: "POST",
         data: newBurger
      }).then(function(){
         console.log("posted");
         location.reload();
      })

   })
})
