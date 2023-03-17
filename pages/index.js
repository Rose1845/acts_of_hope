// 'use client';
import { useState } from "react";
import Link from "next/link";
import teamMembers from "@/data";

export default function Home() {
  const [readMore, setReadMore] = useState(false);
  const extraContent = (
    <div>
      <p className="text-justify">
        One of the key goals of Acts of Hope Academy is to empower its students
        and help them realize their full potential. The school achieves this by
        providing individualized instruction that is tailored to each student's
        unique learning style and needs. This approach helps to build
        self-confidence and promotes a sense of independence among students.
      </p>
    </div>
  );
  const ToggleRead = () => {
    setReadMore(!readMore);
  };
  return (
    <>
      <main className="max-w-7xl mx-auto w-full h-full">
        <div className="flex justify-center items-center gap-3 image h-screen ">
          <div className="flex flex-col items-center justify-center flex-start ">
            <h1 className="text-6xl font-bold text-sky-500 flex gap-1 hover:text-sky-500 mt-3">
              <span className="border-2"></span>
              Acts of Hope Academy
            </h1>
            <p className="text-2xl text-white text-center pt-3">
              Is a school that caters to students with disabilities,<br/>
              specifically those with physical challenges. The school is<br/>
              committed to providing a safe and nurturing learning environment<br/>
              that fosters academic, social, and emotional growth for its<br/>
              students.
              {/* {readMore && extraContent} */}
            </p>
            {/* button */}

            <Link href="/dashboard/account">
              <button
                // onClick={ToggleRead}
                className="bg-sky-500 text-white px-4 py-3 rounded-lg mt-4 text-3xl font-bold hover:transition-all hover:bg-gray-700 hover:scale-[1]"
              >
                {/* {readMore ? " Learn Less" : " Learn More"} */}
                Enrol your Child Today
              </button>
            </Link>
          </div>
          {/* image of students */}
          
        </div>
        {/* our team and their pic */}
        <div>
          <div className="mb-16">
            <dh-component>
              <div class="container flex justify-center mx-auto pt-16">
                <div>
                  <p class="text-gray-500 text-lg text-center font-normal pb-3">
                    OUR TEAM
                  </p>
                  <h1 class="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                    The Incredible Teachers Behind the Scenes of the Acts of Hope Academy
                  </h1>
                </div>
              </div>
              <div class="w-full bg-gray-100 px-10 pt-10">
                <div class="container mx-auto">
                  <div
                    role="list"
                    aria-label="Behind the scenes People "
                    class="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around w-full h-full"
                  >
                    {teamMembers.map((member) => {
                      return (
                        <div
                          role="listitem"
                          class="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                          key={member.id}
                        >
                          <div class="rounded overflow-hidden shadow-md bg-white">
                            <div class="absolute -mt-20 w-full flex justify-center">
                              <div class="h-32 w-32">
                                <img
                                  src={member.image}
                                  alt="Display Picture of Andres Berlin"
                                  role="img"
                                  class="rounded-full object-cover h-full w-full shadow-md"
                                />
                              </div>
                            </div>
                            <div class="px-6 mt-16">
                              <h1 class="font-bold text-3xl text-center mb-1">
                                {member.name}
                              </h1>
                              <p class="text-gray-800 text-sm text-center">
                                {member.role}
                              </p>
                              <p class="text-center text-gray-600 text-base pt-3 font-normal">
                                The CEO's role in raising a company's corporate
                                IQ is to establish an atmosphere that promotes
                                knowledge sharing and collaboration.
                              </p>
                              {/* <div class="w-full flex justify-center pt-5 pb-5">
                                  <a href="javascript:void(0)" class="mx-5">
                                    <div aria-label="Github" role="img">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#718096"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-github"
                                      >
                                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                      </svg>
                                    </div>
                                  </a>
                                  <a href="javascript:void(0)" class="mx-5">
                                    <div aria-label="Twitter" role="img">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#718096"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-twitter"
                                      >
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                      </svg>
                                    </div>
                                  </a>
                                  <a href="javascript:void(0)" class="mx-5">
                                    <div aria-label="Instagram" role="img">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="#718096"
                                        stroke-width="1.5"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        class="feather feather-instagram"
                                      >
                                        <rect
                                          x="2"
                                          y="2"
                                          width="20"
                                          height="20"
                                          rx="5"
                                          ry="5"
                                        ></rect>
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                        <line
                                          x1="17.5"
                                          y1="6.5"
                                          x2="17.51"
                                          y2="6.5"
                                        ></line>
                                      </svg>
                                    </div>
                                  </a>
                                </div> */}
                            </div>

                            {/* <div class="absolute -mt-20 w-full flex justify-center">
                          <div class="h-32 w-32">
                            <img
                              src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif"
                              alt="Display Picture of Andres Berlin"
                              role="img"
                              class="rounded-full object-cover h-full w-full shadow-md"
                            />
                          </div>
                        </div>
                        <div class="px-6 mt-16">
                          <h1 class="font-bold text-3xl text-center mb-1">
                            Andres Berlin
                          </h1>
                          <p class="text-gray-800 text-sm text-center">
                            Chief Executive Officer
                          </p>
                          <p class="text-center text-gray-600 text-base pt-3 font-normal">
                            The CEO's role in raising a company's corporate IQ
                            is to establish an atmosphere that promotes
                            knowledge sharing and collaboration.
                          </p>
                          <div class="w-full flex justify-center pt-5 pb-5">
                            <a href="javascript:void(0)" class="mx-5">
                              <div aria-label="Github" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="feather feather-github"
                                >
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                              </div>
                            </a>
                            <a href="javascript:void(0)" class="mx-5">
                              <div aria-label="Twitter" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                              </div>
                            </a>
                            <a href="javascript:void(0)" class="mx-5">
                              <div aria-label="Instagram" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  class="feather feather-instagram"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                  ></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                  ></line>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div> */}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </dh-component>
          </div>
        </div>
      </main>
    </>
  );
}
