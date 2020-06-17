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
function makeFairyTale(arr, text){
  arr.forEach(element => text.replace('{var1}', element));
}

$(document).ready(function() {
  $(".btn-change-var").click(function(e){
    e.preventDefault();
    arr=getInputs();
    ft = makeFairyTale(); 
    $("#result-text").text(ft);
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
