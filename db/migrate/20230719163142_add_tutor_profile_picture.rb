class AddTutorProfilePicture < ActiveRecord::Migration[7.0]
  def change
    add_column :tutors, :profile_picture, :string
  end
end
