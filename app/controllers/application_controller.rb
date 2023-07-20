class ApplicationController < ActionController::API
  include ActionController::Cookies
  response.headers['Cross-Origin-Opener-Policy'] = 'same-origin'

  before_action :authorize
  # def hello_world
  #     session[:count] = (session[:count] || 0) + 1
  #     render json: { count: session[:count] }
  # end

private
  def authorize 
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
  end 


end


# # class ApplicationController < ActionController::API
# class ApplicationController < ActionController::Base
#     include ActionController::Cookies
#     protect_from_forgery with: :null_session
#     skip_before_action :verify_authenticity_token, only: [:google_oauth2_callback]

#     before_action :authorize
#     # def hello_world
#     #     session[:count] = (session[:count] || 0) + 1
#     #     render json: { count: session[:count] }
#     # end

#   private
#     def authorize 
#       @current_user = User.find_by(id: session[:user_id])
#       render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
#     end 


# end
