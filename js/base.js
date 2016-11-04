$(document).ready(function() {
    $(window).on("hashchange", function(event) {
        var href = window.location.hash;

        if(href) {
          $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
        } else {
          $("#main-page").animate({"scrollTop": 0}, 250);
        }
    });

    $("#table-of-contents-toggle").click(function(event) {
        $(this).blur();
        $("#table-of-contents").slideToggle(250);
    });

    $("#table-of-contents a").click(function(event) {
        var href = $(this).attr("href");
        $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
    });

    $("#back-to-top").click(function(event) {
        event.preventDefault();
        this.blur();

        $("#main-page").animate({"scrollTop": 0}, 250);
    });
});
