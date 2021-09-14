# == Schema Information
#
# Table name: galleries
#
#  id                  :bigint           not null, primary key
#  gallery_title       :string           not null
#  gallery_description :string
#  gallery_owner_id    :integer          not null
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class Gallery < ApplicationRecord

    validates :gallery_title, :gallery_owner_id, presence: true


    belongs_to :gallery_owner,
    foreign_key: :gallery_owner_id,
    class_name: :User

    has_many :galleried_images,
    foreign_key: :gallery_id,
    class_name: :GalleriedImage

    has_many :images,
    through: :galleried_images,
    source: :image,
    dependent: :destroy

    # has_many :gallery_images,
    # through: :gallery_owner,
    # source: :images

end
