class CreateLearnerToTutors < ActiveRecord::Migration[7.0]
  def change
    create_table :learner_to_tutors do |t|
      t.integer :tutor_id
      t.integer :learner_id

      t.timestamps
    end
  end
end
