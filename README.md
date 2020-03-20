# This is the automation flow
Google Spreadsheet --> Google Calendar -->Tweet via 3rd Party Automation Service like Zapier --> Twitter

# What it does
It puts your tweets from a Google spreadsheet into a calendar and from there it’s posted to twitter via a zapier integration.

# Why is this cool 
To stay relevant, Gary V quote

# You need this to do it
1. Google Suite user account
2. Google Calendar
3. Google Spreadsheet
4. Twitter Account
3rd Party Automation Account, we use Zapier but there are others

# Steps
1. Create a Google Calendar and name it “batch tweets”

__Image: Google Kalender Einstellungen__

2. Click the 3 dots and select “Einstellungen und Freigabe”
3. Scroll down and copy calendar ID, store in your preferred editor
4. Create a Google spreadsheet with 3 tabs. Name them: tweets, archive, calendarID)
5. Add formula in column B: =QC(A1). Then apply formula to 20 fields
6. Go to tab 3 and paste calendar ID into 3rd tab of your Google spreadsheet.

__Image: Google Kalender ID__

7. In your spreadsheet menu go to Tools and open Script editor

__Image: Open Google Script Editor__

8. Copy and paste script for Google Apps script from Github. It’s two pieces: side panel + code
Link
__Image: Google Script 2 parts__

9. Go back to your Google spreadsheet, you should see a extra button named “Batch Tweets” in your navigation panel.

__Image: Google Sheets Extra Button__

10. Click on it. This activates the script. An extra side panel opens. 

__Image: Google Sheets Side Panel__

11. Select what you need and press submit. 
12. This is it if you see this:

__Image: Google Sheets Script Success__

13. Create a Zapier automation: Google Calendar to Twitter
14. Create Tweets

__Congrats, you automated your twittering with Google Apps Script.__

## License

[MIT](https://choosealicense.com/licenses/mit/)
