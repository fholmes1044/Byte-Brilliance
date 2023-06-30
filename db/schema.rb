# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2023_06_30_151705) do
  # These are extensions that must be enabled in order to support this database
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
    t.integer "learner_to_tutor_id"
    t.date "date"
    t.integer "duration"
    t.string "location"
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
    t.integer "learner_to_tutor_id"
    t.integer "rating"
    t.string "review_summary"
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
