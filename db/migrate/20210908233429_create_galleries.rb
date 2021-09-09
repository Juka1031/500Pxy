class CreateGalleries < ActiveRecord::Migration[6.1]
  def change
    create_table :galleries do |t|
        t.string :title, null: false
        t.string :description
        t.integer :gallery_owner_id, null: false
      t.timestamps
    end
        add_index :galleries, :title
        add_index :galleries, :gallery_owner_id
  end
end
