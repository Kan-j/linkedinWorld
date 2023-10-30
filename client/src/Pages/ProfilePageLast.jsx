import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';

const ProfilePageLast = ({ onBack, onNext }) => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext(skills);
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleDeleteSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <FaLinkedin className="text-4xl text-blue-500 mb-4" />
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">Add Skills</h1>
        </div>
        <main>
          <div className="mb-4">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Add a skill..."
              className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
            />
            <button
              onClick={handleAddSkill}
              className="bg-gray-700 text-white py-2 px-4 rounded hover-bg-green-600 mb-4 transition duration-300 mt-3"
            >
              Add Skill
            </button>
          </div>
          {skills.map((skill, index) => (
            <div key={index} className="mb-3 flex items-center">
              <div className="flex-grow">
                <ul className="list-disc ml-6 text-gray-700">{skill}</ul>
              </div>
              <button
                onClick={() => handleDeleteSkill(index)}
                className="bg-red-400 text-white py-2 px-2 rounded-full hover:bg-red-600 transition duration-300"
              >
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
              </button>
            </div>
          ))}
        </main>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            className="bg-gray-300 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition duration-300"
          >
            Back
          </button>
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePageLast;
