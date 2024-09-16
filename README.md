User Dashboard Application
This is a simple user dashboard application built using React on the frontend and Express on the backend. It allows users to log in, view a list of users, search through the users by name or location, and view details of individual users.


Features
Login System: Users can log in with a username and password.
Protected Routes: Only logged-in users can access the dashboard and user details.
User Dashboard: Displays a list of users with search functionality.
User Details: View detailed information about individual users.
JWT Mock Authentication: Login system with a mock token for authentication.

Technologies Used
Frontend
React: JavaScript library for building user interfaces.
TypeScript: Superset of JavaScript that adds static types.
Axios: For making HTTP requests.
React Router: For routing between pages.
Tailwind CSS: Utility-first CSS framework for styling.

Backend
Node.js: JavaScript runtime environment.
Express: Web framework for Node.js.
CORS: Middleware for enabling cross-origin resource sharing.
JSON Web Token (Mock): For handling login authentication.

API Endpoints
Method        Endpoint                  Description
POST          /login                    Logs in with mock credentials
GET           /users                    Fetches the list of users

Getting Started 
1.Clone the repository
    git clone https://github.com/fossi13/junior-frontend-test-case
    
2.Setup Backend(Server)
    cd server
    npm install
  2.1 Run the server
        node server.js
3.Setup Frontend(client)
    cd client
    npm install
  3.1 Run the React app
        npm start


Usage

Login: 
  Use the following credentials to log in:
Username: admin
Password: password

Dashboard: 
  After logging in, you will be redirected to the user dashboard where you can see a list of users. You can filter the users by typing in the search bar.

User Details: 
  Click on the "View Details" link for any user to navigate to a page showing detailed information about that user.

Logout: 
  Click on the "Logout" button in the navigation bar to log out of the application.
  







