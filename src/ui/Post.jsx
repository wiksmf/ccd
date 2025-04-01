import { useNavigate, useParams } from 'react-router-dom';
import { useFirestoreCollection } from '../hooks/useFirestoreCollection';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import parse from 'html-react-parser';

import Loader from './Loader';

import './Post.css';

function Post() {
  const id = useParams();
  const navigate = useNavigate();
  const { post, isLoading } = useFirestoreCollection('posts', id);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return (
    <main id='post'>
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Blog</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer
          image='/public/images/bg/bg-desktop.svg'
          style={{ backgroundAttachment: 'fixed' }}
          speed={-50}
        />
        <section className='section post'>
          <div className='mw-wrapper'>
            <div className='post-back'>
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate(-1);
                }}
              >
                Blog
              </a>
              <span className='post-back--disabled'> / {post.title}</span>
            </div>

            {isLoading ? (
              <Loader />
            ) : (
              <>
                <h2 className='post-title'>{post.title}</h2>
                <span className='post-date'>{post.createdAt?.toDate().toLocaleDateString('pl-PL', options)}</span>
                <br />
                <br />
                <br />
                {parse(`<p className="post-content">${post.content}</p>`)}
              </>
            )}
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default Post;
