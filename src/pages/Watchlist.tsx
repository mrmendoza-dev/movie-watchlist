
import Hero from "../components/Hero"
import addIcon from "../assets/images/icon-add-dark.png";
import { Link } from "react-router-dom";



export default function Watchlist() {
    return (
      <div className="Watchlist">
        <Hero
          text={{
            title: "My Watchlist",
            linkText: "Search for movies",
            link: "/",
          }}
        />

        <section className="display">
          <div className="default-message">
            <p>Your watchlist is looking a little empty...</p>

            <Link to="/">
              <img src={addIcon} alt="add icon" className="add-icon" />
              <p className="default-sub">Let's add some movies!</p>
            </Link>

          </div>
        </section>
      </div>
    );
}



