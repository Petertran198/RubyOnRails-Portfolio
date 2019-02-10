class Blog < ApplicationRecord
  enum status: { draft: 0, published: 1 }
  extend FriendlyId
  friendly_id :title, use: :slugged

  validates_presence_of :title, :body, :topic_id

  belongs_to :topic, optional: true 
  has_many :comments, dependent: :destroy #dependent destroy is saying if a blog gets deleted their comments get deleted as well

  def self.special_blogs
    all
  end

  def self.recent
    order("updated_at DESC")
  end
end