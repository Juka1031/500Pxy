json.array! @galleries do |gallery|
    json.extract! gallery, :id, :gallery_title, :gallery_description, :gallery_owner_id
    json.set! :images do
        json.array! gallery.images do |image|
            json.extract! image, :id, :image_title, :image_description, :uploader_id, :created_at
            json.set! :imageUrl, url_for(image.uploaded_image)
    end

end
    
end