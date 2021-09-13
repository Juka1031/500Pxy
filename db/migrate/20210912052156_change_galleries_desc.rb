class ChangeGalleriesDesc < ActiveRecord::Migration[6.1]
  def change
    rename_column :galleries, :description, :gallery_description
  end
end
