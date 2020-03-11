var CalendarId = getCalendarId();

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

  // Minimum date and time to start tweets.
  var startTime = new Date(data.start_time);

  // Max date and time for the tweets to end.
  var endTime = new Date(data.end_time);

  // Interval duration in minutes.
  var interval = Math.floor(data.interval_value);

  var diff = null;
  // Updates the interval based on the range from start to finish.
  if (data.selector === "S-E") {
    diff = Math.abs(endTime - startTime) / tweets.length;
    interval = Math.floor(diff / 60000);
  }

  CalendarPush(tweets, startTime, interval);
}

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
  Logger.log(Math.floor(interval))
  // Calendar object from ID
  var Calendar = CalendarApp.getCalendarById(CalendarId);

  // Loop the process for each tweet.
  for (var i = 0; i < tweets.length; ++i) {
    // Timestamp interval value.
    const timestamp = IntervalTimeStamp(startTime, interval * 60 * 1000, i + 1);

    // Create the Calendar Event
    var event = Calendar.createEvent(tweets[i], timestamp, timestamp);
    Logger.log(event.getId());
  }

  var ui = SpreadsheetApp.getUi();
  ui.alert("Done!");
}
