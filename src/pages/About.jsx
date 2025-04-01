import { useState } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { HashLink } from 'react-router-hash-link';
import { Thumbnails } from 'yet-another-react-lightbox/plugins';
import Lightbox from 'yet-another-react-lightbox';
import { useFirestore } from '../hooks/useFirestore';

import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import AboutImg from '../../public/images/about/4807_0.jpg';
import bg1 from '../../public/images/bg/bg-desktop.svg';

import Loader from '../ui/Loader';

import './About.css';

function About() {
  const { items: photos, isLoading: isLoadingPhoto } = useFirestore('certifications');
  const [index, setIndex] = useState(-1);

  return (
    <main id='about'>
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>O mnie</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer
          image={bg1}
          style={{ backgroundAttachment: 'fixed' }}
          speed={-50}
        />
        <section className='section content'>
          <div className='mw-wrapper'>
            <div className='about-wrapper'>
              <div className='about-flex'>
                <div className='about-txt'>
                  <p className='txt--b'>
                    Mam na imię Bartek. Przez ostatnie 18 lat pracowałem w dużych korporacjach, konsekwentnie pnąc się
                    po szczeblach kariery. Ostatnie lata spędziłem jako menedżer zarządzający zespołem doradców
                    rozproszonych po całej Polsce. Była to praca pełna wyzwań, dająca mi wiele satysfakcji, zwłaszcza ze
                    względu na codzienny kontakt z ludźmi. Jednak w głębi serca czułem, że to nie jest to, co chciałbym
                    robić przez resztę życia. Moja prawdziwa pasja zawsze kręciła się wokół samochodów i ich
                    perfekcyjnej pielęgnacji.
                  </p>

                  <p className='txt--b'>
                    Od lat zgłębiałem tajniki auto detailingu i wrappingu, biorąc udział w szkoleniach, uczestnicząc w
                    forach branżowych i aktywnie śledząc światowe trendy poprzez społeczności internetowe oraz YouTube.
                    Moje zamiłowanie do detali, dbałość o perfekcję i chęć tworzenia pięknych, lśniących pojazdów
                    skłoniły mnie do podjęcia najważniejszej decyzji w życiu – postanowiłem rzucić dotychczasową karierę
                    i w pełni poświęcić się mojej pasji. Tak narodziło się Carbon Care Detailing.
                  </p>

                  <p className='txt--b'>
                    Auto detailing to dla mnie coś więcej niż zawód – to sztuka i filozofia, której fundamentem jest
                    precyzja i bezkompromisowa jakość. W Carbon Care Detailing oferuję kompleksowe usługi pielęgnacyjne
                    dla Twojego samochodu, takie jak:
                  </p>

                  <ul className='ul-flex'>
                    <li className='txt--b li-marker ul-mt'>Dokładne czyszczenie wnętrza i nadwozia,</li>
                    <li className='txt--b li-marker ul-mt'>Renowacja i korekta lakieru, oraz reflektorów</li>
                    <li className='txt--b li-marker ul-mt'>Zabezpieczenie lakieru powłokami ochronnymi,</li>
                    <li className='txt--b li-marker ul-mt'>Aplikacja folii PPF,</li>
                    <li className='txt--b li-marker ul-mt'>Zmiana koloru auta foliami winylowymi,</li>
                    <li className='txt--b li-marker ul-mt'>
                      Profesjonalna pielęgnacja tapicerki i elementów plastikowych.
                    </li>
                  </ul>

                  <p className='txt--b m-mt'>
                    Każdy samochód traktuję indywidualnie, stosując wyłącznie sprawdzone techniki i najlepsze dostępne
                    na rynku produkty. Moim celem jest nie tylko przywracanie pojazdom nieskazitelnego wyglądu, ale
                    także ich długotrwała ochrona przed czynnikami zewnętrznymi.
                  </p>
                </div>

                <div className='about-img'>
                  <img
                    loading='lazy'
                    className='about-img--img'
                    src={AboutImg}
                    alt='Detailing z miłością - Twój samochód w najlepszych rękach!'
                  />
                </div>
              </div>

              <h2 className='txt--b m-mtb txt--g txt--g-2'>
                <strong>Dlaczego warto wybrać Carbon Care Detailing?</strong>
              </h2>

              <ul className='ul-flex'>
                <li className='txt--b li-marker ul-mt'>
                  <strong>Doświadczenie i profesjonalizm</strong> - latami zdobywałem wiedzę i umiejętności, aby
                  oferować najwyższy poziom usług.
                </li>
                <li className='txt--b li-marker ul-mt'>
                  <strong>Indywidualne podejście</strong> - każdy samochód traktuję jak dzieło sztuki, dbając o każdy,
                  nawet najmniejszy detal.
                </li>
                <li className='txt--b li-marker ul-mt'>
                  <strong>Najwyższa jakość</strong> - stosuję sprawdzone produkty i techniki, gwarantując doskonałe
                  efekty.
                </li>
                <li className='txt--b li-marker ul-mt'>
                  <strong>Pasja i zaangażowanie</strong> - kocham to, co robię, i w każdy projekt wkładam serce.
                </li>
                <li className='txt--b li-marker ul-mt'>
                  <strong>Szeroki zakres usług</strong> - od mycia detailingowego po zaawansowane zabezpieczenia
                  powłokami ochronnymi.
                </li>
              </ul>

              <p className='m-mtb txt--b'>
                Jeśli chcesz, by Twój samochód wyglądał jak nowy,{' '}
                <strong className='txt--g txt--g-1'>zapraszam do Carbon Care Detailing</strong> . Gwarantuję, że Twój
                pojazd znajdzie się w najlepszych rękach. Skontaktuj się ze mną, a wspólnie dobierzemy najlepsze
                rozwiązanie dla Twojego auta!
              </p>

              <HashLink
                to='/#offer'
                className={'btn-cta'}
              >
                <strong>Sprawdź ofertę</strong>
              </HashLink>
            </div>
          </div>
        </section>
      </ParallaxBanner>

      <section className='section products'>
        <div className='mw-wrapper'>
          <h2 className='txt--b m-mb txt--g txt--g-2'>
            <strong>Certyfikaty</strong>
          </h2>

          <div className='certifications'>
            {isLoadingPhoto ? (
              <Loader />
            ) : (
              photos &&
              photos.map((photo, currIndex) => (
                <img
                  key={photo.id}
                  className='certification-item'
                  src={photo.src}
                  onClick={() => setIndex(currIndex)}
                />
              ))
            )}
          </div>
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
  );
}

export default About;
