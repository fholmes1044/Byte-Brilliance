class TutorsController < ApplicationController
    skip_before_action :authorize
    def index
        tutors = Tutor.all
        render json:tutors
    end
end
