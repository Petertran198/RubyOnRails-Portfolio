module ApplicationHelper
  def login_helper style = ''
       if !current_user.is_a?(GuestUser)   
           link_to "Logout", destroy_user_session_path, method: :delete, class: style 
       else 
           (link_to "Register", new_user_registration_path, class: style) + tag(:br) + "  ".html_safe+##you have to wrap it in () and + to concatenate it because it is ruby code and when it renders it will only return one thing
           (link_to " Login", new_user_session_path, class: style) 
       end    
  end

  def source_helper(styles)
      if session[:source] 
        greeting = "Thanks for visting from #{session[:source].capitalize}, feel free to #{link_to "contact me", contact_path} if you would like to collaborate."
        content_tag(:div, greeting.html_safe, class: styles)
     end 
  end

  def copyright_generator
    TranViewTool::Renderer.copyright('Peter Tran','All Rights Reserved')
  end




  def alerts
    alert =(flash[:alert]|| flash[:error]|| flash[:notice])

    if alert #instead of hard coding flash helper, I'm passing in alert after add_gritter()
       js add_gritter(alert, sticky: false, time: 1500 ) 
    end
  end
  

end