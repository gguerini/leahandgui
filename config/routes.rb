Leahandgui::Application.routes.draw do
  
  resources :rsvps

  root to: 'rsvps#new'
  
end

ActionDispatch::Routing::Translator.translate_from_file('config/locales/routes.yml')