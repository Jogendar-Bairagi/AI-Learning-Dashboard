import { useState, useEffect } from "react";
import { courses } from "../data/courses";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

function Dashboard() {
  const [search, setSearch] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [updatedCourses, setUpdatedCourses] = useState([]);

  useEffect(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    setDarkMode(true);
  }
}, []);

useEffect(() => {
  localStorage.setItem("theme", darkMode ? "dark" : "light");
}, [darkMode]);

  useEffect(() => {
    const newCourses = courses.map((course) => {
      const savedLessons = localStorage.getItem(`course-${course.id}`);
      if (savedLessons) {
        const lessons = JSON.parse(savedLessons);
        const completed = lessons.filter(l => l.completed).length;
        const progress = Math.round((completed / lessons.length) * 100);
        return { ...course, progress };
      }
      return course;
    });

    setUpdatedCourses(newCourses);
  }, []);

  const filteredCourses = updatedCourses.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`app ${darkMode ? "dark" : ""}`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="container">
        <input
          type="text"
          placeholder="Search Courses..."
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
    
  );

  
}

export default Dashboard;