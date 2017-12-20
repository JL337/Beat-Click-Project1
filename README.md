# Beat!Click Rythym Game 
Beat-Click-Project1
(HTML, CSS, Javascript, JQuery) 
Sparta Global/Project 1/W3 D1-D5

A music beat rythym browser game created with HTML, CSS, Javascript and JQuery.


## Purpose
The aim of this project was to build a browser based game using only HTML, CSS, Javascript and JQuery. This was compeleted from scratch over the span of approximately four to five days, and involved two sprints. 

## Functionality

The objective of the game is to score as many points as possible within a given time frame or win with as least mistakes, aka 'Miss(ed' clicks as possible. 

In order to to this, the player must click with the mouse in time to the background music. When the outer circle meets the inner circle, they should click on the corresponding inner circle. This earns the player points depending on the exact real-time accuracy of the click. 

If the player reaches the threshold on variable `MISS` , the game ends. The game also ends when the audio duration of the music reaches `00:00`.

Input data is obtained from the mouse. Additionally DOM manipulation was used, with JQuery to change the HTML. Some mathematical calculations were used to calculate the BPM and interval delays in order to match the outer circle in time to each song. See `Audio`  directory for a list of all songs used.

## Implementation

The functionality has been implemented using the following features:

* Twitter Bootstrap 3.3.7
* Semantic HTML5
* HTML5 Audio
* JQuery 3.2.1
* Javascript 
* CSS

## Usage

### Building

Fork/clone this repository.

### Running

Open `start.html` to start the game. This contains Beat!Click introduction page and start game button.

Open `beat-click.html` to start the game immediately.

Make sure all the files and directories are there before starting the same. A list of all files and directories can be seen in the Customising section.

### Customising

To customise the content, modify the contents of the following files:

* `start.html`
* `start.css`
* `start.js`
* `beat-click.html`
* `beat-click.css`
* `beat-click.js`

There are also seperate directories for Audio and Images.

* `Images` - All Images used
* `Audio` - All Song Tracks used

Other Directories:

* `CSS`
* `JS`

### Viewing the docs


## Issues

* Do not click mutliple times per circle button, this will interfere with the scoring system.
* End final score *may* not display correctly.

## Demo site


## License


