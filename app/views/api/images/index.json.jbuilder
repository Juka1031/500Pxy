
# @images

# json.extract! @image, :id, :image_title, :image_description, :uploader_id

# json.imageUrl url_for(@image.uploaded_image)

json.array! @images do |image|

    json.extract! image, :id, :image_title, :image_description, :uploader_id
    json.imageUrl url_for(image.uploaded_image)

end
  