# Rock, Paper, Scissors Game

![Rock, Paper, Scissors game shown on a range of devices](assets/images/am-i-responsive.jpg)

[View Rock, Paper, Scissors game on Github Pages](https://deanbert.github.io/rock-paper-scissors/)

## CONTENT

* [User Experience (UX)](#User-Experience-(UX))
  * [Initial Discussion](#Initial-Discussion)
  * [User Stories](#User-Stories)

* [Design](#Design)
  * [Colour Scheme](#Colour-Scheme)
  * [Typography](#Typography)
  * [Imagery](#Imagery)
  * [Wireframes](#Wireframes)
  * [Features](#Features)
  * [Accessibility](#Accessibility)

* [Technologies Used](#Technologies-Used)
  * [Languages Used](#Languages-Used)
  * [Frameworks, Libraries & Programs Used](#Frameworks,-Libraries-&-Programs-Used)

* [Deployment & Local Development](#Deployment-&-Local-Development)
  * [Deployment](#Deployment)
  * [Local Development](#Local-Development)
  * [How to Clone](#How-to-Clone)

* [Testing](#Testing)
  * [Validation](#Validation)
  * [Solved Bugs](#Solved-Bugs)
  * [Testing User Stories](#Testing-User-Stories)
  * [Lighthouse](#Lighthouse)
  * [Full Testing](#Full-Testing)
  
* [Credits](#Credits)
  * [Code Used](#Code-Used)
  * [Content](#Content)
  * [Acknowledgments](#Acknowledgments)

- - -

## User Experience (UX)

### Initial Discussion

Rock, Paper, Scissors in a fun and interactive game that people of all ages can enjoy

### User Stories


*	As a user I want to be able to select clearly defined button/icons to make my selection.
*	As a user I want to be able to view my own score.
*	As a user I want to be able to view the computers score.
*	As a user I want to be able to restart the game whenever I want.
*	As a user I want to be able to clearly understand the instructions/rules of how to play the game.
*	As a user I want to be able to view my list comfortably on my desktop, tablet and mobile screen.
*	As a user I want to be able to play this game on my desktop, tablet and mobile.
*	As a user I want to be able to toggle between dark and light mode.

###

How to Play.
* Rock beats Scissors.
* Paper Beats Rock.
* Scissors beats Paper.
* First to 5 wins the Game.

- - -

## Design

### Colour Scheme

![Rock, Paper, Scissors Colour Palette](assets/images/Color Palette from mycolor.space)

The website uses a palette of dark shades with contrasting white font. The colour palette was taken from [mycolor.space](https://mycolor.space/) website.

### Typography

Google Fonts was used for the following fonts:

* Roboto is the main font for the entire site, with sans-serif used as a fall back.

* Poppins was also imported into the CSS as it paired well with the Roboto font, but it was not used.

### Imagery

I had intended to use some high resolution images taken from unsplash.com, but decided instead to use emoji's as they had a much smaller file size and worked very well on the site

### Wireframes

Wireframes were created for mobile, tablet and desktop using Balsamiq Wireframes.

[Wireframe](assets/images/p2-wireframe.png)

### Features

The website is comprised of five sections.
1. The score tracking section.
2. The Win/Lose Section.
3. The selection section that shows the options the user and computer have chosen.
4. The Rock, Paper, Scissors selector.
5. The How to Play section

### Future Features

Do to a lot of illness I was unable to complete the JS module and project to the best of my ability.
The features that I would have liked to implement but did not have time to are:

1. Incremental scores while users play the game.
2. A reset button for users to restart the game whenever they want.
3. I also wanted to dabble with adding a light/dark mode.
  
### Accessibility

I have been mindful during coding to ensure that the website is as accessible friendly as possible. I have achieved this by:

* Using semantic HTML.
* Using descriptive alt attributes on images on the site.
* Ensuring that there is a sufficient colour contrast throughout the site.

- - -

## Technologies Used

### Languages Used

HTML, CSS and JavaScript were used to create this website.

### Frameworks, Libraries & Programs Used

Balsamiq Wireframs - Used to create wireframes.

Git - For version control.

Github - To save and store the files for the website.

Google Fonts - To import the fonts used on the website.

Font Awesome - For the iconography on the website.

Google Dev Tools - To troubleshoot and test features, solve issues with responsiveness and styling.

[Tiny PNG](https://tinypng.com/) To compress images.

[Font Awesome](https://fontawesome.com/search?o=r&m=free) To create icons.

[Am I Responsive?](http://ami.responsivedesign.is/) To show the website image on a range of devices.

[Shields.io](https://shields.io/) To add badges to the README

- - -

## Deployment & Local Development

### Deployment

Github Pages was used to deploy the live website. The instructions to achieve this are below:

1. Log in (or sign up) to Github.
2. Find the repository for this project, rock-paper-scissors.
3. Click on the Settings link.
4. Click on the Pages link in the left hand side navigation bar.
5. In the Source section, choose main from the drop down select branch menu. Select Root from the drop down select folder menu.
6. Click Save. Your live Github Pages site is now deployed at the URL shown.

### Local Development

#### How to Clone

To clone the Bully-Book-Club repository:

1. Log in (or sign up) to GitHub.
2. Go to the repository for this project, deanbert/therapytree-cfp.
3. Click on the code button, select whether you would like to clone with HTTPS, SSH or GitHub CLI and copy the link shown.
4. Open the terminal in your code editor and change the current working directory to the location you want to use for the cloned directory.
5. Type 'git clone' into the terminal and then paste the link you copied in step 3. Press enter.

- - -

## Testing

Testing was ongoing throughout the entire build. I utilised Chrome developer tools while building to pinpoint and troubleshoot any issues as I went along.

Some of the bugs found were:

* A div was found to be the child of a h2 element.
* Alt attributes were used on button elements which had to be removed.
* Fixed a bug that caused the button selection section to be shown off center.
* Adding semicolons to the end of each line of JS code seemed less natural than in CSS and I Forgot to add them to a number of lines of code

### Validation

The W3C validator was used to validate the HTML of the website. It was also used to validate CSS in the style.css file.

* [W3C HTML](assets/images/w3-html-validator.png)
* [style.css CSS](assets/images/w3-css-validator.png)
* [JS Hint](assets/images/js-hint-testing.png)

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to allow me to test the performance, accessibility, best practices and SEO of the website.

[Lighthouse Desktop Testing](assets/images/lighthouse-desktop.png)
[Lighthouse Moblie Testing](assets/images/lighthouse-mobile.png)

### Full Testing

To fully test my website I performed the following testing using a number of browsers (google chrome, Gener8, Microsoft Edge) and devices (Acer Travelmate P215-52, Samsung Galaxy S20 FE, Google Pixel 4).

I also went through the page using google chrome developer tools to ensure that they responsive on all different screen sizes.

- - -

## Credits

### Code Used

* Basic JS was taken from “Code with Ania Kubow” beginner guide and modified, comments in script.js indicate code that was used. - https://www.youtube.com/watch?v=RwFeg0cEZvQ 

### Content

Content for the website was written by Dean Fay.

### Acknowledgments

I would like to thank Kasia Bogucka, My Cohort facilitator for helping me in submitting my second milestone project.
