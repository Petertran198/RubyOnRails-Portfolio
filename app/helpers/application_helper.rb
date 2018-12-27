module ApplicationHelper
  def login_helper

       if current_user.is_a?(User)   
           link_to "Logout", destroy_user_session_path, method: :delete 
       else 
           (link_to "Register", new_user_registration_path) +
           "<br>".html_safe + ##you have to wrap it in () and + to concatenate it because it is ruby code and when it renders it will only return one thing
           (link_to "Login", new_user_session_path) 
       end    
  end

  def source_helper(layout_name)
      if session[:source] 
        greeting = "Thanks for visting me from #{session[:source]} and you are on #{layout_name} layout"
        content_tag(:p, greeting,class: "source-greeting")
     end 
  end

  def copyright_generator
    TranViewTool::Renderer.copyright('Peter Tran','All Rights Reserved')
  end
end
