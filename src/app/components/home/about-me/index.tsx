import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section>
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              {/* <p className="text-xl text-primary">( 01 )</p> */}
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[440px] h-[440px] hidden lg:flex">
                <video
                  src="/video/ansh-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I’m an MCA student at Amrapali University, graduating in 2026,
                  with a passion for crafting clean, modern, and user-friendly
                  web Experiences. I enjoy turning ideas into responsive web
                  applications using technologies like React, Node.js, and
                  MongoDB. As a fresher, I believe in learning by doing. I
                  actively build real-world Experiences, experiment with new
                  tools, and continuously refine my skills to grow as a
                  full-stack web developer. I’m detail-oriented, curious, and
                  always excited to explore what’s next in web development.
                </p>

                {/* <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "06", label: "Years of Experience" },
                    { count: "165+", label: "Happy Clients" },
                    { count: "1800+", label: "Experience Completed" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 py-10 xl:py-16 gap-6 border-b border-mistGray">
                  {[
                    {
                      title: "Frontend Development",
                      desc: "HTML-5, React, Tailwind CSS, ",
                    },
                    {
                      title: "Backend Development",
                      desc: "Node.js, Express, MongoDB",
                    },
                    {
                      title: "Problem Solving",
                      desc: "Logic Building & API Integration",
                    },
                    {
                      title: "Continuous Learning",
                      desc: "Building Experiences & Improving Skills",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-xl bg-white/60 backdrop-blur-md border border-mistGray
                 hover:shadow-lg hover:-translate-y-1 transition"
                    >
                      <h3 className="text-lg font-semibold mb-2 text-black">
                        {item.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    {/* <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    /> */}
                    {/* <p className="text-base xl:text-xl text-black">Language</p> */}
                  </div>
                  {/* <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Hindi", "Malayalam"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
