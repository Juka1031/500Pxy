# == Schema Information
#
# Table name: galleries
#
#  id               :bigint           not null, primary key
#  title            :string           not null
#  description      :string
#  gallery_owner_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#
class Gallery < ApplicationRecord

    validates :title, :gallery_owner_id, presence: true


    

end
