class CreateTutorReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :tutor_reviews do |t|
      t.integer :user_id
      t.integer :tutor_id
      t.string :summary

      t.timestamps
    end
  end
end
