import "../styles/components/User.scss";




const User = () => {
    


    return (
        <>
           <div className="wrapper">
              <article className="highlight">
                 <header className="highlight__header">
                    <h2 className="title size--m">
                        Lorena Orellana
                       
                    </h2>
                    <p className="subtitle">
                       Lorellana21
                    </p>
                 </header>
                 <figure className="highlight__figure">
                    <img className="highlight__img" 
                         loading="lazy" 
                         src="https://picsum.photos/400/200?random=1" 
                         alt="Velverde en rueda de prensa">
                             </img>
                    <figcaption className="highlight__caption">
                       carita contenta
                    </figcaption>
                 </figure>
                 <footer className="highlight__footer">
                    <span className="highlight__location">
                       Sevilla
                    </span>
                    <span
                       className="highlight__email">
                       email
                    </span>
                 </footer>
              </article>
              </div>
              </>
              );

};

export default User;





    