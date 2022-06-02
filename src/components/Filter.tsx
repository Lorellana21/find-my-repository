import "../styles/components/Filter.scss";


const Filter = (props: any) => {
    const handleInput = (ev: any) => {
      props.handleFilter(ev.target.value);
    };
    return (
      <header className="header">
        <h1 className="header__title">My list of repositories</h1>
        <form>
          <input
            className="header__search"
            autoComplete="off"
            type="search"
            id="search"
            name="search"
            placeholder="Filter by name"
            onChange={handleInput}
          />
        </form>
      </header>
    );
  };
  
  export default Filter;