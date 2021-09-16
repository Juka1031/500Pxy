class Api::GalleriedImagesController < ApplicationController

    def index
            @galleried_images = GalleriedImage.all
            render 'api/galleried_images/index'
    end

    def create
        @galleried_image = GalleriedImage.new(galleried_images_params)
        if@galleried_image && @galleried_image.save
            render 'api/galleried_images/show'
        else
            render json: @galleried_image.errors.full_messages, status: 422
        end
    end

    def destroy
        @galleried_image= GalleriedImage.find_by(gallery_id: params[:gallery_id], gallery_image_id: params[:gallery_image_id])
        if @galleried_image && @galleried_image.delete
        end
    end

    def galleried_images_params
        params.require(:galleriedimage).permit(:id, :gallery_id, :gallery_image_id)
    end

end