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
