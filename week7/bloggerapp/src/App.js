import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

const App = () => {
  const [showComponent, setShowComponent] = useState('books');

  const books = [
    { id: 1, bname: "React 101", price: "$20" },
    { id: 2, bname: "Learning JS", price: "$25" }
  ];

  const blogs = [
    { id: 1, title: "React vs Angular", content: "Detailed comparison..." },
    { id: 2, title: "Functional Components", content: "Why use them..." }
  ];

  const courses = [
    { id: 1, name: "React Bootcamp", duration: "6 weeks" },
    { id: 2, name: "Node.js Essentials", duration: "4 weeks" }
  ];

  return (
    <div>
      <button onClick={() => setShowComponent('books')}>Show Books</button>
      <button onClick={() => setShowComponent('blogs')}>Show Blogs</button>
      <button onClick={() => setShowComponent('courses')}>Show Courses</button>

      {/* Conditional Rendering using if/else via element variable */}
      {showComponent === 'books' && <BookDetails books={books} />}
      {showComponent === 'blogs' && <BlogDetails blogs={blogs} />}
      {showComponent === 'courses' && <CourseDetails showCourses={true} courses={courses} />}
    </div>
  );
};

export default App;
