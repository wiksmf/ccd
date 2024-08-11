import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import './Detailing.css'

import galleryImage1 from '../../public/detailing/standard.png';
import galleryImage2 from '../../public/detailing/premium.png';

function AdditionalDetailing() {
  return (
    <main id="detailing" className='additional'>
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Usługi dodatkowe</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section detailing">
          <div className="mw-wrapper">
            <p className="txt--b">
              Chcesz jeszcze bardziej zadbać o swoje auto i cieszyć się jego nienagannym wyglądem przez dłuższy czas? Skorzystaj z usług dodatkowych!
            </p>

            <div className='detailing-flex'>
              <div className="detailing-left">

                <p className="p--md m-mtb txt--g txt--g-1">
                  <strong>Zadbaj o każdy szczegół Twojego auta!</strong>
                </p>

                <ol className='ul-flex ol-ml'>
                  <li>
                    <p className="txt--b">
                      <strong>Pakiet standard</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Pakiet premium</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Lorem ipsum dolor sit amet</strong> - consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

              <div className="detailing-right">
                <h2 className="m-mtb txt--g txt--g-1">
                  <strong>Cennik</strong>
                </h2>

                <div className='price'>
                  <div className='price-wrapper'>
                    <img
                      loading="lazy"
                      className='price-img price-img--4'
                      src={galleryImage1}
                      alt="Detailing aut małych"
                    />

                    <div className='price-txt'>
                      <p className="p--md txt--b">Pakiet standard<br /></p>
                      <p className='p--lg'><strong className='txt--g txt--g-2'>od XXXzł</strong></p>
                    </div>
                  </div>

                  <div className='price-wrapper'>
                    <img
                      loading="lazy"
                      className='price-img price-img--5'
                      src={galleryImage2}
                      alt="Detailing aut średniej wielkości"
                    />

                    <div className='price-txt'>
                      <p className="p--md txt--b">Pakiet premium <br /></p>
                      <p className='p--lg'><strong className='txt--g txt--g-2'>od XXXzł</strong></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>

      <section className="section results">
        <div className="mw-wrapper">
          <h2 className="m-mb txt--g txt--g-2">
            <strong>
              Dlaczego warto zainwestować w dodatkowe zabezpieczenie?
            </strong>
          </h2>

          <ul className='ul-flex ul-mt'>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default AdditionalDetailing
