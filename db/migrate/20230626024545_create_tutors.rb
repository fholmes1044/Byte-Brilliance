class CreateTutors < ActiveRecord::Migration[7.0]
  def change
    create_table :tutors do |t|
      t.string :name
      t.string :experience
      t.integer :hourly_rate
      t.string :availability
      t.string :location
      t.string :subject
      t.integer :age

      t.timestamps
    end
  end
end
