class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        render json: @current_user
    end 

    # def google
    #     begin
    #       data = Google::Auth::IDTokens.verify_oidc access_token, aud: "825029250438-h983qrk6pdse6hofh9b0j2qu439ninb9.apps.googleusercontent.com"
    #     rescue StandardError => e
    #     end
    #   end

    private 
    def user_params
        params.permit(:username, :password, :password_confirmation, :email, :profile_picture, :full_name, :learning_goals, :age, :location)
    end 
end
