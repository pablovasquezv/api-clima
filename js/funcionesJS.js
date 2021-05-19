
$(document).ready(function () {
    //Capturamos los datos a través del evento submit en el formulario
    $('form').submit(function () {
        //Verificar que contenga datos el txt y no este vacio al presionar el botón
        if ($('#txtCity').val() != "") {
            //Creacion de Variable para url de la APi
            var url = " http://api.openweathermap.org/data/2.5/weather?q=" + $('#txtCity').val() + "&&appid=745c4f4fcbc4def5c9d28ee1d0dcbd81";
            // Creación de una funcion con la url
            $.get(url, function (res) {
                //Verificamos los datos obtenidos por consola
                console.log(res);
                //Mostrar el Nombre de la ciudad ingresada dentro del lblCity 
                $('#lblCity').text(res.name + "," + res.weather[0].description);
                /*
                *Crear una variable para hacer el transfr la temperatura de kevil
                a celcuis
                */
                var temperatura = (res.main.temp - 273.15).toFixed(2);
                //Mostrar la Temperatura de la ciudad ingresada dentro del Temperatura 
                $('#lblTemperatura').text("Temperatura: " + temperatura + " C°");
                 //Mostrar la Coordenadas de la ciudad ingresada dentro del Temperatura
                $('#lblCoordenadas').text("Coordenadas: " + res.coord.lat + ", Long" + res.coord.lon);
                //Limpiar el txtCity
                $('#txtCity').val("")
                // your code here
            }, 'json');
        } else {
            alert("Ingerese dato");
        }
        // don't forget to return false so the page doesn't refresh
        return false;
    });
})

