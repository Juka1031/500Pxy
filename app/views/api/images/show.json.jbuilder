
json.extract! @image, :id, :image_title, :image_description, :uploader_id, :created_at
json.imageUrl url_for(@image.uploaded_image)

