class Sponsor < ApplicationRecord
  has_secure_password
  has_many :listings, dependent: :destroy
end
