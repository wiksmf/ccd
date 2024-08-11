import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import './Detailing.css'

import galleryImage1 from '../../public/detailing/car-sm.png';
import galleryImage2 from '../../public/detailing/car-md.png';
import galleryImage3 from '../../public/detailing/car-lg.png';

function InternalDetailing() {
  return (
    <main id="detailing" className='internal'>
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Detailing wewnętrzny</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section detailing">
          <div className="mw-wrapper">
            <p className="txt--b">
              Detailing wnętrza to kompleksowy proces pielęgnacji, który zamieni zakurzone i zaniedbane wnętrze Twojego samochodu w pachnącą i lśniącą oazę komfortu.
            </p>

            <div className='detailing-flex'>
              <div className="detailing-left">

                <p className="p--md m-mtb txt--g txt--g-1">
                  <strong>Podaruj sobie i swojemu autu odrobinę luksusu!</strong>
                </p>

                <ol className='ul-flex ol-ml'>
                  <li>
                    <p className="txt--b">
                      <strong>Skrupulatne czyszczenie każdego zakamarka</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Dokładne odkurzanie i usuwanie brudu</strong> - z podsufitki, siedzeń, schowków, kokpitu, przycisków, kratek nawiewu, podłogi i bagażnika.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Demontaż i czyszczenie dywaników</strong> - gumowych i materiałowych z użyciem profesjonalnych środków i technologii.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Ekstrakcyjne pranie tapicerki materiałowej</strong> - foteli i boczków drzwi.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Pielęgnacja tapicerki skórzanej</strong> - czyszczenie i impregnacja.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Rewitalizacja i ochrona</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Ekstrakcyjne pranie podsufitki</strong> - słupki, pasy bezpieczeństwa, lampki, słoneczniki, rączki.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Parowe czyszczenie</strong> - plastików i winyli (mat, połysk, satyna).
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Coś tam</strong> - coś tam.
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
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
                      className='price-img price-img--1'
                      src={galleryImage1}
                      alt="Detailing aut małych"
                    />

                    <div className='price-txt'>
                      <p className="p--md txt--b">Detailing aut małych <br /></p>
                      <p className='p--lg'><strong className='txt--g txt--g-2'>od XXXzł</strong></p>
                    </div>
                  </div>

                  <div className='price-wrapper'>
                    <img
                      loading="lazy"
                      className='price-img price-img--2'
                      src={galleryImage2}
                      alt="Detailing aut średniej wielkości"
                    />

                    <div className='price-txt'>
                      <p className="p--md txt--b">Detailing aut średniej wielkości <br /></p>
                      <p className='p--lg'><strong className='txt--g txt--g-2'>od XXXzł</strong></p>
                    </div>
                  </div>

                  <div className='price-wrapper'>
                    <img
                      loading="lazy"
                      className='price-img price-img--3'
                      src={galleryImage3}
                      alt="Detailing aut dużych"
                    />

                    <div className='price-txt'>
                      <p className="p--md txt--b">Detailing aut dużych <br /></p>
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
              Efekty detailingu wewnętrznego:
            </strong>
          </h2>

          <ul className='ul-flex ul-mt'>
            <li className="txt--w li-marker">
              <strong>Idealnie czyste i pachnące świeżością wnętrze</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Usunięcie uporczywych zabrudzeń i plam</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Przywrócenie naturalnego koloru i struktury tapicerki</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Poprawa komfortu jazdy</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Zwiększenie wartości rezydualnej auta</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Coś tam</strong> - coś tam.
            </li>
          </ul>
        </div>
      </section>
    </main>
  )
}

export default InternalDetailing
