module ApplicationHelper

  def portuguese?
    I18n.locale.to_s.eql?("pt-BR")
  end

end
