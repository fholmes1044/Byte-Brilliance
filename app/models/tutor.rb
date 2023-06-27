class Tutor < ApplicationRecord
    has_many :learner_to_tutors
    has_many :learners, through: :learner_to_tutors

    validates :name, :experience, :hourly_rate, :availability, :location, :subject, :age, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
