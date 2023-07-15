class ModifyMessagesTable < ActiveRecord::Migration[7.0]
  def change
    add_column :messages, :content, :string
    add_column :messages, :user_id, :integer
    add_index :messages, :user_id, name: "index_messages_on_user_id"
  end
end
