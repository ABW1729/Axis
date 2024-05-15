import React, { useState } from 'react';
import { motion } from 'framer-motion';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [teamName, setTeamName] = useState('');
  const [participants, setParticipants] = useState([]);
  const [collegeName, setCollegeName] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [linkedIn, setLinkedIn] = useState('');
  const [address, setAddress] = useState('');
  const [yearOfStudying, setYearOfStudying] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form submission logic, such as sending data to a server
    // For now, we'll just log the form data to the console
    console.log({ name, email,number, teamName, participants, collegeName, state, city, linkedIn, address, yearOfStudying });
  };

  const handleAddParticipant = () => {
    if (participants.length < 5) {
      setParticipants([...participants, '']);
    } else {
      alert('You can add a maximum of 5 participants.');
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-transparent">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl text-white mb-4 font-semibold text-center"
      >
        Aquahunt
      </motion.h1>
      <p className='text-white text-center mt-4 mb-4'>Robotics & Automation</p>
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
        <div className="mb-4">
          <label htmlFor="name" className="block text-white">Team Leader Name:</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white">Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="number" className="block text-white">Phone Number:</label>
          <input type="number" id="number" value={number} onChange={(e) => setNumber(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="teamName" className="block text-white">Team Name:</label>
          <input type="text" id="teamName" value={teamName} onChange={(e) => setTeamName(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="collegeName" className="block text-white">College Name:</label>
          <input type="text" id="collegeName" value={collegeName} onChange={(e) => setCollegeName(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="state" className="block text-white">State:</label>
          <input type="text" id="state" value={state} onChange={(e) => setState(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-white">City:</label>
          <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="linkedIn" className="block text-white">LinkedIn (Optional):</label>
          <input type="text" id="linkedIn" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-white">Address:</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <label htmlFor="yearOfStudying" className="block text-white">Year of Studying:</label>
          <input type="text" id="yearOfStudying" value={yearOfStudying} onChange={(e) => setYearOfStudying(e.target.value)} className="mt-1 px-2 py-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500" />
        </div>
        <div className="mb-4">
          <button type="button" onClick={handleAddParticipant} className="px-4 border-2 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full">Add Participant</button>
        </div>
        {participants.map((participant, index) => (
          <div key={index} className="mb-4">
            <label htmlFor={`participant-${index}`} className="block text-white">Participant {index + 1}:</label>
            <div className="flex items-center">
              <input
                type="text"
                id={`participant-${index}`}
                value={participant}
                onChange={(e) => handleParticipantChange(index, e.target.value)}
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
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="px-4 py-2 border-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 w-full"
        >
          Register
        </motion.button>
      </motion.form>
    </div>
  );
}

export default RegistrationForm;