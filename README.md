# Jumble Jungle
---
## Live link to website

[La Citadelle] ADD LINK TO WEBSITE

## Table of Contents
<ol>
<li>User Experience
    <ul>
        <li>5trategy Plane</li>
        <li>Scope Plane</li>
        <li>Structure Plane</li>
        <li>Skeleton Plane</li>
        <li>Surface Plane</li>
    </ul>
    </li>
<li>Testing</li>
<li>Validator Testing</li>
<li>Accessibility</li>
<li>Browser Testing</li>
<li>Bugs</li>
<li>Fixed Bugs</li>
<li>Technology</li>
<li>Deployment</li>
<li>Credits</li>
</ol>

## User Experience

### 5trategy Plane
The strategy plan for Jumble Jungle was to create a game with no timer but an abudance of words. The user can only have their name on the leaderboard if they complete all the words. Jungle Jumbles aim was to create a colourful and captivating online game, while keeping users engaged.

#### Objectives
* User Engagement: Create a game that captivates and engages users, encouraging them to spend time playing and enjoying the experience. 
* Design the game to be not only entertaining but also educational, helping users improve their vocabulary and cognitive skills. 
* Challenging Gameplay: Develop puzzles that provide an appropriate level of challenge, keeping players interested and motivated to solve each word. 
* User-Friendly Interface: Design an intuitive and user-friendly interface that allows players to easily interact with the game, drag-and-drop letters, and navigate through different features. 
* Scalability: Create a game structure that allows for scalability, enabling the addition of more words or features in future updates to keep the game content fresh. 
* Hint System: Implement a hint system that assists players when needed, ensuring that the game remains accessible to a broad audience, including players of varying skill levels. 
* Feedback Mechanism: Incorporate feedback mechanisms to inform players of correct or incorrect guesses, providing a dynamic and responsive gaming experience. 
* Game Progression: Establish a sense of progression, perhaps through levels or stages, to keep players motivated to advance through the game. 
* Monetization (future endeavors): If the game could be monetized, then the cost to make the game would be low and it would be easy to add more words to keep users engaged. 
* Testing and Optimization: Regularly test the game to identify and fix bugs, optimize performance, and ensure a smooth gaming experience across different devices. 

### Scope Plane

#### Features 
Jumble Jungle was created to provide a fun, engaging and low cost and maintenace game for all to play whilst be challenging and inviting. This game is meant to be enjoyable and perhaps a game that users could enjoy or perhaps just to pass the time.

As you can see from the image below the website is compatible on all device screen sizes from the Galaxy Fold (280px screen width) and above. The layout ensures easement of gameplay with consideration as to where the buttons were located so if the user is using there phone then it minimising strain on the users hands.

![Amiresponsive image which shows website on different screen sizes](assets/images/readme-images/amiresponsive.png)

### Index.html page features

### Navigation

##### Navigation menu on devices with a screen width below 1447px width
![Header screenshot showing main header and navigation menu when on mobile](assets/images/readme-images/index.html-page.png)

##### Navigation menu on devices with a screen width above 1447px width
![Header screenshot showing main header and navigation menu when on desktop](assets/images/readme-images/index.html-page-large.png)

An easy to use navigation is implemented onto all pages with easily identifiable and distinguisable icons for Home, Play, Leaderboard, Restart and Help/Information.

**Home**, Which will revert back to the main page (index.html), this is a simplistic main menu with two options (Leaderboard or Game)
**Leaderboard**, Which will allow the user to jump to the leaderboard to view the league table.
**Game**, wWich will enable the user to go commence playing Jumble Jungle.

* The buttons are responsive and will fit all screens with any orientation. 
* The navigation icons/buttons are easy to understand and allow the user to understand the different sections of the website/game which allows for a greater user experience.

