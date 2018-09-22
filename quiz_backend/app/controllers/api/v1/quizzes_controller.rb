class Api::V1::QuizzesController < ApplicationController
  def index
    render :json =>
      {:quizzes => [
        {:id => 1,
        :title => "dummy title",
        :description => "dummy description",
        :questions => 4,
        :avg_score => 3.2},
        {:id => 2,
        :title => "dummy title",
        :description => "dummy description",
        :questions => 4,
        :avg_score => 3.2},
        {:id => 3,
        :title => "dummy title",
        :description => "dummy description",
        :questions => 4,
        :avg_score => 3.2},
        {:id => 4,
        :title => "dummy title",
        :description => "dummy description",
        :questions => 4,
        :avg_score => 3.2},
      ]}.to_json
  end
end
