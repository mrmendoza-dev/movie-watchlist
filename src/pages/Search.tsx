// import Hero from "../components/Hero";
import Hero from "../components/Hero";
import movieIcon from "../assets/images/icon-movie.png";

export default function Search() {
  return (
    <div className="Search">
      <Hero text={{ title: "Find your film", linkText: "My Watchlist", link: "/watchlist" }} />

      <section className="display">
        <div className="default-message">
          <img src={movieIcon} alt="movie reel icon" className="movie-icon" />
          <p>Start Exploring</p>
        </div>
      </section>
    </div>
  );
}



