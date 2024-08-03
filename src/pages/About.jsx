import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import AnchorLink from '../ui/AnchorLink';
import Photo from '../ui/Photo';

import './About.css';

import AboutImg from '../../public/about/4807_0.jpg'
import galleryImage1 from '../../public/about/products/4370_0.jpg';
import galleryImage2 from '../../public/about/products/4419_0.jpg';
import galleryImage3 from '../../public/about/products/4442_0.jpg';
import galleryImage4 from '../../public/about/products/4666_0.jpg';
import galleryImage5 from '../../public/about/products/4690_0.jpg';
import galleryImage6 from '../../public/about/products/4797_0.jpg';
import galleryImage7 from '../../public/about/products/4805_0.jpg';


function About() {
  // const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6, galleryImage7];
  const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage4];
  const galleryImages2 = [galleryImage5, galleryImage6, galleryImage7];

  return (
    <main id="about">
      <section className="section hero">
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
                <strong> Dlaczego warto wybrać Carbon Care Detailing?</strong>
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
            <strong>Od jakości produktów zależy jakość efektu końcowego. <br />Dlatego stawiam na produkty najlepszej jakości.</strong>
          </h2>

          <div className='tm'>
            <div className="products-main">
              <div className="products-wrapper">
                {galleryImages.map((img, index) => <Photo key={index} index={index} src={img} />)}
                {galleryImages2.map((img, index) => <Photo key={index} index={index} src={img} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default About
