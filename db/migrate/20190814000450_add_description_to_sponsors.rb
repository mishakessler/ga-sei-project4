class AddDescriptionToSponsors < ActiveRecord::Migration[5.2]
  def change
    add_column :sponsors, :sponsor_desc, :text
  end
end
