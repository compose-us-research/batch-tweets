function getTweets() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet
    .getSheetByName("Tweets")
    .getRange("A1")
    .getValues();
}

function getCalendarId() {
  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet
    .getSheetByName("Calendar ID")
    .getRange("A1")
    .getValue();
}
