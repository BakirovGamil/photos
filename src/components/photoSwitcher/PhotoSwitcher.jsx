import { useEffect } from "react";
import Photo from "../photo/Photo";
import CircleButton from "../UI/CircleButton/CircleButton";

function PhotoSwitcher({photos, selectedPhotoId, setSelectedPhotoId, visible}) {
	function handleKeyUp(e) {
		if(e.code === "ArrowRight") setNextPhotoId();
		if(e.code === "ArrowLeft") setPrevPhotoId();
	}

	useEffect(() => {
		if(visible)
			document.addEventListener("keyup", handleKeyUp);
		
		return () => document.removeEventListener("keyup", handleKeyUp);
	});

    function setPrevPhotoId() {
		let ind;
		const currentObj = photos.find((p, index) => (ind = index, p.id === selectedPhotoId));
		if(ind === 0) {
			setSelectedPhotoId(photos[photos.length-1].id);
		} else {
			setSelectedPhotoId(photos[ind-1].id);
		}	
	}

	function setNextPhotoId() {
		let ind;
		const currentObj = photos.find((p, index) => (ind = index, p.id === selectedPhotoId));
		if(ind === photos.length-1) {
			setSelectedPhotoId(photos[0].id);
		} else {
			setSelectedPhotoId(photos[ind + 1].id);
		}	
	}

    return (
        <div className="photo-switcher">
            <Photo photos={photos} selectedPhotoId={selectedPhotoId}/>
            <CircleButton onClick={setPrevPhotoId} className="photo-switcher__prev">
                <i className="gg-arrow-left"></i>
            </CircleButton>
            <CircleButton onClick={setNextPhotoId} className="photo-switcher__next">
                <i className="gg-arrow-right"></i>
            </CircleButton>
        </div>
    );
}

export default PhotoSwitcher;