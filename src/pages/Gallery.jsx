import { useState } from 'react';
// import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import Lightbox from "yet-another-react-lightbox";
import { Thumbnails } from 'yet-another-react-lightbox/plugins';

import { useFirestore } from '../hooks/useFirestore';


import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'react-tabs/style/react-tabs.css';
import './Gallery.css'

function Gallery() {
  const { items: photos } = useFirestore('photos')
  const { items: videos } = useFirestore('videos')

  // const [open, setOpen] = useState(false);

  const [index, setIndex] = useState(-1);

  console.log(photos)

  return (
    <main id="gallery">
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Galeria</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section gallery">
          <div className="mw-wrapper">
            <Tabs>
              <TabList>
                <Tab>Zdjęcia</Tab>
                <Tab>Video</Tab>
              </TabList>

              <TabPanel>

                {photos && photos.map((photo, currIndex) => <img
                  key={photo.id}
                  src={photo.src}
                  onClick={() => setIndex(currIndex)}
                />)}

                <Lightbox
                  plugins={[Thumbnails]}
                  index={index}
                  slides={photos}
                  open={index >= 0}
                  close={() => setIndex(-1)}
                />
              </TabPanel>

              <TabPanel>
                {videos && videos.map(video => <video
                  key={video.id}
                  src={`${video.src}`}
                  width="320"
                  height="240"
                  controls
                ></video>)}
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  )
}

export default Gallery
