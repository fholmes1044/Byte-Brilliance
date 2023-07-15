class TutorReview < ApplicationRecord
    belongs_to :learner_to_tutor
    has_many :tutors, through: :learner_to_tutor

    validates :learner_to_tutor_id, :rating, :review_summary, presence: true
end
