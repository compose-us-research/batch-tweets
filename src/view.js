function onOpen() {
  // Add Button
  SpreadsheetApp.getUi()
    .createMenu("Batch Tweets")
    .addItem("Send to Calendar", "showSideBar")
    .addToUi();
}

function showSideBar() {
  var sidebarHtml = HtmlService.createHtmlOutputFromFile(
    "sidepanel.html"
  ).setTitle("Send to Calendar");
  SpreadsheetApp.getUi().showSidebar(sidebarHtml);
}
