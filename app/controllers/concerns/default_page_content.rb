module DefaultPageContent
  extend ActiveSupport::Concern
  included do
    before_action :set_page_defaults
  end

  def set_page_defaults
    @page_title = "Peter Tran"  
    @seo_keywords = "Ruby On Rails, Web Developer, JavaScript,Hiring,For hire, web design,responsive web design,website creator,graphic design"
  end

end