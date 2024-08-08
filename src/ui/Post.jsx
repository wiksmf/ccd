import { useParams } from 'react-router-dom';

import { useFirestoreCollection } from '../hooks/useFirestoreCollection';

import './Post.css'

function Post() {
  const id = useParams();

  console.log(id)
  const { post } = useFirestoreCollection('posts', id);

  console.log('Post data:', post);


  return (
    <div>
      <h2>{post.title}</h2>
      <span>{new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full' }).format(post.createdAt)}</span>
      <img key={post.id} src={post.url} />
      <p>{post.content}</p>
    </div>
  )
}

export default Post
