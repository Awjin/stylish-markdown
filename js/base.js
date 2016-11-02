$(document).ready(function() {
    var curr_visibility, prev_visibility = $("#table-of-contents").css("visibility");

    $(window).on("resize orientationchange", function() {
        curr_visibility = $("#table-of-contents").css("visibility");

        if( curr_visibility != prev_visibility) {
            switch(curr_visibility) {
            case "visible":
                $("#main-page").css("width", "75%");
                break;
            case "hidden":
                $("#main-page").css("width", "100%");
                break;
            }

            prev_visibility = curr_visibility;
        }
    });

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
