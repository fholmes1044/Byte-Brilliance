class LearnerPost < ApplicationRecord
    belongs_to :user

    validates :user_id, :summary, :date, presence: true
end
