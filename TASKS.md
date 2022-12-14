# Challenge

Welcome to the challenge!

Some packages are already being installed for you below - you can just start reading the below text while that finishes.

## The Introduction

The following script takes you through tasks you should complete as part of your challenge. Some tasks may be tricky, some may be easy. In every case you are encouraged to pose written questions to the task itself, write down questions/observations or reasoning about why you did not find a solution. In most cases though, a working solution will be achievable. In all cases it will be helpful if add notes about your methodology (e.g.: "I did X using Y because of Z, then A happened which I fixed doing B. I should have seen A coming but didn't because of C").

There will be no loop with the reviewer, so nobody is going to answer your notes, questions, musings, ... - their main aim is to showcase your thought process for a fellow developer who will inspect this challenge. For the texts you can write everything from a bullet list to a book, but be aware that in development we usually try to optimize for a combination of dense information + understandability by every team member. We firmly believe that good communication and conceptualization is as important to being a developer as the coding itself.

The challenge tries to be similar to the real-world with the kinds of problems and solutions that would occur in every-day-project-work. There will be no questions asking you to optimize runtime-complexity in O-notation to the max for algorithm Y - these sort of questions do not make any sense in our opinion. Being close to the real-world also means that you may bring in CSS/JS Libraries to help you develop, just make sure that everything still runs in stackblitz.

The tool we use here is called `stackblitz`. It functions as a fully integrated development environment (IDE). You can go through the full challenge here. If you want to use your local environment you can also download the project using the small "cloud icon" at the top left corner of the screen, just right of "Project". _In the end, the challenge code must run in here inside `stackblitz`, so `npm run dev` has to work. If this is not the case, we will not be able to review your challenge!_

## Tech-Stack

You can skip this section and revisit it later, as the right information will be shared with you at the right places and everything should "just work" as we inteded it to work. If you still want to learn more right now, read on!

This is a "fullstack" TypeScript project using nuxt3 + vue3. Fullstack TypeScript means that we use one typescript code base for both the backend API + the frontend webapp. We have defined helper commands for development, testing, running the app in production, linting, ... that are runnable via `npm run X` where X is the command, checkout the `package.json` for more.

For styling we use TailwindCSS, so far the zoo has not added a CSS component framework to use pre-made components, maybe you will? For testing we use `vitest`, for linting `eslint`. For building components that are testable, maintainable and embeddable we use `storybook`.

Storybook is a wonderful tool that sadly does not work in stackblitz (as the vue3 dependencies cannot run for some reason). So, we've disabled it but left the stories for you to study.

This information will also be shared with you where needed as part of the challenge, so there is no need to dive into anything at all for now.

## The Challenge

So, without further ado: Welcome, new IT Director of the Cologne Zoo! As you can see, the zoo dashboard was badly damaged by the recent malware attacks from the Duisburg Zoo. The old IT Director quit after that attack as he just could not take it anymore. The staff is looking to you to fix this mess and bring the zoo dashboard back to its former glory! ???? ???? Sadly the IT-Department has been underfunded for years before the attack - so the application is quite dated.

### Task 1: Take stock of the repository

In a first step you should inspect the health of the project and report on everything you notice while doing so. This will help you determine what repairs are necessary in the coming steps.

Please take stock fo the page using developer tools, your instincts, ... and write down below what you find.

Solution:

- First I checked package.json, so I could see what scripts I have to check the health
- The projects uses 'vitest' for testing, so I ran the 'npm run test' command which showed 2 failed test cases
  - First failed test case shows that the 'composables/helper.ts' age calculation function doesn't round up the result
  - Second failed test case shows that there is a typo at 'api/animal.get.ts' 7th row
- I ran 'npm run lint' to check for any other problems with the source code
- It showed again the typo at 'composables/helper.ts'
- I looked through the main functions - because of the small number of files - for any other errors
  - I found an alert at the 'app.vue' file which shouldn't be there
- I ran 'npm run lint:style' which showed format errors

### Task 2: Get the basics running again

Now that we know that is broken, let's try to get things running again, step by step. First we should aim to just get the project to start. Please fix the problem that stops `npm run dev` from working out. Then:

- document the loaded page with a brief description,
- document the problems that needed to be resolved to make it work (so that we can avoid and quicker fix them in the future!)

Zookeepers reported that the error sometimes changes when reloading the page after the initial start.

Solution:

Problems:

- Fixed the typo in 'api/animal.get.ts' (ANlMALS -> ANIMALS) then an error popped up about an alert function
- Deleted the alert from 'app.vue' and the app started working

Description:

