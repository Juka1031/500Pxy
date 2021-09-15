class Api::GalleriesController < ApplicationController

    def index 
        if params.has_key?(:user_id)
            @galleries = Gallery.where(gallery_owner_id: params[:user_id])
        else
            @galleries = Gallery.all
        end
    end

    def show
        @gallery = Gallery.find(params[:id])
    end

    def create
        @gallery = Gallery.new(gallery_params)
        @gallery.gallery_title = "Untitled" if @gallery.gallery_title === ""

        if @gallery.save
            render 'api/galleries/show'
        else
            render json: @gallery.errors.full_messages, status: 422
        end
    end

    def update
        @gallery = Gallery.find(params[:id])
        if @gallery.update!(gallery_params)
            render 'api/galleries/show'
        else
            render json: @gallery.errors.full_messages, status: 422
        end
    end

    def destroy
        @gallery = current_user.galleries.find_by(id: params[:id])
        if @gallery && @gallery.delete 
            # render 'api/galleries/index'
        end
    end

    def gallery_params
        
        params.require(:gallery).permit(:id, :gallery_title, :gallery_owner_id, :gallery_description)
    end
end