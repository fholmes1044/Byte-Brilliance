# ByteBrilliance: Your Technology Learning Hub

## Description
ByteBrilliance is an app that allows adult users to receive tutoring in technology related topics. Its is meant for all curious and inspired learners who are transitioning to tech or want to learn from seasoned professionals. Users can book sessions with available tutors and leave reviews for each tutor. Users can reflect on what they learned in their learning journey and post about it for all to see. Each learning post will also be saved under their personal posts for them to track their learning and allow edits or deletions if needed. Users can also chat with other learners to grow in a collaborative manner. 


## User Features

- User Authentication for signup and logging in 
- User Session Persistance after login
- Signed in Users can create learner posts for all users to view
- Signed in Users can review their learning sessions for personal use. 
- Signed in Users can write a review for each tutor.
- Signed in Users can edit and delete posts that belong to only to them. 
- Signed in Users can chat with each other in a chatroom via WebSockets. 
- Many-to-many relationship: Users can associate themselves with multiple learning sessions and Tutors can have multiple associated users through the learning session joins table. 
- Many-to-many relationship: Users can associate themselves with multiple tutor reviews and Tutors can have multiple associated users through the tutor reviews joins table. 


## Technologies
- Frontend: React 
- Backend: Ruby on Rails 
- Database: PostgreSQL
- Action Cable
- WebSocket API

## Setup
You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)
- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

    




