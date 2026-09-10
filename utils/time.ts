export const getTime = () => {
    const hours = new Date().getHours();
    const dayCount = new Date().getDay();
    const monthCount = new Date().getUTCMonth();
    const date = new Date().getDate();
    const year = new Date().getFullYear();

    let greetings = "";
    let day = "";
    let month = "";

    if (hours < 12) {
        greetings = "Good morning";
    } else if (hours < 18) {
        greetings = "Good afternoon";
    } else {
        greetings = "Good evening";
    }

    switch (dayCount) {
        case 1:
            day = "Monday";
            break;
        case 2:
            day = "Tuesday";
            break;
        case 3:
            day = "Wednesday";
            break;
        case 4:
            day = "Thursday";
            break;
        case 5:
            day = "Friday";
            break;
        case 6:
            day = "Saturday";
            break;
        case 7:
            day = "Sunday";
            break;
        default:
            day = "D-day"

    }

    switch (monthCount) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "February";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
            break;
        case 4:
            month = "May";
            break;
        case 5:
            month = "June";
            break;
        case 6:
            month = "July";
            break;
        case 7:
            month = "August";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
            break;
        default:
            month = "U - Month";
    }

    return [greetings, day, month, date, year];

}