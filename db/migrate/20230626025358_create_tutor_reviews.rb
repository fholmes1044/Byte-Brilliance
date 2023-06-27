class CreateTutorReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :tutor_reviews do |t|
      t.integer :learner_to_tutor_id
      t.integer :rating
      t.string :review_summary

      t.timestamps
    end
  end
end
