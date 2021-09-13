# == Schema Information
#
# Table name: images
#
#  id                :bigint           not null, primary key
#  image_title       :string           not null
#  image_description :string
#  gallery_id        :integer
#  uploader_id       :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Image < ApplicationRecord
    validates :image_title, :uploader_id, presence: true


    belongs_to :user,
    foreign_key: :uploader_id,
    class_name: :User

    belongs_to :gallery,
    foreign_key: :gallery_id,
    class_name: :Gallery


    has_one_attached :uploaded_image
end
