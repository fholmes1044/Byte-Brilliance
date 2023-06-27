class CreateLearnerPosts < ActiveRecord::Migration[7.0]
  def change
    create_table :learner_posts do |t|
      t.integer :learner_id
      t.string :summary
      t.string :date
    
      t.timestamps
    end
  end
end
