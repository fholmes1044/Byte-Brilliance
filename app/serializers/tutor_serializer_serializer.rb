class TutorSerializer < ActiveModel::Serializer
  attributes :id, :name, :experience, :hourly_rate, :availability, :location, :subject, :age, :profile_picture, :tutor_reviews
end
