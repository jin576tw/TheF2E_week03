
// 公車路線選擇(顏色)
$('.color_key').click(function(){

    SearchKey = ``

    let keyname =  $(this).text()

    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{


        SearchKey+=keyname

        $('#SearchRoute').val(SearchKey)

        getRouteNameData(SelectedRegion,SearchKey)



    }
   
  

})

// 公車路線選擇(數字)
$('.number_key').click(function(){


    let keyname =  $(this).text()

    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{
     
        SearchKey+=keyname

        $('#SearchRoute').val(SearchKey)

        getRouteNameData(SelectedRegion,SearchKey)




    }

})

// 刪除搜尋
$('#delete_key').click(function(){


    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{

        SearchKey = SearchKey.slice(0,SearchKey.length-1)

        $('#SearchRoute').val(SearchKey)


        getRouteNameData(SelectedRegion,SearchKey)

       

    }

    

})

// 清空搜尋
$('#Clear_key').click(function(){


    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{

        SearchKey = ``

        $('#SearchRoute').val(SearchKey)


        getRouteNameData(SelectedRegion,SearchKey)

       

    }

    

})


let hide = false

// RWD隱藏鍵盤
$('.hidekeyboard').click(function(){

    hide = !hide

    const KeyBoard =  $(this).parent('.BusName_keyboard')
    const HideIcon = $(this).children('svg')

    if(hide){

        KeyBoard.css('bottom','-270px')

        HideIcon.css('transform','rotate(180deg)')

    }else{

        KeyBoard.css('bottom','0px')

        HideIcon.css('transform','rotate(0deg)')

    }
    



})




//////////////////////// 單一公車地圖與時刻表 ///////////////////   

$('#backBusList').click(function(){

    $('.Navbar').addClass('Navbar_grey').removeClass('Navbar_white')
    $('.BusName_MapStops').css('transform', 'translateY(100%)')

    $('.navbar_RWD line').css('stroke','white')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_light.png')

    $('.navbar_page h5').css('color','white')

    $('.arrowRight path').css('fill','white')


})

let showMap = false

let hideTimeList = false

$('#BusRwdMap , #backBusTimeList').click(function(){

    hideTimeList = false

    showMap = !showMap

   if(showMap){

        $('.BusStop_Map').css('transform','translateX(0%)')

        $('.BusStop_TimeList').css('transform','translateY(60%)')

        $('.hideTimeList').show()


        $('.Navbar').removeClass('Navbar_white').addClass('Navbar_greyRWD')

        $('.Navbar').removeClass('Navbar_greyNavbar_greyRWD').addClass('Navbar_greyRWD')

        $('.navbar_logo img').attr('src','./static/images/HelloBus_light.png')


        $('.navbar_RWD line').css('stroke','white')
        

   }else{

        $('.BusStop_Map').css('transform','translateX(100%)')

        $('.BusStop_TimeList').css('transform','translateY(0%)')
        $('.hideTimeList').hide()

        $('.Navbar').removeClass('Navbar_greyRWD').addClass('Navbar_white')

        $('.navbar_logo img').attr('src','./static/images/HelloBus_dark.png')

        $('.navbar_RWD line').css('stroke','var(--bbGrey)')


   }


})


$('.hideTimeList').click(function(){

    const HideIcon = $(this).children('svg')

    hideTimeList = !hideTimeList

    if(hideTimeList){

        $('.BusStop_TimeList').css('transform','translateY(94%)')

        HideIcon.css('transform','rotate(180deg)')

    }else{

        $('.BusStop_TimeList').css('transform','translateY(60%)')

        HideIcon.css('transform','rotate(0deg)')

    }
   


})

$('#BusName_AllList').on('click','.BusName_list',function(){

    

    $('.Navbar').removeClass('Navbar_grey').addClass('Navbar_white').removeClass('Navbar_greyRWD')

    $('.navbarItem_warp li').css('color','var(--bbGrey)')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_dark.png')

    $('.navbar_page h5').css('color','var(--bbGrey)')

    $('.arrowRight path').css('fill','var(--bbGrey)')
    $('.navbar_RWD line').css('stroke','var(--bbGrey)')

    $('.BusName_MapStops').css('transform', 'translateY(0%)')

    $('.BsContnet').css('bottom','0px')

    $('.BusStop_TimeList').css('transform','translateY(0%)')

    if ($(window).width() < 768) {

        $('.BusStop_Map').css('transform','translateX(100%)')

    }

    // 公車名稱
    RouteName = $(this).attr('Route')

    $('#BusStop_number h1').text(RouteName)

    $('#backBusTimeList h5').text(RouteName)

    // 路線起點
    const Departure = $(this).children('.BusName_listBottom').children('.BusName_destination').children('h4:nth-of-type(1)').text()

    $('#BusStop_destination').children('h4:nth-of-type(1)').text(Departure)


    // 路線終點
    const Destination = $(this).children('.BusName_listBottom').children('.BusName_destination').children('h4:nth-of-type(2)').text()

    $('#BusStop_destination').children('h4:nth-of-type(2)').text(Destination)

    $('#TimeList_destination h3').text(Destination)
    
    
    // 串接地圖
    getBusStopMapData(SelectedRegion,RouteName);

    // 串接站點時間
    getBusStopTimeData(SelectedRegion,RouteName)
    

   


})




//////////////////////載入地圖//////////////////////// 


// const myPostition = [25.0771246, 121.6205599]

const StopsMap = L.map('BusStopMap').setView([0,0], 200);

L.tileLayer('https://api.mapbox.com/styles/v1/jin576tw/ckwiz4bqa3zz517qvd7ldx181/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamluNTc2dHciLCJhIjoiY2t3NHRhNG1hMGlvbjJ5bGpkenFxeDQxNyJ9.10nDPZgfQWX5zeYcLuv_rQ', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
}).addTo(StopsMap);




// L.marker(myPostition).addTo(StopsMap)
// L.marker([25.1, 121.7]).addTo(StopsMap)

// const circle = L.circle(myPostition, {
//     color: 'red',
//     fillColor: '#f03',
//     fillOpacity: 0.5,
//     radius: 100
// }).addTo(StopsMap).bindPopup("I am a circle.");

// L.polygon([
//     myPostition,
//     [25.1, 121.7],
    
// ]).addTo(StopsMap).bindPopup("I am a polygon.");



// console.log(circle);












