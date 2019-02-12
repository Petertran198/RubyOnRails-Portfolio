module BlogsHelper
  def gravatar_helper user
    image_tag "https://www.gravatar.com/avatar/#{Digest::MD5.hexdigest(user.email)}?d=mp", width: 50
  end

  ## overiding CodeRayify for customization for programming language
  ##Method that are avaliable inside the Coderay class from coderay gem
  class CodeRayify < Redcarpet::Render::HTML
    def block_code(code, language)
      CodeRay.scan(code, language).div
    end
  end
  
  #This is what is going to take the mark-down text and convert it to html text
  def markdown(text)
    coderayified = CodeRayify.new(filter_html: true, hard_wrap: true)

    options = {
      fenced_code_blocks: true,
      no_intra_emphasis: true,
      autolink: true,
      lax_html_blocks: true,
    }

    markdown_to_html = Redcarpet::Markdown.new(coderayified, options)
    markdown_to_html.render(text).html_safe
  end


  ## This helper is passing in the color style to the admin-action partial 
  def blog_status_color(blog)
    if blog.draft?
      'color: #8B0000'
    else
      'color: #191970'
    end 
  end

end
