$(function() {

  if(navigator.geolocation){

    navigator.geolocation.getCurrentPosition(function getGeo(position){

      var lat =  position.coords.latitude;
      var long = position.coords.longitude

      function getJSON(){

      $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat="+lat+"&lon="+long+"", getData);

      }

      function getData(data){

        var cel = data.main.temp;

        var far = Math.round((cel*(9/5) + 32));

        var location = data.name;

        var icon = data.weather[0].icon;

        console.log(data);

        $("#location").html(location);

        $("#temp").html(far + "&#8457;");

        $("#icon").append('<img src=' + icon + '>');

        var i = 1;

        $("#btn").click(function(event) {

        i++;
        if (i%2 != 0) {
            $("#temp").html(far + "&#8457;");
        }else {
            $("#temp").html(cel + "&#8451;");
        }
    });


    }

       getJSON();

   });

  }


});
