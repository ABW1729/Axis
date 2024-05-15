"use client";
import React from "react";
import { motion } from "framer-motion";
import GoToTopButton from "../../components/GoToTop/Go";
import Header from "../../components/Header/page";

export default function Acco() {
  return (
    <>
      <Header show={true} />
      <motion.div
        className="bg-cover bg-fixed bg-center w-full"
        style={{ backgroundImage: "url('/images/teambg.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center pt-4 font-bold text-4xl text-white">
          ACCOMMODATION POLICY
        </div>
        <div className="p-6 text-white font-semibold mx-2">
          <p>
            Accommodation facility at AXIS`24 will be provided for all the
            events conducted during the days of the festival, i.e. 29 March, 30
            March & 31 March, 2024 as well as for the events conducted prior to
            the festival.
          </p>
          <br />
          <br />
          <p>
            <strong>REGISTER</strong>
            <br />
            Fill the accommodation form (
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDM32kfLTV4ncpKvfP-iUdlXe-ebxtSXhn0ExkZKw56TkMeg/viewform?usp=pp_url"
              className="underline"
              target="_blank"
            >
              link
            </a>
            ) for online registration.
          </p>
          <p>
            The teams eligible for hospitality service will be notified through
            mails before their respective event. Accommodation will be made
            available only as per the details filled in the accommodation form.
            Any queries in this regard must be intimated to the concerned person
            mentioned below in advance.
          </p>
          <br />
          <br />
          <h2>
            <strong>CHARGES</strong>
          </h2>
          <ul className="list-disc pl-4">
            <li>
              Accommodation charges applicable per person is Rs. 300/- per day
              which includes a hospitality kit (which includes a set containing
              1 pillow,1 bed and 1 bed sheet).
            </li>
            <li>
              If the person wants to opt for lunch, breakfast, and dinner then
              extra charges will be applied per person and accommodated in the
              hostel mess.
            </li>
            <li>
              An additional amount of Rs. 100/- has to be paid (only for the
              participants whose stay is allotted in hostel rooms) per person
              per day as a cautionary deposit which will be returned to the
              participant in the end. The participants have to pay the fee in
              advance at the Registration desk upon their arrival.
            </li>
            <li>
              Cautionary deposit of Rs. 100/- is included in Accommodation
              charges for the participants whose stay is allotted in the common
              hall (no additional amount to be paid at the registration desk)
              and will be returned to the participant in the end.
            </li>
          </ul>
          <br />
          <br />
          <h2>
            <strong>INSTRUCTIONS</strong>
          </h2>
          <ul className="list-disc pl-4">
            <li>
              Please ensure that you have received a confirmation mail before
              setting out. You can confirm it through contact provided in the
              registration form.
            </li>
            <li>
              Every member should complete all the formalities individually (not
              one for the team). The Team members must report at the
              Accommodation Desk with the hard copy of the confirmation mail and
              College IDs of every individual of their team and collect their
              Registration and Accommodation.
            </li>
            <li>
              The participants are advised to stay strictly for the same number
              of days for which they have paid. Any Team/participant not abiding
              by this rule would be liable to security action and a fine of Rs.
              500/- for an extra day would be charged (per person in case of a
              team).
            </li>
            <li>
              At the check-out desk, the participants are required to produce
              the registration receipt and submit the hospitality kit provided
              to them at the time of registration and henceforth claim their
              caution deposit. We shall provide you with mattresses and a pillow
              during your stay. However, you are encouraged to carry your own
              blankets.
            </li>
            <li>
              Participants for more than one event should register for
              accommodation only once. Registration should be done along with
              the team they want to stay with.
            </li>
          </ul>
          <br />
          <p>
            <strong>
              NOTE: ALCOHOL, DRUGS, SHARP OBJECTS, AND EXPLOSIVES OF ANY KIND
              ARE STRICTLY PROHIBITED INSIDE THE CAMPUS. ITEMS DEEMED UNSAFE
              WILL BE STRICTLY PROHIBITED.
            </strong>
          </p>
          <br />
          <p>
            <strong>Contact:</strong>
            <br />
            Lokesh - +91 8985368669
            <br />
            Hareesh - +91 9004550810
          </p>
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdDM32kfLTV4ncpKvfP-iUdlXe-ebxtSXhn0ExkZKw56TkMeg/viewform?usp=pp_url"
             target="_blank">
              <motion.button
                whileHover={{ scale: 1.2 }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                BOOK ACCOMMODATION!
              </motion.button>
            </a>
          </motion.div>
        </div>

        <motion.footer
          className="bg-gray-600 bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="container flex flex-col items-center justify-between px-6 py-2 mx-auto lg:flex-row">
            <a href="/">
              <img
                className="w-28 h-18 md:w-32 md:h-22"
                src="/images/axislogo.png"
                alt=""
              />
            </a>

            <div className="flex flex-wrap items-center justify-center gap-3 mt-2 lg:gap-6 lg:mt-0">
              <a
                href="/Events"
                className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Events
              </a>

              <a
                href="/Workshop"
                className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Workshops
              </a>

              <a
                href="/Team"
                className="text-sm text-white transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
              >
                Our Team!
              </a>
            </div>

            <p className="mt-6 text-sm text-white lg:mt-0 dark:text-gray-400">
              © Copyright 2024. All Rights Reserved.
            </p>
          </div>
          <GoToTopButton />
        </motion.footer>
      </motion.div>
    </>
  );
}
