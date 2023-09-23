
ActiveRecord::Schema[7.0].define(version: 2023_07_24_215341) do
  
  enable_extension "plpgsql"

  create_table "learner_posts", force: :cascade do |t|
    t.integer "user_id"
    t.string "summary"
    t.string "date"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "learner_to_tutors", force: :cascade do |t|
    t.integer "tutor_id"
    t.integer "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "meetings", force: :cascade do |t|
    t.date "date"
    t.integer "duration"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "user_id"
    t.integer "tutor_id"
    t.string "topic"
  end

  create_table "messages", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "content"
    t.integer "user_id"
    t.index ["user_id"], name: "index_messages_on_user_id"
  end

  create_table "session_reviews", force: :cascade do |t|
    t.integer "meeting_id"
    t.integer "rating"
    t.string "comment"
    t.string "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "table_name", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "profile_picture"
    t.string "full_name"
    t.string "learning_goals"
    t.integer "age"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tutor_reviews", force: :cascade do |t|
    t.integer "user_id"
    t.integer "tutor_id"
    t.string "summary"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tutors", force: :cascade do |t|
    t.string "name"
    t.string "experience"
    t.integer "hourly_rate"
    t.string "availability"
    t.string "location"
    t.string "subject"
    t.integer "age"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "profile_picture"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.string "email"
    t.string "profile_picture"
    t.string "full_name"
    t.string "learning_goals"
    t.integer "age"
    t.string "location"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
