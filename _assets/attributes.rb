class CreateAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :attributes do |t|
      t.string :attribute_name
      t.string :attribute_type

      t.timestamps
    end
  end
end
