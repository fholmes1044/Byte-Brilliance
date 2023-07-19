class CreateSessionReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :session_reviews do |t|
      t.integer :meeting_id
      t.integer :rating
      t.string :comment

      t.timestamps
    end
  end
end
