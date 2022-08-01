var openedmenu = false;

$( document ).ready(function() {
    $("#nav-icon span").addClass('box_transition');
    $("#nav-icon").click(function() {
        if (!openedmenu) {
            openedmenu = true;
            $("#nav-icon span").animate({top: "30%"},50, "swing");
            $(this).children("#nav-icon-sp1").addClass('left_branch');
            $(this).children("#nav-icon-sp2").addClass('right_branch');
            $(this).children("#nav-icon-sp3").addClass('right_branch');
        } else {
            openedmenu = false;
            $("#nav-icon span").removeClass('box_rotate left_branch right_branch');
            $("#nav-icon-sp1").animate({top: "0%"},50, "swing");
            $("#nav-icon-sp2").animate({top: "33%"},50, "swing");
            $("#nav-icon-sp3").animate({top: "66%"},50, "swing");
        }
    });
});