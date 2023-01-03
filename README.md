# books-cli
Create a command line application that allows you to use the Google Books API to search for books and construct a reading list. Completed by Kelsey Roy as part of the 8th Light Technical Assessment.

## Setup
1. [Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) to your local computer.
2. Use your terminal to navigate into your new books-cli folder and install project dependencies by running <code>npm i</code>.
3. To install the script globally, try running <code>npm install -g .</code> from within the books-cli folder. Now you should be able to run the books-cli script from anywhere in your terminal!
4. If you want to uninstall the books-cli script, run <code>npm uninstall -g books-cli</code>.

## Start

To access the command line program, start by typing the command <code>books-cli</code> into your terminal. A command menu should display a list of the available commands! This menu can also be access by typing <code>books-cli -h</code>. The commands available to you include:

<img width="570" alt="Screenshot 2022-12-22 at 3 54 21 PM" src="https://user-images.githubusercontent.com/89801075/209224085-f65b456a-b6d3-4539-a9fb-9b54ecf3b372.png">

### <code>books-cli search</code>
The search command will prompt the user to input specific search terms/parameters to narrow down their search! The search terms include:
* Keyword: Allows to user to input a keyword that can be found in the book. This search will likely yield the highest number of results! 
* Title: Allows to user to input a book's title, or text that would be found in the books title (ex: Pride and Prejudice)
* Author: Allows to user to input an author's name, or text that would be found in the author's name (ex: Jane Austen)
* Subject: Allows to user to input a book subject, or categories that could be attributed to a book (ex: fiction)
* ISBN Number: Allows to user to input a books 13 digit ISBN number (ex: 9780486284736)

The results of your last search are saved temporarily to your local files.

<img width="839" alt="Screenshot 2022-12-22 at 3 52 49 PM" src="https://user-images.githubusercontent.com/89801075/209223857-0c50f023-5b74-4ca5-b07f-8188492b5311.png">

### <code>books-cli save</code>
After you have completed a search, using the save command will prompt the user to use a checklist to select books from their previous search. Users can navigate the checklist using their up/down arrows. Users can make multiple selections using the space bar and once they've finished compiling their list, they can press enter to receive a message confirming that the book(s) have been to their reading list.

<img width="878" alt="Screenshot 2022-12-22 at 3 53 37 PM" src="https://user-images.githubusercontent.com/89801075/209224147-da0a5f24-50e7-4e27-b2be-5d23bf132a8a.png">

### <code>books-cli list</code>
The list command will print a user's reading list to the console.

<img width="504" alt="Screenshot 2022-12-22 at 4 00 24 PM" src="https://user-images.githubusercontent.com/89801075/209225144-3fd0d9e5-a91c-419c-90f2-f457169a14dd.png">

### <code>books-cli version</code>
The version command will display the current version of the books-cli program.

## Stretch Goals
* Successfully utilizing tests using the Jasmine framework
* Successfully utilizing axios-mock-adapter for testing
* Improving on error handling functionality
  * Check and warn the user if a book has already been added to their reading list
* Adding the ability to delete or edit books on reading list
