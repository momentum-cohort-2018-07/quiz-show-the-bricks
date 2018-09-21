class Api::V1::QuizzesController < ApplicationController
  def index
    render :json => {:response => "QuizzesController index"}.to_json
  end
end
