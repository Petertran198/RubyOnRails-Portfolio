class PagesController < ApplicationController
  def home
  	@posts = Blog.all
  	@skills =Portfolio.all
  end

  def about
  end

  def contact
  end
end
