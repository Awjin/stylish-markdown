$(document).ready(function() {
    $("#main-page").css("right", 0);

    if($("#table-of-contents").length > 0) {
        $(window).on("load resize", function(event) {
            var window_width = $(window).outerWidth();
            var contents_left = $("#table-of-contents").offset().left;
            var main_page_right = window_width - contents_left;

            $("#main-page").css("right", main_page_right);
        });

        $("#table-of-contents a").click(function(event) {
            event.preventDefault();
            this.blur();
            var href = $(this).attr("href");
            $("#main-page").animate({"scrollTop": $(href)[0].offsetTop}, 250);
        });
    }

    $("#back-to-top").click(function(event) {
        event.preventDefault();
        this.blur();
        $("#main-page").animate({"scrollTop": "0"}, 250);
    });
});