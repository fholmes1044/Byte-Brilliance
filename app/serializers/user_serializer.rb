class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :full_name, :age, :email, :learning_goals, :location, :profile_picture, :tutor_reviews
  has_many :meetings
  has_many :learner_posts
  has_many :session_reviews
end
