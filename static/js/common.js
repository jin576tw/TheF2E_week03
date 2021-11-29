// 使用api
function getAuthorizationHeader() {
  //  填入自己 ID、KEY 開始
  let AppID = "2d9b9a569dab44dfbf33035ed2846ac6";
  let AppKey = "0Ly8nNY_Mw4fL3dcFmKXx4y1mZo";
  //  填入自己 ID、KEY 結束
  let GMTString = new Date().toGMTString();
  let ShaObj = new jsSHA("SHA-1", "TEXT");
  ShaObj.setHMACKey(AppKey, "TEXT");
  ShaObj.update("x-date: " + GMTString);
  let HMAC = ShaObj.getHMAC("B64");
  let Authorization =
    'hmac username="' +
    AppID +
    '", algorithm="hmac-sha1", headers="x-date", signature="' +
    HMAC +
    '"';
  return { Authorization: Authorization, "X-Date": GMTString };
}


function TaiwanRegion(region){

  if(region == '臺北市'){
    return 'Taipei'
  }else if(region == '新北市'){

    return 'NewTaipei'
  
  }else if(region == '桃園市'){

    return 'Taoyuan'
  }
  else if(region == '基隆市'){

    return 'Keelung'
  }
  else if(region == '新竹市'){

    return 'Hsinchu'
  }
  else if(region == '新竹縣'){

    return 'HsinchuCounty'
  }
  else if(region == '宜蘭縣'){

    return 'YilanCounty'
  }
  else if(region == '臺中市'){

    return 'Taichung'

  }
  else if(region == '苗栗縣'){

    return 'MiaoliCounty'

  }
  else if(region == '彰化縣'){
    return 'ChanghuaCounty'
  }
  else if(region == '南投縣'){
    return 'NantouCounty'
  }
  else if(region == '雲林縣'){
    return 'YunlinCounty'
  }
  else if(region == '臺南市'){
    return 'Tainan'
  }
  else if(region == '高雄市'){
    return 'Kaohsiung'
  }
  else if(region == '嘉義縣'){
    return 'ChiayiCounty'
  }
  else if(region == '嘉義市'){
    return 'Chiayi'
  }
  else if(region == '屏東縣'){
    return 'PingtungCounty'
  }
  else if(region == '花蓮縣'){
    return 'HualienCounty'
  }
  else if(region == '臺東縣'){
    return 'TaitungCounty'
  }
  else if(region == '金門縣'){
    return 'KinmenCounty'
  }
  else if(region == '澎湖縣'){
    return 'PenghuCounty'
  }
  else if(region == '連江縣'){
    return 'LienchiangCounty'
  }
 
}

function CityName(city){
  if(city == 'Taipei'){
    return '臺北'
  }
  else if (city == 'NewTaipei'){
    return '新北'
  }
  else if (city == 'Taoyuan'){
    return '桃園'
  }
  else if (city == 'Keelung'){
    return '基隆'
  }
  else if (city == 'Hsinchu'){
    return '新竹市'
  }
  else if (city == 'HsinchuCounty'){
    return '新竹縣'
  }
  else if (city == 'YilanCounty'){
    return '宜蘭'
  }
  else if (city == 'Taichung'){
    return '臺中'
  }
  else if (city == 'MiaoliCounty'){
    return '苗栗'
  }
  else if (city == 'ChanghuaCounty'){
    return '彰化'
  }
  else if (city == 'NantouCounty'){
    return '南投'
  }
  else if (city == 'YunlinCounty'){
    return '雲林'
  }
  else if (city == 'Tainan'){
    return '臺南'
  }
  else if (city == 'Kaohsiung'){
    return '高雄'
  }
  else if (city == 'ChiayiCounty'){
    return '嘉義縣'
  }
  else if (city == 'Chiayi'){
    return '嘉義市'
  }
  else if (city == 'PingtungCounty'){
    return '屏東'
  }
  else if (city == 'HualienCounty'){
    return '花蓮'
  }
  else if (city == 'TaitungCounty'){
    return '臺東'
  }
  else if (city == 'KinmenCounty'){
    return '金門'
  }
  else if (city == 'PenghuCounty'){
    return '澎湖'
  }
  else if (city == 'LienchiangCounty'){
    return '連江縣'
  }
 
}


