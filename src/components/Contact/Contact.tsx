import Call from "../../../public/assets/svg/call.svg";
import WhatsApp from "../../../public/assets/svg/whatsapp.svg";
import Mail from "../../../public/assets/svg/mailto.svg";
import Map from "../../../public/assets/svg/map.svg";
import Youtube from "../../../public/assets/svg/youtube.svg";
import Image from "next/image";
import Link from "next/link";

const ContactData = () => {
  return (
    <section
      id="contact"
      className="2xl:max-w-screen-lg mx-auto xl:max-w-screen-lg px-2.5 py-10"
    >
      <h2 className="text-xl text-center mb-6 font-bold uppercase">
        <span className="bg-theme px-3 text-white">Connect</span> with Us
      </h2>
      <div className="">
        <p className="font-bold text-lg">
          We are always available for your queries, comments, feedback, and
          suggestions.
        </p>
        <div className="flex flex-col md:flex-row">
          <div className="basis-3/4 shrink-0">
            <h3 className="uppercase mt-5 mb-4 text-lg font-semibold">
              Levelup Sportslytics
              <span className="table text-sm">Singapore Office</span>
            </h3>
            <ul>
              <li className="flex gap-2 mb-2 items-start">
                <Image
                  src={Map}
                  width={25}
                  height={25}
                  alt="call"
                  loading="lazy"
                />
                LevelUp Sportslytics Pte. Ltd., #04-11 Centre Mall,
                <br /> Singapore, Singapore, 059567
              </li>
              <li className="flex gap-2 mb-2">
                <Image
                  src={Call}
                  width={25}
                  height={25}
                  alt="call"
                  loading="lazy"
                />
                <Link className="text-theme" href="tel:+65 87471065">
                  +65 87471065
                </Link>
              </li>
              <li className="flex gap-2 mb-3">
                <Image
                  src={Mail}
                  width={25}
                  height={25}
                  alt="Mail"
                  loading="lazy"
                />
                <Link
                  target="_blank"
                  className="text-theme"
                  href="mailto:sitanshu@levelupsportslytics.com"
                >
                  sitanshu@levelupsportslytics.com
                </Link>
              </li>
              <li className="flex gap-2 mb-2">
                <Link
                  target="_blank"
                  href={"https://wa.me/6587471065"}
                  className="flex gap-2 px-3 py-2 ml-[-8px] bg-[#455a64] text-white rounded-3xl"
                >
                  <Image
                    src={WhatsApp}
                    width={25}
                    height={25}
                    alt="WhatsApp"
                    loading="lazy"
                  />
                  <span>Message us on Whats App</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mt-5 mb-5 text-lg font-semibold">Find Us On</h3>
            <ul>
              <li>
                <Link
                  className="flex items-center gap-2"
                  target="_blank"
                  href="https://www.youtube.com/@anshuflu"
                >
                  <Image
                    src={Youtube}
                    width={40}
                    alt="Youtube"
                    loading="lazy"
                  />
                  <span>Youtube</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactData;
