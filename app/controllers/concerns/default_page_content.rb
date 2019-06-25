module DefaultPageContent
  extend ActiveSupport::Concern
  included do
    before_action :set_page_defaults
  end

  def set_page_defaults
    @page_title = "Peter Tran, Web Developer"  
    @seo_keywords = "Ruby On Rails, Web Developer, JavaScript,React Js, Hiring,For hire, web design,responsive web design,website creator,graphic design"
  end

end