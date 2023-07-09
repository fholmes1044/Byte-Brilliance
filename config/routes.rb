Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  
    # route to test your configuration
    get '/hello', to: 'application#hello_world'
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "logout", to: "sessions#destroy"
    get "/tutors", to: "tutors#index"
    
    get '/auth/google_oauth2/callback', to: "sessions#Google_Auth"
    get 'auth/failure', to: redirect('/')
    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


    
end
