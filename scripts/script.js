var now = new Date(); //Текущя дата
var today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
var dob = new Date(1998, 1, 24); //Дата рождения
var dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году
var age; //Возраст

//Возраст = текущий год - год рождения
age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age-1;
}