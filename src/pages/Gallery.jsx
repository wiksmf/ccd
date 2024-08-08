// import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';
import './Gallery.css'
import { useFirestore } from '../hooks/useFirestore';

function Gallery() {
  const { items: photos } = useFirestore('photos')
  const { items: videos } = useFirestore('videos')

  console.log(videos)

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
                {photos && photos.map(photo => <img key={photo.id} src={photo.url} />)}
              </TabPanel>

              <TabPanel>
                {videos && videos.map(video => <video key={video.id} src={`${video.url}`} controls width="320" height="240"></video>)}
              </TabPanel>
            </Tabs>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  )
}

export default Gallery
