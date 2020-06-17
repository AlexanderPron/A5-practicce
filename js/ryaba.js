const fairyTale = $('span.story-text').text();

function getInputs() {
  const var1 = $('#var1').val();
  const var2 = $('#var2').val();
  const var3 = $('#var3').val();
  const var4 = $('#var4').val();
  const var5 = $('#var5').val();
  const var6 = $('#var6').val();
  const speach= $('#speach').val();
  arrOfInputs = [var1,var2,var3,var4,var5,var6,speach];
  return arrOfInputs;
}
$(document).ready(function() {
  $(".btn-change-var").click(function(){
    arr=getInputs();
    console.log(arr);
    $('#var1').val() = arr[0];
    $('#var2').html(arr[1]);
    $('#var3').val(arr[2]);
    $('#var4').val(arr[3]);
    $('#var5').val(arr[4]);
    $('#var6').val(arr[5]);
    $('#speach').val(arr[6]); 
  });
});


//   // надо сделать так чтобы сообщения подменились на значения из формы
//   let text = "Здесь могла быть ваша реклама";
// 	$("#result").text(text);
// }

// function init() {
// 	$("#button-fetch").click(handleButton);
// }

// $(document).ready(init);