- At the top of the page there is the name of the zoo and a short description about the page's functionality and information about contact
- Under that we can find a table of the animals in the zoo with the following data:
  - Index
  - Species
  - Gender
  - Age
  - Weight (sorted by)

### Task 3: Start the documentation

You got it to work! Nice, now the basic functionality is back for the zookeepers. This would be a great point to start on documenting the project. As you can see there is not even a readme file! The old IT Director seems to have left this project in bad shape. Please add documentation with basics on the project, how to start, stop, test, ... it and whatever else information you deem important.

Add your solution below, either as an inline text or link to new documentation file(s) you've created.

------------------------------ SOLUTION ------------------------------------------

# Cologne ZOO

The project is an app where zookeepers get an overview of the animals and their relevant health data.

## Components and directories

The project has the following structure:

- Components: The app builds up from different components which comes from this location
- Composables: Organizes the business logic of the app. Extracts small pieces of logic into functions for reuse.
- Helpers: Storing architectural snippets.
- Server: Contains the functions for the API and for the communication with the server.

## Installation

Use the package manager 'npm' to install the dependencies.

```
npm install
```

## Running in development mode

Use the following script to run the app in development mode and allow hot reload.

```
npm run dev
```

The app will start at 'localhost:3000'.

## Building and running

Use the following script to build the project for production.

```
npm run build
```

Use the following script to start the app in production mode.

```
npm run start
```

## Testing

Use the following script to analyse the code for potential errors.

```
npm run lint
```

Use the following script to run the tests.

```
npm run test
```

## Stop the running app

Navigate to the CLI and press CTRL+C to stop the app.

---

### Task 4: Test fixing

There's a failing test that for the age calculation helper. Can you figure out what is broken in the implementation or the test it is and resolve the problem? All zookeepers are really interested in what is going on here.

Solution:

- The helper function gives back the wrong result when it gets the current date so I have to check the variable 'differenceInMilliseconds' value
  - If it is 0, then I have to return 1, because we always round up the age of the animal
  - Otherwise we have to return the calculated value
- For the solution I created a ternary operator at the return value to check the value of the 'differenceInMilliseconds' variable and return the correct value
- After the change the test runs succesfully

### Task 5: UI Fixing and Improvement

The zookeepers report that the table is incomplete and different than usually. More specifically:

- they are missing the `Name` column that used to be in _third_ place,
- the table is sorted by weight, it used to be sorted by name,
- the age of the animals should show the age in years and not the birthdate
  - a helper for this already exists, made by the previous zookeeper

Please fix the two above problems and outline what was necessarry to do so.

Solution:

- The missing column was fixed with extending the HTML code of the table
  - Added a new header for the Name attribute (<th>Name</th>)
  - Added a new cell for the Name attribute (<td>Name</td>)
  - Changed the snapshot to match the extended table to the description
- After the above changes the table showed the Name attribute properly

- The sort was fixed with changing the sorter functions lambda function, because the original one used the weight attribute
  - Changed the function so the predicate function gives back 1 if the first parameter is ahead in the alphabet and -1 if not
- After the above change the table became sorted by name

- To show the age in years instead of the birthdate I changed the 'birthdate' cell to call the function 'calculateAgeInYears' with the parameter birthdate
  - First I got an error because the parameter didn't pass as a Date, so the helper function couldn't work with it
  - As the functions parameter I converted the birthdate to date with 'new Date(birthdate)' therefore the function worked properly

### Task 6: UI Feature 1

The zookeepers want to be able to see all details of an animal. Please create such a view that allows them to do so, outline anything about your process while adding the view below. The zookeepers didn't have time for more information, sorry. They'll surely be glad to criticize the first version intensly though and will want to know why you went for the approach you chose.

Solution:

- I had to check what are the characteristics of the animal
  - The original table already contained 6 of these, therefore I decided to extend it with the missing ones
  - Also if all the data is in one place and not in different pages the zookeepers can access them easier
  - There is only a few data about each animal so this table can easily show them
- I created two new table header to match the description of the animals (+height, +favouriteFruit)
- I created two new table cell to show the missing properties
- Extended the attributes used in v-for, so I the new data can appear
- Changed the snapshot to match the structure of the new table, so it can be easily tested with 'npm run test'

### Task 7: Logic Feature

The zookeepers want a new feature: Calculate the food required for the next calendar month. Basically, the zookeepers want to ease their job and buy a month worth of food in advance. In order to do so they want you to calculate and display the food all animals need for the next month.

To calculate the food an animal needs in kilograms in 1 day, the zookeepers use the following formula:

1. Take height + weight and divide it by 250
2. If the animal is:
   - older than 20 years, half the required food,
   - younger than 2 years, double the required food