### Main Menu (Index)
**Navigation Buttons**
The navigation buttons are easily identifiable and work with both a mouse click and touch. They are also positioned in sections of the background image that minimise any readbility related issues.
![Index main menu buttons (Play & Leaderboard)](assets/images/readme-images/index.html-buttons.png)
**Background Image**
The background image is responsive and although no specific H1 element is visble, the logo in the background image is responsive and moves to fit the screen depending on the screen size.
![Background image for laptop, monitors and tv screen sizes](assets/images/readme-images/index.html-page-large.png)
![Background image for phones, tablets and landscape mobile devices](assets/images/readme-images/index.html-page.png)
**Favicon Image**
The Favicon image is displayed with a ape with the letter J representing the intial letters of the game.
![Favicon image](assets/images/readme-images/favicon-image-readme.jpeg)

### Leaderboard
**Header**
The leaderboard page is a simple table which prepopulates when users complete the game using a local storage. The title is also distinguiable compared to its sky blue background so users who are visually impaired wont be hindered when visiting the website.
![Image of the leaderboard section](assets/images/readme-images/leaderboard header-image.png)
**Navigation Buttons**
The navigation buttons are easily identifiable and work with both a mouse click and touch.
![Image of the leaderboard button](/workspace/Jumble-Jungle/assets/images/readme-images/leader-board-button-image.webp)
**Leaderboard Table**
The leaderboard table is simpliestic and uses a local storage to add the name of the user who completes the game.
![Image of the leaderboard with a winner listed in the leaderboard table](assets/images/readme-images/leaderboard-input-game-complete.png)
**Background Image**
The background is vibrant and displays apes on a pedistool to represent the winners of the game.
![Background image of the leaderboard page](assets/images/readme-images/leaderboard-background-image.png)

### Game
**Background Image**
The game page allows users to figure out the different 8 letter anagramss which after testing different box sizes was found to allow the most user friendly dimensions. The background although colourful has a 3d overlay affect which doesn't distract users from the game. The background is also has lighter shades to allow the containers within the game to be distinguisable from the rest of the page.
![Background image for the game.index page](assets/images/readme-images/game.html-background.jpeg)
**Help Overlay**
The help overlay offers precise and condensed information that outlines the purpose of the game.
![The help section overlay with tips and instructions and a close button in the top right of the overlay](assets/images/readme-images/help-section-image.png)
![Help section image](assets/images/readme-images/help-section-image-large.webp)
**Navigation Buttons**
Should the user wish to return to the main menu, restart the game or require help with the game then all the navigations icons/buttons are readily available.
![Home, Restart & Help buttons](assets/images/readme-images/game-html-buttons.png)
**Game Buttons**
Due to the user friendly layout and the ease of navigation the user will be able to navigate the page, and interact with the game.
![Submit, Hint and Delete buttons to allow users to interact with the game](assets/images/readme-images/game-buttons-image.png)
**Game Container**
Below are images of the game areas. Everything the user needs will be in their veiw with no real need to scroll through pages to ascertain what the websites purpose is.
![Box container image where letters are placed](assets/images/readme-images/box-container.png)
![Letter container where the letters associated with the word will be displayed](assets/images/readme-images/letter-container.png)
**Custom Display Notifications**
Should the user make an invalid selection, or establish the correct word, or win the game then notification boxes will be displayed.
![Correct word input notification box](assets/images/readme-images/correct-input-modal-message.png)
![Incorrect word input notification box](assets/images/readme-images/incorrect-input-modal.png)
![Win game notification display which will then proceed to name input and leaaderboard.html](assets/images/readme-images/win-game-modal-message.png)
Should the user win the game then they will be given the opportunity to input thier name and be displayed on the leaderboard.
![Name input when a user wins the game](assets/images/readme-images/name-input-after-game-complete.png)



![Letter container where the letters associated with the word will be displayed](assets/images/readme-images/letter-container.png)
        ![Screenshot to illustrate a unsuccessful or incorrect reservations form submission](assets/images/readme-images/leaderboard-background-image.png)
