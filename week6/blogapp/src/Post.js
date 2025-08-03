import React from 'react';

class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <div
        style={{
          marginBottom: "4px",
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <h2 style={{ fontSize: "20px", marginBottom: "5px" }}>{title}</h2>
        <p style={{ whiteSpace: "pre-wrap", lineHeight: "1.6" }}>{body}</p>
      </div>
    );
  }
}

export default Post;
