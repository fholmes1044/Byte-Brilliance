class LearnerToTutor < ApplicationRecord
    belongs_to :user
    belongs_to :tutor
    has_many :meetings
    has_many :tutor_reviews

    validates :tutor_id, presence: true
    validates :user_id, presence: true
end
