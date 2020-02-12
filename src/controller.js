/**
 * Panel Callback
 *
 * Receives data from side panel form.
 *
 * @param {Object} data
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
  // Define calendar ID
  var CalendarId = getCalendarId();

  // Calendar object from ID
  var Calendar = CalendarApp.getCalendarById(CalendarId);

  // Loop the process for each tweet.
  for (var i = 0; i < tweets.length; ++i) {
    // Convert tweet to string.
    var tweet = new String(tweets[i]);

    // Timestamp interation for loop inder value.
    var timestamp = IntervalTimeStamp(startTime, interval, i + 1);

    // Create the Calendar Event
    var event = Calendar.createEvent(tweet, timestamp, timestamp);
    Logger.log(event.getId());
    Logger.log(CalendarId);
  }

  SpreadsheetApp.getUi().alert("Done!");
}
