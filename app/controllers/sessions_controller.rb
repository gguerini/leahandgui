class SessionsController < ApplicationController

  def new
  end

  def create
    user = params[:user]
    password = params[:password]

    # ap "Env - MY_USER: #{ENV['MY_USER']}"
    # ap "Env - MY_PWD: #{ENV['MY_PWD']}"

    if user.eql?(ENV['MY_USER']) && password.eql?(ENV['MY_PWD'])
      sign_in user
      redirect_to rsvps_en_path
    else
      render 'new'
    end
   
  end

  def destroy
    sign_out
    redirect_to root_en_path
  end
end
