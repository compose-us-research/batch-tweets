# This is the automation flow ⚙️
Google Spreadsheet --> Google Calendar -->Tweet via 3rd Party Automation Service like Zapier --> Twitter

# What it does 🦾
It puts your tweets from a Google spreadsheet into a calendar and from there it’s posted to Twitter via a Zapier integration.

# Why this is 🆒
According to @garyvee those wanting to dominate the social media game, need to be putting out about 100 pieces of content per day😱 - ain't nobody got time for that! With this Google App Script you can batch process the workflow.

# You need this to do it arrow 🧰
1. Google Suite user account
2. Google Calendar
3. Google Spreadsheet
4. Twitter Account
5. 3rd Party Automation Account, we use Zapier but there are others

# Steps 👟
1. Create a Google Calendar and name it “batch tweets”

![alt text][GoogleKalenderEinstellungen]

2. Click the 3 dots and select “Einstellungen und Freigabe”
3. Scroll down and copy calendar ID, store in your preferred editor
4. Create a Google spreadsheet with 3 tabs. Name them: tweets, archive, calendarID)
5. Add formula in column B: =QC(A1). Then apply formula to 20 fields
6. Go to tab 3 and paste calendar ID into 3rd tab of your Google spreadsheet.

![alt text][GoogleKalenderID]

7. In your spreadsheet menu go to Tools and open Script editor

![alt text][OpenGoogleScriptEditor]

8. Copy and paste script for Google Apps script from Github. It’s two scripts: side panel + code

- [Code Google Script](./Code.js)
- [Side Panel html](./side-panel.html)

![alt text][GoogleScript2parts]

9. Go back to your Google spreadsheet, you should see a extra button named “Batch Tweets” in your navigation panel.

![alt text][GoogleSheetsExtraButton]

10. Click on it. This activates the script. An extra side panel opens. 

![alt text][GoogleSheetsSidePanel]

11. Select what you need and press submit. 

12. This is it if you see this:

![alt text][GoogleSheetsScriptSuccess]

13. Create a Zapier automation: Google Calendar to Twitter

14. Create Tweets

__Congrats, you automated your twittering with Google Apps Script.__

## License

[MIT](https://choosealicense.com/licenses/mit/)

[GoogleKalenderEinstellungen]: ./PNG/Google_Kalender_Einstellungen.png "Google Kalender Einstellungen"
[GoogleKalenderID]: ./PNG/Google_Kalender_ID.png "Google Kalender ID"
[GoogleScript2parts]: ./PNG/Google_Script_2_parts.png "Google Script 2 scripts"
[GoogleSheetsExtraButton]: ./PNG/Google_Sheets_Extra_Button.png "Google Sheets Custom Button"
[GoogleSheetsScriptSuccess]: ./PNG/Google_Sheets_Script_Success.png "Google Sheets Script Success"
[GoogleSheetsSidePanel]: ./PNG/Google_Sheets_Side_Panel.png "Google Sheets Side Panel"
[OpenGoogleScriptEditor]: ./PNG/Open_Google_Script_Editor.png "Open Google Script Editor"
