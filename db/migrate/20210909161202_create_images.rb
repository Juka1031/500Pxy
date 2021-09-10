class CreateImages < ActiveRecord::Migration[6.1]
  def change
    create_table :images do |t|
        t.string :image_title, null:false
        t.string :image_description
        t.integer :gallery_id
        t.integer :uploader_id, null:false
      t.timestamps
    end
        add_index :images, :image_title
        add_index :images, :uploader_id
        add_index :images, :gallery_id
  end
end
