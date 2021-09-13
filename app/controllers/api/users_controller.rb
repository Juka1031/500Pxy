class Api::UsersController < ApplicationController


    def index
        @users = User.all
    end

    def show
        @user =User.find(params[:id])
    end

    def create
        
        @user = User.new(user_params)
        email = user_params[:email]
        username = email.slice(0..(email.index("@")-1))
        temp_username = ""
        found = true
        while(found)
            if (User.find_by(username: temp_username) == nil)
                found = false
            end
            temp_username = username + rand(10000).to_s
            
        end
        @user.username = temp_username
        @user.firstName = ""
        @user.lastName = ""
        
        
        if @user.save

            login!(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def update
        @user = User.find(params[:id])
        if @user.update(user_params)

            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:email,:password, :username, :firstName, :lastName)
    end
end