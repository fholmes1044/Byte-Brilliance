class MessagesController < ApplicationController
skip_before_action :authorize, only: :index

  # def index
  #   messages = Message.all
  #   render json: messages.to_json(include: :user), status: 200
  # end
  def index
    messages = Message.all
    render json: messages, include: :user, status: 200
  end

  def create
    message = @current_user.messages.build(message_params)
    
    if message.save
      render json: message, status: 201
    else
      render json: { errors: message.errors.full_messages }, status: 422
    end
  end

  private
    def message_params
      # params.permit(:content)
      params.require(:message).permit(:content)
    end

    # def create_message
    #     message = Message.new_message(params)
    #     render json: message, status: :created
    #   end

    # def message_history # get message history of a single matched user
    #     messages = Message.messages(params)
    #     render json: messages, status: :ok
    # end
    
    # def message_histories # get message histories of all the matched users
    #     user = User.find(params[:user_id])
    #     matched_users = user.get_match_users
    #     list_messages = Message.list_messages(user, matched_users)
    #     render json: list_messages, status: :ok
    # end    

    # def message 
    # end
end

