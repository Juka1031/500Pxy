class Api::ImagesController < ApplicationController

    def index

        if params.has_key?(:user_id)
            @images = Image.where(uploader_id: params[:user_id])
        else
            @images = Image.all
        end
            # render :index test
            # i can fetch gallery images via params
    end

    def show
        @image = Image.find(params[:id])
    end


    def create
        @image = Image.new(image_params)
        @image.image_title = "Untitled" if @image.image_title === ""
       
        if @image.save
            render 'api/images/show'
        else
            render json: @image.errors.full_messages, status: 422
        end
    end


    def update
        @image = Image.find(params[:id])
        if @image.update!(image_params)
            render 'api/images/show'
        else
            render json: @image.errors.full_messages, status: 422
        end
    end
    def destroy
        @image = current_user.images.find_by(id: params[:id])
        if @image && @image.delete 
            render 'api/images/index'
        end
    end

    def image_params
        
        params.require(:image).permit(:id, :image_title, :uploader_id, :image_description, :uploaded_image)
    end
end