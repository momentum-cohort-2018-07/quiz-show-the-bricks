class Api::V1::UsersController < ApplicationController
  
  def login
    
  end

  def create
    @user = User.new(user_params)

    @user.save 

    render json.user do
        json.api_token @user.api_token
        json.id @user.id
        json.username @user.username
        json.role @user.role
    end
  end
  
  private

  def user_params
    params.permit(:username, :password)
  end

end