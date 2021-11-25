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



///////////////////選擇縣市/公車路線/////////////

$('#SearchRegion').change(function(){


    $('.BusName_listBox').show().siblings('.BS_content').hide()

    SelectedRegion = TaiwanRegion($(this).val())


    axios.get(

        BusRoute_city(SelectedRegion),
  
      {
          headers: getAuthorizationHeader()
      }
      )
      .then(function (response) {
  
  
        BusData = response.data;


        let busDataListArr = ``

        let BusName_listArr = ``


        for(let i = 0 ; i < BusData.length ;i++){ 

            // 搜尋選項   
            let busDataList = `<option value="${BusData[i].RouteName.Zh_tw}">${BusData[i].RouteName.Zh_tw}</option>`

            busDataListArr += busDataList

            $('#BusDataList').html( busDataListArr)



            // 搜尋結果
            BusName_listArr += BusName_list(BusData[i]) 

            $('#BusName_AllList').html(BusName_listArr)


        }

        
        console.log(BusData);
        
  
        
      })
      .catch(function (error) {


        $('.BusName_listEmpty').show().siblings('.BS_content').hide()
        console.log(error);
      }); 
  

     

})


$('#SearchRoute').change(function(){

    // console.log($(this).val());

    console.log(SelectedRegion);

    let SearchInput = $(this).val()

    if(SelectedRegion == ''){

        alert('請先選擇縣市')

    }else{


        axios.get(

            BusRoute_RouteName(SelectedRegion,SearchInput),
      
          {
              headers: getAuthorizationHeader()
          }
          )
          .then(function (response) {
      
      
            BusData = response.data;
    
    
            let busDataListArr = ``
    
            let BusName_listArr = ``
    
    
            for(let i = 0 ; i < BusData.length ;i++){ 
    
                // 搜尋選項   
                let busDataList = `<option value="${BusData[i].RouteName.Zh_tw}">${BusData[i].RouteName.Zh_tw}</option>`
    
                busDataListArr += busDataList
    
                $('#BusDataList').html( busDataListArr)
    
    
    
                // 搜尋結果
                BusName_listArr += BusName_list(BusData[i]) 
    
                $('#BusName_AllList').html(BusName_listArr)
    
    
            }
    
            
            console.log(BusData);
            
      
            
          })
          .catch(function (error) {
    
    
            $('.BusName_listEmpty').show().siblings('.BS_content').hide()
            console.log(error);
          }); 

       

        


    }
   




})