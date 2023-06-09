# Fake-OS

This was a project I worked on as part of my Full-Stack training through Nology. The goal was to create a Single Page Application that looked like the operating system of our choice. I designed a fake Apple iOS, so this project should be viewed at either iPhone or iPad screen sizes. Modals were to be used to simulate apps inside the operating system, and vanilla Javascript was used for interactivity. I also decided to make some of the applications functional, these apps were: Notes, Calculator and Phone (although naturally the Phone app has some limitations). The other apps contain placeholder text and images.

The project can be viewed at: https://cwills18.github.io/Fake-OS/

In this project, I learnt how to:
- Create a complex SPA using HTML, CSS and Javascript.
- Create and style a live time and date element and update it automatically using setInterval.
- Stack elements on top of each other to create border animations in CSS.
- Simulate the appearance of an app opening and closing using a combination of CSS animations and Javascript DOM interactions to add and remove classes.
- Create modals inside of modals (see the Notes app).
- Create a variety of Javascript functions to store user input, display it to the screen and remove elements that were no longer necessary or had been deleted by the user.
- Create and use Javascript modules, including importing and exporting necessary functions between different files, for best separation of concerns.
- Refactor and reorganise my code throughout the project to make sure it was dry.

Some of the challenges I overcame:
- In this project, I learnt the importance of making sure all my javascript files had been saved before viewing the live version. Definitely wasted a bit of time troubleshooting problems that were only problems because one file hadn't saved properly.
- Initially when adding event listeners, I had some trouble with functions executing before buttons had been clicked. This was solved with a simple Google search that directed me to wrap my functions inside another anonymous function.
- Because the function I created to simulate an app closing ended with the modal display being set back to "none", the animation of the app closing wasn't happening becaue the computer was executing the lines too quickly and the app would just disappear. I used a 250ms setTimeout to allow the animation to complete before the modal's display was set back to "none".
- In the calculator app, I wanted to use an ellipsis for the text-overflow of the display if a large number was typed in. I had to set direction to "rtl" to make the ellipsis appear on the more sensible side of the display. This caused me some issue when writing the code for the negative sign button. Even though my function was executing perfectly, and my negative sign was occupying index 0 in my display string, it kept appearing to the right of the rest of the string. I soon made the connection that this was happening due to the "rtl" value set in CSS. However, still wanting for the ellipsis to appear on the correct side, I decided to implement some extra lines of code to check if an overflow was happening, and only set the direction to "rtl" once an overflow had occured. I had to use console.dir to find a property of the display and it's outer container that I could use to check for overflow. This led me learn how to use .scrollWidth to check if a child has overflowed the parent container.
- In the notes app, my biggest challenges was figuring out how a user could click on a particular note they had created to view it and then either go back, or delete it. The first major issue was how to get a clicked note to open up, given that I couldn't manually add event listeners for a possibly infinite amount of notes that would be created at a later date. I resolved this by adding an event listener to a new note being created inside the createNote function. I also set notes up with a classList property that I would be able to use in a querySelector to grab the note's title and body text to display on the expanded view page. The next major issue was that after I had managed to display a note's content in the expanded view, it would be gone on return to the main page. This led me to discover how to deep clone a node. The final challenge was how to delete an app. In the end, I decided to grab the title and body of the note when it was closed from the expanded view, and then search the existing notes for an exact match, which was then removed from the main page.

