class LearnersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        learner_user = Learner.create(learner_params)
            if learner_user.valid?
                byebug
                session[:learner_id] = learner_user.id
              render json: learner_user, status: :created
            else
              render json: { errors: learner_user.errors.full_messages }, status: :unprocessable_entity
            end
        end

    def show 
        render json: @current_learner
    end 

    private 
    def learner_params
        params.permit(:username, :password, :password_confirmation, :email, :profile_picture, :full_name, :learning_goals, :age, :location)
    end 
end
