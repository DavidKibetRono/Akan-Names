function Ghanaian_Culture() {

    //validate date and month range
    var date_birth = document.getElementById("birth_date");
    var month_birth = document.getElementById("birth_month");

    if (date_birth.value.trim() === "") {
        alert("Date field cannot be empty");
        return false;

    } else if (month_birth.value.trim() === "") {
        alert("Month field cannot be empty");
        return false;


    } else if (date_birth.value < 1 || date_birth.value > 31) {
        alert("Provide a valid date of birth value");
        date_birth.value = "";
        return false;


    } else if (month_birth.value < 1 || month_birth.value > 12) {
        alert("Month value should be between 1 and 12");
        month_birth.value = "";
        return false;

    }
    // get gender value
    var maleGender = document.getElementById("male");
    var femaleGender = document.getElementById("female");

    var correctMale = " ";
    var correctFemale = " ";

    if (!(maleGender.checked || femaleGender.checked)) {

        alert("Your gender option is required")

    } else if (maleGender.checked) {

        correctMale = maleGender.value;

    } else if (femaleGender.checked) {
        correctFemale = femaleGender.value

    }
    // birth year values
    var date_birth = document.getElementById("birth_date");
    var month_birth = document.getElementById("birth_month");
    var year_birth = document.getElementById("birth_year");

    var CC = parseInt(year_birth.value.slice(0, 2));
    var YY = parseInt(year_birth.value.slice(2, 4));
    var MM = parseInt(month_birth.value);
    var DD = parseInt(date_birth.value);

    //Formula
    var Day_of_the_week = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD)) % 7
}