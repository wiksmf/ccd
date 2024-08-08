import { Link } from 'react-router-dom';

import './BlogPost.css';

function BlogPost({ post }) {

  console.log(post)

  return (
    <Link className="post" to={`/blog/${post.id}`}>
      <img key={post.id} src={post.url} />
      <span>{new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full' }).format(post.createdAt)}</span>
      <h2>{post.title}</h2>
    </Link>
  )
}

export default BlogPost
