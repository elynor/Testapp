class User < ActiveRecord::Base
  mount_uploader :avatar, AvatarUploader
  validates :last_name, presence: true, length: { minimum: 2}
  validates :first_name, presence: true, length: { minimum: 2}
end
