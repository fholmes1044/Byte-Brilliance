class TutorsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        tutors = Tutor.all
        render json:tutors
    end

    def show
        tutor = Tutor.find(params[:tutorId])
        if tutor
            render json: tutor
        else 
            render json: {error: "No tutor Found "}
        end
    end
end
