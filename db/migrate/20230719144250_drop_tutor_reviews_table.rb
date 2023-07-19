class DropTutorReviewsTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :tutor_reviews
  end
end
