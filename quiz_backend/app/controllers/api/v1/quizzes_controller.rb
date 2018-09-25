class Api::V1::QuizzesController < ApplicationController

  def index
    @quizzes = Quiz.all.order(updated_at: :desc)
  end

  def show
    if authenticated_user
      @user = authenticated_user
      @quiz = Quiz.find(params[:id])
      render "/api/v1/quizzes/show_success.json", status: :ok
    else
      @message = "invalid HTTP authentication token"
      render "/api/v1/quizzes/show_failure.json", status: :unauthorized
    end
  end

end
