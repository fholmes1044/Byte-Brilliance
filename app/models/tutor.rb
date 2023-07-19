class Tutor < ApplicationRecord
    has_many :meetings
    has_many :users, through: :meetings
    has_many :tutor_reviews

    validates :name, :experience, :hourly_rate, :availability, :location, :subject, :age, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18}
end
