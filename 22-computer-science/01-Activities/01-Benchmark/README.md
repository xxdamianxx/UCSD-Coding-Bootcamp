## Time the Search

### Part One
* Go into Examples and `npm i` while in that folder 
* Run `node linearSearch.js` and in slack send out how fast your linear search ran

### Part Two
* Now comment out line 7
* Comment in line 14
* This will increase the items in the array to search from 14 to 100,000,000
* Run the `node --max-old-space-size=4096 linearSearch.js` (this increases the space node can run at on your machine and will need it for such a large search) 
* Slack out how long it took your linear search to run this time now that you've increased the size of the array
