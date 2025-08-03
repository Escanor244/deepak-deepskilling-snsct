import React from 'react';
import Post from './Post';  // ✅ Import React component

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      error: null
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        this.setState({ posts: data.slice(0, 5) }); // ✅ Just use the raw API objects
      })
      .catch((error) => {
        this.setState({ error });
        console.error("Error fetching posts:", error);
      });
  }

  componentDidMount() {
    this.loadPosts();
  }

  render() {
    const { posts, error } = this.state;

    if (error) {
      return <h2>Something went wrong: {error.message}</h2>;
    }

    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <h1 style={{ textAlign: 'center' }}>All Blog Posts</h1>
        {posts.length > 0 ? (
          posts.map((post) => (
            <Post key={post.id} title={post.title} body={post.body} />
          ))
        ) : (
          <p>Loading posts...</p>
        )}
      </div>
    );
  }
}

export default Posts;
