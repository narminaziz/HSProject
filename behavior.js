document.addEventListener("DOMContentLoaded", function(event) {
   var thumbnailElement = document.getElementById("smart_thumbnail");

   thumbnailElement.addEventListener("click", function() {
    if (thumbnailElement.classList.contains("small")) {
           
        thumbnailElement.classList.remove("small");
    } else {
        
        thumbnailElement.classList.add("small");
    }
  });

   
});



  