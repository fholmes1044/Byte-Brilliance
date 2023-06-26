class Tutor < ApplicationRecord
    has_many :learner_to_tutors
    has_many :learners, through: :learner_to_tutors
end
