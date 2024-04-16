let selectMonth = () =>{
  let numberMonth = +prompt("введите номер месяца");
  if (numberMonth < 1 || numberMonth > 12){
    alert("мимо...");
  } else{
    switch (numberMonth) {
      case 1: case 2: case 12:
      alert("зима");
      break;
      case 3: case 4: case 5:
      alert("весна");
      break;
      case 6: case 7: case 8:
      alert("лето");
      break;
      case 9: case 10: case 11:
      alert("осень");
      break;
    default:
    }
  }
}
selectMonth();
