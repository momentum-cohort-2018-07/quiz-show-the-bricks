class Api::V1::UsersController < ApplicationController
  def login
    render :json => {
      :api_token => "dummytoken123",
      :username => "dummyusername",
      :user_id => 1,
      :role => "user"
      }.to_json
  end

  def create
    render :json => {
      :api_token => "dummytoken123",
      :username => "dummyusername",
      :user_id => 1,
      :role => "user"
      }.to_json
  end

end