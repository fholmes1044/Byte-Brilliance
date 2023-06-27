class LearnerToTutor < ApplicationRecord
    belongs_to :learner
    belongs_to :tutor
    has_many :meetings
    has_many :tutor_reviews

    validates :tutor_id, presence: true
    validates :learner, presence: true
end
