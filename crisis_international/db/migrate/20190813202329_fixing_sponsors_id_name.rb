class FixingSponsorsIdName < ActiveRecord::Migration[5.2]
  def change
    change_table :listings do |t|
      t.rename :sponsors_id, :sponsor_id
    end
  end
end
