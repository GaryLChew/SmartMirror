/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", // Address to listen on, can be:
	                      // - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	                      // - another specific IPv4/6 to listen on a specific interface
	                      // - "0.0.0.0", "::" to listen on any interface
	                      // Default, when address config is left out or empty, is "localhost"
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], // Set [] to allow all IP addresses
	                                                       // or add a specific IPv4 of 192.168.1.5 :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	                                                       // or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	                                                       // ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
			     // local for armv6l processors, default
			     //   starts serveronly and then starts chrome browser
			     // false, default for all  NON-armv6l devices
			     // true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		// Custom modules
		{
			module: 'MMM-1-Second-A-Day',
			// disabled: true,
			position: 'top_center',
			header: '1-Second-A-Day',
			config: {
				driveDestination: ""
			}
		},
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
				views: [
					{
						mode: "daily",
						position: "top_right"
					},
				],
				scenes: [
					{
						name: "DEFAULT",
					},
				],
			},
		},
		{
			module: 'MMM-OnScreenMenu',
			// disabled: true,
			position: 'bottom_right', // Valid positions: 'top_right', 'top_left', 'bottom_right', 'bottom_left'
			config: {
				touchMode: true,
				enableKeyboard: true,
			}
		},
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
		// Default modules
		{
			module: "clock",
			// disabled: true,
			position: "top_left"
		},
		{
			module: "alert",
			// disabled: true,
		},
		{
			module: "compliments",
			disabled: true,
			position: "lower_third",
		},
		{
			module: "newsfeed",
			// disabled: true,
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
