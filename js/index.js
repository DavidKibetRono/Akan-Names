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


}