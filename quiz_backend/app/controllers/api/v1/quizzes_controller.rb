class Api::V1::QuizzesController < ApplicationController

  
  def index
    @quizzes = Quiz.all.order(updated_at: :desc)
  end

  def show
    if authenticated_user
      # @quiz = Quiz.find(params[:id])
      puts "**********************authentication succeeded"
    else
      puts "**********************authentication failed"
    end
  end
end
