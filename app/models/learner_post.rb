class LearnerPost < ApplicationRecord
    belongs_to :learner

    validates :learner_id, :summary, :date, presence: true
end
