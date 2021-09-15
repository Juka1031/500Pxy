class Api::FollowsController < ApplicationController
    

    def show
        @follow = Follow.find_by(follower_id: params[:id])
        render:show
    end

    def create
        @follow = Follow.new(follow_params)
        if @follow.save &&@follow
            render 'api/follows/show'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find_by(id: params[:id])
        if @follow && @follow.destroy
            # render :index
        else
            render json: @board.errors.full_messages, status: 422
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:id, :follower_id, :followed_id)
    end
end