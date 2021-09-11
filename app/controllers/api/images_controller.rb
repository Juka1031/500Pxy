class Api::ImagesController < ApplicationController

    def index

        if params.has_key?(:user_id)
            # debugger
            @images = Image.where(uploader_id: params[:user_id])
        end
            render :index
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
        @image = image.find(params[:id])
        if @image.update(image_params)
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
        
        params.require(:image).permit(:image_title, :uploader_id, :image_description, :uploaded_image)
    end
end