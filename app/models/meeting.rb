class Meeting < ApplicationRecord
    has_many :session_reviews
    belongs_to :tutor
    belongs_to :user

    validates :date, :duration, :location, presence: true
end
