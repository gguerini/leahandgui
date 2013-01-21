module SessionsHelper

  def sign_in(user)
    session[:user_token] = user
  end

  def sign_out
    session[:user_token] = nil
  end

  def signed_in?
    !session[:user_token].nil?
  end

end
