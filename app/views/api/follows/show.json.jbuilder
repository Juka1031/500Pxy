# json.extract! @follow, :id, :follower_id, :followed_id
json.partial! "api/follows/follow", follow: @follow