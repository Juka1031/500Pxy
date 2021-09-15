# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  email           :string
#  birthday        :integer
#  biography       :string
#  session_token   :string
#  password_digest :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  firstName       :string
#  lastName        :string
#
class User < ApplicationRecord

    validates :password_digest, presence: true
    validates :username, :session_token, uniqueness: true, presence: true
    validates :password, length: {minimum: 8, allow_nil: true}
    validates :email, uniqueness: true, presence: true,format: { with: URI::MailTo::EMAIL_REGEXP } 

    has_many :images,
    foreign_key: :uploader_id,
    class_name: :Image

    has_many :galleries,
    foreign_key: :gallery_owner_id,
    class_name: :Gallery

    has_many :follow_list,
    foreign_key: :follower_id,
    class_name: :Follow

    has_many :follower_list,
    foreign_key: :followed_id,
    class_name: :Follow

    has_many :followers, 
    through: :follower_list,
    source: :follower,
    dependent: :destroy

    has_many :follows,
    through: :follow_list,
    source: :followee,
    dependent: :destroy


    attr_reader :password
    after_initialize :ensure_session_token


    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        #do i also want to allow username login?
        if user && user.is_password?(password)
            user
        else
            nil
        end
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def generate_session_token
        SecureRandom.urlsafe_base64
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end


    def reset_session_token!
        self.session_token = generate_session_token
        self.save!
        self.session_token
    end

    private #private?
    def ensure_session_token
        self.session_token ||= generate_session_token
    end
end
