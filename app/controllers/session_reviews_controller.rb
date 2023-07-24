class SessionReviewsController < ApplicationController
    def index
        session_reviews = SessionReviews.all
        render json: session_reviews
    end

    def create
        # review = @current_user.session_reviews.build(review_params)
        # if review.save
        #   render json: review, status: 201
        # else
        #   render json: { errors: review.errors.full_messages }, status: 422
        # end
    end

    def review_params
        params.permit(:meeting_id, :rating, :comment)
    end 
end
