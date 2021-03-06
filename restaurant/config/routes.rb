Rails.application.routes.draw do

  resources  :user, only: [:create]
  resources :signup, only: [:create]
  delete :logout, to: "user#logout"
  get :logged_in, to: "user#logged_in"
  root 'user#index'  

  namespace :api do
    namespace :v1 do
      resources :tables, param: :tableNumber
      resources :items
    end
  end

  get '*path', to: 'user#index', via: :all

end
