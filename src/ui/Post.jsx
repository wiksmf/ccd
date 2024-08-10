import { useNavigate, useParams } from 'react-router-dom';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';

import Button from './Button';

import './Post.css';

function Post() {
  const id = useParams();
  const navigate = useNavigate();
  const { post } = useFirestoreCollection('posts', id);

  return (
    <main id="post">
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Blog</strong>
            </h1>
          </div>
        </div>
      </section>

      <Button onClick={(e) => { e.preventDefault(); navigate(-1); }}>
        Back
      </Button>

      <div>
        <h2>{post.title}</h2>
        <span>{new Intl.DateTimeFormat('pl-PL', { dateStyle: 'full' }).format(post.createdAt)}</span>
        <img key={post.id} src={post.src} />
        <p>{post.content}</p>
      </div>
    </main>
  )
}

export default Post
