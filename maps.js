
      $(document).ready(function(){

        $.getJSON("http://cooper-union-instagram-proxy.herokuapp.com/search/tag/bushwick?count=100", function(response){
       
          console.log(response);

          var lololocation = prompt("How does getting likes feel?");
          var lololocation2 = prompt("How do you feel when you don't get likes?");

          var instagramPositions = [];

          for(var i=0; i<response.length; i++) {
            

            if(response[i].location != null) {
              
              var reResponse = response[i].likes.count;

              var reUser = "<img src="+response[i].user.profile_picture+" />";
              // {
              //   'name': response[i].user.username,
              //   'pink': response[i].link
              // }

              
              var reGoogle = new google.maps.LatLng(response[i].location.latitude, response[i].location.longitude);

              var reProfilePic = response[i].link;

              var photoMarker = {
                'title': "<p>"+reResponse+"</p>",
                'map': reGoogle,
                'link': reProfilePic,
                'html':reUser
              }
              instagramPositions.push(photoMarker);
              

            } //end of "if the photo has location data"

            if(reResponse > 10){
            $(".nono").addClass("bad")
            $(".nono").append("<h1>"+reUser+"</h1>" + " Is " + lololocation + " ")
          } 
          
          if (reResponse < 10) {
            $(".yesyes").addClass("good")
            $(".yesyes").append("<h1>"+reUser+"</h1>" + " Is " + lololocation2 + " ")
          }
          } //end of the for loop, iterating through the photos
          //set up the map configuration
          var mapOptions = {
            zoom: 12,
            center: new google.maps.LatLng(40.7043864,-73.9089994)
          };
          draw('map', mapOptions, instagramPositions);
        });
      });