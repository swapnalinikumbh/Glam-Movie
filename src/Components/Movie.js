import { motion } from "framer-motion";
import "./movie.css";

const Movie = ({ movie }) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="movie-card">
        <div className="movie-image-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt="img"
            className="movie-img"
          />
          <div className="movie-info">
            <span className="rating">{movie.vote_average.toFixed(1)}</span>
          </div>
        </div>
        <div className="movie-details">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Movie;
