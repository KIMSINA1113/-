/*이미지 슬라이드*/
$(function(){
	var imgItems = $('.slider li').length;
  
  var imgPos = 1;
  for(i = 1; i <= imgItems; i++){
  	$('.pagination').append('<li><span>●</span></li>');
  }
  
  $('.slider li').hide();
  $('.slider li:first').show();
  $('.pagination li:first').css({'color': '#cd6e2e'});
  
  $('.pagination li').click(pagination); 
  $('.left_btn span').click(prevSlider);
  $('.right_btn span').click(nextSlider);
 
  
  function pagination(){
 		var paginationPos = $(this).index() + 1;
    $('.slider li').hide();
    $('.slider li:nth-child('+ paginationPos +')').fadeIn();
    $('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child('+ paginationPos +')').css({'color': '#cd6e2e'});
    imgPos = paginationPos;
  }
  
  function nextSlider(){
  	if(imgPos >= imgItems){
    	imgPos = 1;
    }else{imgPos++;}
  	$('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
    /*$('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#cd6e2e'});*/
  }
  function prevSlider(){
  	if(imgPos <= 1){
    	imgPos = imgItems;
    }else{imgPos--;}
  	$('.slider li').hide();
    $('.slider li:nth-child('+ imgPos +')').fadeIn();
    /*$('.pagination li').css({'color': '#858585'});
    $('.pagination li:nth-child('+ imgPos +')').css({'color': '#cd6e2e'});*/
  }
  setInterval(function(){
  	nextSlider();
  },4000);
  
});

$(document).ready(function() { 
    $('.slider').css({ 
        mode: 'vertical', 
        slideMargin: 5, 
        pager:false, 
        onSliderLoad: function(){ 
            $("#edd").css("visibility", "visible").animate({opacity:1}); 
        } 
    }); 
});


/*담보물 위치 지도*/
			function mapZoomControl(){
			zoomDiv = $("#mapZooomDiv").val();
			if(zoomDiv=="0"){
				$("#mapZooomDiv").val("1");
				$(".slideshow").hide();
                $(".tb_warranty").css("width","98%");
				/*$("#terminalSetting").hide();*/
				$("#damboMapWrap").css("width","100%");
				$("#damboMapWrap").css("height","390px");
				$("#mapDiv").css("width","100%");
				$("#mapDiv").css("height","91%");
                $("#mapDiv").css("padding","0px");
             
				$("#ddd").css("height","600px");
				google.maps.event.trigger(map, 'resize');

				$("#btnZoom").attr("src","images/map_zoom_out.jpg");
				$("#btnMapDiv02").show();
				$("#btnCell").show();
				$("#btnCell2").show();
				$("#btnGPS").show();
				$("#btnInstall").show();
				//map.panTo(new google.maps.LatLng(lat, lng));
			
				map.panTo(new google.maps.LatLng(recent_lat, recent_lng));
			}else{
				$("#mapZooomDiv").val("0");
				$(".slideshow").show();
                $(".tb_warranty").css("width","48%");
				/*$("#terminalSetting").show();*/
				$("#damboMapWrap").css("width","100%");
				$("#damboMapWrap").css("height","374px");
				$("#mapDiv").css("height","92%");
                $("#mapDiv").css("padding","15px");
				$("#ddd").css("height","410px");
				google.maps.event.trigger(map, 'resize');
				$("#btnZoom").attr("src","images/map_zoom.jpg");
				$(".dateSelectWrap").hide();
				$("#btnMapDiv02").hide();
				$("#btnCell").hide();
				$("#btnCell2").hide();
				$("#btnGPS").hide();
				$("#btnInstall").hide();
				$("#btnInstall").removeClass("active");
				$("#dateSel1").show();
				$("#dateSel2").show();
				$("#addressSel").hide();
				diableListener = true;
				//map.panTo(new google.maps.LatLng(lat, lng));
				map.panTo(new google.maps.LatLng(recent_lat, recent_lng));
			}	
		}
function NoNull(val){
	return (val!= "null"? val:"");
}
function replaceAll(str, searchStr, replaceStr) {
    return str.split(searchStr).join(replaceStr);
}

$(document).ready(function() {
	//map setting
	//최초 세팅

	geocoder = new google.maps.Geocoder();
    var latlng = new google.maps.LatLng(36.368617,127.368020);
	var myOptions = {
			  zoom: 14,
			  center: latlng,
			  scrollwheel : false,
			  mapTypeControl : true,
			  mapTypeId: google.maps.MapTypeId.ROADMAP,
			  fullscreenControl:false
			}

	map = new google.maps.Map(document.getElementById("map"), myOptions);
	

	
});

$(function(){
	visualno = 0;
	rolling_v = null;

	$(document).on("mouseover", ".listbox img", function(event){
		if (visualno!=$(".listbox img").index($(this))){
			clearTimeout(rolling_v);
			visualno=$(".listbox img").index($(this));
			$(".pht").fadeOut(500);
			$(".pht:eq("+visualno+")").fadeIn(500);
		}
	});
	
	var test = function() {
		alert("test");
	};
	
	setImage();
    	
    	//$("#image1").attr("src", "https://corsivacdncontent.blob.core.windows.net/pororoparksg/images/pororofriends-image-1.png");
});
    
var setImage = function() {
	var warrantySrl = "109862";
	
	$.ajax({
		type: "GET",
		url: "http://localhost:5000/customer/selectImageFile",
		headers: {"warrantySrl": warrantySrl},
		contentType: "application/json; charset=utf-8",
		cache: false,
		success: function(result) {
			var input = "";
    			$.each(result, function(i, list) {
    				input += "<img src='http://localhost:5000/customer/selectImage?imageSrl=" 
    						+ list.image_srl + "' class='pht'>";
    			});
    			
    			input += "<div class='thumbox clear' style='position:absolute;'>";
    			input += "	<ul class='listbox'>";
    			
    			$.each(result, function(i, list) {
    				input += "<li class='ll'><img src='http://localhost:5000/customer/selectImage?imageSrl="
    						+ list.image_srl + "'></li>";
    			});
    			
    			input += "	</ul>";
    			input += "</div>";
			$("#imageBox").html("");
			$("#imageBox").html(input);
		},
		error: function(e) {
		}
	}); 
};

  function initialize() {
  	var startDate = "20190210";
  	var endDate = "20190408";
  	var warrantySrl = "107399";
  
    $.ajax({
       type: "GET",
       url: "http://localhost:5000/customer/selectMapLocation",
       headers: {"warrantySrl": warrantySrl, "startDate": startDate, "endDate": endDate},
       contentType: "application/json; charset=utf-8",
       cache: false,
       success: function(result) {
           var mapLocation = new google.maps.LatLng(result[0].lbs_lat, result[0].lbs_lng);
           
           var mapOptions = {
     			  zoom: 14,
     			  center:mapLocation,
     			  scrollwheel : false,
				  mapTypeControl : false,
				  mapTypeId: google.maps.MapTypeId.ROADMAP,
				  fullscreenControl:false
     			}
           
           var map = new google.maps.Map(document.getElementById("map"), // id: map-canvas, body에 있는 div태그의 id와 같아야 함
               mapOptions);
            
           var size_x = 60; // 마커로 사용할 이미지의 가로 크기
           var size_y = 60; // 마커로 사용할 이미지의 세로 크기
            
           // 마커로 사용할 이미지 주소
           var image = new google.maps.MarkerImage( 'https://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
                               new google.maps.Size(size_x, size_y),
                               '',
                               '',
                               new google.maps.Size(size_x, size_y));
           var movePath = [];
           
           $.each(result, function(i, data) {
        	   movePath[i] = new google.maps.LatLng(data.lbs_lat, data.lbs_lng);
        	   
               var markLocation = new google.maps.LatLng(data.lbs_lat, data.lbs_lng); // 마커가 위치할 위도와 경도
               
               var marker;
               marker = new google.maps.Marker({
                   position: markLocation, // 마커가 위치할 위도와 경도(변수)
                   map: map,
        		   //info: '말풍선 안에 들어갈 내용',
                   title: '' // 마커에 마우스 포인트를 갖다댔을 때 뜨는 타이틀
               }); 
               
               marker.setIcon('https://maps.google.com/mapfiles/ms/icons/yellow-dot.png');

               var content = "수신 일자 : " + data.updated_at; // 말풍선 안에 들어갈 내용
  
               // 마커를 클릭했을 때의 이벤트. 말풍선
               var infowindow = new google.maps.InfoWindow({ content: content});

               if(i == 1) {
            	   infowindow.open(map, marker);
               }
               
               google.maps.event.addListener(marker, "click", function() {
                   map.setZoom(17);
                   infowindow.open(map, marker);
               	   map.setCenter(marker.getPosition());
               });
               
               google.maps.event.addListener(marker, 'mouseover', (function (marker, infowindow){
                  return function() {
                    infowindow.open(map, marker);
                  };
                })(marker,infowindow));
               
              google.maps.event.addListener(marker, 'mouseout', (function (marker, infowindow){
                  return function() {
                    infowindow.close();
                  };
                })(marker,infowindow));

           });
           
           var polyline = new google.maps.Polyline({
               strokeColor:"#0000FF",
               strokeOpacity: 0.4,
               strokeWeight: 2,
               geodesic: true,
               icons: [{
                   icon: {path : google.maps.SymbolPath.BACKWARD_CLOSED_ARROW},
                   offset: '100%'
                 }],  
               path: movePath,
               map: map
             });
           
           polyline.setMap(map);
           
       },
       error: function(e) {
       }
   });
}
google.maps.event.addDomListener(window, 'load', initialize);



/*반응형*/
(function($) {

	var	$window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
		breakpoints({
			wide:      [ '961px',  '1884px' ],
			normal:    [ '961px',  '1620px' ],
			narrow:    [ '961px',  '1320px' ],
			narrower:  [ '737px',  '960px'  ],
			mobile:    [ null,     '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Nav.
		var $nav_a = $nav.find('a');

		$nav_a
			.addClass('scrolly')
			.on('click', function(e) {

				var $this = $(this);

				// External link? Bail.
					if ($this.attr('href').charAt(0) != '#')
						return;

				// Prevent default.
					e.preventDefault();

				// Deactivate all links.
					$nav_a.removeClass('active');

				// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
					$this
						.addClass('active')
						.addClass('active-locked');

			})
			.each(function() {

				var	$this = $(this),
					id = $this.attr('href'),
					$section = $(id);

				// No section for this link? Bail.
					if ($section.length < 1)
						return;

				// Scrollex.
					$section.scrollex({
						mode: 'middle',
						top: '-10vh',
						bottom: '-10vh',
						initialize: function() {

							// Deactivate section.
								$section.addClass('inactive');

						},
						enter: function() {

							// Activate section.
								$section.removeClass('inactive');

							// No locked links? Deactivate all links and activate this section's one.
								if ($nav_a.filter('.active-locked').length == 0) {

									$nav_a.removeClass('active');
									$this.addClass('active');

								}

							// Otherwise, if this section's link is the one that's locked, unlock it.
								else if ($this.hasClass('active-locked'))
									$this.removeClass('active-locked');

						}
					});

			});

	// Scrolly.
		$('.scrolly').scrolly();

	// Header (narrower + mobile).

		// Toggle.
			$(
				'<div id="headerToggle">' +
					'<a href="#header" class="toggle"></a>' +
				'</div>'
			)
				.appendTo($body);

		// Header.
			$('#header')
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'header-visible'
				});

})(jQuery);


/*alarm*/

$('.popr').popr();
$('.popr').popr({
  	'speed'        : 200,
  	'mode'         : 'bottom'
});



$(document).ready(function() {
     $('.popr').popr();
});

$(document).on('click', '#feugait', function () {                
     alert('Feugait');
});

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-36251023-1']);
  _gaq.push(['_setDomainName', 'jqueryscript.net']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();





/*submemnu 스크립트*/
( function( $ ) {
$( document ).ready(function() {
$('#nav > ul > li > a').click(function() {
  $('#nav li').removeClass('active');
  $(this).closest('li').addClass('active');   
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('fast');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#nav ul ul:visible').slideUp('fast');
    checkElement.slideDown('fast');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;   
  }      
});
});
} )( jQuery );


/*탭 이동*/
$(document).ready(function(){

 $('ul.tabs li').click(function(){
   var tab_id = $(this).attr('data-tab');

   $('ul.tabs li').removeClass('current');
   $('.tab-content').removeClass('current');

   $(this).addClass('current');
   $("#"+tab_id).addClass('current');
 });
})



/*주소
$(document).ready(function(){
    var branchSrl = $("#branchSrl").val();
    branchSrl=89646;
    $.ajax({
        type:"GET",
        url:"http://localhost:5000/order/selectBranchAddress",
        headers:{"branchSrl":branchSrl},
        contentType: "application/json; charset=utf-8",
        cache:false,
        success: function(result){
            if(result!={}){
                $("#sample6_postcode").val(result.zipcode);
                $("#sample6_address").val(result.address);
                $("#sample6_detailAddress").val(result.address_detail);
            }
        }
    });
})

*/
/*담당자 추가 폼*/


		function addRow1(tableid) {

			var table = document.getElementById(tableid);

			var rowlen = table.rows.length;

			//var row = table.insertRow();		// IE와 Chrome 동작을 달리함.

			var row = table.insertRow(rowlen-1);	// HTML에서의 권장 표준 문법

			row.insertCell(0).innerHTML = "1";

			row.insertCell(1).innerHTML = "<input type='text' style='padding-left:5px; font-size:0.8em;'>";

			row.insertCell(2).innerHTML = "<center><input type='text' maxlength='3' style='width:33.333%; padding-left:5px; font-size:0.8em;'><input type='text' maxlength='4' style='width:33.333%;  padding-left:5px; font-size:0.8em;'><input type='text' maxlength='4' style='width:33.333%;  padding-left:5px; font-size:0.8em;'></center>";

			row.insertCell(3).innerHTML = "<input type='text' style='width:25%;padding-left:5px; font-size:0.8em;'><input type='text' style='width:25%; padding-left:5px; font-size:0.8em; '><input type='text' style='width:25%; padding-left:5px; font-size:0.8em;'><input type='text' style='width:25%; padding-left:5px; font-size:0.8em;'>";

			row.insertCell(4).innerHTML = "<select name='alarm' style='width:100%;  Font-size:1em; text-align:center; display:0;'><option value=''>시간선택</option><option vlaue=''>09:00~ 오전 18:00</option><option vlaue=''>08:00~ 19:00</option><option vlaue=''>24시간</option></select>";
            
            row.insertCell(5).innerHTML = "신규";
            
            row.insertCell(6).innerHTML = "<button class='btn btn-default' name='delStaff' style=' font-size:0.9em;  background-color:#fff; background-image:none !important;border:none; color:#0085cc !important; '>삭제</button>";

		}

        $(document).on("click","button[name=delStaff]",function(){
         
        var trHtml = $(this).parent().parent();
         
        trHtml.remove(); //tr 테그 삭제
           
            return false;
        });



/*담보물 추가*/
function addRow2(tableid) {

			var table = document.getElementById(tableid);

			var rowlen = table.rows.length;

			//var row = table.insertRow();		// IE와 Chrome 동작을 달리함.

			var row = table.insertRow(rowlen-1);	// HTML에서의 권장 표준 문법

			row.insertCell(0).innerHTML = "1";

			row.insertCell(1).innerHTML = "<input type='text' style='padding-left:5px; font-size:0.8em;'>";

			row.insertCell(2).innerHTML = "<input type='text' style='padding-left:5px; font-size:0.8em;'>";

			row.insertCell(3).innerHTML = "<input type='text' style='padding-left:5px; font-size:0.8em;'>";
            
            row.insertCell(4).innerHTML = "<button class='btn btn-default' name='delStaff' style=' font-size:0.9em;  background-color:#fff; background-image:none !important;border:none; color:#0085cc !important; '>삭제</button>";

		}

        $(document).on("click","button[name=delStaff_d]",function(){
         
        var trHtml = $(this).parent().parent();
         
        trHtml.remove(); //tr 테그 삭제
            
        });





/*업체주문_다음 우편번호*/
function sample6_execDaumPostcode_2() {
   new daum.Postcode({
       oncomplete: function(data) {
           // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

           // 각 주소의 노출 규칙에 따라 주소를 조합한다.
           // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
           var addr = ''; // 주소 변수
           var extraAddr = ''; // 참고항목 변수

           //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
               addr = data.roadAddress;
           } else { // 사용자가 지번 주소를 선택했을 경우(J)
               addr = data.jibunAddress;
           }

           // 우편번호와 주소 정보를 해당 필드에 넣는다.
           document.getElementById('sample6_postcode_2').value = data.zonecode;
           document.getElementById("sample6_address_2").value = addr;
           // 커서를 상세주소 필드로 이동한다.
           document.getElementById("sample6_detailAddress_2").focus();
       }
   }).open();
}

/*업체주문_다음 우편번호*/
function sample6_execDaumPostcode_1() {
   new daum.Postcode({
       oncomplete: function(data) {
           // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

           // 각 주소의 노출 규칙에 따라 주소를 조합한다.
           // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
           var addr = ''; // 주소 변수
           var extraAddr = ''; // 참고항목 변수

           //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
               addr = data.roadAddress;
           } else { // 사용자가 지번 주소를 선택했을 경우(J)
               addr = data.jibunAddress;
           }

           // 우편번호와 주소 정보를 해당 필드에 넣는다.
           document.getElementById('sample6_postcode_1').value = data.zonecode;
           document.getElementById("sample6_address_1").value = addr;
           // 커서를 상세주소 필드로 이동한다.
           document.getElementById("sample6_detailAddress_1").focus();
       }
   }).open();
}

/*지점주문_다음우편번호*/
function sample6_execDaumPostcode() {
   new daum.Postcode({
       oncomplete: function(data) {
           // 팝업에서 검색결과 항목을 클릭했을때 실행할 코드를 작성하는 부분.

           // 각 주소의 노출 규칙에 따라 주소를 조합한다.
           // 내려오는 변수가 값이 없는 경우엔 공백('')값을 가지므로, 이를 참고하여 분기 한다.
           var addr = ''; // 주소 변수
           var extraAddr = ''; // 참고항목 변수

           //사용자가 선택한 주소 타입에 따라 해당 주소 값을 가져온다.
          if (data.userSelectedType === 'R') { // 사용자가 도로명 주소를 선택했을 경우
               addr = data.roadAddress;
           } else { // 사용자가 지번 주소를 선택했을 경우(J)
               addr = data.jibunAddress;
           }

           // 우편번호와 주소 정보를 해당 필드에 넣는다.
           document.getElementById('sample6_postcode').value = data.zonecode;
           document.getElementById("sample6_address").value = addr;
           // 커서를 상세주소 필드로 이동한다.
           document.getElementById("sample6_detailAddress").focus();
       }
   }).open();
}


