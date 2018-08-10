# globalHistory repo

history.listen isn't being called when running `navigate` directly but is for browser navigation.

## Reproduction
1. install dependencies and run `gatsby develop`
2. open site in browser and open the console.
3. Click back and forth between the two pages. Observe nothing in the console.
4. Use the browser back/forward buttons to navigate. Observe the location is now being logged.

The listening code is in gatsby-browser.js
