class Listing < ApplicationRecord
  belongs_to :sponsor
  has_many :attributes
end
