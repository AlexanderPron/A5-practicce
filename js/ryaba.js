const dataURL = "https://api.jsonbin.io/b/5e905926172eb643896166e7";

function handleButton(dataURL) {
  // return data = 
}

function handleData(data) {
  // кажется, какой-то из этих способов сработает
  //const var1 = $("input[name=var1]")[0].value()
  //const var1 = $("input[name=var1]").value()
  //const var1 = $("input[name=var1]")[0].default()

  // надо сделать так чтобы сообщения подменились на значения из формы
  let text = "Здесь могла быть ваша реклама";
	$("#result").text(text);
}

function init() {
	$("#button-fetch").click(handleButton);
}

$(document).ready(init);
