class ChangeGalleries < ActiveRecord::Migration[6.1]
  def change
    rename_column :galleries, :title, :gallery_title
  end
end
