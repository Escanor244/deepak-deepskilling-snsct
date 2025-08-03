import React from 'react';

const BlogDetails = ({ blogs }) => {
  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map(blog => (
          <div key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.content}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default BlogDetails;