![Screenshot to illustrate a unsuccessful or incorrect reservations form submission](assets/images/readme-images/leaderboard-background-image.png)
### Menu.html page (Menu page)
The Menu page has a quick navigation anchor link for all four sections of the menu including lunch, dinner, dessert and wine menus.
![Lunch, dinner, desserts and wine menu](assets/images/readme-images/menu-navigation-for-menu.png)

In addition to the above there is also an anchor element found at the bottom of the lunch, dinner, dessert and wine menu that will allow the user to quickly scroll back up to the menu navigation as the menu is enlongated when on smaller screens.

![Anchor link found at the bottom of each menu to revert back to the menu navigation](assets/images/readme-images/menu-navigation-anchor.png)

### Lunch Menu
The lunch menu contains starters, mains, three course details in addition to allergy and intolerance advice. Furthermore infromation regarding VAT can be found. Its important to note the allergy and intolerance advice is shown at the bottom of the lunch, dinner and dessert menu. The description of the items are also available.
![Lunch, starters and mains menu](assets/images/readme-images/lunch-menu-starters-and-mains.png)

### Dinner Menu
The dinner menu contains starters, mains, three course details in addition to allergy and intolerance advice. Furthermore infromation regarding VAT can be found. The description of the items are also available.
![Dinner, starters menu](assets/images/readme-images/dinner-menu-starters-and-mains.png)

### Dessert Menu 
The dessert menu contains starters, mains in addition to allergy and intolerance advice. Furthermore infromation regarding VAT can be found. The description of the items are also available.
![Dessert menu (1 of 2)](assets/images/readme-images/dessert-menu-part-1.png)
![Dessert menu (2 of 2)](assets/images/readme-images/dessert-menu-part-2.png)

### Wine Menu
The wine menu showcases all the wines available to compliment the customers meals, ranging from white, red, Italian and Spanish including the origin of some but more importantly the price. The description of the items are also available.
![Wine menu - White wines](assets/images/readme-images/wine-menu-white-wine.png)
![Wine menu - Red wines](assets/images/readme-images/wine-menu-red-wine.png)
![Wine menu - Italian wines](assets/images/readme-images/wine-menu-italian-wine.png)
![Wine menu - Spanish wines](assets/images/readme-images/wine-menu-spanish-wine.png)  


### Structure Plane
#### Home Page:
**Welcome Section:** Introduction to La Citadelle, showcasing its ambiance and specialty with capivating images.
**About Section:** Brief overview highlighting the restaurants qualities.
**Reservation Call-to-Action:** Prominent button or section for easy access to make reservations.
**Opening times:** Details opening and closing times of the restaurant.


#### Gallery Page:
**Photo Gallery:** Showcasing high-quality images of the restaurant's interior, dishes, and ambiance.

#### Menu Page:
**Featured Menu Section:** Displaying select dishes or seasonal specials.
**Detailed Dish Listings:** Individual pages or sections for each dish with descriptions, images, and pricing.
**Allergy and intolerance disclaimers:** Disclaimer for allergy and intolerances

#### Reservations Page:
**Reservation Form:** User-friendly form to book tables with date, time, party size, and contact details.
**Reservation Policies:** Clear information regarding reservation charges and VAT, etc.
**Special Dietary Options:** Ability to allow user to indicate special requests or dietary preferences.

#### Contact Information:
**Location and Hours:** Address, map, and operating hours of the restaurant.
**Contact Details:** A form for general inquiries or feedback.
**Contact Information:** Phone number, email, and links to social media profiles.

#### Footer Section:
**Social media links:** Links to La Citadelle's social media profiles.
**Contact & address information:** Physical address in addition to telephone and email.
**Copyright Information:** Statement about the website's ownership and rights.

#### Additional Functionalities:
**Responsive Design:** Ensuring the website works seamlessly across various devices (desktop, tablet, mobile).
**Navigation Menu:** Quick access to important pages.


### Skeleton Plane
#### Home Page:

