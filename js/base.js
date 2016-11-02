$(document).ready(function() {
    $("#table-of-contents a").click(function() {
        var href = $(this).attr("href");
        $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
    });

    $(window).on("hashchange", function() {
        var href = window.location.hash;

        if(href) {
          $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
        } else {
          $("#main-page").animate({"scrollTop": "0"}, 250);
        }
    });

    $("#back-to-top").click(function() {
        event.preventDefault();
        this.blur();
        window.location.hash = "";
    });
});
