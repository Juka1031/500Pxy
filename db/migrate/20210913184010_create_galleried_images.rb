class CreateGalleriedImages < ActiveRecord::Migration[6.1]
  def change
    create_table :galleried_images do |t|
        t.integer :gallery_id, null:false
        t.integer :gallery_image_id, null:false
      t.timestamps
    end
        add_index :galleried_images, [:gallery_id, :gallery_image_id], unique: true
        remove_column :images, :gallery_id
  end
end
