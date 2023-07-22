Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  mount ActionCable.server => "/cable"
  
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
    
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "logout", to: "sessions#destroy"
    
    get "/tutors", to: "tutors#index"
    get "/tutors/:tutorId", to: "tutors#show"
    
    post '/auth/google_oauth2/callback', to: "sessions#google_auth"
    get '/login', to: 'sessions#new'

    get '/message', to: 'messages#message'


    # get '/meetings', to: "meetings#index"
    # post '/meetings', to: "meetings#create"
    # get "/meetings/id", to

    resources :messages, only: [:index, :create]
    resources :meetings, only: [:index, :create, :show]
    
    post '/tutorreviews', to: "tutor_reviews#create"

    get 'auth/failure', to: redirect('/')
    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


    
end
