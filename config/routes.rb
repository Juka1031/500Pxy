Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

    
    root to: 'static_pages#root'
    
    namespace :api, defaults: {format: :json} do
        resources :users, only: [:create, :index, :show, :update] do
            resources :images, only: [:index]
            resources :galleries, only: [:index]
        end
        resources :images, only: [:create, :show, :update, :destroy]
        resources :galleries, only: [:create, :show, :update, :destroy]
        resource :session, only: [:create, :destroy]
    end

  

    
end
