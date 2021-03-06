class Api::SessionsController < ApplicationController
    before_action :ensure_logged_in!, only: [:destroy]

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render 'api/users/show'
        else 
            render json: ['Invalid username/password combination'], status: 401
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json: ["Not logged in"], status: 404
        end
    end
end