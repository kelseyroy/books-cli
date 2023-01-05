# books-cli
Create a command line application that allows you to use the Google Books API to search for books and construct a reading list. Completed by Kelsey Roy as part of the 8th Light Technical Assessment.

## Setup
1. [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local computer.
2. Use your terminal to navigate into your new books-cli folder and install project dependencies by running <code>npm i</code>.
3. To install the script globally, try running <code>npm install -g .</code> from within the books-cli folder. Now you should be able to run the books-cli script from anywhere in your terminal!
4. If you want to uninstall the books-cli script, run <code>npm uninstall -g books-cli</code>.

## Start

To access the command line program, start by typing the command <code>books-cli</code> into your terminal. A command menu should display a list of the available commands! This menu can also be access by typing <code>books-cli -h</code>. The commands available to you include:

<img width="589" alt="Screenshot 2023-01-05 at 12 37 13 PM" src="https://user-images.githubusercontent.com/89801075/210844676-e50677e1-92cc-4d1f-b757-61edb3f3fd50.png">


### <code>books-cli search</code>
The search command will prompt the user to input specific search terms/parameters to narrow down their search! The search terms include:
* Keyword: Allows to user to input a keyword that can be found in the book. This search will likely yield the highest number of results! 
* Title: Allows to user to input a book's title, or text that would be found in the books title (ex: Pride and Prejudice)
* Author: Allows to user to input an author's name, or text that would be found in the author's name (ex: Jane Austen)
* Subject: Allows to user to input a book subject, or categories that could be attributed to a book (ex: fiction)
* ISBN Number: Allows to user to input a books 13 digit ISBN number (ex: 9780486284736)

The results of your last search are saved temporarily to your local files.

<img width="838" alt="Screenshot 2023-01-05 at 12 26 48 PM" src="https://user-images.githubusercontent.com/89801075/210842833-6b65f782-58ba-4a7e-8789-c1b9da9d1cf2.png">


### <code>books-cli save</code>
After you have completed a search, using the save command will prompt the user to use a checklist to select books from their previous search. Users can navigate the options using their up/down arrows and they can press enter to receive a message confirming that the book(s) have been to their reading list. ctrl+c or escape allows the users to exit the menu anytime.

![Recording 2023-01-05 at 12 36 02](https://user-images.githubusercontent.com/89801075/210844524-d550bb6f-2de4-499b-a1af-d4763e2eef01.gif)


### <code>books-cli list</code>
The list command will print a user's reading list to the console. ctrl+c allows the users to exit the list anytime.

<img width="517" alt="Screenshot 2023-01-05 at 12 29 38 PM" src="https://user-images.githubusercontent.com/89801075/210843378-0f87925b-50a9-421c-9195-fbda467eafa8.png">

### <code>books-cli version</code>
The version command will display the current version of the books-cli program.

## Stretch Goals
* Successfully utilizing tests using the Jasmine framework
* Successfully utilizing axios-mock-adapter for testing
* Improving on error handling functionality
  * Check and warn the user if a book has already been added to their reading list
* Adding the ability to delete or edit books on reading list
