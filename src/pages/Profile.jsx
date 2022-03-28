import Photos from "../components/Photos";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import {UserContext} from "../App";
import UserProfile from "../components/profile/UserProfile";

function Profile({isMy}) {
    const {userId} = useParams();
    const [user, setUser] = useContext(UserContext);
    let title = "Фотки " + userId;
    let id = userId;
    
    if(isMy) {
          id = user.id;
          title = "Мои фотки";
    }

   return (
        <div>
          <UserProfile/>
          <Photos method="getByUserId" userId={id} title={title}/>
        </div>
   );
}

export default Profile;