function BusName_list(data){

  return `
  <div class="BusName_list" Route="${data.RouteName.Zh_tw}">

    <div class="BusName_listTop">
        <div class="BusName_num">
          <h3>${data.RouteName.Zh_tw}</h3>
        </div>

        <div class="BusName_fav">
        
        <svg viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.4109 2.25099L10.4105 2.25147L9.71789 2.96512L9.00026 3.70461L8.28263 2.96512L7.59006 2.25147L7.58891 2.25028C6.14757 0.760131 3.87533 0.577931 2.39662 1.83776C0.634384 3.34207 0.537798 6.05599 2.11796 7.69008C2.11801 7.69013 2.11806 7.69018 2.1181 7.69022C2.1182 7.69032 2.11829 7.69042 2.11838 7.69052L8.92038 14.714C8.94722 14.7417 8.97433 14.75 8.9985 14.75C9.02267 14.75 9.04978 14.7417 9.07662 14.714L15.879 7.69008L15.8792 7.68988C17.4625 6.056 17.3662 3.34246 15.6042 1.83804L10.4109 2.25099ZM10.4109 2.25099C11.8563 0.759632 14.1253 0.578285 15.6037 1.83755L10.4109 2.25099Z" stroke="#8B94B3" stroke-width="2"/>
            </svg>
        
            
        </div>
        

        
    </div>
    <div class="BusName_listBottom">

        <div class="BusName_destination">

          <h4>${data.DepartureStopNameZh}</h4>
          <div class="destination_arrow">
              <svg viewBox="0 0 12 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.85798 0.563633V1.64314H3.14202V0.563633C3.14202 0.0624943 2.53613 -0.188474 2.18176 0.165877L0.164759 2.18288C-0.0549198 2.40256 -0.0549198 2.75869 0.164759 2.97837L2.18176 4.99537C2.53611 5.34972 3.14202 5.09875 3.14202 4.59761V3.51813H8.85798V4.59764C8.85798 5.09878 9.46386 5.34974 9.81824 4.99539L11.8352 2.97839C12.0549 2.75871 12.0549 2.40258 11.8352 2.1829L9.81824 0.1659C9.46389 -0.188474 8.85798 0.0624943 8.85798 0.563633Z" fill="#4C546A"/>
              </svg>
              
          </div>
          <h4>${data.DestinationStopNameZh}</h4>
        </div>

        <h5>${CityName(data.City)}</h5>



    </div>
  
  </div>`
}


function BusTime_List(data){

  // 秒轉成分鐘
  function SecToMin (sec){
      return Math.floor(sec / 60)
  }


  // 當車正常發車時
  if(data.StopStatus == 0){


      if(data.EstimateTime <= 180){

      
          return `<div class="TimeList">

                      <div class="TimeList_Top">
                          <div class="TimeList_icon">
                          <div class="TimeList_icon_outside near_icon">
                              <div class="TimeList_icon_inside"></div>
                          </div>
                          <div class="TimeList_icon_line"></div>
                          </div>
                          <div class="TimeList_time near_time">
                          <h3>即將到站</h3>
                          </div>
                          <div class="TimeList_name near_time">
                          <h3>${data.StopName.Zh_tw}</h3>
                          </div>
                      </div>
                      
                  </div>`

      }else{


          return `<div class="TimeList">

                      <div class="TimeList_Top">
                          <div class="TimeList_icon">
                          <div class="TimeList_icon_outside">
                              <div class="TimeList_icon_inside"></div>
                          </div>
                          <div class="TimeList_icon_line"></div>
                          </div>
                          <div class="TimeList_time">
                          <h3>${SecToMin(data.EstimateTime)}分鐘</h3>
                          </div>
                          <div class="TimeList_name">
                          <h3>${data.StopName.Zh_tw}</h3>
                          </div>
                      </div>
                      
                  </div>`



      }
      
     


  }else if(data.StopStatus == 1){

      return `<div class="TimeList">

                  <div class="TimeList_Top">
                      <div class="TimeList_icon">
                      <div class="TimeList_icon_outside">
                          <div class="TimeList_icon_inside"></div>
                      </div>
                      <div class="TimeList_icon_line"></div>
                      </div>
                      <div class="TimeList_time default_time">
                      <h3>尚未發車</h3>
                      </div>
                      <div class="TimeList_name default_time">
                      <h3>${data.StopName.Zh_tw}</h3>
                      </div>
                  </div>
                  
              </div>`


  }else if(data.StopStatus == 2){

      

      return `<div class="TimeList">

      <div class="TimeList_Top">
          <div class="TimeList_icon">
          <div class="TimeList_icon_outside">
              <div class="TimeList_icon_inside"></div>
          </div>
          <div class="TimeList_icon_line"></div>
          </div>
          <div class="TimeList_time default_time">
          <h3>交管不停靠</h3>
          </div>
          <div class="TimeList_name default_time">
          <h3>${data.StopName.Zh_tw}</h3>
          </div>
      </div>
      
  </div>`

  

  }else if(data.StopStatus == 3){



      return `<div class="TimeList">

                  <div class="TimeList_Top">
                      <div class="TimeList_icon">
                      <div class="TimeList_icon_outside">
                          <div class="TimeList_icon_inside"></div>
                      </div>
                      <div class="TimeList_icon_line"></div>
                      </div>
                      <div class="TimeList_time default_time">
                      <h3>末班車已過</h3>
                      </div>
                      <div class="TimeList_name default_time">
                      <h3>${data.StopName.Zh_tw}</h3>
                      </div>
                  </div>
                  
              </div>`


  }else if(data.StopStatus == 4){


      return `<div class="TimeList">

                  <div class="TimeList_Top">
                      <div class="TimeList_icon">
                      <div class="TimeList_icon_outside">
                          <div class="TimeList_icon_inside"></div>
                      </div>
                      <div class="TimeList_icon_line"></div>
                      </div>
                      <div class="TimeList_time default_time">
                      <h3>今日未營運</h3>
                      </div>
                      <div class="TimeList_name default_time">
                      <h3>${data.StopName.Zh_tw}</h3>
                      </div>
                  </div>
                  
              </div>`

  }


}

