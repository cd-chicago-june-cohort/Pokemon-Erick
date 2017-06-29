$(document).ready(function(){

    var $form = $('form');
    var pokemon = [];

    $form.submit(function(event){

        event.preventDefault();

        function getPokemon(){
            for(var k=1;k<=151;k++){
                pokemon[k] = 'http://pokeapi.co/media/img/' + k.toString() + '.png';
            }
        }
        getPokemon();

        for(var k=1;k<pokemon.length;k++)
        $('#wrapper').append('<img src="' + pokemon[k] + '">');
    });

});