'use strict'


// 公車首頁
$('.navbar_logo').click(function(){

    $('#LandingPage').show().siblings('.Bus_page').hide()

    $('.Navbar').removeClass('Navbar_grey').removeClass('Navbar_white')

 

    $('.navbarItem_warp li').css('color','white')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_light.png')

    $('.navbar_page h5').css('color','white')

    $('.arrowRight path').css('fill','white')

    $('.navbar_page,.Route_SearchWarp').hide()

    $('.BusName_MapStops').css('transform', 'translateY(100%)')

    setTimeout(()=>{



        $('.circle_bg').css('transform','scale(1)').css('box-shadow',' 0 0 0 3000px white')
    
    
    
    },200)

    if ($(window).width() < 768) {

        $('.Navbar').hide()

    }
    // 每15秒更新資料
    StopUpdated()
    

})



// 公車動態
$('.navbarItem_warp li:nth-of-type(1),#BusName_btn').click(function(){

    $('#BusStatusPage').show().siblings('.Bus_page').hide()
    
    
    $('.Navbar').show()

    $('.Navbar').addClass('Navbar_grey').removeClass('Navbar_white')


    $('.navbarItem_warp li').css('color','white')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_light.png')

    $('.navbar_page h5').css('color','white')

    $('.arrowRight path').css('fill','white')

    $('.navbar_page,.Route_SearchWarp').show()

    $('.BusName_MapStops').css('transform', 'translateY(100%)')

    $('.BsContnet').css('bottom','-300px')

    $('.circle_bg').css('transform','scale(0.4)').css('box-shadow',' 0 0 0 3000px rgba(255, 255, 255, 0.829)')

    // 每15秒更新資料
    StopUpdated()

})



///////////////////選擇縣市/公車路線/////////////

$('#SearchRegion').change(function(){

    $('#SearchRoute').val('');
    $('.BusName_listBox').show().siblings('.BS_content').hide()

    SelectedRegion = TaiwanRegion($(this).val())


    getCityRouteData(SelectedRegion)
  

     

})


$('#SearchRoute').change(function(){



    // console.log(SelectedRegion);

    SearchKey = $(this).val()

    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{

    
        getRouteNameData(SelectedRegion,SearchKey)
       

    

    }
   

})