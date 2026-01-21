import React from "react";

const ExperienceSec = () => {
  const Projects = [
    {
      year: "2024",
      title: "Hospital Appointment System",
      company: "Academic Project",
      type: "Web Application",
      description:
        "Developed a web-based hospital appointment booking system with a clean UI and structured workflow, allowing users to book appointments easily.",
    },
    {
      year: "2025",
      title: "AI Study Planner",
      company: "Personal Project",
      type: "In Progress",
      description:
        "Building an AI-powered study planner to help students organize subjects and schedules intelligently using API-based logic.",
    },
    {
      year: "2024",
      title: "Study Resource Platform",
      company: "Academic Project",
      type: "Web Platform",
      description:
        "Created a platform where students can access study notes and previous year question papers in an organized and user-friendly manner.",
    },
    {
      year: "2023",
      title: "Pulse Play Music Player",
      company: "Practice Project",
      type: "Frontend Project",
      description:
        "Built a basic music player application with play, pause, and track navigation to improve JavaScript logic and UI interaction skills.",
    },
  ];

  return (
    <section>
      <div className="py-16 md:py-32">
        <div className="container mx-auto px-4">
          
          {/* Section Header */}
          <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
            <h2>Projects</h2>
            {/* <p className="text-xl text-primary">( 04 )</p> */}
          </div>

          {/* Timeline */}
          <div className="space-y-7 md:space-y-12">
            {Projects.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-4 xl:gap-8 items-start relative"
              >
                
                {/* Year & Title */}
                <div>
                  {/* <h3 className="text-lg font-normal mb-1 text-primary">
                    {project.year}
                  </h3> */}
                  <h4 className="font-bold mb-2 text-black">
                    {project.title}
                  </h4>
                </div>

                {/* Timeline Center */}
                <div className="relative">
                  {index < Projects.length && (
                    <div
                      className={`absolute left-0 top-3 w-px ${
                        index < Projects.length - 1 ? "h-40" : "h-30"
                      } bg-softGray`}
                    ></div>
                  )}

                  <div className="no-print absolute left-0 top-0 transform -translate-x-1/2">
                    <div className="no-print w-3.5 h-3.5 rounded-full border-1 bg-white border-primary flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                    </div>
                  </div>

                  <div className="pl-4 lg:pl-7">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xl text-black font-normal">
                        {project.company}
                      </span>
                    </div>
                    <p className="text-base font-normal">
                      {project.type}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="pl-8 sm:pl-0">
                  <p className="leading-relaxed text-base">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ExperienceSec;
