class LearnerToTutor < ApplicationRecord
    belongs_to :learner
    belongs_to :tutor
    has_many :meetings
    has_many :tutor_reviews
end
