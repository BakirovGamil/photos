function GalleryItem({photo,actions, ...props}) {
    return (
        <div {...props} onClick={()=> actions["open"](photo.id)} className="gallery__item">
            
            <div className="gallery__photo">
                <img src={photo.thumbnailUrl} alt="" />
            </div>
            
        </div>
    );
    
}

export default GalleryItem;