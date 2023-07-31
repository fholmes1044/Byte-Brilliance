Rails.application.routes.draw do

  mount ActionCable.server => "/cable"
   
    get "/me", to: "users#show"
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    delete "logout", to: "sessions#destroy"
    
    get "/tutors", to: "tutors#index"
    get "/tutors/:tutorId", to: "tutors#show"
    
    post '/auth/google_oauth2/callback', to: "sessions#google_auth"
    get '/login', to: 'sessions#new'

    get '/mylearnerposts', to: "learner_posts#my_posts"

    resources :messages, only: [:index, :create]
    resources :meetings, only: [:index, :create, :show]
    
    post '/tutorreviews', to: "tutor_reviews#create"

    get '/learnerposts', to: "learner_posts#index"
    post '/learnerposts', to: "learner_posts#create"
    patch  '/learnerposts/:id', to: "learner_posts#update"
    delete '/learnerposts/:id', to: "learner_posts#destroy"

    get '/sessionreviews', to: "session_reviews#index"
    post '/sessionreviews', to: "session_reviews#create"

    get 'auth/failure', to: redirect('/')
    get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }


    
end
