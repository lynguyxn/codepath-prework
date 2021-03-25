# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: Ly Nguyen

Time spent: **4** hours spent in total

Link to project: https://glitch.com/edit/#!/lynguyen-codepath-prework

## Required Functionality

The following **required** functionality is complete:

- [✔] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [✔] "Start" button toggles between "Start" and "Stop" when clicked.
- [✔] Game buttons each light up and play a sound when clicked.
- [✔] Computer plays back sequence of clues including sound and visual cue for each button
- [✔] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [✔] User wins the game after guessing a complete pattern
- [✔] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [✔] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
- [✔] More than 4 functional game buttons
- [ ] Playback speeds up on each turn
- [✔] Computer picks a different pattern each time the game is played
- [ ] Player only loses after 3 mistakes (instead of on the first mistake)
- [ ] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [✔] Different playback speed settings and controls

## Video Walkthrough

Here's a walkthrough of implemented user stories:
![](https://s3.amazonaws.com/img0.recordit.co/fqlF9BTDBL.mp4?AWSAccessKeyId=AKIAUQ5RURZ7ND2T2B6I&Expires=1616658701&Signature=nzucwMfsaWlq2TfapSGtvjwQZK0%3D)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- https://javascript.plainenglish.io/how-to-generate-an-array-of-random-numbers-in-javascript-f883de667e84]

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- A challenge I encountered in creating this submission was understanding the functionalities of frontend development. Since I have more experience as a backend developer and not a lot of experience with frontend, I was not really familiar with thinking about frontend implementation. When I added the speed control feature, I was first unsure of how to code it. However, I started thinking about the implementation from a frontend perspective and applied all the knowledge about how html, css, and js works together. I realized that javascript functions in frontend are essentially the same as backend coding except that there is no database connection. I initially thought that frontend was just for user interface and design implementations, however I was proved wrong through this project by the javascript integration into frontend. I overcame the challenge by looking at the frontend resources provided by the CodePath walkthrough and diversifying my mindset as a web developer through this chance to work more with frontend development. Stepping away from the backend perspective, I definitely was able to learn more about how web development is done on the frontend and its vast functionalities I have yet to explore. This challenge assured me of my interests in web development and has made me even more passionate about further web projects.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- After completing my submission, I realized that there are a lot more aspects about web development I would love to learn about. For example, I would love to learn more about creating 3d model animations and integrating that into my websites. I am also curious about more complex applications of user interface designs such as a game-inspired website design where the user is allowed to interact with the website through a first-person perspective. I am also curious about backend development using AWS since I am not familiar with AWS products and know that it is heavily used in the web development industry. There are so many different aspects of web development that I would love to expand my knowledge about!

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- If I had more time to work on this project, I would have implemented the timer functionality into the game. I was able to start on it but not successfully fix the bugs in my timer implementation. I believe I was about half-way finished with the feature but got stuck on a few bugs. I definitely feel like I could have finished it if I was given more time. I had created a timer that shows on the website in html but was struggling to fix an issue with an infinite loop and where to clear the timer interval without it causing issues at each step. Other than that, I could also have researched a bit more about changing the button designs. I did research a little on how to make the buttons I wanted but unfortunately did not have a good result due to the time constraint so I had to settle for a simpler design.

## License

    Copyright Ly Nguyen

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
