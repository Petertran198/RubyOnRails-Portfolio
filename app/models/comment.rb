class Comment < ApplicationRecord
  belongs_to :user
  belongs_to :blog
  validates :content, presence: true, length: {minimum: 6, maximum: 1000}
end
