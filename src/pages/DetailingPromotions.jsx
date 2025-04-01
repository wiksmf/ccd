import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

import bg2 from '../../public/images/bg/bg-desktop.svg';

import './Detailing.css';

function AdditionalDetailing() {
  return (
    <main
      id='detailing'
      className='detailing-promotions'
    >
      <section className='section hero hero--sm'>
        <div className='mw-wrapper'>
          <div className='hero-wrapper'>
            <h1 className='txt--g txt--g-2'>
              <strong>Promocje</strong>
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
            <p className='txt--b m-mb'>
              Akcje promocyjne w Carbon Care Detailing – nagradzamy lojalność i polecenia! 🚗✨
            </p>

            <p className='txt--b'>
              Chcemy podziękować naszym klientom za zaufanie i wsparcie! Dlatego wprowadzamy{' '}
              <strong>specjalne promocje i programy lojalnościowe</strong>, dzięki którym możesz zaoszczędzić na
              kolejnych usługach lub otrzymać dodatkowe korzyści.
            </p>

            <div className='detailing-flex'>
              <div className='detailing-left'>
                <p className='p--md m-mt'>
                  🎁 <strong className='txt--g txt--g-1'>1. Program lojalnościowy – „Carbon Club”</strong>
                </p>

                <p className='txt--b m-mt'>
                  Dla stałych klientów stworzyliśmy program lojalnościowy, w którym za każdą wykonaną usługę zbierasz
                  punkty!
                </p>

                <ul className='ul-flex m-mt'>
                  <li className='txt--b li-marker'>
                    <strong>Za każdą wydaną 1 zł otrzymujesz 1 punkt</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Za 2000 punktów – rabat 200 zł na dowolną usługę</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Za 5000 punktów – darmowa aplikacja wosku premium</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Za 10 000 punktów – voucher na korektę lakieru o wartości 1000 zł</strong>
                  </li>
                </ul>

                <p className='txt--b m-mt'>
                  <strong>💡 Jak sprawdzić swój stan punktów?</strong>
                </p>

                <p className='txt--b m-mt'>
                  Po każdej wizycie dostajesz informację o aktualnym saldzie – wystarczy zapytać podczas kolejnej
                  wizyty!
                </p>

                <span className="hr"></span>

                <p className='p--md m-mtb'>
                  🎁 <strong className='txt--g txt--g-1'>2. Polecaj i zyskuj – „Polecasz, nie płacisz”</strong>
                </p>

                <p className='txt--b m-mbt'>Masz znajomego, który potrzebuje detailingu? Poleć nas i odbierz bonus!</p>

                <ul className='ul-flex m-mt'>
                  <li className='txt--b li-marker'>
                    <strong>Polecisz 1 osobę – 10% rabatu na Twoją kolejną usługę</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Polecisz 3 osoby – darmowe detailingowe mycie premium</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Polecisz 5 osób – darmowa aplikacja wosku twardego</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Polecisz 10 osób – voucher o wartości 1000 zł do wykorzystania na dowolną usługę!</strong>
                  </li>
                </ul>

                <p className='txt--b m-mt'>
                  <strong>💡 Jak to działa?</strong>
                </p>

                <p className='txt--b m-mt'>
                  Twój znajomy musi podać Twoje imię i nazwisko przy rezerwacji, a my dodamy Ci rabat lub nagrodę.
                </p>

                <span className="hr"></span>

                <p className='p--md m-mtb'>
                  🎁 <strong className='txt--g txt--g-1'>3. Urodzinowy prezent dla Twojego auta</strong> 🎂
                </p>

                <p className='txt--b'>
                  Masz urodziny? Świętujemy razem z Tobą! W dniu Twoich urodzin lub w tygodniu ich trwania otrzymujesz:
                </p>

                <ul className='ul-flex m-mt'>
                  <li className='txt--b li-marker'>
                    <strong>50% rabatu na detailingowe mycie auta🎈 30% rabatu na woskowanie</strong>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Darmowy zapach samochodowy klasy premium</strong>
                  </li>
                </ul>

                <p className='txt--b m-mt'>
                  <strong>💡 Jak skorzystać?</strong>
                </p>

                <p className='txt--b m-mt'>
                  Wystarczy, że pokażesz nam dowód osobisty lub wpiszesz się do naszej bazy klientów, a my zajmiemy się
                  resztą!
                </p>

                <span className="hr"></span>

                <p className='p--md m-mtb'>
                  🎁{' '}
                  <strong className='txt--g txt--g-1'>
                    4. „Detailingowy abonament” – zadbaj o auto przez cały rok
                  </strong>
                </p>

                <p className='txt--b m-mtb'>
                  Twoje auto zasługuje na regularną pielęgnację! Wprowadziliśmy abonament detailingowy, który pozwala Ci
                  zaoszczędzić i mieć zawsze zadbane auto.
                </p>

                <ul className='ul-flex m-mt'>
                  <li className='txt--b li-marker'>
                    <strong>Pakiet Basic (99 zł/mies.)</strong>

                    <ul className='ul-flex m-mb'>
                      <li className='txt--b'>✔️ 1 x detailingowe mycie w miesiącu</li>
                      <li className='txt--b'>✔️ 10% rabatu na wszystkie usługi</li>
                    </ul>
                  </li>
                  <li className='txt--b li-marker'>
                    <strong>Pakiet Premium (199 zł/mies.)</strong>

                    <ul className='ul-flex m-mb'>
                      <li className='txt--b'>✔️ 2 x detailingowe mycie w miesiącu</li>
                      <li className='txt--b'>✔️ 15% rabatu na wszystkie usługi</li>
                      <li className='txt--b'>✔️ Co pół roku aplikacja wosku premium</li>
                    </ul>
                  </li>

                  <li className='txt--b li-marker'>
                    <strong>Pakiet VIP (399 zł/mies.)</strong>

                    <ul className='ul-flex m-mb'>
                      <li className='txt--b'>✔️ 4 x detailingowe mycie w miesiącu</li>
                      <li className='txt--b'>✔️ 20% rabatu na wszystkie usługi</li>
                      <li className='txt--b'>✔️ 2x w roku aplikacja powłoki hydrofobowej</li>
                      <li className='txt--b'>✔️ Raz w roku jednoetapowa korekta lakieru</li>
                    </ul>
                  </li>
                </ul>

                <p className='txt--b  m-mt'>
                  <strong>💡 Jak dołączyć do abonamentu?</strong>
                </p>

                <p className='txt--b  m-mt'>
                  Wystarczy podpisać umowę na 6 lub 12 miesięcy – więcej szczegółów w studiu!
                </p>

                <span className="hr"></span>

                <p className='p--md m-mtb'>
                  🎁{' '}
                  <strong className='txt--g txt--g-1'>
                    5. Sezonowe promocje – śledź nas na Facebooku i Instagramie!
                  </strong>
                </p>

                <p className='txt--b'>Co sezon organizujemy specjalne promocje, więc warto nas obserwować!</p>

                <ul className='ul-flex m-mt'>
                  <li className='txt--b'>
                    <strong>✅ Wiosenne odświeżenie lakieru</strong> – rabaty na korektę lakieru i woskowanie
                  </li>
                  <li className='txt--b'>
                    <strong>✅ Letnia ochrona</strong> – promocja na powłoki ceramiczne i folię PPF
                  </li>

                  <li className='txt--b'>
                    <strong>✅ Jesienne zabezpieczenie</strong> – specjalne pakiety na detailingowe mycie i woski na
                    zimę
                  </li>

                  <li className='txt--b'>
                    <strong>✅ Zimowa ochrona</strong> – zniżki na zabezpieczenie podwozia i wnętrza przed solą drogową
                  </li>
                  <li className='txt--b'>
                    <strong>📲 Obserwuj nas na Facebooku i Instagramie, żeby nie przegapić promocji!</strong>
                  </li>
                </ul>

                <p className='txt--b m-mt'>
                  <strong>💡 Jak dołączyć do abonamentu?</strong>
                </p>

                <p className='txt--b m-mt'>
                  Wystarczy podpisać umowę na 6 lub 12 miesięcy – więcej szczegółów w studiu!
                </p>

                <span className="hr"></span>

                <p className='txt--b'>
                  <strong>🚗 Chcesz skorzystać z promocji?</strong>
                </p>

                <p className='txt--b'>
                  📍 Odwiedź nas: <strong>Carbon Care Detailing – Olkusz, ul. Jasna 80</strong>
                </p>

                <p className='txt--b'>
                  📞 Zadzwoń:{' '}
                  <strong>
                    <a href='tel:+48666699955'>+48 666 699 955</a>
                  </strong>
                </p>

                <p className='txt--b'>
                  ✉️ Napisz:{' '}
                  <strong>
                    <a href='mailto:kontakt@carboncare.pl'>kontakt@carboncare.pl</a>
                  </strong>
                </p>

                <p className='txt--b  m-mt'>Zadbaj o swoje auto i ciesz się najlepszym detailingiem w mieście! 🚗✨</p>
              </div>
            </div>
          </div>
        </section>
      </ParallaxBanner>
    </main>
  );
}

export default AdditionalDetailing;
