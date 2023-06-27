class Meeting < ApplicationRecord
    belongs_to :learner_to_tutor

    validates :learner_to_tutor_id, :date, :duration, :location, presence: true
end
