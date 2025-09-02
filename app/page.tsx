import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { SkillsRadar } from "@/components/skills-radar"
import { ServicesOverview } from "@/components/services-overview"
import { ContactForm } from "@/components/contact-form"
import { SocialMediaScript } from "@/components/social-media-script"
// Removed the FeaturedProjects import

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h1 className="text-4xl md:text-5xl font-heading mb-4 text-neutral-800 tracking-tight">
                Hi, I'm <span className="text-primary-500">Pratik Shrestha</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-6 text-neutral-600 tracking-tight">
                Data Scientist & Quantitative Analyst
              </h2>
              <p className="text-lg text-neutral-500 mb-8 leading-relaxed font-light">
                Transforming complex data into actionable insights. Specializing in machine learning, data analytics,
                and financial modeling to drive data-informed decisions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button
                    size="lg"
                    className="bg-primary-500 hover:bg-primary-600 text-white shadow-none rounded-md font-light tracking-wide"
                  >
                    View My Projects <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/book">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-neutral-200 text-neutral-700 hover:bg-neutral-50 shadow-none rounded-md font-light tracking-wide"
                  >
                    Book a Consultation
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-neutral-100 shadow-sm">
                <Image src="/pratik-profile.jpg" alt="Pratik Shrestha" fill className="object-cover" priority />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FeaturedProjects section removed */}

      {/* About Section */}
      <section id="about" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-heading mb-6 text-neutral-800 tracking-tight">About Me</h2>
              <p className="text-neutral-600 mb-6 leading-relaxed font-light">
                I'm a passionate Data Scientist and Quantitative Analyst with expertise in machine learning, data
                analytics, and financial modeling. Currently pursuing a Bachelor's in Information Technology with
                Finance Specialization and a Data Analytics Minor at Furman University.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm font-light">shresthapratikk45@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-secondary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm font-light">+1 (864) 520 6499</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-primary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm font-light">Greenville, South Carolina</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-secondary-50 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-secondary-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 14l9-5-9-5-9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                      />
                    </svg>
                  </div>
                  <span className="text-neutral-600 text-sm font-light">Graduating May 2026</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-heading mb-4 text-primary-500 tracking-tight">Key Achievements</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
                  <div className="bg-white p-4 rounded-md border border-neutral-100 shadow-sm">
                    <p className="text-2xl font-heading text-primary-500">29.41%</p>
                    <p className="text-sm text-neutral-500 font-light mt-1">Increase in Trade Performance</p>
                  </div>
                  <div className="bg-white p-4 rounded-md border border-neutral-100 shadow-sm">
                    <p className="text-2xl font-heading text-primary-500">50%</p>
                    <p className="text-sm text-neutral-500 font-light mt-1">Website Traffic Growth</p>
                  </div>
                  <div className="bg-white p-4 rounded-md border border-neutral-100 shadow-sm">
                    <p className="text-2xl font-heading text-primary-500">20%</p>
                    <p className="text-sm text-neutral-500 font-light mt-1">Revenue Increase</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-md border border-neutral-100 shadow-sm">
                <h3 className="text-xl font-heading mb-6 text-center text-neutral-800 tracking-tight">
                  Technical Expertise
                </h3>
                <SkillsRadar />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section id="services-overview" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading mb-12 text-center text-neutral-800 tracking-tight">Services I Offer</h2>
          <ServicesOverview />
          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white shadow-none rounded-md font-light tracking-wide">
                View All Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Social Media Embeds Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading mb-8 text-center text-neutral-800 tracking-tight">Connect With Me</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            {/* LinkedIn Badge */}
            <div className="md:w-1/2 lg:w-5/12 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-neutral-700">Connect on LinkedIn</h3>
              <div className="flex justify-center items-center h-[450px] py-8">
                <div
                  className="badge-base LI-profile-badge"
                  data-locale="en_US"
                  data-size="large"
                  data-theme="light"
                  data-type="HORIZONTAL"
                  data-vanity="pratikkshrestha"
                  data-version="v1"
                >
                  <a
                    className="badge-base__link LI-simple-link"
                    href="https://www.linkedin.com/in/pratikkshrestha?trk=profile-badge"
                  >
                    Pratik Shrestha
                  </a>
                </div>
              </div>
            </div>

            {/* Instagram Embed */}
            <div className="md:w-1/2 lg:w-5/12 bg-white p-4 rounded-xl border border-neutral-100 shadow-sm">
              <h3 className="text-lg font-medium mb-3 text-neutral-700">Follow on Instagram</h3>
              <div className="h-[450px] overflow-auto flex justify-center py-8">
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink="https://www.instagram.com/pratikk._45/"
                  data-instgrm-version="14"
                  style={{
                    background: "#FFF",
                    border: "none",
                    borderRadius: "3px",
                    boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
                    margin: "1px",
                    maxWidth: "540px",
                    minWidth: "326px",
                    padding: "0",
                    width: "99.375%",
                  }}
                >
                  <div style={{ padding: "16px" }}>
                    <a
                      href="https://www.instagram.com/pratikk._45/"
                      style={{
                        background: "#FFFFFF",
                        lineHeight: "0",
                        padding: "0 0",
                        textAlign: "center",
                        textDecoration: "none",
                        width: "100%",
                      }}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "50%",
                            flexGrow: 0,
                            height: "40px",
                            marginRight: "14px",
                            width: "40px",
                          }}
                        ></div>
                        <div
                          style={{ display: "flex", flexDirection: "column", flexGrow: 1, justifyContent: "center" }}
                        >
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              marginBottom: "6px",
                              width: "100px",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "4px",
                              flexGrow: 0,
                              height: "14px",
                              width: "60px",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div style={{ padding: "19% 0" }}></div>
                      <div style={{ display: "block", height: "50px", margin: "0 auto 12px", width: "50px" }}>
                        <svg
                          width="50px"
                          height="50px"
                          viewBox="0 0 60 60"
                          version="1.1"
                          xmlns="https://www.w3.org/2000/svg"
                          xmlnsXlink="https://www.w3.org/1999/xlink"
                        >
                          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g transform="translate(-511.000000, -20.000000)" fill="#000000">
                              <g>
                                <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div style={{ paddingTop: "8px" }}>
                        <div
                          style={{
                            color: "#3897f0",
                            fontFamily: "Arial,sans-serif",
                            fontSize: "14px",
                            fontStyle: "normal",
                            fontWeight: 550,
                            lineHeight: "18px",
                          }}
                        >
                          View this profile on Instagram
                        </div>
                      </div>
                      <div style={{ padding: "12.5% 0" }}></div>
                      <div
                        style={{ display: "flex", flexDirection: "row", marginBottom: "14px", alignItems: "center" }}
                      >
                        <div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              height: "12.5px",
                              width: "12.5px",
                              transform: "translateX(0px) translateY(7px)",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              height: "12.5px",
                              transform: "rotate(-45deg) translateX(3px) translateY(1px)",
                              width: "12.5px",
                              flexGrow: 0,
                              marginRight: "14px",
                              marginLeft: "2px",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              height: "12.5px",
                              width: "12.5px",
                              transform: "translateX(9px) translateY(-18px)",
                            }}
                          ></div>
                        </div>
                        <div style={{ marginLeft: "8px" }}>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              borderRadius: "50%",
                              flexGrow: 0,
                              height: "20px",
                              width: "20px",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "2px solid transparent",
                              borderLeft: "6px solid #f4f4f4",
                              borderBottom: "2px solid transparent",
                              transform: "translateX(16px) translateY(-4px) rotate(30deg)",
                            }}
                          ></div>
                        </div>
                        <div style={{ marginLeft: "auto" }}>
                          <div
                            style={{
                              width: 0,
                              borderTop: "8px solid #F4F4F4",
                              borderRight: "8px solid transparent",
                              transform: "translateY(16px)",
                            }}
                          ></div>
                          <div
                            style={{
                              backgroundColor: "#F4F4F4",
                              flexGrow: 0,
                              height: "12px",
                              width: "16px",
                              transform: "translateY(-4px)",
                            }}
                          ></div>
                          <div
                            style={{
                              width: 0,
                              height: 0,
                              borderTop: "8px solid #F4F4F4",
                              borderLeft: "8px solid transparent",
                              transform: "translateY(-4px) translateX(8px)",
                            }}
                          ></div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flexGrow: 1,
                          justifyContent: "center",
                          marginBottom: "24px",
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: 0,
                            height: "14px",
                            marginBottom: "6px",
                            width: "224px",
                          }}
                        ></div>
                        <div
                          style={{
                            backgroundColor: "#F4F4F4",
                            borderRadius: "4px",
                            flexGrow: 0,
                            height: "14px",
                            width: "144px",
                          }}
                        ></div>
                      </div>
                    </a>
                    <p
                      style={{
                        color: "#c9c8cd",
                        fontFamily: "Arial,sans-serif",
                        fontSize: "14px",
                        lineHeight: "17px",
                        marginBottom: 0,
                        marginTop: "8px",
                        overflow: "hidden",
                        padding: "8px 0 7px",
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <a
                        href="https://www.instagram.com/pratikk._45/"
                        style={{
                          color: "#c9c8cd",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          lineHeight: "17px",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Pratik Shrestha
                      </a>{" "}
                      (@
                      <a
                        href="https://www.instagram.com/pratikk._45/"
                        style={{
                          color: "#c9c8cd",
                          fontFamily: "Arial,sans-serif",
                          fontSize: "14px",
                          fontStyle: "normal",
                          fontWeight: "normal",
                          lineHeight: "17px",
                        }}
                        target="_blank"
                        rel="noreferrer"
                      >
                        pratikk._45
                      </a>
                      ) • Instagram photos and videos
                    </p>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>

          {/* Social Media Script Component */}
          <SocialMediaScript />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading mb-12 text-center text-neutral-800 tracking-tight">Get In Touch</h2>
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <ContactForm />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center">
              <div className="bg-white p-8 rounded-md border border-neutral-100 shadow-sm">
                <h3 className="text-xl font-heading mb-6 text-primary-500 tracking-tight">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Email</p>
                      <p className="font-light text-neutral-700 text-sm">shresthapratikk45@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-secondary-50 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-secondary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Phone</p>
                      <p className="font-light text-neutral-700 text-sm">+1 (864) 520 6499</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-primary-50 p-3 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-primary-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-neutral-500 uppercase tracking-wider font-light">Location</p>
                      <p className="font-light text-neutral-700 text-sm">Greenville, South Carolina</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <h4 className="font-light mb-4 text-neutral-600 text-sm uppercase tracking-wider">Connect with me</h4>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com/in/pratikkshrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-50 p-3 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="https://github.com/pratikshrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-50 p-3 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-neutral-700"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://instagram.com/pratikk._45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-50 p-3 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                      <svg className="h-5 w-5 text-pink-500" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path
                          fillRule="evenodd"
                          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href="https://twitter.com/pratikshrestha"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-neutral-50 p-3 rounded-full hover:bg-neutral-100 transition-colors"
                    >
                      <svg
                        className="h-5 w-5 text-primary-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
