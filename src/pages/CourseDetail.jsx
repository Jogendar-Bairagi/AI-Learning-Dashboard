import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useState, useEffect } from "react";

function CourseDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === Number(id));

  const defaultLessons = [
    { id: 1, title: "Introduction", completed: false },
    { id: 2, title: "Core Concepts", completed: false },
    { id: 3, title: "Advanced Topics", completed: false },
    { id: 4, title: "Final Project", completed: false }
  ];

  const [lessons, setLessons] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const savedLessons = localStorage.getItem(`course-${id}`);
    if (savedLessons) {
      setLessons(JSON.parse(savedLessons));
    } else {
      setLessons(defaultLessons);
    }
  }, [id]);

  // Save to localStorage
  useEffect(() => {
    if (lessons.length > 0) {
      localStorage.setItem(`course-${id}`, JSON.stringify(lessons));
    }
  }, [lessons, id]);

  if (!course) {
    return <h2>Course Not Found</h2>;
  }

  const toggleLesson = (lessonId) => {
    setLessons(
      lessons.map((lesson) =>
        lesson.id === lessonId
          ? { ...lesson, completed: !lesson.completed }
          : lesson
      )
    );
  };

  const completedCount = lessons.filter(l => l.completed).length;
  const progress = Math.round((completedCount / lessons.length) * 100);

  return (
    <div className="container">
      <button onClick={() => navigate(-1)}>⬅ Back</button>
      <h2>{course.title}</h2>

      <p><strong>Progress:</strong> {progress}%</p>

      {lessons.map((lesson) => (
        <div key={lesson.id} className="lesson">
          <input
            type="checkbox"
            checked={lesson.completed}
            onChange={() => toggleLesson(lesson.id)}
          />
          <span
            style={{
              textDecoration: lesson.completed ? "line-through" : "none"
            }}
          >
            {lesson.title}
          </span>
        </div>
      ))}
    </div>
  );
}

export default CourseDetail;