**Header Section:**
Logo of La Citadelle and navigation menu for easy access to different pages.

**Image:**
Captivating images showcasing the restaurant's ambiance.

**About Section:**
Brief overview text about the restaurant's history.
Narrative about La Citadelle's amd the head chef chef.

**Contact Us Section:** 
Concise welcome message with a call-to-action button for reservations.
Contact information including address.

**Opening times**
The opening and closing times are clearly displayed.

**Menu Page:** 
Menu Categories with clearly labeled sections for starters, main courses, desserts, and drinks.
Each section displaying descriptions of dishes with names and prices and ingredients.

**Menu Section:**
Highlighting select dishes with appealing images and brief descriptions including prices and allergy and intolerance disclaimer

**Reservations Page:**
Reservation Form: User-friendly form to select date, time, party size, and contact details.

**Navigation Links:**
Quick access to essential pages.

**Social Media Links:**
Icons or links to La Citadelle's social media profiles.
Copyright Information:

**Responsive Design:**
**User friendly** Ensuring the layout adjusts seamlessly for various screen sizes (desktop, tablet, mobile).
**Consistent Design Elements:** Maintaining a cohesive visual style, typography, and color scheme across all pages.
**Clear Hierarchy and Visual Hints:** Using visual cues like buttons, icons, and colors to guide users through the site.

### Surface Plane

Visual Design:
Color Palette: Neutral colors of white, black and grey were selected to complement the restaurant's ambiance.
Typography: Ensured readability across different devices and screen sizes by selecting readable and elegant fonts for headings, body text, and other elements that match the restaurant's style. 
Imagery and Graphics: Used high-quality images that showcase the restaurant's interior, cuisine, and ambiance. Incorporate visuals that evoke a sense of luxury and culinary excellence including images of the chefs.
Iconography: Employ icons or graphical elements to enhance visual appeal and aid in navigation.

Layout and Structure:
Hierarchical Structure Implemented a consistent layout that is user friendly whilst providing clear and concise information.
Whitespace: Used ample whitespace for a clean and uncluttered appearance, allowing content to breathe and enhancing readability.
Responsive Design: Ensured the website is mobile-friendly, adapting seamlessly to different screen sizes without compromising aesthetics or functionality.

User Interface (UI) Elements:
Navigation Menu: Desiged an intuitive and user-friendly navigation menu that is easy to locate and use. Used hamburger menu for mobile devices.
Buttons and Call-to-Actions: Used visually appealing buttons that stand out and encourage users to take action, such as making reservations or exploring the menu.
Forms and Input Fields: Designed clear and user-friendly forms for reservations or inquiries, with easily identifiable input fields and appropriate feedback upon submission.

Interactive Elements:
Hover Effects: Implemented subtle hover effects on buttons, links, or images to provide visual feedback and enhance user interaction.
Animations and Transitions: Incorporate smooth and purposeful animations or transitions to improve user experience and engagement without being overwhelming.


## Testing

Below is a table showing various actions performed on the website including the expected/desired outcome with the result on the final column.

