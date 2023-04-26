import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../assets/icons";

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
    font: "#FFFFFF",
    bg: "#121212",
    fontAccent: "#A5A5A5",
    hr: "#2C2C2C",
    searchBg: "#2E2E2F",
    searchBtn: "#4B4B4B",
  };

  const lightTheme = {
    font: "#111827",
    bg: "#FFFFFF",
    fontAccent: "#6B7280",
    hr: "#E5E7EB",
    searchBg: "#FFFFFF",
    searchBtn: "#F9FAFB",
  };

  function updateTheme(theme: any) {
    root.style.setProperty("--clr-font", theme.font);
    root.style.setProperty("--clr-bg", theme.bg);
    root.style.setProperty("--clr-fontAccent", theme.fontAccent);
    root.style.setProperty("--clr-hr", theme.hr);
    root.style.setProperty("--clr-searchBg", theme.searchBg);
    root.style.setProperty("--clr-searchBtn", theme.searchBtn);
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
        <FontAwesomeIcon
          icon={icons.faSun}
          style={{ color: "white" }}
          title="Light Mode"
        />
      ) : (
        <FontAwesomeIcon
          icon={icons.faMoon}
          style={{ color: "white" }}
          title="Dark Mode"
        />
      )}
    </button>
  );
}
