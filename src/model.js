var TWEETS_SHEET_NAME = "Tweets";
// var CONFIG_SHEET_NAME = "Configuration";
var ConfigSheetName = "Configuration";

/**
 * Get Calendar ID
 *
 * @returns {String} ID value from cell A2.
 */
function getCalendarId() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet
    .getSheetByName(ConfigSheetName)
    .getRange("B1")
    .getValue();
}

/**
 * Get Twitter API Key
 *
 * @returns {String} ID value from Cell B2
 */
// function getTwitterApiKey() {
//   var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
//   return spreadsheet
//     .getSheetByName(CONFIG_SHEET_NAME)
//     .getRange(TWITTER_API_KEY)
//     .getValue();
// }

/**
 * Get Tweets
 *
 * @returns {Array} Filtered to remove empty rows the first column of the "Tweets" sheet.
 */
function getTweets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var tweets = spreadsheet
    .getSheetByName(TWEETS_SHEET_NAME)
    .getRange(1, 1, 100, 1)
    .getValues();

  return tweets.filter(function (tweet) {
    if (tweet[0] !== "") {
      return tweet[0];
    }
  });
}
