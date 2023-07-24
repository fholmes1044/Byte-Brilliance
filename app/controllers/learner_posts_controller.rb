class LearnerPostsController < ApplicationController
    def index 
        posts = LearnerPost.all
        render json:posts
    end

    def create
        learner_post = @current_user.learner_posts.create(tutorreview_params)
        if learner_post.valid?
          render json: learner_post, status: :created
        else
          render json: { errors: learner_post.errors.full_messages }, status: :unprocessable_entity
        end 
    end

    def tutorreview_params
        params.permit(:user_id, :summary, :date)
    end
end
