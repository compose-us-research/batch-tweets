var CalendarId = getCalendarId();

/**
 * Calendar Push
 *
 * Creates calendar event for each tweet with offset timestamp
 *
 * @param {Array} tweets
 * @param {Date} startTime
 * @param {Number} interval
 */
function CalendarPush(tweets, startTime, interval) {
  // Calendar object from ID
  var Calendar = CalendarApp.getCalendarById(CalendarId);

  // Loop the process for each tweet.
  for (var i = 0; i < tweets.length; ++i) {
    // Convert tweet to string.
    var tweet = String(tweets[i]);

    // Timestamp interval value.
    var timestamp = IntervalTimeStamp({
      timestamp: startTime,
      time: interval,
      index: i + 1
    });

    // Create the Calendar Event
    var event = Calendar.createEvent(tweet, timestamp, timestamp);
    Logger.log(event.getId());
  }

  var ui = SpreadsheetApp.getUi();
  ui.alert("Done!");
}

/**
 * Panel Callback
 *
 * Receives data from side panel form.
 *
 * @param {Object} data
 *
 * // Example
 * // var data = {selector: "S-E", start_time: "2020-03-02T17:19:39", end_time: "2020-03-02T17:33:39", interval_value: null}
 * // var data = {selector: "S-I", start_time: "2020-03-02T17:19:39", end_time: null, interval_value: "14"}
 */
function PanelCallback(data) {
  // Load the tweets
  var tweets = getTweets();

  // Minimun date and time to start tweets.
  var startTime = new Date(data.start_time);

  // Max date and time for the tweets to end.
  var endTime = new Date(data.end_time);

  // Interval duration in minutes.
  var interval = Math.floor(data.interval_value * 60000);

  // Updates the interval based on the range from start to finish.
  if (data.selector === "S-E") {
    var diff = Math.abs(endTime.getTime() - startTime.getTime()) / tweets.length;
    interval = Math.floor(diff / 60000);
  }

  CalendarPush(tweets, startTime, interval);
}

/**
 * Get Calendar ID
 *
 * @returns {String} ID value from cell A1.
 */
function getCalendarId() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet
    .getSheetByName("Calendar ID")
    .getRange("A1")
    .getValue();
}

/**
 * Get Tweets
 *
 * @returns {Array} Filtered to remove empty rows the first column of the "Tweets" sheet.
 */
function getTweets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var tweets = spreadsheet
    .getSheetByName("Tweets")
    .getRange(1, 1, 100, 1)
    .getValues();

  return tweets.filter(function(tweet) {
    return tweet != "";
  });
}

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

/** Adds the button which is used to trigger the side panel. */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu("Batch Tweets")
    .addItem("Send to Calendar", "showSideBar")
    .addToUi();
}

/** Loads the HTML template for sidebar container. */
function showSideBar() {
  var sidebarHtml = HtmlService.createHtmlOutputFromFile(
    "side-panel.html"
  ).setTitle("Send to Calendar");
  SpreadsheetApp.getUi().showSidebar(sidebarHtml);
}
