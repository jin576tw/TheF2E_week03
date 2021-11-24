'use strict'



$('.navbar_logo').click(function(){

    $('#LandingPage').fadeIn(800)
    $('#LandingPage').siblings('.Bus_page').fadeOut(1)

})



$('.navbarItem_warp li:nth-of-type(1),#BusStatus_btn').click(function(){

    $('#BusStatusPage').fadeIn(800)
    $('#BusStatusPage').siblings('.Bus_page').fadeOut(1)





})