# Technical Plan requirements

Whenever I ask you to prepare a technical plan, this technical plan must follow these rule , no coding till I explicitly approve the plan 

### In technical plan, please provide

1.  Identify ALL existing files that:
    1. will be directly modified by this feature
    2. Contain related business logic
    3. Include utility files, shared components, and test file
2.  Potential edge cases
3.  Security considerations
4. potential Performance negative implications
5. Potential negative impact on other components
6. Manage configuration/settings impacting this feature
7. Data validation requirements
8. Note indirect relationships (e.g., parent components, data providers)
9. Technical architecture design
    1. System flow diagram
    2. Data flow diagram
    3. Module dependency map
    4. State flow diagrams
    5. relevant data structure
10. plain English explanation
    1. Since I’m new to coding, I’d like you to explain how this feature will be developed in plain English, step by step. Please describe how the feature will work across the files, APIs, and database. following this example below, creating a post imaginary feature
        1. **Frontend Form (User Interface):**
            - The user interacts with a form in the frontend (e.g., `CreatePostForm.js`). This file contains the input fields for the post title, content, and any other required data.
            - When the user clicks "Submit," the form triggers a function (e.g., `handleSubmit`) that collects the data and prepares it for sending to the backend.
        2. **API Call:**
            - The frontend makes an API call to the backend using a POST request. The API endpoint might look like `/api/posts`.
            - The payload sent to the backend could look like this:

                json

                Copy

                
                {
                  "title": "My First Post",
                  "content": "This is the content of my post.",
                  "authorId": 123
                }
                

        3. **Backend Route and Validation:**
            - The backend receives the request in a route file (e.g., `postsRouter.js`). This file defines the `/api/posts` endpoint and calls a controller function (e.g., `createPost`).
            - The payload is validated using a validation file (e.g., `postValidation.js`), which checks if the title and content are present and meet length requirements.
        4. **Database Interaction:**
            - Once validated, the data is passed to a service file (e.g., `postService.js`), which handles the logic for saving the post to the database.
            - The service file interacts with a database model (e.g., `Post.js`), which defines the structure of the post table. The model uses a library like Sequelize or Mongoose to save the record.
        5. **Response to the User:**
            - After the post is saved, the backend sends a success response (e.g., `201 Created`) back to the frontend.
            - The frontend receives the response and displays a success message to the user (e.g., "Post created successfully!").
            - The user might also be redirected to the post page or the homepage.
11. End to end tests using Maestro, 80% minimum test coverage

### You must consider the following

- How this feature integrates with existing features
- Handle connected dependencies
- TypeScript compilence
- **Modularization and** Global Components
    - Break down components, hooks, and utilities into small, reusable modules.
    - **Separation of Concerns**: Keep logic, UI, and data-fetching separate.
- Be surgical and laser focused.
    - Strictly follow the best practices of the stack technologies we use to minimize bugs
    - Always choose the most straightforward implementation option.
    - Only address the specific task mentioned in the prompt. Do not consider ANY changes to other parts of the app or introduce unrelated functionality
- IOS & android platforms compliance
    - Required follow ios and android Platform Guidelines (download them in Documents folder if don’t exist)
    - Validate all UI/UX decisions against platform standards
    - Never suggest shortcuts that compromise platform compliance
    - But, Absolutely, no platform specific changes to keep the development fast and more maintainable, whenever there are platform specific changes are required, mention them explicitly before implementation