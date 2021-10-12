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
        if user_params[:email].include?("@")
            username = email.slice(0..(email.index("@")-1))
        end
        temp_username = ""
        found = true
        while(found)
            if (User.find_by(username: temp_username) == nil)
                found = false
            end
            if(username)
                temp_username = username + rand(10000).to_s
            end
            
        end
        @user.username = temp_username
        @user.firstName = ""
        @user.lastName = ""
        valid_email = false
        if email.count("@") == 1  && email.slice(email.index("@")+1..email.length).count(".") == 1
            valid_email = true
        end
        if(valid_email)
            if @user.save
                login!(@user)
                render 'api/users/show'
            else
                render json: @user.errors.full_messages, status: 422 
            end
        else
            if @user.password.length < 8 
                render json: ["Email is invalid", "Password is too short (minimum is 8 characters)"], status: 422
            else
                render json: ["Email is invalid"], status: 422
            end
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
        params.require(:user).permit(:id, :email,:password, :username, :firstName, :lastName, :avatar)
    end
end