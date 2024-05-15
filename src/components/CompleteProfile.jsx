"use client";
import { useState, useEffect } from "react";
import React from "react";
import "./D.css";
import CompleteProfiles from "./Completeform";

const CompleteProfile = (props) => {
  const CustomButton = ({ onClick, buttonText, form }) => (
    <button
      onClick={() => onClick(form)}
      className="button-wrapper"
      style={{ display: "inline-block", padding: 0, width: "auto" }}
    >
      <div className="back">
        <div className="button_base b03_skewed_slide_in rounded-md">
          <div>{buttonText}</div>
          <div></div>
          <div>{buttonText}</div>
        </div>
      </div>
    </button>
  );
  const [showForm, setShowForm] = useState(false);
  const [selectedForm, setSelectedForm] = useState(null);
  const { email, user } = props;
  const openForm = (form) => {
    setSelectedForm(form);
    setShowForm(true);
    document.body.style.overflow = "hidden";
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedForm(null);
    document.body.style.overflow = "auto";
  };

  const renderForm = () => {
    return selectedForm;
  };

  return (
    <>
      <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-lg relative">
        {showForm && (
          <div className="fixed top-0 left-0 pt-20 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-95 z-50 overflow-y-auto">
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

      <div className="flex flex-row justify-between">
        <CustomButton
          onClick={openForm}
          buttonText="COMPLETE PROFILE"
          form={<CompleteProfiles email={email} user={user} />}
        />
      </div>
    </>
  );
};

export default CompleteProfile;
