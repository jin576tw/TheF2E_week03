
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


$('#BusName_AllList').on('click','.BusName_list',function(){

    $('.Navbar').removeClass('Navbar_grey').addClass('Navbar_white')

    $('.BusName_MapStops').css('transform', 'translateY(0%)')

    $('.BsContnet').css('bottom','0px')



})

$('#backBusList').click(function(){

    $('.Navbar').addClass('Navbar_grey').removeClass('Navbar_white')
    $('.BusName_MapStops').css('transform', 'translateY(100%)')



})

let showMap = false

let hideTimeList = false

$('#BusRwdMap , #backBusTimeList').click(function(){

    hideTimeList = false

    showMap = !showMap

   if(showMap){

        $('.BusStop_Map').css('transform','translateX(0%)')

        $('.BusStop_TimeList').css('transform','translateY(50%)')

        $('.hideTimeList').show()


        $('.Navbar').removeClass('Navbar_white').addClass('Navbar_greyRWD')

   }else{

        $('.BusStop_Map').css('transform','translateX(100%)')

        $('.BusStop_TimeList').css('transform','translateY(0%)')
        $('.hideTimeList').hide()

        $('.Navbar').removeClass('Navbar_greyRWD').addClass('Navbar_white')
   }


})


$('.hideTimeList').click(function(){

    const HideIcon = $(this).children('svg')

    hideTimeList = !hideTimeList

    if(hideTimeList){

        $('.BusStop_TimeList').css('transform','translateY(95%)')

        HideIcon.css('transform','rotate(180deg)')

    }else{

        $('.BusStop_TimeList').css('transform','translateY(50%)')

        HideIcon.css('transform','rotate(0deg)')

    }
   


})


//////////////////////載入地圖//////////////////////// 


const myPostition = [25.0771246, 121.6205599]



const StopsMap = L.map('Map').setView(myPostition, 200);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiamluNTc2dHciLCJhIjoiY2t3aGlmNGZpMGpkdjJ0bWRjZGtmaWdxMCJ9.oSDC9BtuuG0J37A58wNovA'
}).addTo(StopsMap);


L.marker(myPostition).addTo(StopsMap)
L.marker([25.1, 121.7]).addTo(StopsMap)

const circle = L.circle(myPostition, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 100
}).addTo(StopsMap).bindPopup("I am a circle.");

L.polygon([
    myPostition,
    [25.1, 121.7],
    
]).addTo(StopsMap).bindPopup("I am a polygon.");



// console.log(circle);












