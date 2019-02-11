class Topic < ApplicationRecord
  validates_presence_of :title

  has_many :blogs

  ##This is querying all the topics that have a blog associate with it 
  def self.with_blogs
    includes(:blogs).where.not(blogs: {id: nil})
  end
end