import {Link} from "react-router-dom"
import SearchBar from "./SearchBar";




export default function Hero(props: any) {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="hero__title">{props.text.title}</p>
        <p className="hero__link">
          {/* <a href="index.html">{props.text.link}</a> */}
          <Link to={props.text.link}>{props.text.linkText}</Link>
        </p>
      </div>

    </section>
  );
}



