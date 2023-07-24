class SessionReview < ApplicationRecord
    belongs_to :meeting
    belongs_to :user

    validates :meeting_id, :rating, :comment, presence: true
end
