
function MovieDisplay ({movie}) {

  const loaded = () => {
    return (
      <div>
        <h2>{movie.Title}</h2>
        <h3>{movie.Genre}</h3>
        <img src={movie.Poster} alt={movie.Title} />
        <h2>{movie.Year}</h2>
      </div>
    )
  };

  const loading = () => {
    return <h4>No Movie to Display</h4>;
  };

  return movie ? loaded() : loading();
};

export default MovieDisplay;