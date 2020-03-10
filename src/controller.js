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
    var diff = Math.abs(endTime - startTime) / tweets.length;
    interval = Math.floor(diff / 60000);
  }

  CalendarPush(tweets, startTime, interval);
}
