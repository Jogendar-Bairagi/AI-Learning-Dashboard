import sunIcon from "/sun.png";
import moonIcon from "/moon.png";

function Navbar({ darkMode, setDarkMode }) {
   
  return (
    <div className="navbar">
      <h2>AI Learning Dashboard</h2>

      <img
        src={darkMode ? sunIcon : moonIcon }
        alt="toggle theme"
        style={{ width: "30px", cursor: "pointer", color: "white" }}
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
}

export default Navbar;