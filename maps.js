
      $(document).ready(function(){
        //getting the data from instagram
        $.getJSON("http://cooper-union-instagram-proxy.herokuapp.com/search/tag/shwick?count=100", function(response){
          //create the placeholder for valid images
          console.log(response)
          var instagramPositions = [];
          //looping through the response from instagram
          for(var i=0; i<response.length; i++) {
            
            $("body").append("<img src="+response[i].images.thumbnail.url+" />");


            var counter = response[i].comments.count;
            if(counter < 1) {
              console.log("good")
            }
            else {
             console.log("bad");
          }
          
          var loLikes = response[i].likes.count;
          var loUser = response[i].user.username;
          if(loLikes > 50){
            console.log(loUser + loLikes);
          } 
          else if (loLikes > 30){
            console.log(loUser + "okay");
          } 
          else if (loLikes > 10){
            console.log(loUser + "worse")
          }
          else {
            console.log(loUser + loLikes)
          }
          } 
        });
      });