class LearnerPostSerializer < ActiveModel::Serializer
  attributes :id, :summary, :date, :user
end
