Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :users

  # scope '/api' do
    # get :user, to: 'users#index'
  #   resources :users
  # end



  # get '*path', to: "application#fallback_index_html", constraints: ->(request) do
  #   !request.xhr? && request.format.html?
  # end

end
