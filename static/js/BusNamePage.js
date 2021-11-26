
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

    $('.BusStop_content').css('bottom','0px')

})