

(function ($) {
    $.fn.Plug = function () {
        this.css("background-color", "DarkSalmon");
        this.css("color", "gray");
        this.css("font-size", 35);
        this.css("align-self", "center");
        return this;
    };
}(jQuery));
$(document).ready(function () {
    $("#Submit").click(function () {
        $("#range").Plug().fadeTo(10, 1).hover(function () {
            $.css("background-color", "black");
            $.css("color", "white");
            $.css("font-size", 50);
                
            }, function () {
                $.css("background-color", "DarkSalmon");
                $.css("color", "gray");
                $.css("font-size", 35);
            }
        );
       
    });
});

$(document).ready(function () {
    $("#Submit").click(function () {
        $("#Submit").Plug().animate({ left: 300 }).animate({ top: 150 }).animate({ left: 0 }).animate({ top: 300 });

    });
});

$(document).ready(function () {
    $("#Submit").click(function () {
       
        $.getJSON("Data/Pokemon.json", function (pokemon) {
            var PKMN=JSON.parse(pokemon)
            JSON.parse(pokemon, function (num, name, type) {
                ("Pokedex Number: " + num + "<br>Name: " + name + "<br> Type(s): " + type);
            });
            $("#ShowPKMN").html(PKMN);
           });
    
    });

});
