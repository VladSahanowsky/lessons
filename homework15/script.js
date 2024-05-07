var form = document.querySelector('.form');
var filter = form.querySelector('.filter');
var filterr = form.querySelector('.filterr');
var check = form.querySelector('.check');

form.addEventListener('submit', function (event) {
  let rusult = true;
  let rus = true;
  if(filter.value === "" || filterr.value === "" || document.getElementById("checkbox").checked === false){
    alert("Заполните пустые поле");
    result = false;
  }

  if(filter.value !== "" && filterr.value !== "" && document.getElementById("checkbox").checked !== false){
    var re = /^[\d\+][\d\(\)\ -]{5,10}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = re.test(myPhone);

  if(!valid){
    alert("Введен номер не корректной длины (минимальная длина 7 максимальная 12) или введены не цифры");
    rus = false;
  }
}
  if(!result || !rus){
  event.preventDefoult();
  }
  })
