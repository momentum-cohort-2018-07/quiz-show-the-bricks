class Api::V1::QuizzesController < ApplicationController
  
  def index
    @quizzes = Quiz.all.order(updated_at: :desc)
  end

end
