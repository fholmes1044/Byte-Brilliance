class LearnerPostsController < ApplicationController
    def index 
        posts = LearnerPost.all
        render json:posts
    end

    def create
        learner_post = @current_user.learner_posts.create(learner_post_params)
        if learner_post.valid?
          render json: learner_post, status: :created
        else
          render json: { errors: learner_post.errors.full_messages }, status: :unprocessable_entity
        end 
    end

    def my_posts
      all_current_learner_posts = @current_user.learner_posts
      render json: all_current_learner_posts
    end

    def update 
      post = @current_user.learner_posts.find_by(id: params[:id])
      if post
        if post.update(learner_post_params)
          render json: post, status: :ok
        else
          render json: { errors: post.errors.full_messages }, status: :unprocessable_entity
        end
      else
        render json: { error: "Learner post not found" }, status: :not_found
      end
    end 

    def learner_post_params
        params.permit(:user_id, :summary, :date)
    end
end
