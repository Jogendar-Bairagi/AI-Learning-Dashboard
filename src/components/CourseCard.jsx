import { useNavigate } from "react-router-dom";

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <div
      className="card"
      onClick={() => navigate(`/course/${course.id}`)}
    >
      <h3>{course.title}</h3>
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${course.progress}%` }}
        ></div>
      </div>
      <p>{course.progress}% Completed</p>
    </div>
  );
}

export default CourseCard;