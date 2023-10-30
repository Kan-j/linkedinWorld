import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { BsPlus } from 'react-icons/bs';

const CustomDatePicker = styled(DatePicker)`
  .react-datepicker {
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .react-datepicker__header {
    background-color: #0073b1;
    color: white;
  }

  .react-datepicker__navigation--previous {
    border-right-color: transparent;
  }

  .react-datepicker__navigation--next {
    border-left-color: transparent;
  }
`;


const ProfilePageStep2 = ({ onBack, onNext }) => {
  const [educationDetails, setEducationDetails] = useState([
    {
      school: '',
      degree: '',
      startDate: null,
      endDate: null,
      grade: '',
      skills: '',
    },
  ]);

  const handleBack = () => {
    onBack();
  };

  const handleNext = () => {
    onNext(educationDetails);
  };

  const handleAddEducation = () => {
    setEducationDetails([
      ...educationDetails,
      {
        school: '',
        degree: '',
        startDate: null,
        endDate: null,
        grade: '',
        skills: '',
      },
    ]);
  };

  const handleRemoveEducation = (index) => {
    const updatedEducationDetails = [...educationDetails];
    updatedEducationDetails.splice(index, 1);
    setEducationDetails(updatedEducationDetails);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <FaLinkedin className="text-4xl text-blue-500 mb-4" />
          <h1 className="text-2xl font-semibold mb-4 text-gray-700">Add Education</h1>
        </div>
        <main>
          {/* <p>Education</p> */}
          {educationDetails.map((education, index) => (
            <div key={index} className="mb-4 border px-3 py-2 rounded-md">
              <h2 className="text-md font-medium text-gray-500 ">School</h2>
              <input
                type="text"
                value={education.school}
                placeholder='eg. University Of Ghana'
                onChange={(e) => {
                  const updatedDetails = [...educationDetails];
                  updatedDetails[index].school = e.target.value;
                  setEducationDetails(updatedDetails);
                }}
                className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
              />
              <h2 className="text-md font-medium text-gray-500 ">Degree</h2>
              <input
                type="text"
                value={education.degree}
                placeholder='eg. Bsc Computer Engineering'
                onChange={(e) => {
                  const updatedDetails = [...educationDetails];
                  updatedDetails[index].degree = e.target.value;
                  setEducationDetails(updatedDetails);
                }}
                className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
              />
            <h2 className="text-md font-medium text-gray-500 ">Duration</h2>
              <div className="mb-2 flex gap-3">
                <CustomDatePicker
                    selected={education.startDate}
                    onChange={(date) => {
                      const updatedDetails = [...educationDetails];
                      updatedDetails[index].startDate = date;
                      setEducationDetails(updatedDetails);
                    }}
                    startDate={education.startDate}
                    endDate={education.endDate}
                    selectsStart
                    placeholderText="Start Date"
                    className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
                  />

              <CustomDatePicker
                  selected={education.endDate}
                  onChange={(date) => {
                    const updatedDetails = [...educationDetails];
                    updatedDetails[index].endDate = date;
                    setEducationDetails(updatedDetails);
                  }}
                  startDate={education.startDate}
                  endDate={education.endDate}
                  selectsEnd
                  placeholderText="Expected End Date"
                  className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
                />
              </div>
              <h2 className="text-md font-medium text-gray-500 ">Grade</h2>
              <input
                type="text"
                value={education.grade}
                placeholder='GPA: 3.59- 2nd Class Upper'
                onChange={(e) => {
                  const updatedDetails = [...educationDetails];
                  updatedDetails[index].grade = e.target.value;
                  setEducationDetails(updatedDetails);
                }}
                className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
              />
              <h2 className="text-md font-medium text-gray-500 ">Skills Obtained</h2>
              <textarea
                value={education.skills}
                placeholder='eg. Neworking, Problem Solving, Software Development, Public Speaking'
                onChange={(e) => {
                  const updatedDetails = [...educationDetails];
                  updatedDetails[index].skills = e.target.value;
                  setEducationDetails(updatedDetails);
                }}
                className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
              />
              <div className='w-full flex justify-center mt-3'>
                <button
                  onClick={() => handleRemoveEducation(index)}
                  className="bg-red-400 text-white py-2 px-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </button>
              </div>
              
            </div>
          ))}
          <button
            onClick={handleAddEducation}
            className="bg-gray-700 text-white py-2 px-4 rounded hover-bg-green-600 mb-4 transition duration-300"
          >
            Add Education
          </button>
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

export default ProfilePageStep2;
