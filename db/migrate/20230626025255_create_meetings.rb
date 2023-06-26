class CreateMeetings < ActiveRecord::Migration[7.0]
  def change
    create_table :meetings do |t|
      t.integer :learner_to_tutor_id
      t.date :date
      t.integer :duration
      t.string :location

      t.timestamps
    end
  end
end
