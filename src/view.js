/** Adds the button which is used to trigger the side panel. */
function onOpen() {
  // Add Button
  SpreadsheetApp.getUi()
    .createMenu("Batch Tweets")
    .addItem("Send to Calendar", "showSideBar")
    .addToUi();
}

/** Loads the HTML template for sidebar container. */
function showSideBar() {
  var sidebarHtml = HtmlService.createHtmlOutputFromFile(
    "sidepanel.html"
  ).setTitle("Send to Calendar");
  SpreadsheetApp.getUi().showSidebar(sidebarHtml);
}
