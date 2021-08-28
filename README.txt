this is my read me file 

create two folders:
    
    frontend_client - this hosts the website 
    backend_server - where databases are run 

    use: 
    npm is like pip in python.... this wil lcreare the folders for you.
    npm init react-app ./frontend_client

    then go to this folder and run this code to start the server
    cd frontend_client
    npm start

    this will open the web browser
    http://localhost:3000  

what to know about the front end client folders:
in src >
        the most important files here are the app.js and the index.js files
    app.js file: 
    in the app file it has a function that has html code in it returns the App function using export default app
    
    index.js file: 
    imports react and also the app.js function 
    it has a function that renders the html code from the app.js file 
    it takes that and passes it the a root which is in the public folder
             -> which has an another index folder called index.html
             so we have gone from javascript to creating a html file 
    in the index.html file 
        you will see a"div" section that has a an id called 'root'

next steps in development: 
    create a folder called components in the src folder
    inside that folder we will create a file called Nav.js

    
    







 

 
