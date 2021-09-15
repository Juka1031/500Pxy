# json.array! @users do |user|

#     json.extract! user, :id, :username, :firstName, :lastName

# end

@users.each do |user|
    json.set! user.id do
        json.extract! user, :id, :username, :firstName, :lastName
    end
end