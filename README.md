# FinalProject
**Website name** : LittleH Truecakes

**Abstract:**
I always have an idea of having a website for our family bakery. I took up this chance of having one for it by implementing the knowledge I gained through the course. This would help us in a much better way for the business. This must be our official website to be launched soon.

**Description:** 
This is a Bakery website, wherein we can purchase the customised and fresh cakes besides desserts and sweets. The items, we chose will be added to the cart and after all the items we want to purchase are added to the cart, we can proceed to the payment.

**Features:**
1) We can see the outlet of LittleH Bakery and the images of items. You can meet our chefs, to get to know of their experience. 
2) Customer can customise the cakes in website.
3) You can see the exact image of the item when you are adding the item.
4) Customer come across the location of the outlet.
5) Get to see the services of the bakery like Hours of operation, Contact and delivery.
6) User can delete their account using signout option and user can logout for sometime to get out of the browser.

**Future Improvements:**
1) Need to make more options to choose.
2) Some features like Location is not directing the customer to the Maps application.
3) The cart should direct the customer to payment page.
4) Make this the official website for our bakery by creating a link that is easily accessible.

**Expected Result:**
To make this the official website by making the necessary improvements. The expected result is not completely obtained.

**Issues with site:**
1) Cart page is not directing it to the payment page. 
2) Signin button is working only when the code is newly run. It is not getting signed in the second time after running the code. I faced this a few times.

**Technologies:**

*Front End -*
HTML - For creating static pages
CSS - For Styling pages
Java Script

*Back End -*
My SQL, Node js


**ERD:**

![ERD](https://user-images.githubusercontent.com/103952756/168943947-b2c23ada-8803-4e9e-a17d-5f36f885c8ab.png)

*Idea of the ERD briefing each entity:*
Customer: 
A customer will create a new account by giving username, user ID, e-mail, password.
Item:
A item has a item ID, Price, image. It also has the order ID in which it is added.
Cart:
The cart has the order ID which includes all the orders placing at one time. It also has the cost and email of the customer to direct to the payment.
Payment:
The payment requires the order ID on which the payment is to be made. The method of payment for the order. After the payment is done it also gives the confirmation ID.


**Accessing the website by the viewer:**

*The applications to be installed:*
Node.js, Visual studio code, Terminal set up

*Run using applications:*
Download the zip file of this project and unzip it. Then install npm package by running the command **npm install** . Then go to the visual studio code application and then go to the *File* and then click on open folder and then browse for the folder that contains the project that is downloaded. Then go to *Terminal* in the Navigation barand then it prompts us to run a command. Then type the command **npm run dev**. Then it is connected to the server on the port 3000. Now go to the browser and then type **localhost:3000** on the URL. Then it directs to the signin page. User can give some random credentials to signup and then Signin using the same to enter into the official page of the website.

Signup page:

![Screenshot (5)](https://user-images.githubusercontent.com/103952756/168948344-c929cbee-7bc0-45f5-9e90-3ddf31f9e3c7.png)

Login Page:



