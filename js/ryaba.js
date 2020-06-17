const objText = {"text":["Жили-были {var1} да {var2}","Была у них {var3}","Снесла {var3} {var4}, не простое - золотое","- {var1} бил, бил - не разбил","- {var2} била, била - не разбила","{var5} бежала, {var6} задела, {var4} упало и разбилось.","{var1} плачет, {var2} плачет, а {var3} кудахчет:","{speach}"]};
const fairyTaleWithVars = objText.text;

function formatStr(notFormatFT){ //Функция добавления переносов строк
  let formatFT='';
  notFormatFT.forEach(element => {
    formatFT += element+"</br>";
  });
  return formatFT;
}

function getInputs() { // Функция получения массива значений инпутов
  const var1 = $('#var1').val();
  const var2 = $('#var2').val();
  const var3 = $('#var3').val();
  const var4 = $('#var4').val();
  const var5 = $('#var5').val();
  const var6 = $('#var6').val();
  const speach= $('#speach').val();
  let arrOfInputs = {"var1": var1, "var2": var2, "var3": var3, "var4": var4, "var5": var5, "var6": var6 ,"speach": speach};
  return arrOfInputs;
}

$(".btn-create-text").click(function(e){
  e.preventDefault();
  $("#result-text").html(formatStr(fairyTaleWithVars));
});

$(document).ready(function() {
  $(".btn-change-var").click(function(e){
    e.preventDefault();
    arr=getInputs();
    rez=formatStr(fairyTaleWithVars);
    for (key in arr){
      rez = rez.replace(new RegExp(key,'g'), arr[key]); //Заменяем ключ на его значение
    }
    rez = rez.replace(new RegExp("{",'g'), ''); //Убираем оставшиеся скобки
    rez = rez.replace(new RegExp("}",'g'), ''); //Убираем оставшиеся скобки
    $("#result-text").html(rez); // Отдаем результат на страницу
  });
});

