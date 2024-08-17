import { useState } from 'react';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import Lightbox from "yet-another-react-lightbox";

import { useFirestore } from '../hooks/useFirestore';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import 'react-tabs/style/react-tabs.css';
import './Gallery.css'
import Loader from '../ui/Loader';

function Gallery() {
  const { items: photos, isLoading: isLoadingPhoto } = useFirestore('photos')
  const { items: videos, isLoading: isLoadingVideo } = useFirestore('videos')
  const [index, setIndex] = useState(-1);

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

      <section className="section gallery">
        <div className="mw-wrapper">
          <Tabs>
            <TabList>
              <Tab>Zdjęcia</Tab>
              <Tab>Video</Tab>
            </TabList>

            <TabPanel>
              <div className='gallery-wrapper'>
                {isLoadingPhoto ? (
                  <Loader />
                ) : (photos && photos.map((photo, currIndex) => <img
                  key={photo.id}
                  className='gallery-item'
                  src={photo.src}
                  onClick={() => setIndex(currIndex)}
                />))}
              </div>
            </TabPanel>

            <TabPanel>
              <div className='gallery-wrapper'>
                {isLoadingVideo ? (
                  <Loader />
                ) : (videos && videos.map(video => <video
                  key={video.id}
                  className='gallery-item'
                  src={`${video.src}`}
                  width="320"
                  height="240"
                  controls
                ></video>))}
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>

      <Lightbox
        plugins={[Thumbnails]}
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </main>
  )
}

export default Gallery
