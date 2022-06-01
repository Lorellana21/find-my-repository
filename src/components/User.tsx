import "../styles/components/User.scss";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
//import InsertEmoticon from "@mui/icons-material";
//import MyButton from "./MyButton/MyButton";
import React, { FC } from 'react';

export type UserData = {
  name: string;
  login: string;
  bio: string;
  avatar_url: string;
  location: string;
  followers: number;
  following: number;
}

const User: React.FC<UserData> = ({name, login, bio, avatar_url, location, followers, following}) => {
  console.log(name);
  return (
    <>
      <div className="wrapper">
        <article className="highlight">
           {/* <MyButton size="large">Edit profile</MyButton>  */}
          <header className="highlight__header">
            <h2 className="title size--m">{name}</h2>
            <p className="subtitle">{login}</p>
            <p className="bio">
              {bio}
            </p>
          </header>
          <figure className="highlight__figure">
            <img
              className="highlight__img"
              loading="lazy"
              src={avatar_url}
              alt="Lorena Orellana"
            ></img>
            <figcaption className="highlight__caption">
              <InsertEmoticonIcon />
              Edit status
            </figcaption>
          </figure>

          <footer className="highlight__footer">
            <div className="followers__wrapper">
            <span className="highlight__followers">
              {followers} followers
            </span>
            <span className="highlight__following">
              {following} following
            </span>
            </div>
            <span className="highlight__location">
              <LocationOnIcon></LocationOnIcon>
              {location}
            </span>
            <span className="highlight__email">
              <MarkunreadIcon /> lorellana.ordonez@gmail.com
            </span>
          </footer>
        </article>
      </div>
    </>
  );
};

export default User;
