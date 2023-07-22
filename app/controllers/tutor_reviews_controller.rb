class TutorReviewsController < ApplicationController
    def create
        tutorreview = @current_user.tutor_reviews.create(tutorreview_params)
            if tutorreview.valid?
              render json: tutorreview, status: :created
            else
              render json: { errors: tutorreview.errors.full_messages }, status: :unprocessable_entity
            end 
    end
    
    def tutorreview_params
        params.permit(:user_id, :tutor_id, :summary)
    end 
end
