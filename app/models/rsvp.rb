class Rsvp < ActiveRecord::Base
  attr_accessible :email, :name, :presence_party, :presence_wedding, :quantity

  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

  before_save :correct_presence_status

  validates :email, presence: true, length: { maximum: 70 }, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :name, presence: true, length: { maximum: 70 }
  validates :quantity, presence: true, inclusion: 0..10

  protected

    def correct_presence_status
      unless self.presence_wedding == true
        self.presence_party = false
        self.quantity = 0
      end
    end

end
