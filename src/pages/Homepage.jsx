import { Link } from 'react-router-dom';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import ReactCompareImage from 'react-compare-image';

import AnchorLink from '../ui/AnchorLink';
import Photo from '../ui/Photo';

import galleryImage1 from '../../public/home/auto-detailing-zewnetrzny.webp';
import galleryImage2 from '../../public/home/auto-detailing-wewnetrzny.webp';
import galleryImage3 from '../../public/home/auto-detailing-silnik.webp';
import img1 from '../../public/home/why-before.jpg';
import img2 from '../../public/home/why-after.jpg';

import './Homepage.css';

function Homepage() {
  const galleryImages = [galleryImage1, galleryImage2, galleryImage3, galleryImage2];

  return (
    <main id="home">
      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-home/bg-1.jpg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section hero">
          <div className="mw-wrapper">
            <div className="hero-wrapper">
              <h1 className="h-h1 txt--g txt--g-1">
                <strong>Detailing z pasją</strong>
              </h1>

              <p className="p p--lg txt--w m-mtb">
                Kompleksowa pielęgnacja samochodów
              </p>

              <AnchorLink href={'#offer'} className={'btn-cta'}>
                <strong>Sprawdź ofertę</strong>
              </AnchorLink>
            </div>
          </div>
        </section>
      </ParallaxBanner>

      <section className="section" id='offer'>
        <div className="mw-wrapper">
          <h2 className="h-h2 d-grid txt--b m-mb">
            <span className="d-grid--line"></span>
            <strong className="d-grid--txt">Oferta</strong>
            <span className="d-grid--line"></span>
          </h2>

          <div className="offer-wrapper">
            <div className="offer offer--1">
              <div className="offer-cp">
                <h3 className="h-h3 txt--w m-mb">
                  <strong>Detailing zewnętrzny</strong>
                </h3>

                <Link
                  to='/detailing-zewnetrzny'
                  className="offer-link btn-cta"
                >
                  <strong>Dowiedz się więcej</strong>
                </Link>
              </div>
            </div>
            <div className="offer offer--2">
              <div className="offer-cp">
                <h3 className="h-h3 txt--w m-mb">
                  <strong>Detailing wewnętrzny</strong>
                </h3>

                <Link
                  to='/detailing-wewnetrzny'
                  className="offer-link btn-cta"
                >
                  <strong>Dowiedz się więcej</strong>
                </Link>
              </div>
            </div>
            <div className="offer offer--3">
              <div className="offer-cp">
                <h3 className="h-h3 txt--w m-mb">
                  <strong>Usługi dodatkowe</strong>
                </h3>

                <Link
                  to='/uslugi-dodatkowe'
                  className="offer-link btn-cta"
                >
                  <strong>Dowiedz się więcej</strong>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section about">
        <div className="mw-wrapper">
          <h2 className="h-h2 d-grid txt--w">
            <span className="d-grid--line"></span>
            <strong className="d-grid--txt">Dlaczego ja?</strong>
            <span className="d-grid--line"></span>
          </h2>

          <div className="about-wrapper m-mt">
            <div className="about-txt">
              <p className="p--md m-mb txt--g txt--g-2"><strong>Gwarancja najwyższej jakości!</strong>
              </p>

              <p className="p p-lr txt--w">
                Detailingiem aut zajmuję się nie tylko z racji zawodu, ale przede wszystkim z pasji do detali i dążenia do perfekcji. Moim celem jest wydobycie z każdego samochodu jego pełnego potencjału i przywrócenie mu blasku niczym prosto z salonu.
              </p>
            </div>

            <div className="about-img m-mtb">
              <ReactCompareImage leftImage={img1} rightImage={img2} />
            </div>

            <Link
              to='/o-mnie'
              className="btn-cta btn-cta--g"
            >
              <strong>Poznajmy się</strong>
            </Link>
          </div>
        </div>
      </section>

      <ParallaxBanner>
        <ParallaxBannerLayer image="public/backgrounds/bg-desktop.svg" style={{ backgroundAttachment: 'fixed' }} speed={-50} />
        <section className="section gallery">
          <div className="mw-wrapper">
            <h2 className="h-h2 d-grid txt--b">
              <span className="d-grid--line"></span>
              <strong className="d-grid--txt">Galeria</strong>
              <span className="d-grid--line"></span>
            </h2>

            <div className="gallery-wrapper m-mtb">
              {galleryImages.map((img, index) => <Photo key={index} index={index} src={img} />)}
            </div>

            <Link
              to='/galeria'
              className="btn-cta"
            >
              <strong>Obejrzyj realizacje</strong>
            </Link>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  )
}

export default Homepage
