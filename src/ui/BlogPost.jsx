import { Link } from 'react-router-dom';

import './BlogPost.css';

function BlogPost({ post }) {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <Link
      className='blog-post'
      to={`/blog/${post.id}`}
    >
      <span className='blog-post--date'>{post.createdAt.toDate().toLocaleDateString('pl-PL', options)}</span>
      <h2 className='blog-post--title'>{post.title}</h2>
    </Link>
  );
}

export default BlogPost;
