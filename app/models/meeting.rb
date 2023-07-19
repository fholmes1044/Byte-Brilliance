class Meeting < ApplicationRecord
    has_many :session_reviews

    validates :date, :duration, :location, presence: true
end
