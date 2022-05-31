import "../styles/components/User.scss";

const User = () => {
  return (
    <>
      <div className="wrapper">
        <article className="highlight">
          <header className="highlight__header">
            <h2 className="title size--m">Lorena Orellana</h2>
            <p className="subtitle">Lorellana21</p>
            <p className="bio">
              Frontend Developer — @Adalab — and language translator. Seeking
              job as Jr. Frontend Developer ❤ Passionate about React, Javascript
              and life-long learning
            </p>
          </header>
          <figure className="highlight__figure">
            <img
              className="highlight__img"
              loading="lazy"
              src="https://avatars.githubusercontent.com/u/81922944?v=4"
              alt="Lorena Orellana"
            ></img>
            <figcaption className="highlight__caption">
               :) Edit status
            </figcaption>
          </figure>
          {/* buton
          followers y following */}
          <footer className="highlight__footer">
            <span className="highlight__location">Sevilla</span>
            <span className="highlight__email">email</span>
          </footer>
        </article>
      </div>
    </>
  );
};

export default User;
