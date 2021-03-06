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

        var icon;

        var idString = String(data.weather[0].id).split("")[0]

        var idNum = parseInt(idString);

        if(data.dt < data.sys.sunset){

          switch (idNum) {
            case 2:
                icon = "./imgs/11d.png";
                break;
            case 3:
                icon = "./imgs/09d.png";
                break;
            case 5:
                icon = "./imgs/10d.png";
                break;
            case 6:
                icon = "./imgs/13d.png";
                break;
            case 7:
                icon = "./imgs/50d.png";
                break;
            case 8:
                icon = "./imgs/01d.png";
                break;
          }

        }else{
          switch (idNum) {
            case 8:
                icon = "./imgs/01n.png";
                break;
          }
        }


        console.log(icon);

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
