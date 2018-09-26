Rails.application.routes.draw do
  

  namespace :api do
    namespace :v1 do
      resources :quizzes, only: [:index, :show]

      post 'users/login', to: 'users#login'
      resources :users, only: [:create]
      
      resources :attempts, only: [:create, :index]
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
