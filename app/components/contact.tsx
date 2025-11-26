import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/20/solid";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="md:w-1/3 mb-8  md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Adres Biura</h3>
            <div className="space-y-4">
              <p className="flex items-center">
                <EnvelopeIcon
                  className="mr-2 size-6"
                  color="#371d6b"
                  strokeWidth={2}
                />{" "}
                biuro@berry-studio.com
              </p>
              <p className="flex items-center">
                <PhoneIcon
                  className="mr-2 size-6"
                  color="#371d6b"
                  strokeWidth={2}
                />{" "}
                Kom: 606 33 99 15
                <br />
                Biuro: 690 33 99 55
              </p>

              <p className="flex items-center">
                <MapPinIcon className="mr-2 size-6" color="#371d6b" /> ul.
                Popiełuszki 19/21 lok.313 <br />
                01-595 Warszawa
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-2"> Dane firmy:</h4>
              <p> Berry Studio Maciej Borowiecki</p>
              <p> ul. Krasińskiego 20/49</p>
              <p> 01-581 Warszawa</p>
              <p> NIP 1132538257</p>
            </div>
          </div>
          <div className="md:w-2/3 h-[400px] w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39078.297749368074!2d20.936960536175913!3d52.25439707992299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecbebae68151d%3A0x685254b0dcadf00c!2sKsi%C4%99dza%20Jerzego%20Popie%C5%82uszki%2019%2F21%2C%2001-595%20Warszawa!5e0!3m2!1sen!2spl!4v1728130400729!5m2!1sen!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
