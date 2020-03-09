/**
 * QC (Quality Control)
 *
 * @returns {String} Message to reflect tweet character count.
 * @param str
 */
function QC(str) {
  var output = str.length <= 180 ? "GOOD" : "TOO LONG";

  return str.length > 0 ? output : "EMPTY";
}


/**
 * Interval timestamp
 *
 * @param {Date} timestamp
 * @param {Number} time
 * @param {Number} index
 * @returns {Date} UTC Timestamp for future tweet.
 */
function IntervalTimeStamp(timestamp, time, index) {
  var additional = time * index;
  var newTimestamp = new Date(timestamp.getTime() + additional);
  var month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ][newTimestamp.getUTCMonth()];
  var date = newTimestamp.getUTCDate();
  var year = newTimestamp.getUTCFullYear();
  var hour = newTimestamp.getUTCHours();
  var minutes = newTimestamp.getUTCMinutes();
  var seconds = newTimestamp.getUTCSeconds();
  var newTime = hour + ":" + minutes + ":" + seconds + " UTC";

  return new Date(month + " " + date + ", " + year + " " + newTime);
}
