# SmartMirror
by Gary Chew and Kyle Stadelmann

## Project Overview
We will create a “smart mirror” that functions as a regular reflective mirror, but also displays extra information/applications on its surface. Many of these applications, such as weather, time, and google calendar, have already been built and will be incorporated into our project. We will also build a new module, a 1-second-a-day module that builds a collage of videos from 1-second snapshots recorded by the mirror every day.

![Picture of overall mirror](https://i.imgur.com/fnMuSDQ.jpg)

## Project Approach
We will create our smart mirror using a 2-way mirror, a LCD monitor, a Raspberry Pi 3, and a webcam. The Raspberry Pi will include the MagicMirror2 software with existing modules for weather, time, alarms, stock, calendar, and to-do list. We will also create our own “1 Second a Day” module.

## Installation
1. Run `git clone https://github.com/GaryLChew/SmartMirror.git`
2. Change directory `cd SmartMirror/`
4. Run `npm install`. You need to have [NodeJS](https://nodejs.org/en/download/) installed to run this command.
3. Install modules `bash installmodules.sh`
4. Set up API keys
    1. Open `config/config.js`
    2. Set up AVStocks (optional)
        1. Get your API key from [Alphavantage.co](https://www.alphavantage.co/support/#api-key)
        2. In `config.js`, paste your API key
        ```javascript
        {
            module: "MMM-AVStock",
            // disabled: true,
            position: "top_left",
            config: {
                apiKey : "YOUR_ALPHAADVANTAGE_API_KEY",
                symbols : ["BAESY"],
                mode: "series"
            }
        },
    2. Set up Calendar (optional)
        1. Go to your [Google Calendar Settings](https://calendar.google.com/calendar/r/settings). Under "Settings for  my calendars," find the "Secret address in iCal format".
        2. In `config.js`, paste the secret address
        ```javascript
		{
			module: 'MMM-CalendarExt2',
			// disabled: true,
			position: "top_right",
			config: {
				calendars : [
					{
						url: "https://calendar.google.com/calendar/ical/yourcalendar.ics",
					},
                ],
        }
        ```
    2. Set up Todoist (optional)
        1. Create a [Todoist Access Token](https://developer.todoist.com/appconsole.html).
        2. Get the ID for the desired Todoist project. This can be found in the URL when you open your project.
        e.g. todoist.com/app/#project%2F**1234567890**%2Ffull
        3. In `config.js`, paste the access token and and project code
        ```javascript
		{
			module: 'MMM-Todoist',
			// disabled: true,
			position: 'top_right',	// This can be any of the regions. Best results in left or right regions.
			header: 'Todoist', // This is optional
			config: { // See 'Configuration options' for more information.
				accessToken: 'youraccesstoken',
				maximumEntries: 10,
				updateInterval: 10 * 60 * 1000, // Update every 10 minutes
				fade: false,
				// projects and/or labels is mandatory:
				projects: [1234567890]
			}
		},
        ```
    2. Set up Google Drive Integration for 1 Second A Day Module
        1. Follow this link: https://developers.google.com/drive/api/v3/quickstart/nodejs
        2. Ensure that you're logged into the desired google account in the top right of the web page.
        3. In the dropdown under "Configure your OAuth client" select "Desktop app" and the press "Create".
        4. Press "Download Client Configuration" and place file into the folder './modules/MMM-1-Second-A-Day/'
        5. 'cd ./modules/MMM-1-Second-A-Day/' and run command 'node upload.js' on command line, and follow steps.
        6. Insert compilations into a specified folder. (Optional)
	        1. On your browser open your Google Drive and go to the folder that you want to insert the compilations into.
	        2. The link should be of the sort: https://drive.google.com/drive/u/0/folders/YOUR_DRIVE_FOLDER, paste YOUR_DRIVE_FOLDER into the module config.
            ```javascript
		    {
	            module: 'MMM-1-Second-A-Day',
	            config:
	            {
		            driveDestination: 'YOUR_DRIVE_FOLDER'
	            }
		    },
            ```

## Custom Module: MMM-1-Second-A-Day
See [repository](https://github.com/GaryLChew/MMM-1-Second-A-Day).