3. Cherrys have less calories, so if the favourite fruit of the animal are cherries, add 28 kg
4. If the animal is male, add 20 %
5. If the animal is a fish: The required food is 0 kg

Solution:

- Following the above requirements I made a calculator function in 'composables/helper.ts' file called 'calculateFoodInKgs'
- Created a new test case in 'composables/helpers.test.ts' to test the new function
  - Used 'npm run test' to check if the code is working fine
- Created a new file at 'helpers' called foodForNextMonth.ts
  - Created a function called 'calculateFoodForNextMonth' which iterates through the given array and gives back the total amount of food in kgs
  - Calculates the count of days in the next month and multiplies the daily amount of food with this number, so we get the amount for the whole month

### Task 8: Plan New Feature

After the disastrous specification of the new UI feature in the previous task, the zooplanners now want to sit down with you to plan the next feature better before implementation begins. Together you come up with requirements that you write down from the user-perspective (the zookeepers):

- I want to plan when to feed which animal,
- Per animal I want to be able to plan a day + a fruit that I feed them
- There should be an overview of all upcoming feeding tasks that tells me:
  - the animal name,
  - the food fruit,
  - the required amount of food
- the required amount of food is calculated using the algorithm from the previous task
- Tasks should be grouped by day, so that I have something like a "todo" list for each day
  - so for exmaple a structure like:
    - 24.03.2012
      - Anni, Bananas, 20kg
      - Belfried, Cherries, 10kg
    - 27.03.2012
      - ...
    - ...

Please create a breakdown for this feature. You can focus on aspects like: What tasks do we need to cover, what should their order be, how will the UI/UX be designed, what questions arise from the potentially inconsistent or incomplete staff requirements?

Don't spend more thatn 15-30 minutes here - planning like this can quickly become quite complex and we want to prevent this challenge taking too much of your time!

Solution:

- The main goal of this feature is to create a function where the zooplanners can overview the feeding process and the food stock
  - For each animal plan a day and what food it will eat
  - Calculate the amount of food
  - An overview of the upcoming tasks grouped by day
- UI/UX:

  - A navigation menu has to be added to the app so the planner can navigate between the different pages
  - Choosing an animal can be done in two ways:
    - The main table can be extended with a button called 'Plan'. Pressing it a modal window would appear where the planner could plan the feeding of the specific animal.
    - On a new page called 'Feed plan' - which can be accessed from then navigation menu - the planner could select the animal from a dropdown list. After the selection a calendar would appear where the planner can plan the feeding of the specific animal.
  - The planning in the calendar could be done like the planner presses on a day and after that a modal window appear.
    - There the planner could select the food and under that the required amount would appear
    - With a Save or Delete button the planner can decide if the plan should be saved
  - A new page has to be added where a calendar or a list would appear day by day
    - There the animal's name, the food and the required amount of food would appear so the planner can see what coming up next

- Logic:

  - The navigation menu's logic has to be coded
  - The main table should be extended with a new button ('Feed')
  - Creating the modal window and the appearing
  - The plan has to be saved or deleted, both requires implementation
  - A new page has to be created, where a list or a calendar should appear
    - The saved plans has to appear there in the following format: name, fruit, amount of food
  - Deleting a plan that comes up should be allowed, because mistakes can be made

- Plan:

  - First the UI/UX plans has to be done, because without them an implementation can not be done
  - After the UI/UX plans are final, we have to create the codes for these pages, but only the layout
  - When the layout is final, then the logic behind the pages can be done separatly
  - Tests needed to validate the pages functionality and appearing

- Tests:

  - The tests has to be made before the implementation of the functions
  - The created logic has to be unit tested with different scenarios
  - The created pages appaerance has to be unit tested with different scenarios

- Questions:
  - Do the animals get their food once a day or the required amount has to be split?
  - Do animals of the same species and properties get the same amount of food? - This way they could be managed together
  - Do the animals eat only their favourite fruit or they can get anything?
  - Do we need an overview of the total amount of food for the next month or we need it also in a daily basis?

### Task 9: Finish the documentation

Revisit docs from step 3, see if you want to add anything. Also think about bonuses. Add a general comment about anything (inside the universe of the challenge or out of it) if you want to.

## Test cases

Before a new feature is getting implemented always create a unit test for the function. This way the function wouldn't malfunction and edge cases can be tested.

## Comments

Always comment the code! Programming is a teamwork, so other developers have to understand your code too. The comments should be short and straightforward.

## Extending the functionality of the app

First the UI/UX design has to be made. After that the layout has to be coded, which should be followed by the test cases for the functions that will be implemented. Then the functions for the new features should be implemented. For the last step the code has to be tested to validate its functionality.
