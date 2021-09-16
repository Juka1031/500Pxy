
@galleried_images.each do |galleried_image|
    json.set! galleried_image.id do 
        json.extract! galleried_image, :id, :gallery_id, :gallery_image_id
    end
end
