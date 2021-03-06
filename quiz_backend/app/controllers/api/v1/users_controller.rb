class Api::V1::UsersController < ApplicationController
  
  def login
    @user = User.find_by_username(user_params[:username])
    if @user 
      if @user.authenticate(user_params[:password])
        render "/api/v1/users/success.json", status: :ok
      else
        @message = "invalid password"
        render "/api/v1/users/login_failure.json", status: :unprocessable_entity
      end
    else
      @message = "username does not exist"
      render "/api/v1/users/login_failure.json", status: :unprocessable_entity
    end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      render "/api/v1/users/success.json", status: :ok
    else
      render "/api/v1/users/create_failure.json", status: :unprocessable_entity
    end
  end
  
  private

  def user_params
    params.permit(:username, :password)
  end

end