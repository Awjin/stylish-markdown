$(document).ready(function() {
    var prev_visibility = $("#table-of-contents").css("visibility");
    $(window).on("resize orientationchange", function() {
        if(prev_visibility != $("#table-of-contents").css("visibility")) {
            switch(prev_visibility) {
            case "visible":
                $("#main-page").css("width", "100%");
                prev_visibility = "hidden";
                break;
            case "hidden":
                $("#main-page").css("width", "75%");
                prev_visibility = "visible";
                break;
            }
        }
    });

    $("#table-of-contents a").click(function(event) {
        var href = $(this).attr("href");
        $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
    });

    $("#back-to-top").click(function(event) {
        event.preventDefault();
        $("#main-page").animate({"scrollTop": "0"}, 250);
    });
});
