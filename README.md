# Beat!Click Rhythm Game 
Sparta Global/Project 1/W3 D1-D5

A music beat rhythm browser game created with HTML, CSS, Javascript and JQuery.


## Purpose
The aim of this project was to build a browser based game using only HTML, CSS, Javascript and JQuery. This was compeleted from scratch over the span of approximately four to five days, and involved two Agile sprints. Git/Github were tools used, as well as Trello to keep track of progress. 

## Functionality

The objective of the game is to score as many points as possible within a given time frame and/or win with as little 'miss' clicks as possible. 

The player must click with the mouse in time to the background music. When the outer circle meets the inner circle, the player should click on the corresponding inner circle. This earns the player points depending on the exact real-time accuracy of the click. 

If the player reaches the cap threshold on variable `miss` , the game ends. The number of misses are displayed on the play screen. The game also ends when the audio duration of the music reaches `00:00`.

Input data is obtained from the mouse. Additionally DOM manipulation was used, with JQuery to change HTML elements. 

Some mathematical calculations were used to calculate the BPM and interval delays in order to match the outer circle in time to each song. See `beat-click.txt` for for details. Also see `Audio`  directory for a list of all songs and audio effects used.

## Implementation

The functionality has been implemented using the following features:

* Twitter Bootstrap 3.3.7
* Semantic HTML5
* HTML5 Audio
* CSS
* JQuery 3.2.1
* Javascript 

## Usage

### Running

Open `index.html` to start the game. This contains Beat!Click introduction page and start game button.

Open `beat-click.html` to start the game immediately.

Make sure all the files and directories are ready to open, before starting the game. A list of all files and directories can be seen in the Customising section.

### Customising

To customise the content, modify the contents of the following files:

* `index.html`
* `index.css`
* `index.js`
* `beat-click.html`
* `beat-click.css`
* `beat-click.js`
* `beat-click.txt` - This file only contains basic text containing details about the song tracks.

There are also seperate directories for Audio and Images.

* `Images` - All Images used
* `Audio` - All Song Tracks used

All Other Directories Listed:

* `CSS`
* `JS`

## Issues

* None currently.

## References and Credit
* [bensound](https://www.bensound.com/) website for providing music tracks used in this project. 
* [Jolliam](https://www.pixiv.net/member.php?id=3438144) from pixiv art website for providing background images.




