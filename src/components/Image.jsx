const Image = ({ item }) => (
  <object className="imgPoster" data={item.images['Poster Art'].url} type="image/jpg">
    <img
      className="imgPoster"
      src="https://res.cloudinary.com/dsaayrh18/image/upload/v1667764353/Neoland/Good-Food/movie-cinema-icons_23-2147495008_jfzldw.png"
      alt={item.name}
    />
  </object>
);

export default Image;
