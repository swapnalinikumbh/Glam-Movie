import { useEffect } from "react";
import logo from "../assets/logo.png";
const Filter = ({ activeGenre, setActiveGenre, setFiltered, popular }) => {
  useEffect(() => {
    if (activeGenre === 0) {
      setFiltered(popular);
      return;
    }
    const filtered = popular.filter((movie) =>
      movie.genre_ids.includes(activeGenre)
    );
    setFiltered(filtered);
  }, [activeGenre, popular, setFiltered]);

  return (
    <div className="filter-container">
      <div>
        <img
          alt=""
          src={logo}
          style={{ width: "150px", height: "35px", marginBottom: "35px" }}
        ></img>
      </div>
      <button
        className={activeGenre === 0 ? "active" : ""}
        onClick={() => setActiveGenre(0)}
      >
        All
      </button>
      <button
        className={activeGenre === 35 ? "active" : ""}
        onClick={() => setActiveGenre(35)}
      >
        Comedy
      </button>
      <button
        className={activeGenre === 28 ? "active" : ""}
        onClick={() => setActiveGenre(28)}
      >
        Action
      </button>
    </div>
  );
};

export default Filter;
