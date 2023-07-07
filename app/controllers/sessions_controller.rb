class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: "Invalid username or password" }, status: :unauthorized
        end 
    end

    def google_auth
        byebug
        auth = request.env['omniauth.auth']
        # Process the authentication data
        # Find or create the user based on the authentication data
        # Set the user's session
        # Redirect or render the appropriate response
      end

    def destroy
        session.delete :user_id
        head :no_content
    end 
end
