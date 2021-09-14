# == Schema Information
#
# Table name: galleried_images
#
#  id               :bigint           not null, primary key
#  gallery_id       :integer          not null
#  gallery_image_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class GalleriedImage < ApplicationRecord
    validates :gallery_id, :gallery_image_id, presence:true
    
    validates :gallery_id, uniqueness: { scope: :gallery_image_id}

    belongs_to :gallery,
    foreign_key: :gallery_id,
    class_name: :Gallery

    belongs_to :image,
    foreign_key: :gallery_image_id,
    class_name: :Image
end
