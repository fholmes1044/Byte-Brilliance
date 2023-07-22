class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :experience, :hourly_rate, :age, :availability, :location, :subject, :profile_picture, :tutor_reviews

  has_many :tutor_reviews
end

