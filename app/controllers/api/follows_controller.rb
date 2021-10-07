class Api::FollowsController < ApplicationController
    

    def show
        @follow = Follow.find_by(follower_id: params[:id])
        render :show
    end

    # def create
    #     @follow = Follow.new()
    #     @follow.follower_id = params[:follower_id]
    #     @follow.followed_id = params[:followed_id]
    #     if (@follow.save && @follow)
            
    #         render :show
    #     else
    #         render json: @follow.errors.full_messages, status: 422
    #     end
    # end

    def create
        @follow = Follow.new(follow_params)
        # @follow.follower_id = params[:follower_id]
        # @follow.followed_id = params[:followed_id]
        if @follow.save
            render 'api/follows/show'
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = Follow.find_by(follower_id: params[:follower_id], followed_id: params[:followed_id])
        if (@follow && @follow.delete)
            render :index
        # else
        #     render json: @follow.errors.full_messages, status: 422
        end
    end

    private

    def follow_params
        params.require(:follow).permit(:follower_id, :followed_id)
    end
end


