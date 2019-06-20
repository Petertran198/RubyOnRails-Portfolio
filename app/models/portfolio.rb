class Portfolio < ApplicationRecord
  has_many :technologies, dependent: :destroy 
  accepts_nested_attributes_for :technologies,
                                allow_destroy: true,
                                reject_if: lambda { |attrs| attrs['name'].blank? }

 
  validates_presence_of :title, :body

  #mount_uploader is a special method that calls and provided by carrierwave 
  mount_uploader :thumb_image, PortfolioUploader 
  mount_uploader :main_image, PortfolioUploader

  #method to find an object where the subtitle is 'Angular'
  def self.angular
    where(subtitle: 'Angular')
  end
  #Method to sort an object into ascending order 
  def self.by_position
    order("position ASC")
  end
  
  scope :ruby_on_rails_portfolio_items, -> { where(subtitle: 'Ruby on Rails') }


  


end