| Action                                                                                    |Expected Result                                                                                    | Result                                                 |
| :---------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------ | :----------------------------------------------------- |
| Load index.html page                                                                      | The Homepage should load                                                                          | Homepage loaded                                        |
| Load menu-html page                                                                       | The Menu page should load                                                                         | Menu page loaded                                       |
| Load bookins.html                                                                         | The Book now page should load                                                                     | Book now page loaded                                   |
| Click on the h1 logo                                                                      | The page should refresh if currently on the home page or divert user to the homepage if not       | Home page loaded                                       |
| Click on menu icon (hamburg) when on screens less than 774px width                        | The nav drop down menu should reveal all the nav options Home, About Us, Book Now, Menu, Contact  | Navigation menu dropped                                |
| Scroll images on scroll.container found underneath the header                             | The imagess move left to right with touch, keyboard or using scroller                             | Images scrolled - left to right                        |
| Click the CLICK HERE on the contact us section of the homepage                            | The bookings page should load where the user can complete the reservations form                   | Bookings page loaded                                   |
| Click the Facebook social media link found in the footer at the bottom of all html pages  | Facebook site should load                                                                         | Facebook loaded                                        |
| Click the X (formally known as Twitter) social media link found in the footer             | Twitter (X) site should load                                                                      | Twitter (X) loaded                                     |
| Click the Youtube social media link found in the footer at the bottom of all html pages   | Youtube site should load                                                                          | Youtube loaded                                         |
| Click the Instagram social media link found in the footer at the bottom of all html pages | Instagram siteshould load                                                                         | Instragram loaded                                      |
| Click About Us on the header (both desktop and mobile device)                             | The user should be directed to the About us section found on the homepage                         | Page scrolled to About us section                      |
| Click Book Now on the header (both desktop and mobile device)                             | The user should be directed to the Book Now page (bookings.html)                                  | Book now page loaded                                   |
| Click Menu on the header (both desktop and mobile device)                                 | The user should be directed to the Menu page (menu.html)                                          | Menu page loaded                                       |
| Click Contact on the header (both desktop and mobile device)                              | The user should be directed to the Contact us section found on the homepage                       | Page scrolled to Contact us section                    |
| Fill in the reservations form on the bookings.html                                        | The user will receive a confirmation of receipt and the details inputted                          | Received confirmation of receipt with details          |
| Fill in the reservations form on the bookings.html with invalid input                     | The user will receive a pop up notification to confirm error with input                           | Pop up message shown with prompt                       |
| Click the Lunch anchor at the top of the menu.html page                                   | The user will be redirected to the top of the Lunch Menu                                          | Redirected to Lunch menu                               |
| Click the Dinner anchor at the top of the menu.html page                                  | The user will be redirected to the top of the Dinner Menu                                         | Redirected to dinner menu                              |
| Click the Desserts anchor at the top of the menu.html page                                | The user will be redirected to the top of the Desserts Menu                                       | Redirected to dessert menu                             |
| Click the Wine anchor at the top of the menu.html page                                    | The user will be redirected to the top of the Wine Menu                                           | Redirected to wine menu                                |
| Click the BACK TO TOP anchor at the bottom of the lunch menu                              | The user should be directed to the top of the menu back to the menu navigation                    | Scrolled back up to menu navigation on top of the menu |
| Click the BACK TO TOP anchor at the bottom of the dinner menu                             | The user should be directed to the top of the menu back to the menu navigation                    | Scrolled back up to menu navigation on top of the menu |
| Click the BACK TO TOP anchor at the bottom of the desserts menu                           | The user should be directed to the top of the menu back to the menu navigation                    | Scrolled back up to menu navigation on top of the menu |
| Click the BACK TO TOP anchor at the bottom of the wine menu                               | The user should be directed to the top of the menu back to the menu navigation                    | Scrolled back up to menu navigation on top of the menu |
| Expand screen size bookings page                                                          | The background image should be revealed                                                           | Background image revealed                              |
| Expand screen size menu page                                                              | The background images should be revealed (1 for each menu - four in total)                        | Background image revealed                              |

## Validator Testing

### HTML
No erros were report when passing through the official W3C HTML validator.

#### index.html
![Screenshot showing html validator for the index.html page - no errors found](assets/images/readme-images/html-validator-index.html.png)

#### menu.html
![Screenshot showing html validator for the menu.html page - no errors found](assets/images/readme-images/html-validator-menu.html.png)

#### bookings.html
![Screenshot showing html validator for the bookings.html page - no errors found](assets/images/readme-images/html-validator-bookings.html.png)

### CSS
* No erros were report when passing through the official W3C CSS validator.
![Screenshot showing css validator for the style.css page - no errors found](assets/images/readme-images/css-validator-style.css.png)

