function onOpen() {
  SpreadsheetApp.getUi()
    .createMake("Batch Tweets")
    .addItem("Send to Calendar", "CalendarPush")
    .addToUi();
}
