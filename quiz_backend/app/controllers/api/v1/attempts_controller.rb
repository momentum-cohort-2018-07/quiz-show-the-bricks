class Api::V1::AttemptsController < ApplicationController

  def create
    if authenticated_user
      @attempt = Attempt.new({
        "quiz_id": params[:quiz][:id],
        "user_id": authenticated_user.id
      })
      @attempt.score_quiz(params[:quiz])
      if @attempt.save()
        
      else

      end
    else
      puts "*************** not authenticated"
    end
    
  end

  private

end
