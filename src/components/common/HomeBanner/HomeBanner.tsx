import Image from "next/image";
import TransparentBatsmanImg from "../../../../public/assets/images/transparent-batsmen.png";
const HomePageBanner = () => {
  return (
    <>
      <section className="border-b-2 ">
        <div
          className={`2xl:text-[85px] lg:text-[55px] md:text-[45px] sm:text-[35px] text-[30px] sm:min-h-vh-70px min-h-[400px] 2xl:max-w-screen-2xl xl:max-w-screen-xl font-medium mx-auto px-2.5 py-4 flex flex-col justify-center `}
        >
          {/* ${orbitron.className} */}
          <div className="overflow-hidden flex">
            <span className="font-medium">✳︎</span>
            <span className="block opacity-0 animate-[transitText_1s_ease-in-out_100ms_forwards]">
              LevelUp Your Cricket Game
            </span>
          </div>
          <div className="flex items-start flex-col-reverse md:flex-row">
            <div className="text-base md:text-xl lg:max-w-[30%] md:max-w-[50%] items-center font-figtree mt-8 whitespace-nowrap md:border-r-4 md:border-black pr-4 pb-6 pl-5 md:pl-0">
              <div className="overflow-hidden">
                <span className=" block opacity-0 animate-[transitText_1s_ease-in-out_100ms_forwards]">
                  LevelUp is AI powered Cricket Analytics
                </span>
              </div>
              <div className="overflow-hidden ">
                <span className="block opacity-0 animate-[transitText_1s_ease-in-out_100ms_forwards]">
                  to revolutionize sports.
                </span>
              </div>
            </div>
            <div className="whitespace-nowrap pl-5 basis-full">
              <span className="block overflow-hidden">
                <span className="block opacity-0 animate-[transitText_1s_ease-in-out_500ms_forwards]">
                  with{" "}
                  <span className="bg-black rounded-md text-white px-2">
                    AI-Powered
                  </span>
                </span>
              </span>
              <span className="mt-2 flex items-start w-full">
                <span className="table overflow-hidden">
                  <span className="flex opacity-0 animate-[transitText_1s_ease-in-out_750ms_forwards] ">
                    Insights
                  </span>
                </span>
                <Image
                  src={TransparentBatsmanImg}
                  loading="lazy"
                  alt="Cricketer"
                  className="object-contain mt-[-120px] ml-auto 2xl:w-[450px] 2xl:h-[450px] md:w-[400px] md:h-[400px] hidden lg:block"
                />
              </span>
            </div>
          </div>
          <div className="mx-auto lg:hidden flex order-[-1]">
            <Image
              src={TransparentBatsmanImg}
              loading="eager"
              alt="Cricketer"
              className="sm:w-[400px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};
export default HomePageBanner;
