# Techninover Node.js Backend Test
To simply things and make it straight to the point, I implement this function in a low level approach since only one endpoint is required, and with minimal operations. Also, instead of heavily using an ORM (such as Sequelize), I simply use MySQL package.

**NOTE**: This project is directly build with GCP Cloud Function focus, but of course, a Native Node.js HTTP server is fine to run the App.

## Function URL
https://us-central1-crafty-key-331919.cloudfunctions.net/reminder-api

## Endpoints
1. **GET /** - Get all reminders.
2. **GET /:id** - Get reminder by ID.
3. **POST /** - Create a new reminder. NOTE the data structure of creating a reminder describe as:
   ```json
   {
     user: 2,
     description: "Walk a mile",
     date: "2022-02-11 22:43:00"
   }
   ```