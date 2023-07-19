class SessionReview < ApplicationRecord
    belongs_to :meeting

    validates :meeting_id, :rating, :review_summary, presence: true
end
