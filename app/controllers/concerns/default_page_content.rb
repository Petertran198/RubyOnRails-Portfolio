module DefaultPageContent
  extend ActiveSupport::Concern
  included do
    before_action :set_page_defaults
  end

  def set_page_defaults
    @page_title = "Peter's Website"  
    @seo_keywords = "Ruby On Rails, Web Developer, JavaScript,Hiring,For hire"
  end

end