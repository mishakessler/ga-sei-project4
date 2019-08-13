Rails.application.routes.draw do
  resources :sponsors do
    resources :listings
  end
end
