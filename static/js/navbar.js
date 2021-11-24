'use strict'



$('.navbar_logo').click(function(){

    $('#LandingPage').fadeIn(800).siblings('.Bus_page').fadeOut(1)



   

    $('.Navbar').removeClass('Navbar_grey')
    $('.navbar_page,.Route_SearchWarp').hide()

})



$('.navbarItem_warp li:nth-of-type(1),#BusName_btn').click(function(){

    $('#BusStatusPage').fadeIn(800).siblings('.Bus_page').fadeOut(1)


    
    $('.Navbar').addClass('Navbar_grey')

    $('.navbar_page,.Route_SearchWarp').show()





})