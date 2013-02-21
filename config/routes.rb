Leahandgui::Application.routes.draw do
  
  root to: 'rsvps#new'

  resources :sessions, only: [:new, :create, :destroy]
  resources :rsvps

  match '/signin',        :to => 'sessions#new'
  match '/signout',       :to => 'sessions#destroy', via: :delete
  match '/live',          :to => 'rsvps#live'

  
end

ActionDispatch::Routing::Translator.translate_from_file('config/locales/routes.yml')