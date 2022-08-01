var width = $(window).width();
var header = document.getElementById("myBarmenu");
var sticky = header.offsetTop;
var comp = document.getElementById("id_competences");
var comp_off = comp.offsetTop-comp.offsetHeight/2;
var menu_checked = false;

$( document ).ready(function() {
/* When page is scrolled fixed the barmenu */ 
    window.onscroll = function() {stickmenubar()};
    
    if (width < 640) {

        $("#nav-icon").fadeIn(400);

        $(".menubtn").click(function() {
            $(".menubtn").fadeOut(400).delay(400);
            $(".myBarmenu").animate({width: "0%"},{duration: 300, easing: "swing", queue: false});
            $("#nav-icon").animate({left: 0},{duration: 300, easing: "swing", queue: false});
            openedmenu = false;
            $("#nav-icon span").removeClass('box_rotate left_branch right_branch');
            $("#nav-icon-sp1").animate({top: "0%"},50, "swing");
            $("#nav-icon-sp2").animate({top: "33%"},50, "swing");
            $("#nav-icon-sp3").animate({top: "66%"},50, "swing");
            menu_checked = false;
        });
        

        $("#nav-icon").click(function() {
            var menuwitdh = $(".myBarmenu").width;
            if (menu_checked == false) {
                $(".myBarmenu").animate({width: "50vw"},{duration: 300, easing: "swing", queue: false});
                $(this).animate({left: "30vw"},{duration: 300, easing: "swing", queue: false});
                $(".menubtn").fadeIn(400);
                menu_checked = true;
            } else {
                $(".menubtn").fadeOut(400).delay(400);
                $(".myBarmenu").animate({width: 0},{duration: 300, easing: "swing", queue: false});
                $(this).animate({left: 0},{duration: 300, easing: "swing", queue: false});
                menu_checked = false;
            }
        });
        
        $(".projectbtn").click(function() {
            $(this).parent().animate({height:"0%", top: "50%"},200, "swing");
            $(this).parent().fadeOut(100);
        });
    
        $(".portfolio_project_img").click(function(){
            $(this).parent().children("#portfolio_hidden_timebomb").css("left", "50%");
            $(this).parent().children("#portfolio_hidden_timebomb").css("top", "50%");
            $(this).parent().children("#portfolio_hidden_timebomb").css("height", "0");
            $(this).parent().children("#portfolio_hidden_timebomb").css("width", "0");
            $(this).parent().children("#portfolio_hidden_timebomb").css("overflow", "hidden");
            $(this).parent().children("#portfolio_hidden_timebomb").css("background-color", "white");
            $(this).parent().children("#portfolio_hidden_timebomb").fadeIn(200); 
            $(this).parent().children("#portfolio_hidden_timebomb").animate({width:"100%", left:0}, {duration:300 ,easing: "swing", queue: true} );
            $(this).parent().children("#portfolio_hidden_timebomb").animate({height:"100vh", top: 0}, {duration:500 ,easing: "swing", queue: true} );
            $(this).parent().children("#portfolio_hidden_timebomb").css("background-color", "rgba(0, 0, 0, 0.9)");
    
        });
        
    } else {
        $(".diplomes_content").mouseover(function() {
            $(this).animate({marginLeft: "150px"},{duration: 200, easing: "swing", queue: false});
        });
    
        $(".diplomes_content").mouseleave(function() {
            $(this).animate({marginLeft: "80px"}, {duration: 200, easing: "swing", queue: false});
        });

        $(".portfolio_project").mouseleave(function() {
            $(this).children("#portfolio_hidden_timebomb").animate({height:"0%", top: "50%"},200, "swing");
            $(this).children("#portfolio_hidden_timebomb").fadeOut(100);
        });
    
        $(".portfolio_project").click(function(){
            $(this).children("#portfolio_hidden_timebomb").css("left", "50%");
            $(this).children("#portfolio_hidden_timebomb").css("top", "50%");
            $(this).children("#portfolio_hidden_timebomb").css("height", "0");
            $(this).children("#portfolio_hidden_timebomb").css("width", "0");
            $(this).children("#portfolio_hidden_timebomb").css("overflow", "hidden");
            $(this).children("#portfolio_hidden_timebomb").css("background-color", "white");
            $(this).children("#portfolio_hidden_timebomb").fadeIn(200); 
            $(this).children("#portfolio_hidden_timebomb").animate({width:"100%", left:0}, {duration:300 ,easing: "swing", queue: true} );
            $(this).children("#portfolio_hidden_timebomb").animate({height:"85vh", top: "5vh"}, {duration:500 ,easing: "swing", queue: true} );
            $(this).children("#portfolio_hidden_timebomb").css("background-color", "rgba(0, 0, 0, 0.9)");
    
        });

        /*$(".portfolio_project_show").mouseleave(function() {
            $(this).animate({height: "100%", width: "100%"},{duration: 200, easing: "swing", queue: false});
        });
        $(".portfolio_project_show").mouseover(function() {
            $(this).animate({height: "110%", width: "110%"},{duration: 200, easing:"swing", queue: false});
        });*/
    }

    window.addEventListener('scroll', moveAll);
});

function moveAll () {
    if (window.pageYOffset > comp_off) {
        window.removeEventListener('scroll', moveAll);
        move ("myBar1", 90);
        move ("myBar2", 70);
        move ("myBar3", 70);
        move ("myBar4", 60);
        move ("myBar5", 60);
        move ("myBar6", 90);
        move ("myBar7", 80);
        move ("myBar8", 60);
    }
}

function move(divid, maxvalue) {
    var i = 0;
    if (i == 0) {
        i = 1;
        var elem = document.getElementById(divid);
        var width = 1;
        $('#'+divid).animate({width: maxvalue+'%'},{duration: 800, easing: 'swing', queue: true});
        $('#'+divid).children("#percent").delay(700).fadeIn(200);
    }
}

function hovermenusection (divid, btnid) {
    var lem = document.getElementsByClassName("menubtn");
    var elmnt = document.getElementById(divid);
    var divoffst = elmnt.offsetTop;
    if (window.pageYOffset > divoffset && window.pageYOffset < divoffset+580) {
        this.classList.add("hoveredmenubtn");
    } else {
        header.classList.remove("hoveredmenubtn");
    }
}

function scrolldown(divid) {
    var elmnt = document.getElementById(divid);
    elmnt.scrollIntoView({block: "start"});
}

function openmenu() {
    $(".myBarmenu").animate({width: "40%"},{duration: 200, easing: "swing", queue: false});
}

function stickmenubar () {
    if (width > 640){
        if (window.pageYOffset > sticky) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    } else {

    }
}