let BusData = []

let BusStopsMapData = []

let BusStopsTimeData = []

let BusPositionArr = []

let Direction = null

let SelectedRegion = ``

let RouteName =``

let SearchKey = ``


// 自訂公車站點圖示
const BusStopIcon = L.icon({
  iconUrl: 'BusStopIcon.svg',
  iconSize: [18, 18],
  popupAnchor: [0, -20]
});

// 公車圖示
const BusNowIcon = L.icon({
  iconUrl: 'BusNowIcon.svg',
  iconSize: [30, 30],
  popupAnchor: [0, -20]
});





// 設定地圖中心點
function setMapView(map,data){

  const BusStops = data[0].Stops

  const BusStopsLength = BusStops.length

        
  const m =(Math.round(BusStopsLength / 2))


  const middleLat =  BusStops[m].StopPosition.PositionLat

  const middleLan =  BusStops[m].StopPosition.PositionLon

  // console.log( middleLat,middleLan);

  map.setView([ middleLat, middleLan], 14);


}


// 設定地圖站點與路線
function setBusStopsMarker(map,data){


  for(let i = 0 ; i < data[0].Stops.length ;i++){  


    let Buslat = data[0].Stops[i].StopPosition.PositionLat

    let BusLon =data[0].Stops[i].StopPosition.PositionLon


    let BusPosition = [Buslat,BusLon]

    BusPositionArr.push(BusPosition)

    // console.log(BusPosition);

    
    // 車站名稱
    let BusStopsPopup = `<div class="stationFav">
          <h5>${data[0].Stops[i].StopName.Zh_tw}</h5>

          <div class="stationFavIcon">

              <svg  viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11.3892 2.98091L11.3901 2.97997C12.5614 1.78542 14.3263 1.70641 15.4154 2.62328C16.7835 3.77812 16.86 5.86435 15.6303 7.11876L15.6299 7.11916L9.24846 13.632L2.8679 7.12003C2.86785 7.11997 2.86779 7.11991 2.86774 7.11986C1.64022 5.86534 1.71688 3.77829 3.0851 2.62332C4.17494 1.70575 5.94255 1.78655 7.10902 2.97855L7.11133 2.98091L7.82314 3.70589L9.25027 5.15946L10.6774 3.70589L11.3892 2.98091Z"  stroke="white" stroke-width="1"/>
              </svg>

          </div>
               
      </div> `


    var BusStopsOptions =
    {
        'height':'300',
        'className' : 'BusStopsPopUp'
    }

    L.marker(BusPosition, {
      icon: BusStopIcon,
      opacity: 1.0
    }).addTo(map).bindPopup(BusStopsPopup,BusStopsOptions);
          
        



  }

  // console.log(BusPositionArr);

  L.polyline(BusPositionArr,{color: 'var(--light_blue)',weight:5}).addTo(map)

}


