# Interactive Form
## **Grade:** :heavy_check_mark: Exceeds Expectations
### **Premise** 
> In this project, you'll use JavaScript to enhance an interactive registration form for a fictional conference called "FullStack Conf."

> Using the supplied HTML and CSS files, you'll add your own JavaScript to make the form more user-friendly by:

1. > adding customized and conditional behavior and interactivity

2. >validating user input and providing helpful error messages when the user enters invalid information into the form fields.

> Instead of plain "vanilla" JavaScript, you'll use the popular jQuery library to complete this project. While it's important for a developer to have a solid understanding and familiarity of plain vanilla JavaScript, it's also important to be able to understand and work with jQuery since it is so common and prevalent on the web.
### **Project Instructions**
1. Add the necessary files
   - js/script.js - Create a JavaScript file inside the "js" folder and link it to index.html
   - jquery - Link index.html to the latest version of jQuery either by including the jQuery files directly in the "js" folder, or by linking to a jQuery CDN.
   - css/reset.css or css/nomralize.css - This is not a project requirement, but using a reset or normalize CSS file is an important common standard in web development as it helps zero out the initial styles that different browsers add to their page by default.
2. jQuery
   - Add jQuery to your project by either including the jQuery source files in your directory or by using a CDN link.
   - Utilize jQuery while coding the functionality for your form.
   - #### Reviewer Comments:
   - > Your code does a great job with using JQuery!
3. Set focus on the first text field
   - #### Reviewer Comments:
   - > The page loads with the name input field receiving focus.
4. ”Job Role” section
   - Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
   - Give the field an id of “other-title,” and add the placeholder text of "Your Job Role".
   - #### Reviewer Comments:
   - > Job role is properly hidden until the "other" option is selected from the dropdown menu.
5. ”T-Shirt Info” section
   - For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
   - If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
   - If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
   - When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
6. ”Register for Activities” section
   - Some events are at the same day and time as others. If the user selects a workshop, don't allow selection of a workshop at the same day and time -- you should disable the checkbox and visually indicate that the workshop in the competing time slot isn't available.
   - When a user unchecks an activity, make sure that competing activities (if there are any) are no longer disabled.
   - As a user selects activities, a running total should display below the list of checkboxes. For example, if the user selects "Main Conference", then Total: $200 should appear. If they add 1 workshop, the total should change to Total: $300.
   - #### Reviewer Comments:
   - > The way you handled conflicting activities was an interesting choice. Removing them completely is not something I have seen anyone do up until this point. I think from a UX/UI standpoint this seems like a good way to do this as it is not longer in the users field of view and therefore there may not be confusion as to why they cannot select the conflicting item. Good work and way to be creative here!
7. "Payment Info" section
   - Display payment sections based on the payment option chosen in the select menu.
   - The "Credit Card" payment option should be selected by default. Display the #credit-card div, and hide the "PayPal" and "Bitcoin" information. Payment option in the select menu should match the payment option displayed on the page.
   - When a user selects the "PayPal" payment option, the PayPal information should display, and the credit card and “Bitcoin” information should be hidden.
   - When a user selects the "Bitcoin" payment option, the Bitcoin information should display, and the credit card and “PayPal” information should be hidden.
   - #### Reviewer Comments:
   - > Good job here! You start on "credit card" and each option properly hides the other options when they are selected.
8. Form validation
   - #### Reviewer Comments:
   - > Nice work, the form cannot be submitted until all necessary fields are filled out.
9. Form validation messages
10. Form works without JavaScript - Progressive Enhancement
    - #### Reviewer Comments:
    - > You form properly displays all fields when JS is disabled.
11. CSS styles
    - It is not required, but you are encouraged to experiment with things like the color, background color, font, transitions, animations, box shadows and text shadows. So dive into the CSS file and see if you can make this project your own with a few adjustments to the styles. But the basic layout and positioning of elements should not be changed.
12. Add good code comments
13. Cross-Browser consistency
### Extra Credit
1. T Shirt Section
   - Hide the "Color" label and select menu until a T-Shirt design is selected from the "Design" menu.
   - #### Reviewer Comments:
   - > You actually went a step further by hiding the "size" field as well. Nice work here!
2. Conditional Error Message
   - Program at least one of your error messages so that more information is provided depending on the error. For example, if the user hasn’t entered a credit card number and the field is completely blank, the error message reads “Please enter a credit card number.” If the field isn’t empty but contains only 10 numbers, the error message reads “Please enter a number that is between 13 and 16 digits long.”
3. Real-time Error Messages
   - #### Reviewer Comments:
   - > Great work! I noticed with the email option, the error message went away once I filled out the form with a proper email address.
### Overall Comments
> Fantastic job! Not only did the project get the marks for "Exceeds Expectations", but you did nice work with changing some of the base css styles as well. Keep it up!
