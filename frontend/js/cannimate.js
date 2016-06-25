        $(function() {
            function washingAnimate() {
                $( "#washing-icon" ).animate({
                    right: 50,
                    opacity: 1
                }, {
                    duration: 700,
                    specialEasing: {
                        opacity: "linear",
                    }
                }, function () {
                    console.log("complete");
                });                 
            }
            function radioAnimate() {
                $( "#radio-icon" ).animate({
                    right: 330,
                    opacity: 1
                }, {
                    duration: 700,
                    specialEasing: {
                        opacity: "linear",
                    }
                }, function () {
                    console.log("complete");
                }); 
            }
            function coffeeAnimate() {
                $( "#coffee-icon" ).animate({
                    right: -30,
                    opacity: 1
                }, {
                    duration: 700,
                    specialEasing: {
                        opacity: "linear",
                    }
                }, function () {
                    console.log("complete");
                }); 
            }
            setTimeout(radioAnimate, 50);
            setTimeout(washingAnimate, 250);
            setTimeout(coffeeAnimate, 450);

            function teleAnimate() {
                $( "#tele-icon" ).animate({
                    left: 230,
                    opacity: 1
                }, {
                    duration: 700,
                    specialEasing: {
                        opacity: "linear",
                    }
                }, function () {
                    console.log("complete");
                }); 
            }
            function fridgeAnimate() {
                $( "#fridge-icon" ).animate({
                    left: -40,
                    opacity: 1
                }, {
                    duration: 700,
                    specialEasing: {
                        opacity: "linear",
                    }
                }, function () {
                    console.log("complete");
                }); 
            }
            $(window).scroll(function() {
                var hT = $('#services').offset().top,
                   hH = $('#services').outerHeight(),
                   wH = $(window).height(),
                   wS = $(this).scrollTop();
                if (wS > (hT+hH-wH) ){
                    setTimeout(teleAnimate, 50);
                    setTimeout(fridgeAnimate, 250);
                }
            });
        });