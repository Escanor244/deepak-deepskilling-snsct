import React from 'react';

const CourseDetails = ({ showCourses, courses }) => {
  return (
    <div>
      {showCourses && courses.map(course => (
        <div key={course.id}>
          <h3>{course.name}</h3>
          <p>{course.duration}</p>
        </div>
      ))}
    </div>
  );
};

export default CourseDetails;
