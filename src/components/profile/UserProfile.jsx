function UserProfile({user}) {
    return (
        <div className="profile">
               <div className="container">
                    <div className="profile__body">
                         <div className="profile__img-container">
                              <div className="profile__img">
                                   <img src="https://weloversize.com/wp-content/uploads/2018/04/81slzl4edpL._SL1500_.jpg" alt="" />
                              </div>
                         </div>
                         <div className="profile__about-container">
                              <div className="profile__name">
                                        Какой-то ник
                              </div>
                              <div className="profile__title">
                                   О себе:
                              </div>
                              <div className="profile__about">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit cumque vero, quam, unde distinctio beatae labore at maiores provident sapiente quos id nulla minima vitae aliquid. Maiores, voluptatibus ipsa.
                              </div>
                         </div>
                    </div>
               </div>
          </div>
    );
}

export default UserProfile;