/*동일 카피 스크립트*/
function Copy1()
{
    if(document.getElementById("cb1").checked)
    {
        document.getElementById("txtName2").value=document.getElementById("txtName1").value;
        document.getElementById("txtphone4").value=document.getElementById("txtphone1").value;
        document.getElementById("txtphone5").value=document.getElementById("txtphone2").value;
        document.getElementById("txtphone6").value=document.getElementById("txtphone3").value;
    }

}

function Copy2()
{
    if(document.getElementById("cb2").checked)
    {
        document.getElementById("txtName6").value=document.getElementById("txtName3").value;
        document.getElementById("txtphone10").value=document.getElementById("txtphone7").value;
        document.getElementById("txtphone11").value=document.getElementById("txtphone8").value;
        document.getElementById("txtphone12").value=document.getElementById("txtphone9").value;
        document.getElementById("sample6_postcode_2").value=document.getElementById("sample6_postcode_1").value;
        document.getElementById("sample6_address_2").value=document.getElementById("sample6_address_1").value;
        document.getElementById("sample6_detailAddress_2").value=document.getElementById("sample6_detailAddress_1").value;
    }
}

/*담보물 추가하기 버튼*/
var bDisplay = true;
function doDisplay(){
    var con = document.getElementById("myDIV");
    if(con.style.display=='none'){
        con.style.display = 'block';
    }else{
        con.style.display = 'none';
    }
}


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

/*담당자확인팝업*/
  
function popupOpen(companySrl){
	var popUrl = "updateCompanyManager.jsp?companySrl="+companySrl;
	var popOption = "width=1180, height=520, resizable=no, scrollbars=no, status=no ;"; 
		window.open(popUrl,"",popOption);
	}





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
/*담당자 추가 폼


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

*/

/*담보물 추가*/
function addRow3(tableid) {

			var table = document.getElementById(tableid);

			var rowlen = table.rows.length;

			//var row = table.insertRow();		// IE와 Chrome 동작을 달리함.

			var row = table.insertRow(rowlen-1);	// HTML에서의 권장 표준 문법

			row.insertCell(0).innerHTML = "<a style='position:relative; top:-10px;'>1</a>";

			row.insertCell(1).innerHTML = "<input name='addrow' type='text' style='padding-left:5px; font-size:0.8em;'>";

			row.insertCell(2).innerHTML = "<input name='addrow' type='text' style='padding-left:5px; font-size:0.8em;'>";

			row.insertCell(3).innerHTML = "<input name='addrow' type='text' style='padding-left:5px; font-size:0.8em;'>";
    
            row.insertCell(4).innerHTML = "<select style='font-size:0.8em; position:relative; top:-15px;'><option value='미등록'>미등록</select>";
            
            row.insertCell(5).innerHTML = "<button class='btn btn-default' name='delStaff_d' style='position:relative; top:-10px; font-size:0.9em;  background-color:#fff; background-image:none !important;border:none; color:#0085cc !important; padding:0 !important;'>삭제</button>";

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


$(document).ready(function(){
    //최상단 체크박스 클릭
    $("#checkall").click(function(){
        //클릭되었으면
        if($("#checkall").prop("checked")){
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 true로 정의
            $("input[name=chk]").prop("checked",true);
            //클릭이 안되있으면
        }else{
            //input태그의 name이 chk인 태그들을 찾아서 checked옵션을 false로 정의
            $("input[name=chk]").prop("checked",false);
        }
    })
})



