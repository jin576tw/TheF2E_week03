'use strict'



$('.navbar_logo').click(function(){

    $('#LandingPage').fadeIn(800).siblings('.Bus_page').fadeOut(1)

    $('.Navbar').removeClass('Navbar_grey').removeClass('Navbar_white')
    $('.navbar_page,.Route_SearchWarp').hide()

    $('.BusName_MapStops').css('transform', 'translateY(100%)')

})



$('.navbarItem_warp li:nth-of-type(1),#BusName_btn').click(function(){

    $('#BusStatusPage').fadeIn(800).siblings('.Bus_page').fadeOut(1)
    
    $('.Navbar').addClass('Navbar_grey').removeClass('Navbar_white')

    $('.navbar_page,.Route_SearchWarp').show()

    $('.BusName_MapStops').css('transform', 'translateY(100%)')


})



///////////////////選擇縣市/公車路線/////////////

$('#SearchRegion').change(function(){

    $('#SearchRoute').val('');
    $('.BusName_listBox').show().siblings('.BS_content').hide()

    SelectedRegion = TaiwanRegion($(this).val())


    getCityRouteData(SelectedRegion)
  

     

})


$('#SearchRoute').change(function(){



    console.log(SelectedRegion);

    SearchKey = $(this).val()

    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{

    
        getRouteNameData(SelectedRegion,SearchKey)
       

    

    }
   

})