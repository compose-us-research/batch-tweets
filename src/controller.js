function QC(str) {
  var output = str.length <= 180 ? "GOOD" : "TOO LONG";
  return str.length > 0 ? output : "EMPTY";
}

function IntervalTimeStamp(current, time, index) {
  var additional = time * index;
  return new Date(current.getTime() + additional);
}

function PanelCallback(data) {
  var Tweets = getTweets();

  var startTime = new Date(data.start_time);
  var endTime = new Date(data.end_time);
  var interval = Math.floor(data.interval_value * 60000);

  if (data.selector === "S-E") {
    var diff = Math.abs(endTime - startTime) / Tweets.length;
    interval = Math.floor(diff / 60000);
  }

  CalendarPush(Tweets, startTime, interval);
}

function CalendarPush(tweets, startTime, interval) {
  var CalendarId = getCalendarId();
  var Calendar = CalendarApp.getCalendarById(CalendarId);

  for (var i = 0; i < tweets.length; ++i) {
    var tweet = new String(tweets[i]);
    var timestamp = IntervalTimeStamp(startTime, interval, i + 1);

    // TODO: format timestamp to work with method.
    // Calendar.createEvent(tweet, timestamp, timestamp);
    SpreadsheetApp.getUi().alert(timestamp)
  }
}
