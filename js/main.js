$(".test").click(function () {
  console.log("1");
  $(".popup-menu").show();
});
$(".close_btn").click(function () {
  $(".popup-menu").hide();
});


$('.count-btn').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult').val();
  if(btnType=="add"){
    $('#addResult').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult').val(parseInt(inputVal)-1);
  }
})
$('.count-btn2').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult2').val();
  if(btnType=="add"){
    $('#addResult2').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult2').val(parseInt(inputVal)-1);
  }
})
$('.count-btn3').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult3').val();
  if(btnType=="add"){
    $('#addResult3').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult3').val(parseInt(inputVal)-1);
  }
})
$('.count-btn4').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult4').val();
  if(btnType=="add"){
    $('#addResult4').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult4').val(parseInt(inputVal)-1);
  }
})
$('.count-btn5').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult5').val();
  if(btnType=="add"){
    $('#addResult5').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult5').val(parseInt(inputVal)-1);
  }
})
$('.count-btn6').click(function(){
  var btnType=$(this).attr('data');
  var inputVal =$('#addResult6').val();
  if(btnType=="add"){
    $('#addResult6').val(parseInt(inputVal)+1);
  }else if(btnType=="minus"&&inputVal>1){
   $('#addResult6').val(parseInt(inputVal)-1);
  }
})

$(".addContact").click(function(){
  window.confirm("已加入購物車！");
  })

