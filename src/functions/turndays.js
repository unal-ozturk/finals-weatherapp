// get data of the next 7 days
function GetDates(startDate, daysToAdd) {
  var aryDates = [];

  for (var i = 0; i <= daysToAdd; i++) {
    // current date
    var currentDate = new Date();
    // add number of days coming from daystoadd with i
    currentDate.setDate(startDate.getDate() + i);
    // push name of the day to arydates
    aryDates.push(DayAsString(currentDate.getDay()));
  }

  return aryDates;
}

// turn days to string
function DayAsString(dayIndex) {
  var weekdays = new Array(7);
  weekdays[0] = "Sunday";
  weekdays[1] = "Monday";
  weekdays[2] = "Tuesday";
  weekdays[3] = "Wednesday";
  weekdays[4] = "Thursday";
  weekdays[5] = "Friday";
  weekdays[6] = "Saturday";

  return weekdays[dayIndex];
}

export default GetDates;