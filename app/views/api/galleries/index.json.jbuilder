json.array! @galleries do |gallery|

    json.extract! gallery, :id, :gallery_title, :gallery_description, :gallery_owner_id
    # json.imageUrl url_for(gallery.uploaded_image)

end