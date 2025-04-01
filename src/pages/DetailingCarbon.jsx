import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import bg2 from '../../public/images/bg/bg-desktop.svg';

import './Detailing.css';

function DetailingCarbon() {
  return (
    <main
      id='detailing'
      className='detailing-carbon'
    >
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Carbony</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer
          image={bg2}
          style={{ backgroundAttachment: 'fixed' }}
          speed={-50}
        />
        <section className='section detailing'>
          <div className='mw-wrapper'>
            <p className='p--md m-mtb txt--g txt--g-1'>
              <strong>Wkrótce...</strong>
            </p>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default DetailingCarbon;
