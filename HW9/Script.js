(function($){
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
        $("#ShowPKMN").Plug().animate({left:300}).animate({top:150}).animate({left:0}).animate({top:300});
    });
});

 $(document).ready(function () {
    $("#Submit").click(function () {
        $.getJSON("Data/Pokemon.json", function (result) {
            $.each(result, function (num, name, type) {
                $("#ShowPKMN").html("Pokedex Number: " + num + "<br>Name: " + name + "<br> Type(s): " + type);
            });
        });
    });

});

