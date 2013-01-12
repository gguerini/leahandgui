class Rsvp < ActiveRecord::Base
  attr_accessible :email, :name, :presence_party, :presence_wedding, :quantity

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  validates :email, presence: true, length: { maximum: 70 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :name, presence: true, length: { maximum: 70 }
  validates :quantity, presence: true, inclusion: 0..10

end