## Accessibility
* I confirmed that the colors and fonts chosen are easy to read and accessible by performing analysis using Lighthouse in Devtools. I conduct a scan on each page and the results of both the mobile and desktop scans are below:

#### index.html desktop results
![Screenshot from lighthouse report using developer tools for desktop version of index.html](assets/images/readme-images/lighthouse-index.html-desktop.png)

#### index.html mobile results
![Screenshot from lighthouse report using developer tools for mobile version of index.html](assets/images/readme-images/lighthouse-index.html-mobile.png)

#### menu.html desktop results
![Screenshot from lighthouse report using developer tools for mobile version of menu.html](assets/images/readme-images/lighthouse-menu.html-mobile.png)

#### menu.html mobile results
![Screenshot from lighthouse report using developer tools for desktop version of menu.html](assets/images/readme-images/lighthouse-menu.html-desktop.png)

#### bookings.html desktop results
![Screenshot from lighthouse report using developer tools for mobile version of bookings.html](assets/images/readme-images/lighthouse-bookings.html-mobile.png)

#### bookings.html mobile results
![Screenshot from lighthouse report using developer tools for desktop version of bookings.html](assets/images/readme-images/lighthouse-bookings.html-desktop.png)

## Browser Testing
* I conducted browser testing on various devices and web browsers and they are listed below:
        
### Browsers
**Google Chrome**
**Safari**
**Brave**
**Microsoft Edge**
**Mozilla Firefox**
**Internet Explorer**

### Devices
**Android**
**Iphone**
**Dell laptop**
**Asus Chromebook**
**Apple Imac**

## Bugs
* While deploying my site to GitHub pages the background images did not load. After reviewing the code it was established that the URL needed to be amended from:

assets/images/background-dinner-menu-image.webp to ../images/background-dinner-menu-image.webp
assets/images/background-dessert-menu-image.webp to ../images/background-dinner-menu-image.webp
assets/images/background-form-image.webp to ../images/background-dinner-menu-image.webp
assets/images/background-lunch-menu-image.webp to ../images/background-dinner-menu-image.webp
assets/images/background-wine-menu-image.webp to ../images/background-dinner-menu-image.webp
 to


## Unfixed Bugs
* No unfixed bugs.

## Technologies

### Tools

[Googlefonts](https://fonts.google.com/) 
For Font styles of header.

[DevTools](https://developer.chrome.com/docs/devtools/)
For improvement and use of device eumulators.

[Font Awesome](https://fontawesome.com/)
For Font styles including icons in footer.

[ChatGPT 3.5](https://chat.openai.com/)
For swiftly reviewing code to find discrepancies including spell checking.

[HTML Validation Service](https://validator.w3.org/)
For the validation of the index.html, bookings.html, and the menu.html.

[CSS Validation Service](https://jigsaw.w3.org/css-validator/)
For the validation of the style.css

[Pixabay](https://pixabay.com/)
For the use of images

[Shutterstock](https://www.shutterstock.com/)
For the use of images

### Languages

**HTML**
**CSS**

## Deployment
* The site was deployed to GitHub pages. The steps to deploy are as follows:
    *In the GitHub repository, navigate to the settings tab.
    *From the source section drop-down menu, select the Master Branch.
    *Once the master branch has been selected, the page provided the link to the completed website.

The link can be found here - [La Citadelle](https://dhitchen28963.github.io/La-Citadelle-Project1/)

## Credits

**Content**
* The code to make the social media links was extracted from the Code Institutes Love Running Project (Special thanks to Jo Heyndels) - credits provided here and within the page as a comment under the relevant sections.

**Media**
* All backgrounds images were downloaded from [Shutterstock](https://www.shutterstock.com/) and our licensed for use (5 in total).
* All chef images in the scroll container were downloaded from [Shutterstock](https://www.shutterstock.com/) and our licensed for use (6 in total).
* The remaining 9 images in the scroll container were downloaded from [Pixabay](https://pixabay.com/)and our licensed for use.

