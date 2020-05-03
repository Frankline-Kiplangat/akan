// Backend logic //
var daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var maleNames= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Frontend logic //
function findAkanNames(){
    var date = parseInt(document.getElementById("date").value);
    var month = parseInt(document.getElementById("month").value);
    var year = parseInt(document.getElementById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementById("female");
     
    if (date <= 0 || date > 31 ){
        alert("Please enter a valid date!");
    } else if (month <= 0 ||  month > 12  || (month == 2 && date >29)){
        alert("Please enter a valid month!")
    } else if(year <= 0){
        alert("Please enter a valid year")
    }

    function date() {
        ("datepicker").datepicker({maxDate: today});
      }
      day = Math.floor(d)-1;

    // d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (5 + 1) / 10)) + 9) % 7; //


    var newDate = new Date(date + "/" + month + "/" + year);
    var d = newDate.getDate();
    if (male.checked == true){
        alert("You were born on " + daysOfTheWeek[d] +  " and your Akan name is " + maleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(maleNames[d]);
    } else if (female.checked == true){
        alert("You were born on " + daysOfTheWeek[d] +  " and your Akan name is " + femaleNames[d]);
        console.log(daysOfTheWeek[d]);
        console.log(femaleNames[d]);
    } else {
        alert("Select gender")
    }
}


































































// var day;
// function dateOfWeek() {
//     var dateOfBirth= document.getElementById("dateOfBirth").Value;
//     var CC = parseInt(dateOfBirth.substring(0, 2));
//     var YY = parseInt(dateOfBirth.substring(2, 4));
//     var MM = parseInt(dateOfBirth.substring(5, 7));
//     var DD = parseInt(dateOfBirth.substring(8, 10));
//      d = (((CC/4) - 2 * CC - 1) + ((5 * YY/4)) + ((26 * (MM + 1)/10)) + DD) %7

//      function validate(){
//          ("datepicker").datepicker({maxDate: today});
//      }
//      day = Math.floor(d) - 1;
//      daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
     
//      var option = document.getElementsByName('name').values;
//      var male = document.getElementsById("Male").value;
//      var female= document.getElementsById("Female").value;
//      var akanMales= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
//      var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa",
//     "Afua", "Ama"];

//     if (option == "Male"){
//         document.getElementsById(akanOutput).innerHTML = "You were born on" + daysOfTheWeek[day] + "and your name is" + akanMales[day];
//         console.log(daysOfTheWeek[day]);
//         console.log(akanMales[day]);
//     } else if (option == "Female") {
//         document.getElementsById(akanOutput).innerHTML = "You were on" + daysOfTheWeek + "and your name is" + akanFemales[day];
//         console.log(daysOfTheWeek[day]);
//         console.log(akanFemales[day]);
//     } 
    

// }