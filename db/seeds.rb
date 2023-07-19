
User.create(username: "learner1", password: "p@s5word", password_confirmation: "p@s5word", email: "learner@aol.com", profile_picture: "https://i.imgur.com/eiCvD1a.gif", full_name: "Mary Kate", learning_goals: "I want to be an amazing coder and learn javascript!", age:28, location: "Maryland")
User.create(username: "learner2", password: "le@rn1ng", password_confirmation: "le@rn1ng", email: "learntech@gmail.com", profile_picture: "https://i.imgur.com/Tf1yO5Eb.jpg", full_name: "Jalissa Brown", learning_goals:" Feel more confident in SCRUM skills", age:30, location: "New York" )

LearnerPost.create(user_id: 1, summary: "I learned how to create a website!", date: "March, 3, 2023")
LearnerPost.create(user_id: 1, summary: "I learned how to debug!", date: "March, 5, 2022")


Tutor.create(name: "Wanda Mills", experience: "Java developer for 5 years", hourly_rate: 35, availability: "Monday", location: "Maryland", subject: "Java Programming", age:34 )
Tutor.create(name: "James Wry", experience: "Python developer for 3 years", hourly_rate: 25, availability: "Tuesday", location: "Delaware", subject: "Python Programming", age:29 )

Meeting.create(tutor_id: 1, user_id:1, date: "2023-05-01", duration: 1, location: "Online")
Meeting.create(tutor_id: 1, user_id:2, date: "2023-03-02", duration: 1, location: "Online")
Meeting.create(tutor_id: 2, user_id:1, date: "2022-07-20", duration: 1, location: "Bowie Library")

# SessionReview.create(meeting: 1, rating: 5, review_summary: "Such a great session")
# SessionReview.create(meeting: 2, rating: 5, review_summary: "Learned a lot about Cloud with this mentor")
# SessionReview.create(meeting: 3, rating: 2.5, review_summary: "They were late and moved too quickly.")

TutorReview.create(user_id:1, tutor_id:1, summary: "Very Nice" )
TutorReview.create(user_id:2, tutor_id:2, summary: "Knows a lot" )