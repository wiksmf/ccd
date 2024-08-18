import { ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import { useFirestore } from "../hooks/useFirestore";

import BlogPost from "../ui/BlogPost";
import Loader from "../ui/Loader";

import bg2 from "../../public/images/bg/bg-desktop.svg";

import "./Blog.css";

function Blog() {
  const { items: posts, isLoading } = useFirestore("posts");

  return (
    <main id="blog">
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Blog</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image={bg2} style={{ backgroundAttachment: "fixed" }} speed={-50} />
        <section className="section posts">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="mw-wrapper">
              {posts && posts.map(post => <BlogPost key={post.id} post={post} />)}
            </div>
          )}

        </section>
      </ParallaxBanner>
    </main>
  )
}

export default Blog;
