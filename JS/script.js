// Backend logic //
var daysOfTheWeek= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var akanMales= ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
var akanFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

// Frontend logic //
function findAkanNames(){
    var day = parseInt(document.getElementsById("day").value);
    var day = parseInt(document.getElementsById("month").value);
    var day = parseInt(document.getElementsById("year").value);
    var male = document.getElementById("male");
    var female = document.getElementsById("female");

    if (day <= 0 || day > 31 ){
        alert("Please enter a valid month!");
    } else if (month <= 0 ||  month > 12  || (month == 2 && day >29)){
        alert("PLease enter a valid month!")
    }

    
    d = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (5 + 1) / 10)) + 9) % 7;
    var newDate = new Date( day + "/" + "month" + "/" + "year");
    var d = newDate.getDay();
    if (option == "male"){
        document.getElementsById('akan-names').innerHTML = "You were born on " + daysOfTheWeek[d] +  " and your Akan name is: " + akanMales[d] ;
    } else if (option == "female"){
        "You were born on " + daysOfTheWeek[d] +  " and your Akan name is: " + akanFemales[d] ;
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