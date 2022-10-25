import { useEffect, useState } from "react";
import "../css/index.css";
import "../css/Nav.css";

export default function DarkMode() {
  const root: any = document.querySelector(":root");
  const rootStyles = getComputedStyle(root);
  const [darkMode, setDarkMode] = useState(loadTheme);

  function loadTheme() {
    let savedTheme: any = JSON.parse(
      localStorage.getItem("darkMode") || "false"
    );
    if (savedTheme != undefined) {
      return savedTheme;
    } else {
      localStorage.setItem("darkMode", JSON.stringify(false));
      return false;
    }
  }

  useEffect(setTheme, [darkMode]);

  const darkTheme = {
    font: "#ffffff",
    bg: "#121212",
    fontAccent: "#A5A5A5",
    hr: "#E5E7EB",
  };

  const lightTheme = {
    font: "#111827",
    bg: "#FFFFFF",
    fontAccent: "#6B7280",
    hr: "#E5E7EB",
  };


  function updateTheme(theme: any) {
      root.style.setProperty("--clr-font", theme.font);
      root.style.setProperty("--clr-bg", theme.bg);
      root.style.setProperty("--clr-fontAccent", theme.fontAccent);
      root.style.setProperty("--clr-hr", theme.hr);


  }

  function setTheme() {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    darkMode ? updateTheme(darkTheme) : updateTheme(lightTheme);
  }

  function changeTheme() {
    setDarkMode((prevTheme: any) => !prevTheme);
  }

  return (
    <button className="theme-btn" onClick={changeTheme}>
      {darkMode ? (
        <i style={{ color: "white" }} className="fa-solid fa-sun"></i>
      ) : (
        <i style={{ color: "white" }} className="fa-solid fa-moon"></i>
      )}
    </button>
  );
}
