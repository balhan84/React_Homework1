import userPhoto from "./userPhoto.png";
import { useState } from "react";

function UserCard({ user }) {
  const [isLight, setIsLight] = useState(true);
  const buttonStyle = {
    color: isLight ? "yellow" : "grey",
  };

  function changeColorStar() {
    setIsLight((oldIsLight) => !oldIsLight);
  }

  return (
    <article className="userCard">
      <img className="userPhoto" src={userPhoto} alt="" />
      <div className="userWrapper">
        <h2 className="userInfo">
          {user.name} {user.surname}
        </h2>
        <p className="userNick">{user.nickName}</p>
      </div>
      <div className="userFollowers">
        <p className="userFollow">Followers</p>
        <p className="userNumFollow">{user.followers}</p>
      </div>
      <button
        className="userStar"
        onClick={changeColorStar}
        style={buttonStyle}
      >
        <i className="fa-solid fa-star"></i>
      </button>
    </article>
  );
}

export default UserCard;
