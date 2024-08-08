import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import './Detailing.css'

import galleryImage1 from '../../public/detailing/car-sm.png';
import galleryImage2 from '../../public/detailing/car-md.png';
import galleryImage3 from '../../public/detailing/car-lg.png';


function ExternalDetailing() {
  return (
    <main id="detailing" className='external'>
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>Detailing zewnętrzny</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section detailing">
          <div className="mw-wrapper">
            <p className="txt--b">
              Detailing zewnętrzny to kompleksowy proces pielęgnacji nadwozia, który ma na celu przywrócenie mu pierwotnego blasku i zapewnienie mu maksymalnej ochrony przed szkodliwym wpływem czynników atmosferycznych.
            </p>

            <div className='detailing-flex'>
              <div className="detailing-left">

                <p className="p--md m-mtb txt--g txt--g-1">
                  <strong>Krok po kroku do lśniącego auta!</strong>
                </p>

                <ol className='ul-flex ol-ml'>
                  <li>
                    <p className="txt--b">
                      <strong>Mycie</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Wstępne</strong> - dokładne pokrycie całego nadwozia pianą aktywną, aby usunąć wszelkie zabrudzenia, nawet z trudno dostępnych miejsc (koła, nadkola, wnęki drzwi, bagażnika, wlew paliwa, uszczelki).
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Zasadnicze</strong> - delikatne mycie ręczne zapewniające bezpieczeństwo lakieru i usunięcie pozostałych zanieczyszczeń.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Dogłębne oczyszczanie</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Deironizacja i dekontaminacja</strong> - zastosowanie specjalistycznych środków chemicznych usuwa z lakieru uporczywe zanieczyszczenia drogowe (rdza, owady, asfalt, smoła, żywica).
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Glinkowanie</strong> - dogłębne oczyszczanie lakieru z mikroskopijnych zanieczyszczeń, zapewniając idealnie gładką i czystą powierzchnię.
                      </li>

                      <li className="txt--b li-marker">
                        <strong>Korekta lakieru</strong> - usuwanie rys i zmatowień, przywracając blask lakieru.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong> Zabezpieczenie lakieru</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Odtłuszczanie</strong> - dokładne usunięcie pozostałości past polerskich, przygotowując lakier do aplikacji powłoki ochronnej.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Wykończenie</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Dressing elementów nie lakierowanych</strong> - pielęgnacja i odświeżenie plastikowych elementów nadwozia, kokpitu i elementów gumowych, nadając im naturalny wygląd.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Coś tam</strong> - coś tam.
                      </li>
                    </ul>
                  </li>

                  <li>
                    <p className="txt--b">
                      <strong>Dodatkowe opcje</strong>
                    </p>

                    <ul className='ul-flex ul-mt'>
                      <li className="txt--b li-marker">
                        <strong>Powłoka ceramiczna</strong> - zapewnia długotrwałą ochronę lakieru przed zarysowaniami, brudem i promieniami UV.
                      </li>
                      <li className="txt--b li-marker">
                        <strong>Zabezpieczenie szyb hydrofobowe</strong> - ułatwia usuwanie wody i poprawia widoczność podczas deszczu.
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
                      className='price-img'
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
                      className='price-img'
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
                      className='price-img'
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
              Efekty detailingu zewnętrznego:
            </strong>
          </h2>

          <ul className='ul-flex ul-mt'>
            <li className="txt--w li-marker">
              <strong>Błyszczący i perfekcyjnie czysty lakier</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Długotrwała ochrona przed szkodliwymi czynnikami</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Hydrofobowe właściwości powierzchni</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Łatwiejsze mycie i pielęgnacja</strong>
            </li>
            <li className="txt--w li-marker">
              <strong>Zachowanie wartości pojazdu</strong>
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

export default ExternalDetailing
