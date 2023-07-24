class DropSessionReviewsTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :session_reviews
  end
end
