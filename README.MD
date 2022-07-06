Author: Rogelio Rios
Class : CIS 4339
Title: AnimeBinX
----------------------------------------------------------

How to Run
----------------------------------------------------------
1.	Start local mongoDB server
2.	Type “npm install” into the terminal of VSCode in the root of the project which is under the folder name "anime_bin_app" not in "server" folder
3.	cd into the client folder and type “npm install”
4.	Close the terminal in VSCode by clicking the trashcan icon on top of the terminal and open it again with “ ctrl + `  ” and make sure you are back in the root folder "anime_bin_app"
5.	Type “npm run dev” and application will lauch with fronend/backend using concurently dependency

Setting up MongoDB Server
----------------------------------------------------------
I have no data at all, when you use the application as intended like creating account and adding anime to the watching list it will create a collection by itself for users and watching list to the localhost database under the db name called “animebin”. Also, mongoDb should be run in localhost with port 27017 .

(1)	How to Install MongoDB on Windows 10 - YouTube  https://youtu.be/FwMwO8pXfq0

Using that video above I set up my localhost database in my computer follow the same steps in the video up to 5 minute and replicate it to you own computer to be able make my program to have access to locahost:27017 database.

Environment Variables
----------------------------------------------------------
The server and client aspects of the web application depend on sensitive information in order to connect to MongoDB server and node server which include data as port number and machine URL.<br />
**Path**: ./.env<br />
NODE_ENV=<br />
PORT=5001<br />
MONGODB_URL=mongodb+srv://**user**:**password**@web-development-learnin.d2bql.mongodb.net/**database**?retryWrites=true&w=majority
<br /><br />
**Path**: ./client/.env.local<br />
Vue Server: <br />
VUE_APP_BASE_URL=localhost:8080<br />
VUE_APP_BACKEND_URL=localhost:5001<br />

Notes for CIS 4339
----------------------------------------------------------

**** Help page is on the application so the user can view to common problems 

**** Also on google search "Anime Tracker Web Application" in the making of this application there was only 1 result screenshot is in the root folder.

**** Business case is mentioned in the application technical document which in the file name of "Anime_Tracker_Web_Application_Technical_Document.pdf" in the root of project folder. If you are seeing this in github that was gitignored

**** Performance of my application on load of the home page is in the root of the project folder as a JPG file. If you are seeing this in github that was gitignored

