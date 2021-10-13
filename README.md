# [500Pxy](https://pxy500.herokuapp.com/?#/home)
500Pxy is a clone of 500px, where users can upload their favorite images/photos and curate them in personalized galleries to share with friends and strangers.


![readme1](https://user-images.githubusercontent.com/85578514/133949342-8bc1f842-b36c-40b3-a93b-8f6ac58c02c8.PNG)



## Technologies

 * React-Redux-JSX used in conjunction to build out the frontend of the website
 * Ruby on Rails used to work the backend of the website
 * Postgresql the database management system to store all the information used on the website
 * Amazon S3 handles all the storage of files/images that pertain to the website
 * Heroku the website hosting service used to host
 *  * SCSS/CSS/HTML 

## Code

```...javascript
return uniqueImage.map((image, idx) => {
    return (
    <li className = "image-container" key={idx}>
        <a id={image.id} onClick={this.addImageToGallery} className="user-index-images">
            <LazyLoad><img className= "user-images" src={image.imageUrl}/></LazyLoad></a>
        <a className="image-title">{image.image_title}</a>
    </li>
    );
})
```
Focused on efficiency by not rendering duplicate images that have already been added to gallery to reduce load on servers. Also implemented lazy loading to prevent unnecessary loading of images based upon the users viewport


## Features

### Upload

As with any photo sharing website, users need to be able to upload their works. 500Pxy ensures that the user will be able to safely and securely upload their image without worry of losing them on the cloud server.

### Galleries
Want to sort out your collection in ways you prefer? 500Pxy lets you curate your own photos into galleries so you can keep track of works, and organize with easy.

![readme5](https://user-images.githubusercontent.com/85578514/133949448-7a8d069e-9b70-47ef-999f-258fe7506e63.PNG)

### Feed

See the newest uploads, or see what galleries others have curated.

![readme2](https://user-images.githubusercontent.com/85578514/133949477-f4d8ccf2-e483-4045-ae4b-750a17becde8.PNG)

### To be implemented...
* Follows
* Comments
