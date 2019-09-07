module DefaultPageContent
  extend ActiveSupport::Concern
  included do
    before_action :set_page_defaults
  end

  def set_page_defaults
    @page_title = "Web Developer who specializes in Ruby on Rails, JavaScript, React , PHP, SCSS, PhotoShop among many other web programs or web applications. I am always looking additional jobs or collaborations.| Peter Tran "  
    @seo_keywords = "Ruby On Rails, Web Developer, JavaScript,React Js, Hiring,For hire, web design,responsive web design,website creator,graphic design"
    @seo_description = "Local Full Stack Developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with Ruby on Rails, PHP, and WordPress."
  end

end