json.extract! user, :username, :email, :id, :firstName, :lastName, :birthday, :biography
json.avatar url_for(user.avatar) if user.avatar.attached?
