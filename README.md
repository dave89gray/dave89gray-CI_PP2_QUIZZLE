# Quizzle
(Developer: David Gray)

![Mock-up image](assets/docs/mock-up.png)

[Live website](https://dave89gray.github.io/dave89gray-CI_PP2_QUIZZLE/)

## Table of Contents

1.  [Project Goals](#project-goals)
    1. [User Goals](#user-goals)
    2. [Site Owner Goals](#site-owner-goals)
2.  [User Experience](#user-experience)
    1. [Target Audience](#target-audience)
    2. [User Requirements and Expectations](#user-requirements-and-expectations)
    3. [User Stories](#user-stories)
    4. [Site Owner Stories](#site-owner-stories)
3.  [Design](#design)
    1. [Design Choices](#design-choices)
    2. [Colour](#colour)
    3. [Fonts](#fonts)
    4. [Structure](#structure)
    5. [Wireframes](wireframe)
4.  [Technologies User](#technologies-used)
    1. [Languages](#languages)
    2. [Frameworks & Tools](#frameworks-&-tools)
5.  [Features](#features)
6.  [Testing](#validation)
    1. [HTML Validation](#html-validation)
    2. [CSS Validation](css-validation)
    3. [JavaScript Validation](javascript-validation)
    4. [Accessibility](#accessibility)
    5. [Performance](#performance)
    6. [Device Testing](#device-testing)
    7. [Browser Compatibility](#browser-compatability)
    8. [Testing User Stories](#testing-user-stories)
8.  [Bugs](#bugs)
9.  [Deployment](#deployment)
    1. [EmailJS](#emailjs-api)
10. [Credits](#credits)
11. [Acknowledgements](#acknowledgements)

## Project Goals
Quizzle is a fun game that aims to bring the user some happiness. The aim is to also educate the user about Scotland while they are having fun.

### User Goals
- Have fun while playing a quiz game.
- Learn more about Scotland as a nation.

### Site Owner Goals
- Create a game that the user will find entertaining and fun.
- Educate the user about Scotland as a nation.

## User Experience

### Target Audience
- People who like quizes.
- Historians.
- People who want to learn more about Scotland.

### User Requirements and Expectations
- A simple game that's easy to play.
- Links and functions that work as standard.
- Presentation that refernces Scotaland.
- A simple layout that is easy to use and navigate through.
- An easy method to leave feedback.
- Accessibility.

### User Stories
1. As a user, I want to test my knowledge of Scotland in a quiz.
2. As a user, I want to be notified if my chosen answer is correct or incorrect.
3. As a user, I want to track my progress as I answer questions.
4. As a user, I want to see my score as i progress through the quiz.
5. As a user, i want to be able to log my score and my name to the leaderboard.
6. As a user, I want to see how my score compares to others.
7. As a user, I want to be able to give feedback and get confirmation it was sucessfully delivered.

### Site Owner Stories
8. As a site owner, i want users to be able to give us feedback and make suggestions about future questions.
9. As a site owner, I want users to be able to locate us on our social media platforms.
10. As a site owner, I want users to be able to navigate about the site easily.

## Design

### Design Choices
Quizzle was designed to be proud and loud about the country Scotland. With the consistent theme of the Scotland flags, colours and references to haggis, this is supposed to leave the user feeling positive about Scotland.

### Colour
The colours of the website were chosen to match the colours of the Saltire (the Scottish flag), #FBF7F5 and #005EB8 respectively. A black colour was used on the Contact Us page so as to improve contrast and make it easier to read.

### Fonts
Arial has been chosen as the main font throughout the website so as to reduce the chances of it not functioning properly on a browser while still presenting nicely. Helvetica and sans-serif are used as back up in case Arial fails.

### Structure
The website is structured in an easy-on-the-eye way with a simple layout that is easy for the user to navigate through. The user shall find 4 different pages within the website:

- A homepage with features to navigate to different areas:
    - To the game page.
    - To the Leaderboard.
    - To the Contact-us page.
    - To the social media pages
- The game page.
- The results page.
- The leaderboard page.
- The Contact Us page.

### Wireframes

<details><summary>Home Page</summary>
<img src="assets/docs/wireframes/index.png">
</details>
<details><summary>Game Page</summary>
<img src="assets/docs/wireframes/game.png">
</details>
<details><summary>Results Page</summary>
<img src="assets/docs/wireframes/results.png">
</details>
<details><summary>Leaderboard Page</summary>
<img src="assets/docs/wireframes/leaderboard.png">
</details>
<details><summary>404 Page</summary>
<img src="assets/docs/wireframes/404-page.png">
</details>

## Technologies Used

### languages
- HTML
- CSS
- Javascript

### Frameworks and Tools
- GitHub
- Gitpod
- Balsamiq
- Favicon
- JSHint
- Lighthouse
- W3C Markup validation service
- W3C Jigsaw CSS validation service
- Wave webAim accessibility evaluation tool
- EmailJS

## Features
This site contains 6 pages and 10 features.

### Header
- The header appears on all pages except the Leaderboard page which has a "Go Home" button on it to navigate back.

<details><summary></summary>
<img src="assets/docs/features/feature-header.png">
</details>

### Footer
- The footer appearson all pages
- The position is always at the bottom of the screen
- User story: 9

<details><summary>Footer</summary>
<img src="assets/docs/features/feature-footer.png">
</details>

### Home Screen
- Provides the user the ability to navigate throught the website easily.
- User story: 10

<details><summary>Home Screen Navigation</summary>
<img src="assets/docs/features/feature-home-page.png">
</details>

### Quiz Screen
- This consists of 4 sections:
    - The quiz questions
    - The multiple choice answer
    - The progress bar
    - The score counter
- User stories covered: 1, 2, 3 & 4

<details><summary>Game Screen</summary>
<img src="assets/docs/features/feature-game.png">
</details>

### Results Screen
- This section has different buttons to allow easy navigation
- The score will fill in dynamically
- There is a text input for the user to fill in their name
- User stories: 5, 10

<details><summary>Results section</summary>
<img src="assets/docs/features/feature-results.png">
</details>

### Leaderboard Screen
- This section will show the leaderboard of the game, with the highest score being at the top
- User story: 6

<details><summary>Leaderboard Screen</summary>
<img src="assets/docs/features/feature-leaderboard.png">
</details>

### Contact Form
- This provides the user with a way to give feedback or make suggestions
- User stories covered: 7, 8

<details><summary>Contact Form</summary>
<img src="assets/docs/features/feature-form.png">
</details>

### Contact Form Confirmation
- This provides the user with feedback after the form has been submitted
- User story 7

<details><summary>Contact Form Confirmation</summary>
<img src="assets/docs/features/feature-feedback.png">
</details>

### 404 Message
- This provides the user with a way to return to the game after clicking on a broken link

<details><summary>404 Message</summary>
<img src="assets/docs/features/feature-404.png">
</details>

## Validation

### HTML Validation
The W3C Markup Validation service was used to verify the HTML of the website. All pages passed with no errors:
<details><summary>Home Page</summary>
<img src="assets/docs/validation//html-validation-index.png">
</details>
<details><summary>Game Page</summary>
<img src="assets/docs/validation//html-validation-game.png">
</details>
<details><summary>Results Page</summary>
<img src="assets/docs/validation/html-validation-results.png">
</details>
<details><summary>Leaderboard Page</summary>
<img src="assets/docs/validation/html-validation-leaderboard.png">
</details>
<details><summary>Contact Us Page</summary>
<img src="assets/docs/validation/html-validation-contact-us.png">
</details>

### CSS Validation
The W3C Jigsaw Validation Service was used to validate the CSS of the website. The CSS passed with no errors.
<details><summary>Whole Page</summary>
<img src="assets/docs/validation/css-validation-whole-page.png">
</details>

### Javascript Validation
JSHint Static Code tool was used to validate the Javascrip code from the website. There were no major errors highlighted.
There was an undefined variable, emailJS, on the contact page which got highlighted whoever if i changed this it removed the functionality. There was also an unused variable on the results page, however this was called on in another file.
<details><summary>Game Javascript</summary>
<img src="assets/docs/validation/js-validation-game-p1.png">
</details>
<details><summary>Game Javascript</summary>
<img src="assets/docs/validation/js-validation-game-p2.png">
</details>
<details><summary>Results Javascript</summary>
<img src="assets/docs/validation/js-validation-results.png">
</details>
<details><summary>leaderboard Javascript</summary>
<img src="assets/docs/validation/js-validation-leaderboard.png">
</details>
<details><summary>Contact Us Javascript</summary>
<img src="assets/docs/validation/js-validation-contact-us.png">
</details>

### Accessibility
The WAVE WebAIm evaluation tool was used to ensure the website has high accessibiliy standards. There were 2 errors highlighted on the results page, however the H2 must be empty as it is dynamically filled in and the form has a button instead of a label.

<details><summary>Home Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-index.png">
</details>
<details><summary>Game Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-game.png">
</details>
<details><summary>Reults Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-results.png">
</details>
<details><summary>leaderboard Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-leaderboard.png">
</details>
<details><summary>Contact Us Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-contact-us.png">
</details>
<details><summary>404 Page Accessibility</summary>
<img src="assets/docs/validation/accessibility-evaluation-404.png">
</details>

### Performace
Google Lighthouse was used in the Chrome Developers tools which tested the performance of the website.

<details><summary>Home Performance</summary>
<img src="assets/docs/validation/performace-lighthouse-index.png">
</details>
<details><summary>Game Performance</summary>
<img src="assets/docs/validation/performace-lighthouse-game.png">
</details>
<details><summary>Results Performance</summary>
<img src="assets/docs/validation/performace-lighthouse-results.png">
</details>
<details><summary>Leaderboard Performance</summary>
<img src="assets/docs/validation/performace-lighthouse-leaderboard.png">
</details>
<details><summary>Contact Us Performance</summary>
<img src="assets/docs/validation/performace-lighthouse-contact-us.png">
</details>

### Performing test on devices
The website was tested on the below devices:
- Apple MacBook Pro (15-inch, Mid 2012)
- Apple Ipad mini 4, software wersion 15.2.1
- Apple Iphone 11

The website was also tested on Google Chrome Developer Tools using the toggling option to view the layout on various devices.

### Browser Compatability
The website was tested on the following browsers:
- Google Chrome
- Mozilla Firefox
- Safari

### Testing User Stories

1. As a user, i want to test my knowledge of Scotland in a quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Buttons and links for easy navigation | Click on the features to ensure that they work | To be navigated away from the page the user is on | Works as expected |

<details><summary>User Story 1</summary>
<img src="assets/docs/user-story-telling/user-story-1.png">
</details>

2. As a user, i want to be notified if my chosen answer is correct or incorrect.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| The answer will turn green or red depending on the result and the score will update | Click the answer and see what the result is, the progress and score update automatically | Question to turn red as it is wrong | Works asa expected |

<details><summary>User Story 2</summary>
<img src="assets/docs/user-story-telling/user-story-2.png">
</details>

3. As a user, i want to track my progress as i answer the questions.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| The progress bar fills up as the questions are answered | Choose an answer to a question | The progress bar should fill up in increments | Works as expected |

<details><summary>User Story 3</summary>
<img src="assets/docs/user-story-telling/user-story-2.png">
</details>

4. As a user, i want to see my score as i progress through the quiz.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| The score | Navigate to the Projects page, locate the various examples of work undertaken | Find the examples of the company portfolio | Works as expected |

<details><summary>User Story 4</summary>
<img src="assets/docs/user-story-telling/user-story-2.png">
</details>

5. As a user, i want to be able to log my score and name to the leaderboard.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Log the user details so it can populate the leaderboard | Fill in the blank space for the username | The results will populate the leaderboard | Works as expected |

<details><summary>User Story 5</summary>
<img src="assets/docs/user-story-telling/user-story-5.png">
</details>

6. As a user, i want to see how my score compares with others.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Leaderboard populates automatically with user inputs | Navigate to the Leaderboard page and view the results | The leaderboard to have scores in it | Works as expected |

<details><summary>User Story 6</summary>
<img src="assets/docs/user-story-telling/user-story-6.png">
</details>

7. As a user, i want to be able to give feedback and get confirmation is was successfully delivered.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| This is for the user to give feedback on the website or make suggestions | Navigate to the contact us page and fill in the requried details | A thank you page replaces the contact us page | Works as expected |

<details><summary>User Story 7</summary>
<img src="assets/docs/user-story-telling/user-story-7.png">
</details>
<details><summary>User Story 7</summary>
<img src="assets/docs/user-story-telling/user-story-7a.png">
</details>

8. As a site owner, i want users to be able to give us feedback and make suggestions about future quizes.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Contact form | The user is to navigate to the contact us page and fill in the form | form filled in and i receive an email through emailJS | Works as expected |

<details><summary>User Story 8</summary>
<img src="assets/docs/user-story-telling/user-story-7.png">
</details>
<details><summary>User Story 8</summary>
<img src="assets/docs/user-story-telling/user-story-8.png">
</details>

9. As a site owner, i want users to be able to locate us on our social media playforms.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Social media links in footer | Navigate to the footer in any of the pages | clicking on the icon will take the user to the social media platform | Works as expected |

<details><summary>User Story 9</summary>
<img src="assets/docs/user-story-telling/user-story-9.png">
</details>

10. As a site owner, i want users to be able to navigate the site easily.

| **Feature** | **Action** | **Expected Result** | **Actual Result** |
|-------------|------------|---------------------|-------------------|
| Easily clickable links throughout the website | Click on any of the headers or buttons to move through the website easily |  | Works as expected |

<details><summary>User Story 10</summary>
<img src="assets/docs/user-story-telling/user-story-1.png">
</details>

## Bugs

| **Bug** | **Fix** |
| ----------- | ----------- |
| The game wouldnt transfer directly to the results page | Fix lines 168 - 170 of game.js |
| Fix the submit button at the bottomm of the contact us form | Change the wifth to match the form |
| There were some undefined variable in the Javascript files | name each variable correctly by adding a "const" |
| The feedback html would not show centered on the page | Add CSS styling so that it is now centered |

## Deployment
The website was deployed using GitHub Pages by following these steps:
1. In the GitHub repository navigate to the Settings tab
2. On the left-hand menu select Pages
3. For the source select Branch: master
4. After the webpage refreshes automatically you will ses a ribbon on the top saying: "Your site is published at https://dave89gray.github.io/dave89gray-CI_PP2_QUIZZLE/".

You can fork the repository by following these steps:
1. Go to the GitHub repository
2. Click on Fork button in the upper right hand corner

### EmailJS API
1. Create an account at emailjs.com
2. Add new email service, make note of the contact_service id
3. Add a new email template, make note of the contact_form id
4. Go the the integration dashboard, make note of your user id
5. Load the EmailJS SDK in the head of your HTML file
6. In JavaScript create a function that listens to a submit event and then initializes the SDK with your user id (emailjs.init('YOUR_USER_ID');) and submits the form (emailjs.sendForm('contact_service', 'contact_form', this);)

## Credits
### Code
- I followed Learn to Code guidance on building the game [Building Quiz App with HTML, CSS and JavaScript](https://www.youtube.com/watch?v=icb9AUBeznQ)
- I followed MDN web Docs for more information regarding Template Literals [Template literals (Template strings)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- I followed Sitepoin on more understanding on rem values [Rem in CSS: Understanding and Using rem Units](https://www.sitepoint.com/understanding-and-using-rem-units-in-css/)
- I followed Thoughbot for more inforamtion on transitions and transform [CSS Transitions and Transforms for Beginners](https://thoughtbot.com/blog/transitions-and-transforms)
- I followed emailJs tutorials to get the email sending Javascript API from the official website[EmailJS](https://www.emailjs.com/docs/tutorial/overview/)
- I used the layout of my first coding projects README file to help with this one


### Media
In order of appearance:
- [Saltire Flag](assets/images/background_image.jpeg): Photo by <a href="https://www.istockphoto.com/photo/flag-of-scotland-gm504562675-44394806">Popartic</a> at <a href=https://www.istockphoto.com/portfolio/Popartic?mediatype=photography">Istock Images</a>
- [Royal Banner](assets/images/feedback_img.jpg): Photo by <a href="https://blogs.glowscotland.org.uk/wl/public/StoneyburnP7/uploads/sites/938/2012/02/haggis2.jpg">Sporran</a> at <a href="https://www.istockphoto.com/nl/portfolio/Sporran?mediatype=photography">Istock Images</a>
- [Haggis Cartoon](assets/images/404_image.jpeg): Photo by <a href="https://www.istockphoto.com/photo/flag-of-scotland-gm504562675-44394806">Mrs Robley</a> at <a href="https://blogs.glowscotland.org.uk/wl/StoneyburnP7/2012/02/03/address-to-a-haggis/">Stoneyburn P7</a>


## Acknowledgements
I would like to take this opportunity to thank:
- My mentor Mo Shami for his encourgement, guidance, patience and support.
- The tutor support at Code Institute, whose help and guidance was invaluable.