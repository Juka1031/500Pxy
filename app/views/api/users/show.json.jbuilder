json.partial! "api/users/user", user: @user
debugger
if @user.followers
    json.friends @user.followers, :id, :follower_id, :followed_id
end