class TutorReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :tutor_id, :summary, :user
end
