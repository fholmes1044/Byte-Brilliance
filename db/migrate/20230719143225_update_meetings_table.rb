class UpdateMeetingsTable < ActiveRecord::Migration[7.0]
  def change
    remove_column :meetings, :learner_to_tutor_id

    add_column :meetings, :user_id, :integer
    add_column :meetings, :tutor_id, :integer

  end
end
