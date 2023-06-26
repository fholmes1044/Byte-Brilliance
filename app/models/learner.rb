class Learner < ApplicationRecord
    has_many :posts 
    has_many :learner_to_tutors
    has_many :tutors, through: :learner_to_tutors
end
