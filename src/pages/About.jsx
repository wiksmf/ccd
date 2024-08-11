import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { useFirestore } from '../hooks/useFirestore';

import AnchorLink from '../ui/AnchorLink';
import Photo from '../ui/Photo';

import AboutImg from '../../public/about/4807_0.jpg'

import './About.css';

function About() {
  const { items: galleryImages } = useFirestore('products')

  return (
    <main id="about">
      <section className="section hero hero--sm">
        <div className="mw-wrapper">
          <div className="hero-wrapper">
            <h1 className="txt--g txt--g-2">
              <strong>O mnie</strong>
            </h1>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section content">
          <div className="mw-wrapper">
            <div className="about-wrapper">
              <div className='about-flex'>
                <div className="about-txt">
                  <p className="txt--b">
                    Kocham samochody i dbam o nie z prawdziwą pasją. Auto detailing to dla mnie nie tylko zawód, ale przede wszystkim sposób na wyrażanie mojej miłości do detali i dbałości o perfekcję.
                    Od lat oferuję klientom kompleksowe usługi auto detailingu, które obejmują m.in.: dokładne czyszczenie wnętrza i nadwozia, renowację lakieruenowację lakieru, zabezpieczenie lakieru przed czynnikami atmosferycznymi, pielęgnację tapicerki i elementów plastikowych, korektę lakieru.
                  </p>

                  <p className="txt--b">
                    Stosuję wyłącznie sprawdzone produkty i techniki, a ja sam, jako doświadczony specjalista, dokładam wszelkich starań, aby każdy samochód opuszczający mój warsztat prezentował się nienagannie.
                  </p>
                </div>

                <div className='about-img'>
                  <img
                    loading="lazy"
                    className='about-img--img'
                    src={AboutImg}
                    alt="Detailing z miłością - Twój samochód w najlepszych rękach!"
                  />
                </div>
              </div>

              <h2 className="txt--b m-mtb txt--g txt--g-2">
                <strong>Dlaczego warto wybrać Carbon Care Detailing?</strong>
              </h2>

              <ul className='ul-flex'>
                <li className="txt--b li-marker ul-mt">
                  <strong>Doświadczenie i profesjonalizm</strong> - posiadam wieloletnie doświadczenie i nieustannie poszerzam swoją wiedzę i umiejętności, aby móc oferować usługi na najwyższym poziomie
                </li>
                <li className="txt--b li-marker ul-mt">
                  <strong>Indywidualne podejście</strong> - do każdego zlecenia podchodzę indywidualnie, dbając o każdy szczegół
                </li>
                <li className="txt--b li-marker ul-mt">
                  <strong>Najwyższa jakość usług</strong> - stosuję wyłącznie sprawdzone produkty i techniki, gwarantując najwyższą jakość usług
                </li>
                <li className="txt--b li-marker ul-mt">
                  <strong>Szeroki zakres usług</strong> - oferuję szeroki zakres usług auto detailingu, dopasowując je do Twoich potrzeb i budżetu
                </li>
                <li className="txt--b li-marker ul-mt">
                  <strong>Pasja i zaangażowanie</strong> - kocham samochody i dbam o nie z prawdziwą pasją
                </li>
              </ul>

              <p className="m-mtb txt--b">
                Jeśli szukasz profesjonalnej firmy auto detailingu, która z dbałością o każdy szczegół zadba o Twój samochód, to <strong className="txt--g txt--g-1">zapraszamy do Carbon Care Detailing!</strong> Z przyjemnością odpowiem na Twoje pytania i przedstawię ofertę.
              </p>


              <AnchorLink href={'/'} className={'btn-cta'}>
                <strong>Sprawdź ofertę</strong>
              </AnchorLink>
            </div>
          </div>
        </section>
      </ParallaxBanner>

      <section className="section products">
        <div className="mw-wrapper">
          <h2 className="txt--b m-mb txt--g txt--g-2">
            <strong>
              Od jakości produktów zależy jakość efektu końcowego. <br />
              Dlatego stawiam na produkty najlepszej jakości!
            </strong>
          </h2>

          <Photo images={galleryImages} />
        </div>
      </section>
    </main>
  )
}

export default About
