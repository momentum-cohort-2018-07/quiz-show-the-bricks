class Api::V1::AttemptsController < ApplicationController

  def create
    if authenticated_user
      @attempt = Attempt.new({
        "quiz_id": params[:quiz][:id],
        "user_id": authenticated_user.id
      })
      @attempt.score_quiz(params[:quiz])
      if @attempt.save()
        render "/api/v1/attempts/create_success.json", status: :ok
      else
        @message = "attempt did not save"
        render "/api/failure.json", status: :unprocessable_entity
        
      end
    else
      @message = "invalid HTTP authentication token"
      render "/api/failure.json", status: :unauthorized
    end
  end

  def user_index
    if authenticated_user
      @attempts = User.find(params[:user_id]).attempts.order(created_at: :desc)
      render "/api/v1/attempts/index_success.json"
    else
      @message = "invalid HTTP authentication token"
      render "/api/failure.json", status: :unauthorized
    end
  end

  private

end
