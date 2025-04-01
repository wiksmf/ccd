import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { HiMiniArrowRight } from "react-icons/hi2";

import bg2 from '../../public/images/bg/bg-desktop.svg';

import './Detailing.css';

function DetailingAdditionalService() {
  return (
    <main
      id='detailing'
      className='detailing-additional'
    >
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Dodatkowe usługi</strong>
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
            <div className='table'>
              <div className='table-row'>
                <div className='table-header table-cell'></div>
                <div className='table-header table-cell'>Cena</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>
                  <a className='hover-link' href='/blog/valeting-perfekcyjna-pielegnacja-twojego-auta'>
                    WALETING
                    <span className='hover-link--icon'><HiMiniArrowRight /></span>
                  </a>
                </div>
                <div className='table-body table-cell'>od 400 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>PRZYGOTOWANIE AUTA DO SPRZEDAŻY</div>
                <div className='table-body table-cell'>od 600 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>CZYSZCZENIE AUTA PO ZAKUPIE</div>
                <div className='table-body table-cell'>od 600 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>GRIZZ PROTEKT</div>
                <div className='table-body table-cell'>od 250 zł do 500 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>
                  CZYSZCZENIE SZYB I NAŁOŻENIE NIEWIDZIALNEJ WYCIERACZKI
                </div>
                <div className='table-body table-cell'>od 150 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>CZYSZCZENIE I ZABEZPIECZENIE KÓŁ</div>
                <div className='table-body table-cell'>od 320 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>CZYSZCZENIE I ZABEZPIECZENIE DACHU CABRIO</div>
                <div className='table-body table-cell'>od 250 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>CZYSZCZENIE KOMORY SILNIKA</div>
                <div className='table-body table-cell'>od 200 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>POLEROWANIE I ZABEZPIECZENIE REFLEKTORÓW</div>
                <div className='table-body table-cell'>od 250 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>LAKIEROWNIA KIEROWNICY ORAZ GAŁKI ZMIANY BIEGÓW</div>
                <div className='table-body table-cell'>od 250 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>RENOWACJA FOTELI SKÓRZANYCH</div>
                <div className='table-body table-cell'>od 600 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>POZBYWANIE SIĘ UPORCZYWYCH ZAPACHÓW</div>
                <div className='table-body table-cell'>od 500 zł</div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>OZONOWANIE</div>
                <div className='table-body table-cell'>GRATIS DO KAŻDEJ USŁUGI</div>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default DetailingAdditionalService;
