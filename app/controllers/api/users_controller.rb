class Api::UsersController < ApplicationController

    def show
        @user =User.find(params[:id])
    end

    def create
        
        @user = User.new(user_params)
        @user.username = user_params[:email]
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