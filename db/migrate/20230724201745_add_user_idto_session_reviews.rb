class AddUserIdtoSessionReviews < ActiveRecord::Migration[7.0]
  def change
    add_column :session_reviews, :user_id, :integer
  end
end
