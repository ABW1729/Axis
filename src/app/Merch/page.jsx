'use client';
import React from "react";
import Rounded from "../../common/RoundedButton";
const Merch = () => {
  return (
    <div className="flex flex-col mx-2 lg:flex-row justify-between items-center py-8 px-4">
      {/* Left side: Heading, Paragraph, and Button */}
      <div className="max-w-md mb-8 lg:mb-0 lg:mr-8 lg:max-w-none">
        <h2 className="text-4xl text-center lg:text-4xl font-extrabold pb-3 lg:pb-16">
          AXIS`24 Official Merchandise
        </h2>
        <p className="text-lg mx-3 font-semibold lg:text-xl text-gray-800 mt-3 mb-4">
          Embrace the AI era with our Official AXIS`24 Merchandise release!
        </p>
        <p className="text-lg mx-3 font-semibold lg:text-xl text-gray-800 mt-3 mb-4">
          Just ₹300 to own a piece of the future.<br></br>
          Book your merch now!!
        </p>
        <div className="pt-6">
          <Rounded>
            <a
              href="https://forms.gle/8STvbDGjNgFqLwcN9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-bold text-base">Grab Now!</p>
            </a>
          </Rounded>
        </div>
      </div>

      {/* Right side: Video */}
      <div className="w-full lg:w-1/2">
        <video
          className="w-full h-auto lg:h-auto border-none"
          title="Merch Video"
          autoPlay
          muted
          loop
          allowFullScreen
        >
          <source src="/video/Comp 2.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default Merch;
