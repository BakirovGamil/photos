import { useState , useEffect} from "react";
import PhotoService from "../API/PhotoService";
import Gallery from "./gallery/Gallery";
import Modal from "./UI/Modal/Modal";
import useFetching from "../hooks/useFetching";
import PhotoSwitcher from "./photoSwitcher/PhotoSwitcher";

function Photos({method, title, ...args}) {
    const [photos, setPhotos] = useState([]);
	const [selectedPhotoId, setSelectedPhotoId] = useState(1);
	const [isVisibleModal, setIsVisibleModal] = useState(false);

	const [isLoadingPhotos, fetchPhotos, errorPhotos] = useFetching(async ()=> {
		const photosResp = await PhotoService[method](...Object.values(args));
		const photosJson = await photosResp.json();
		setPhotos(photosJson);
		setSelectedPhotoId(photosJson[0]?.id);
	});

	useEffect(async () => {
		fetchPhotos();
	}, []);

	const actions = {
		open(id) {
			setSelectedPhotoId(id);
			setIsVisibleModal(true);
		},

		edit(id) {
			setSelectedPhotoId(id);
		},

		delete(id) {
			console.log(id);
			console.log(photos);
			setPhotos(photos.filter(photo => photo.id !== id));
		}
	}

    return (
		<>
		 	<Gallery 
				title={title}
				photos={photos} 
				actions={actions}
				isLoading={isLoadingPhotos}
			/>
			
            <Modal  visible={isVisibleModal} setVisible={setIsVisibleModal}>
               {!isLoadingPhotos && <PhotoSwitcher 
			   							visible={isVisibleModal} 
										photos={photos} 
										setSelectedPhotoId={setSelectedPhotoId} 
										selectedPhotoId={selectedPhotoId}/>
				}
            </Modal>
		</>
    );
}

export default Photos;