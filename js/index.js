function Ghanaian_Culture() {

    //validate date and month range
    var date_birth = document.getElementById("birth_date");
    var month_birth = document.getElementById("birth_month");
    // validate if all the fields contains values
    if (date_birth.value.trim() === "" && month_birth.value.trim() === "") {
        alert("You have not provided any of your details")
        return false
    } else if (date_birth.value.trim() === "") {
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

        alert("Your gender option is required");
        return false;

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

    //male Names
    var male_Name = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']

    //Female Names
    var female_Name = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']

    //Name of Weeks
    var Name_of_the_week = ['Sunday', 'monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    var jumbotron_name = document.getElementsByClassName("jumbotron")[0]

    //Looping through Days_of_the_week
    var day = String(Day_of_the_week).split("").map((Day_of_the_week) => {
        return Number(Day_of_the_week)
    })

    //check if male gender is selected
    if (correctMale) {
        jumbotron_name.innerHTML = "<h1>" + "Your Akan Name is " + male_Name[day] + "<br>" + "Born on a " + Name_of_the_week[day] + "</h1>";
        jumbotron_name.classList.add("feedback")
        return false;
    }

    //check if female gender is selected
    else if (correctFemale) {
        jumbotron_name.innerHTML = "<h1>" + "Your Akan Name is " + female_Name[day] + "<br>" + "Born on a " + Name_of_the_week[day] + "</h1>";
        jumbotron_name.classList.add("feedback")
        return false;
    }
}