import {Link} from "react-router-dom"
import DarkMode from "./DarkMode";


export default function Header(props: any) {
  return (
    <section className="Header">
      <div className="header-text">
        <p className="header-title">{props.text.title}</p>
        <p className="header-link">
          <Link to={props.text.link}>{props.text.linkText}</Link>
        </p>
      </div>
      <DarkMode />
    </section>
  );
}



