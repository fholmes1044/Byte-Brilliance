class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :password_digest
      t.string :email
      t.string :profile_picture
      t.string :full_name
      t.string :learning_goals
      t.integer :age
      t.string :location

      t.timestamps
    end
  end
end
