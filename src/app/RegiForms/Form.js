import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form({ eventname, participantcount, category, id, user,email }) {
  const [name, setName] = useState(user ? user.Name : "");

  const [number, setNumber] = useState(user ? user.phone : "");
  const [teamName, setTeamName] = useState("");
  const [participants, setParticipants] = useState([]);
  const [state, setState] = useState(user ? user.state : "");
  const [city, setCity] = useState(user ? user.city : "");
  const [linkedIn, setLinkedIn] = useState("");
  const [address, setAddress] = useState(user ? user.address : "");
  const [yearOfStudying, setYearOfStudying] = useState(
    user ? user.yearOfStudy : ""
  );
  const [loading, setLoading] = useState(false);

  const LoadingToast = ({ loading }) => {
    return (
      <div className={`loading-toast ${loading ? "visible" : ""}`}>
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  };

  const validateForm = () => {
    if (!name || !number  || !state || !city || !address || !yearOfStudying) {
      toast.error("Please fill out all required fields.");
      return false;
    }
    return true;
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setLoading(false)
      return;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(number)) {
      toast.error("Phone number must be 10 digits.");
      setLoading(false)
      return;
    }
    const val = {
      name,
      email,
      number,
      teamName,
      participants,
      state,
      city,
      linkedIn,
      address,
      yearOfStudying,
      eventname,
    };
    const subject = "AXIS VNIT";
    const text =
      `<p>Dear ${name},</p>
      <p>We are thrilled to inform you that your registration for the ${eventname} at AXIS&rsquo;24 has been successfully confirmed! Congratulations on being selected to be a part of AXIS&rsquo;24, one of the most prestigious events of the year.</p>
      <p><br></p>
      
      <div style="text-align: center; position: relative;">
        <div style="display: inline-block; position: relative;">
          <img src="https://i.ibb.co/cv5gJ0k/AXIS-24.png" alt="Image" border="0" style="z-index: 1;">
        </div>
      </div>
      
      <table cellpadding="0" cellspacing="0" width="100%" style="text-align: start;color: rgb(34, 34, 34);background-color: rgb(255, 255, 255);font-size: 12.8px;border-collapse: collapse;">
          <tr>
              <td style="color: rgb(255, 255, 255) rgb(0, 178, 219) rgb(255, 255, 255) rgb(255, 255, 255);">
                  <p style="text-align: center;"><br></p>
                  <p style="text-align: center;"><img src="https://lh3.googleusercontent.com/BmozRKQLdstr9ZQVdpiEpRDUfjDIlBNvGWNo1PAeNKnnzFZFaPci-tX9qNkzGJY1zxpjr0aNYp0gdSUaYQvx0-Fj9I78QHBGdS9kwOIt0Aheap3OETFgNxfRhMR02sq4cnr0pEyW" width="117" height="111" style="color: rgb(0, 0, 0); font-size: 14.6667px; border: medium;"><br></p>
              </td>
              <td style="color: rgb(255, 255, 255) rgb(255, 255, 255) rgb(255, 255, 255) rgb(0, 178, 219);">
                  <p><span style="font-size: 16px;">Team AXIS</span></p>
                  <p><span style="font-size: 16px;">AXIS&apos;24</span><a data-fr-linked="true" href="mailto:campus.connect@axisvnit.in"></a></p>
                  <p><a data-fr-linked="true" href="mailto:campus.connect@axisvnit.in">admin@axisvnit.in</a></p>
                  <p><span style="color: rgb(17, 85, 204);font-size: 11pt;"><a href="https://www.axisvnit.org/" target="_blank" style="color: rgb(17, 85, 204);"><img src="https://lh4.googleusercontent.com/PyvW0EK8X6itzJPt5WHVp-y0LKC4NT76P9wRHFAxRNJ6JOT_IruaOAw67zwjMrORGv-sLjf-R2g90FCH3u"></a></span></p>
              </td>
          </tr>
      </table>`;
    const maildata = { subject, email, text };
    try {
      setLoading(true);
      const res = await fetch("/api/event-register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "event-id": id,
        },
        body: JSON.stringify(val),
      });

      if (res.ok) {
        toast.success("Registered successfully!");
        await fetch("/api/mail-service", {
          method: "POST",
          body: JSON.stringify(maildata),
        });
      } else if (res.status === 400) {
        toast.error("User already Registered.");
      } else if (res.status === 401) {
        toast.error("Please sign-up first");
      } else if (res.status === 402) {
        toast.error("Please Complete your profile!.");
      } else{
        toast.error("Registration Failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
      toast.error("Error during registration");
    } finally {
      setLoading(false); // Reset loading state
    }
  };

  const handleAddParticipant = () => {
    if (participants.length < participantcount) {
      setParticipants([...participants, ""]);
    } else {
      alert(`You can add a maximum of ${participantcount} participants.`);
    }
  };

  const handleDeleteParticipant = (index) => {
    const updatedParticipants = [...participants];
    updatedParticipants.splice(index, 1);
    setParticipants(updatedParticipants);
  };

  const handleParticipantChange = (index, value) => {
    const updatedParticipants = [...participants];
    updatedParticipants[index] = value;
    setParticipants(updatedParticipants);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-transparent">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md border rounded-lg w-full mx-auto mt-8 p-6 bg-transparent shadow-lg"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-2xl mt-2 text-white mb-8 font-semibold text-center"
        >
          Registration Form
        </motion.h2>

  
        {participantcount != 0 ? (
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              Team Leader Name:
            </label>
            <input
              type="text"
              id="name"
              readOnly
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        ) : (
          <div className="mb-4">
            <label htmlFor="name" className="block text-white">
              {" "}
              Name:
            </label>
            <input
              type="text"
              id="name"
              readOnly
              placeholder={name}
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">
            Email:
          </label>
          <input
          readOnly
            type="email"
            id="email"
            placeholder={email}
            value={email}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-white">
            Phone Number:
          </label>
          <input
            type="number"
            id="number"
            readOnly
            placeholder={number}
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {participantcount != 0 && (
          <div className="mb-4">
            <label htmlFor="teamName" className="block text-white">
              Team Name:
            </label>
            <input
              type="text"
              id="teamName"
              
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}
        <div className="mb-4">
          <label htmlFor="collegeName" className="block text-white">
            College Name:
          </label>
          <input
            type="text"
            id="collegeName"
            readOnly
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-white">
            State:
          </label>
          <input
            type="text"
            id="state"
            readOnly
            placeholder={state}
            value={state}
            onChange={(e) => setState(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
       
        <div className="mb-4">
          <label htmlFor="linkedIn" className="block text-white">
            LinkedIn (Optional):
          </label>
          <input
            type="text"
            id="linkedIn"
            value={linkedIn}
            onChange={(e) => setLinkedIn(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-white">
            Address:
          </label>
          <input
            type="text"
            id="address"
            readOnly
            placeholder={address}
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="yearOfStudying" className="block text-white">
            Year of Studying:
          </label>
          <input
            type="text"
            id="yearOfStudying"
            readOnly
            placeholder={yearOfStudying}
            value={yearOfStudying}
            onChange={(e) => setYearOfStudying(e.target.value)}
            className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        {participantcount != 0 && (
          <>
            <div className="mb-4">
              <button
                type="button"
                onClick={handleAddParticipant}
                className="px-4 border-2 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full"
              >
                Add Participant
              </button>
            </div>
            {participants.map((participant, index) => (
              <div key={index} className="mb-4">
                <label
                  htmlFor={`participant-${index}`}
                  className="block text-white"
                >
                  Participant {index + 1} E-Mail ID:
                </label>
                <div className="flex items-center">
                  <input
                    required
                    type="text"
                    id={`participant-${index}`}
                    value={participant}
                    onChange={(e) =>
                      handleParticipantChange(index, e.target.value)
                    }
                    className="mt-1 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={() => handleDeleteParticipant(index)}
                    className="ml-2 border px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                  >
                    Delete
                  </motion.button>
                </div>
              </div>
            ))}
          </>
        )}

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          disabled={loading}
          className="px-4 py-2 border-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full"
        >
          {loading ? "Please Wait..." : "Submit"}
        </motion.button>
        <LoadingToast loading={loading} />
      </motion.form>
    </div>
  );
}

export default Form;
