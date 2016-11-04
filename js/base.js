$(document).ready(function() {
    $(window).on("hashchange", function(event) {
        var href = window.location.hash;

        if(href) {
          $("html, body").animate({"scrollTop": $(href)[0].offsetTop}, 250);
        } else {
          $("html, body").animate({"scrollTop": 0}, 250);
        }
    });

    $("#table-of-contents-toggle").click(function(event) {
        $(this).blur();
        $("#table-of-contents").slideToggle(150);
        $("#table-of-contents").css("display", "inline-block");
    });

    $("#table-of-contents a").click(function(event) {
        var href = $(this).attr("href");
        $("html, body").animate({"scrollTop": $(href)[0].offsetTop}, 250);
    });

    $("#back-to-top").click(function(event) {
        event.preventDefault();
        this.blur();

        $("html, body").animate({"scrollTop": 0}, 250);
    });
});
