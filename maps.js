
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
          
          var loLocation = response[i].location;

          if(loLocation < 80){
            console.log("great");
          } 
          else if (loLocation < 60){
            console.log("okay");
          } 
          else if (loLocation < 30){
            console.log("worse")
          }
          else {
            console.log("worst")
          }
          } 
        });
      });