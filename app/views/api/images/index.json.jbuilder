
# @images

# json.extract! @image, :id, :image_title, :image_description, :uploader_id

# json.imageUrl url_for(@image.uploaded_image)

@images.each do |image|
    json.set! image.id do
        json.extract! image, :id, :image_title, :image_description, :uploader_id, :created_at
        json.imageUrl url_for(image.uploaded_image)
    end

end
  