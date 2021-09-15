# == Schema Information
#
# Table name: follows
#
#  id          :bigint           not null, primary key
#  follower_id :integer          not null
#  followed_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Follow < ApplicationRecord
    validates :follower_id, :followed_id, presence: true
    validates :follower_id, uniqueness: {scope: :followed_id}

    belongs_to :follower, 
    foreign_key: :follower_id,
    class_name: :User

  belongs_to :followee,
    foreign_key: :followed_id,
    class_name: :User
end
