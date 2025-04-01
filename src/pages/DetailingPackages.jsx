import { useState, useEffect } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import bg2 from '../../public/images/bg/bg-desktop.svg';

import './Detailing.css';

function DetailingPackages() {
  const [selectedPackage, setSelectedPackage] = useState('prestige');
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSelectPackage = (packageType) => {
    if (isMobile) {
      setSelectedPackage(packageType);
    }
  };

  return (
    <main
      id='detailing'
      className='detailing-packages'
    >
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Detailing Pakiety</strong>
            </h1>
          </div>
        </div>
      </section>

      <div className='mobile-options m-mt'>
        <button
          className={selectedPackage === 'prestige' ? 'active' : ''}
          onClick={() => handleSelectPackage('prestige')}
        >
          <strong>PRESTIGE 🥈</strong>
        </button>
        <button
          className={selectedPackage === 'exclusive' ? 'active' : ''}
          onClick={() => handleSelectPackage('exclusive')}
        >
          <strong>EXCLUSIVE 🥇</strong>
        </button>
        <button
          className={selectedPackage === 'show' ? 'active' : ''}
          onClick={() => handleSelectPackage('show')}
        >
          <strong>SHOW CAR 💎</strong>
        </button>
      </div>

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
                <div className='table-header table-cell table-main'></div>
                <div
                  className={`table-header table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  PRESTIGE 🥈
                </div>
                <div
                  className={`table-header table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  EXCLUSIVE 🥇
                </div>
                <div
                  className={`table-header table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  SHOW CAR 💎
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Cena netto*</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  od 1800 zł
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  od 2900 zł
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  od 4900 zł
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Mycie detailingowe</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Mycie nadkoli</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Oczyszczanie lakieru z osadów</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Korekta lakieru (1 etap)</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ❌
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Korekta lakieru (2 etapy)</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ❌
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Pełne szlifowanie lakieru</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ❌
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ❌
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main table-info'>
                  Ochrona lakieru** <span className='txt--info'>** Cena indywidualna</span>
                </div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  QD, wosk, 1, 3 lub 5 letnia powłoka Cleante/Fireball
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  1, 3 lub 5 letnia powłoka Cleante/Fireball
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  3-5 letnia powłoka Cleante/Fireball
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Detailing wnętrza</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Czyszczenie i impregnacja skór</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Detailing felg i opon</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Aplikacja niewidzialnej wycieraczki</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Ozonowanie wnętrza (gratis)</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Impregnacja plastików zewnętrznych</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  ✅
                </div>
              </div>

              <div className='table-row'>
                <div className='table-body table-cell table-main'>Czas realizacji</div>
                <div
                  className={`table-body table-cell table-center table-prestige ${
                    selectedPackage === 'prestige' ? 'table-active' : ''
                  }`}
                >
                  2-3 dni
                </div>
                <div
                  className={`table-body table-cell table-center table-exclusive ${
                    selectedPackage === 'exclusive' ? 'table-active' : ''
                  }`}
                >
                  3-4 dni
                </div>
                <div
                  className={`table-body table-cell table-center table-show ${
                    selectedPackage === 'show' ? 'table-active' : ''
                  }`}
                >
                  4-7 dni
                </div>
              </div>
            </div>

            <p className='txt--b m-mt'>
              Masz pytania? Umów się na darmową konsultację, gdzie omówimy zakres usług przy dobrej kawie ☕!
            </p>

            <p className='p p--info txt--b m-mt'>
              * Podane ceny <strong>są cenami netto</strong>, do których <strong>należy doliczyć 23% Vat</strong>.
            </p>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default DetailingPackages;
