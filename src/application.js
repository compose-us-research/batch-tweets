function onOpen() {
  SpreadsheetApp.getUi()
    .createMake("Batch Tweets")
    .addItem("Push To Calendar", "CalendarPush")
    .addToUi();
}
