class Sponsor < ApplicationRecord
  has_secure_password
  has_many :listings, dependent: :destroy

  validates :sponsor_name, uniqueness: true
  validates :sponsor_email, uniqueness: true
end
