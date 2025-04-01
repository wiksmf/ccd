import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import bg2 from '../../public/images/bg/bg-desktop.svg';

import './Detailing.css';

function DetailingFoil() {
  return (
    <main
      id='detailing'
      className='detailing-foil'
    >
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Folie</strong>
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
            <p className='p--md m-mb txt--g txt--g-1'>
              <strong>PPF</strong>
            </p>

            <div className='table'>
              <div className='table-row'>
                <div className='table-header table-cell'></div>
                <div className='table-header table-cell'>Cena</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>FULL FRONT</div>
                <div className='table-body table-cell'>od 5 000 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>FULL BODY</div>
                <div className='table-body table-cell'>od 12 000 zł </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>REFLEKTORY</div>
                <div className='table-body table-cell'>od 300 zł do 500 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>LAMPY TYŁ</div>
                <div className='table-body table-cell'>od 300 zł do 700 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>LUSTERKA</div>
                <div className='table-body table-cell'>od 350 zł do 450 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>PARAPET ZDERZAKA</div>
                <div className='table-body table-cell'>od 200 zł do 350 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>POD KLAMKAMI</div>
                <div className='table-body table-cell'>od 200 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>SŁUPKI PIANO BLACK </div>
                <div className='table-body table-cell'>od 300 zł do 600 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>RANTY DRZWI </div>
                <div className='table-body table-cell'>100 zł / kpl</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>ZABEZPIECZENIE PROGÓW</div>
                <div className='table-body table-cell'>od 80 – 100 zł / szt</div>
              </div>
            </div>

            <p className='p--md m-mtb txt--g txt--g-1'>
              <strong>PPF Kolorowy / „Mrożenie lakieru”</strong>
            </p>

            <div className='table'>
              <div className='table-row'>
                <div className='table-header table-cell'></div>
                <div className='table-header table-cell'>Cena</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>MROŻENIE</div>
                <div className='table-body table-cell'>od 15 000 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>KOLOR</div>
                <div className='table-body table-cell'>od 17 000 zł </div>
              </div>
            </div>

            <p className='p--md m-mtb txt--g txt--g-1'>
              <strong>Folie winylowe </strong>
            </p>

            <div className='table'>
              <div className='table-row'>
                <div className='table-header table-cell'></div>
                <div className='table-header table-cell'>Cena</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>KOLOR / MAT/ SATYNA</div>
                <div className='table-body table-cell'>od 14 000 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>DECHROMING</div>
                <div className='table-body table-cell'>od 800 zł</div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default DetailingFoil;
