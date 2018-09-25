class ApplicationController < ActionController::API
  helper_method :authenticated_user

  protected

  def authenticated_user
    if ActionController::HttpAuthentication::Token.token_and_options(request)
      User.find_by api_token: ActionController::HttpAuthentication::Token.token_and_options(request)[0]
    end
  end

end
