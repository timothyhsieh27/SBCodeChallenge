# SBCodeChallenge

### Setup:
1. Clone the repository locally.
2. Open a new terminal in your text editor. Navigate to the root directory for this application.
3. ```npm install```
4. ```npm start```
5. Using Postman, test the CRUD functionality specified by the [code challenge](https://gist.github.com/eddwk/0cf4c6582d69b1d13d512a46a2239cb1). 

* http://localhost:3000/tasks/ | POST | In Body section, provide values for **title** and **description** Keys. Make note of id for later. Generate at least 2, for testing purposes later.
* http://localhost:3000/tasks/ | GET | Displays all current tasks. You should see the task you created.
* http://localhost:3000/tasks/id | PUT (Toggle) | Uncheck all Keys - pass nothing in via the Body. Add the id from the POST test to the endpoint above. When the task is toggled, only the most recent completion time displays in **completed_at**. You should be able to repeatedly PUT (update) an empty Body request and still see that the **status** and **completed_at** fields update per requirements.
* http://localhost:3000/tasks/id | GET | Performing a GET request with just the specified id should only yield the corresponding task.
* http://localhost:3000/tasks/id | DELETE | Confirm that the task was deleted successfully. You can also perform a GET request against the /tasks endpoint to confirm you now have one fewer task prior to running this test.