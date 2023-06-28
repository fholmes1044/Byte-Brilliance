class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def create
        learner_user = Learner.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:learner_id] = learner.id
            render json: learner_user, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end 
    end
end
