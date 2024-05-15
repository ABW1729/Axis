"use client";

import React, { useState, useRef } from "react";
import "./D.css";
import { signOut, useSession } from "next-auth/react";

import { useEffect } from "react";
import Form from "../RegiForms/Form";
import Header from "../../components/Header/page";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GoToTopButton from "../../components/GoToTop/Go";

const CustomButton = ({ onClick, buttonText, form }) => (
  <button onClick={() => onClick(form)} className="button-wrapper">
    <div className="back rounded-full">
      <div className="button_base b03_skewed_slide_in rounded-full">
        <div>{buttonText}</div>
        <div></div>
        <div>{buttonText}</div>
      </div>
    </div>
  </button>
);

const GoogleDocButton = ({ googleDocLink }) => (
  <a href={googleDocLink} target="_blank" rel="noopener noreferrer">
    <button className="button-wrapper mt-1.5 pr-14">
      <div className="back">
        <div className="button_base b03_skewed_slide_in rounded-full">
          <div>Event Brochure</div>
          <div></div>
          <div>Event Brochure</div>
        </div>
      </div>
    </button>
  </a>
);

const Events = ({ Events, dbUser }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const sliderRef = useRef(null);
  const isDataComplete = (obj) => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key] && obj[key] !== 0) {
        return false;
      }
    }
    return true;
  }
  const [loading, setLoading] = useState(true);
  const [selectedHeading, setSelectedHeading] = useState(
    "Management & Analytics"
  );

  const { data: session } = useSession();
  const userId = session?.user;

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
    }
  };

  const openForm = (form) => {
   
    if (userId && isDataComplete(dbUser)) {

       setShowForm(true);
       setSelectedForm(form)
     
       document.body.style.overflow = "hidden";
     } else if(!userId) {
       toast.error("Please sign-in first!!");
     }
    else if(!isDataComplete(dbUser)){
      toast.error("Please complete your profile from Dashboard!")
    }
   };

  const closeForm = () => {
    setShowForm(false);
    setSelectedForm(null);
    document.body.style.overflow = "auto";
  };

  const renderForm = () => {
    return selectedForm;
  };

  useEffect(() => {
    if (Events && dbUser) {
      setLoading(false);
    } else {
      setLoading(false);
      toast.error("Reload required");
    }
  }, [Events, dbUser]);

  const headings = [
    "Management & Analytics",
    "Igniting Minds",
    "Software & Electronics",
    "Construction & Design",
    "School Events",
    "Gaming & Fun",
    "Robotics & Automation",
  ];

  const handleHeadingClick = (heading) => {
    setSelectedHeading(heading);
  };

  const Management = Events?.filter((event) => {
    const category = event.category === "MA";
    return category;
  });

  const IM =
    Events &&
    Events.filter((event) => {
      const category = event.category === "IM";
      return category;
    });

  const SE =
    Events &&
    Events.filter((event) => {
      const category = event.category === "SE";
      return category;
    });

  const CD =
    Events &&
    Events.filter((event) => {
      const category = event.category === "CD";
      return category;
    });

  const School =
    Events &&
    Events.filter((event) => {
      const category = event.category === "School";
      return category;
    });

  const Gaming =
    Events &&
    Events.filter((event) => {
      const category = event.category === "Gaming";
      return category;
    });

  const AR =
    Events &&
    Events.filter((event) => {
      const category = event.category === "AR";
      return category;
    });

  const eventsByHeadings = {
    "Management & Analytics": Management,
    "Igniting Minds": IM,
    "Software & Electronics": SE,
    "Construction & Design": CD,
    "School Events": School,
    "Gaming & Fun": Gaming,
    "Robotics & Automation": AR,
  };
  return (
    <div className="">
      <Header show={true} />

      {loading ? (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      ) : (
        <>
          <div
            className="bg-cover backgroundContainer bg-fixed bg-center w-full"
            style={{ backgroundImage: "url('/images/teambg.png')" }}
          >
          <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg relative">
            {showForm && (
              <div className="fixed z-50 top-0 left-0 pt-20 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-95 overflow-y-auto">
                <div className="max-w-md w-full bg-transparent p-8 rounded-md shadow-lg">
                  <button
                    onClick={closeForm}
                    className="absolute top-4 right-4 text-white hover:text-gray-800"
                  >
                    <svg
                      className="w-8 h-8 mr-6 mt-8 backdrop:blur-md"
                      fill="black"
                      stroke="white"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </button>
                  {renderForm()}
                </div>
              </div>
            )}
          </div>
          <div className="text-center text-white font-medium ">
            <h1 className="mt-6 mb-3 text-4xl">Events</h1>
            <section className="bg-transparent">
 <div className="container px-9 py-3 mx-auto relative">
    <button
      className="text-xl z-20 dark:text-gray-400 focus:outline-none absolute left-0 top-1/2 transform -translate-y-1/2"
      onClick={scrollLeft}
    >
      <svg
        className="w-14 h-16 pr-4 pt-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      className="text-lg z-20 dark:text-gray-400 focus:outline-none absolute right-0 top-1/2 transform -translate-y-1/2"
      onClick={scrollRight}
    >
      <svg
        className="w-14 h-14 pl-5 pt-2"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
    <div className="py-4 mt-4 overflow-hidden md:justify-center dark:border-gray-700">
      <div className="flex items-center justify-center relative">
        <div
          className="overflow-x-auto"
          style={{ scrollbarWidth: "thin" }}
          ref={sliderRef}
        >
          <div className="flex space-x-4">
            {headings.map((heading, index) => (
              <button
                className={`relative border px-4 py-2 rounded-full text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                 selectedHeading === heading
                    ? "border-b-2   border-blue-500"
                    : ""
                }`}
                key={index}
                onClick={() => handleHeadingClick(heading)}
              >
                {heading}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
 </div>
</section>
            <h2 className="mt-10 mb-6 text-3xl">{selectedHeading}</h2>

            <div className="wrapper-container grid mt-24 mb-10 p-2 ml-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
              {eventsByHeadings[selectedHeading] &&
                eventsByHeadings[selectedHeading].map((card, index) => (
                  <div key={index} className="">
                    <div className="yoda">
                      <img
                        className="front-image ml-2"
                        src={card.img2}
                        alt="Front Image"
                      />
                      <img
                        className="bg-image ml-2"
                        src={card.img3}
                        alt="Background Image"
                      />
                    </div>
                    <p className="container text-white text-center mr-6 font-semibold text-3xl mt-5 mb-2">
                      {card.evename}
                    </p>
                    <p className="wrapper text-white text-center text-sm mr-10 mt-5 mb-4">
                      {card.desp}
                    </p>
                    <p className="date-conatiner text-white text-center font-semibold text-lg mr-8 mt-5 mb-4">
                      {card.date}
                    </p>
                    <div className="flex flex-row justify-between">
                      <CustomButton
                        onClick={openForm}
                        buttonText="Register"
                        form={
                          <Form
                            email={session?.user.email}
                            eventname={card.evename}
                            user={dbUser}
                            participantcount={card.participantcount}
                            category={card.category}
                            id={card._id}
                          />
                        }
                      />
                      <GoogleDocButton googleDocLink={card.pdf} />
                    </div>
                  </div>
                ))}
            </div>
          </div>
          
     <footer class="bg-gray-700 w-full min-h-max bg-opacity-50">
          <div class="container flex flex-col items-center justify-between px-6 py-2 mx-auto lg:flex-row">
            <a href="/">
              <img
                className="w-28 h-18 md:w-32 md:h-22"
                src="/images/axislogo.png"
                alt=""
              />
            </a>

            <div class="flex flex-wrap items-center justify-center gap-3 mt-2 lg:gap-6 lg:mt-0">
              <a
                href="/Events"
                class="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Events
              </a>

              <a
                href="/Workshop"
                class="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Workshops
              </a>

              <a
                href="/Team"
                class="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Teams
              </a>
            </div>

            <p class="mt-6 text-sm text-white
             lg:mt-0 dark:text-gray-400">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
        </footer>
        <GoToTopButton />
          </div>
        </>
      )}
    </div>
  );
};

export default Events;
