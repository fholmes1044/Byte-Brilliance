class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :age, :email, :learning_goals, :location, :profile_picture
  has_many :meetings
end
