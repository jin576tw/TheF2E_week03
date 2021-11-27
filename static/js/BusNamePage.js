
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




$('#backBusList').click(function(){

    $('.Navbar').addClass('Navbar_grey').removeClass('Navbar_white')
    $('.BusName_MapStops').css('transform', 'translateY(100%)')

    $('.navbar_RWD line').css('stroke','white')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_light.png')

    $('.navbar_page h5').css('color','white')


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

    $('.Navbar').removeClass('Navbar_grey').addClass('Navbar_white')

    $('.navbarItem_warp li').css('color','var(--bbGrey)')

    $('.navbar_logo img').attr('src','./static/images/HelloBus_dark.png')

    $('.navbar_page h5').css('color','var(--bbGrey)')

    $('.navbar_RWD line').css('stroke','var(--bbGrey)')

    $('.BusName_MapStops').css('transform', 'translateY(0%)')

    $('.BsContnet').css('bottom','0px')


    // 公車名稱
    const RouteName = $(this).attr('Route')

    $('#BusStop_number h1').text(RouteName)

    $('#backBusTimeList h5').text(RouteName)

    // 路線起點
    const Departure = $(this).children('.BusName_listBottom').children('.BusName_destination').children('h4:nth-of-type(1)').text()

    $('#BusStop_destination').children('h4:nth-of-type(1)').text(Departure)


    // 路線終點
    const Destination = $(this).children('.BusName_listBottom').children('.BusName_destination').children('h4:nth-of-type(2)').text()

    $('#BusStop_destination').children('h4:nth-of-type(2)').text(Destination)



    getBusStopMapData(SelectedRegion,RouteName);


   


})




//////////////////////載入地圖//////////////////////// 


// const myPostition = [25.0771246, 121.6205599]

const StopsMap = L.map('BusStopMap').setView([0,0], 200);

L.tileLayer('https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png', {
maxZoom: 20,
attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',

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












