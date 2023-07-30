class TutorReview < ApplicationRecord
    belongs_to :user 
    belongs_to :tutor 
    
    validates :summary, presence: true
end
