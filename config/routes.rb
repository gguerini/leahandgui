Leahandgui::Application.routes.draw do
  
  resources :rsvps

  root to: 'rsvps#new'
  
end
