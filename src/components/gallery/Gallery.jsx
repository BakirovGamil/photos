import GalleryItem from "./GalleryItem";
import Loader from "../UI/Loader/Loader";
import ContextMenu from "../ContextMenu/ContextMenu";
import { useState } from "react";

function Gallery({title, photos, actions, isLoading}) {
	const [isActive, setIsActive] = useState(false);
	const [anchor, setAnchor] = useState({top: 0, left: 0});
	const [contextId, setContextId] = useState(0);
    const galleyItems = photos.map((photo) => <GalleryItem 
			onContextMenu={(e) => handleContextMenu(e, photo.id)} 
			key={photo.id} 
			photo={photo} 
			actions={actions}
		/>);

	function handleContextMenu(e, id) {
		e.preventDefault();
		e.stopPropagation();
		setIsActive(true);
		setContextId(id);
		setAnchor({top: e.clientY , left: e.clientX});
	}

    return (
        <div className="gallery">
				<div className="container">
					<div className="gallery__title title">
						{title}
					</div>
					{isLoading 
						?
							<div className="flex-container">
								<Loader/>
							</div>
					 	:
							<div className="gallery__body">
								{galleyItems}
							</div>
					}
				</div>
				<ContextMenu 
					isActive={isActive} 
					setIsActive={setIsActive} 
					anchor={anchor} 
					actions={actions} 
					id={contextId}
				/>
		</div>
    );
}

export default Gallery;