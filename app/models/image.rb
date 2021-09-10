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


    belong_to :user,
    foreign_key: :uploader_id,
    class_name: :User


    has_one_attached :uploaded_image
end
