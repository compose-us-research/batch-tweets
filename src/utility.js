/**
 * QC (Quality Control)
 *
 * @param {String} String
 * @returns {String} Message to reflect tweet character count.
 */
function QC(str) {
  var output = str.length <= 180 ? "GOOD" : "TOO LONG";
  return str.length > 0 ? output : "EMPTY";
}

/**
 * Interval timestamp
 *
 * @param {String} timestamp
 * @param {Number} time
 * @param {Number} index
 * @returns {String} UTC Timestamp for future tweet.
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
  ].indexOf(newTimestamp.getUTCMonth());
  var date = newTimestamp.getUTCDate();
  var year = newTimestamp.getUTCFullYear();

  var hour = newTimestamp.getUTCHours();
  var minutes = newTimestamp.getUTCMinutes();
  var seconds = newTimestamp.getUTCSeconds();
  var time = hour + ":" + minutes + ":" + seconds + " UTC";

  return new Date(month + " " + date + ", " + year + " " + time);
}
