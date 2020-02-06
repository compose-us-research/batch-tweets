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

function getCalendarId() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet
    .getSheetByName("Calendar ID")
    .getRange("A1")
    .getValue();
}
