import { useEffect, useState } from "react";

function Photo({selectedPhotoId, photos}) {
    const [selectedPhoto, setSelectedPhoto] = useState({});

    useEffect(() => {
		const currentObj = photos.find((p, index) => p.id === selectedPhotoId);
        setSelectedPhoto(currentObj);
	})

    return (selectedPhoto 
        ?
            <div className="photo">
                <div className="photo__name">
                    <span className="photo__text">id: {selectedPhoto.id}</span>
                </div>
                <div className="photo__body">
                    <img src={selectedPhoto.url} alt="" />
                </div>
                <div className="photo__title">
                    {selectedPhoto.title}
                </div>
            </div>
        :
            <div></div>
    );
}

export default Photo;