// 設定當前公車圖標
function setNowBusPositionMarker(TimeData,MapData,map){


  // 當車正常發車時
  if(TimeData.StopStatus == 0){
     
    //距離站點三分鐘
    if(TimeData.EstimateTime <= 180){
   
       // 從地圖資料比對
       for(let j = 0 ; j < MapData.Stops.length ;j++){ 

          // 取得ID相同位置
         if(MapData.Stops[j].StopUID == TimeData.StopUID){


           let BusLat = MapData.Stops[j].StopPosition.PositionLat 
           let BusLon = MapData.Stops[j].StopPosition.PositionLon

           let BusPosition = [BusLat,BusLon]

          //  console.log(BusPosition);

            L.marker(BusPosition, {
              icon: BusNowIcon,
              opacity: 1.0
            }).addTo(map)
           
          
         }

      }


    }

}




}

// 取得城市公車路線資料
function getCityRouteData(city){
  

  axios.get(

    `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${city}?$top=30&$format=JSON`,

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

    
    // console.log(BusData);
    

    
  })
  .catch(function (error) {


    $('.BusName_listEmpty').show().siblings('.BS_content').hide()
    console.log(error);
  }); 



}


// 抓取公車路線資料
function getRouteNameData(city,route){

  axios.get(

    `https://ptx.transportdata.tw/MOTC/v2/Bus/Route/City/${city}/${route}?$top=30&$format=JSON`,

  {
      headers: getAuthorizationHeader()
  }
  )
  .then(function (response) {


    BusData = response.data;


    let busDataListArr = ``

    let BusName_listArr = ``


    if(BusData.length == 0){


        $('.BusName_listEmpty').show().siblings('.BS_content').hide()



    }else{

        $('.BusName_listBox').show().siblings('.BS_content').hide()


        for(let i = 0 ; i < BusData.length ;i++){ 

            // 搜尋選項   
            let busDataList = `<option value="${BusData[i].RouteName.Zh_tw}">${BusData[i].RouteName.Zh_tw}</option>`

            busDataListArr += busDataList

            $('#BusDataList').html( busDataListArr)



            // 搜尋結果
            BusName_listArr += BusName_list(BusData[i]) 

            $('#BusName_AllList').html(BusName_listArr)


        }

    }

    
    // console.log(BusData);
    

    
  })
  .catch(function (error) {


    $('.BusName_listEmpty').show().siblings('.BS_content').hide()
    console.log(error);
  }); 





}



// 抓取公車站地圖
function getBusStopMapData(city,route){


   
    axios.get(

        `https://ptx.transportdata.tw/MOTC/v2/Bus/StopOfRoute/City/${city}/${route}?$top=30&$format=JSON
        `,
    
      {
          headers: getAuthorizationHeader()
      }
      )
      .then(function (response) {
    
    
        BusStopsMapData = response.data;

      
        
        // 設定地圖中心點
        setMapView(StopsMap,BusStopsMapData)

        
        // 設定地圖站點與路線
        setBusStopsMarker(StopsMap,BusStopsMapData)


        // console.log(BusStopsMapData);

      
    
        
      })
      .catch(function (error) {
    
    
      
        console.log(error);
      }); 




}

// 抓取公車站點時間(城市/地點/方向)
function getBusStopTimeData(city,route,dir){


  axios.get(

    `https://ptx.transportdata.tw/MOTC/v2/Bus/EstimatedTimeOfArrival/City/${city}/${route}?$top=30&$format=JSON

    `,

  {
      headers: getAuthorizationHeader()
  }
  )
  .then(function (response) {



    BusStopsTimeData = response.data;

    let BusTime_ListArr =``

    for(let i = 0 ; i < BusStopsTimeData.length ;i++){ 

         // 挑選方向
        if(BusStopsTimeData[i].Direction == dir){


            BusTime_ListArr += BusTime_List(BusStopsTimeData[i])



            // 設定公車當前位置圖示
            setNowBusPositionMarker(BusStopsTimeData[i],BusStopsMapData[0],StopsMap)
           
     
            
     


        }

    
    }
    
    
    $('#TimeList_Content').html(BusTime_ListArr)

    




  

    
  })
  .catch(function (error) {



    console.log(error);
  }); 




}

 
// 更新站點資料
let Updated = null

function UpdateBusData(){

  console.log('Bus Updated')

  getBusStopTimeData(SelectedRegion,RouteName,Direction)

}

function StopUpdated() {
  clearInterval(Updated);
}

// function updateBusData(){

//   console.log(SelectedRegion,RouteName,Direction)

// }


//   Interval((city,route,dir)=>{

//     console.log(city,route,dir);
   


//     // getBusStopMapData(city,route)

//     // getBusStopTimeData(city,route,dir)
     
  
//   },3000)

//    set
// }

// function myStopFunction() {
//   console.log('hi');
//   clearInterval(UpdateBusData);
// }




// updateBusData(SelectedRegion,RouteName,Direction)