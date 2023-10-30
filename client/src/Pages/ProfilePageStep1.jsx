import React, { useState } from 'react';
import { FaLinkedin } from 'react-icons/fa';


function ProfilePageStep1({ onNext }) {
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);

  const [headline, setHeadline] = useState('');
  const [about, setAbout] = useState('');
  const maxCharacterLimit = 250;

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= maxCharacterLimit) {
      setHeadline(input);
    }
  };

  const characterCount = headline.length;
  const isLimitReached = characterCount === maxCharacterLimit;

  const handleProfileImageUpload = (e) => {
    // Handle profile image upload and set the image in the state
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setProfileImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCancelProfileImage = () => {
    // Handle cancel profile image
    setProfileImage(null);
  };

  const handleCoverImageUpload = (e) => {
    // Handle cover image upload and set the image in the state
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setCoverImage(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleCancelCoverImage = () => {
    // Handle cancel cover image
    setCoverImage(null);
  };


  const handleNext = () => {
    // Collect all relevant data, including the 'headline' state
    const data = {
      profileImage,
      coverImage,
      headline,
      about,
      // ...other data
    };

    // Call the 'onNext' function and pass the data to the next step
    onNext(data);
    // onNext is a function outside of this state that handles the navigation.
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 p-6 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <FaLinkedin className="text-4xl text-blue-500 mb-4" />
          <h1 className="text-2xl font-semibold text-gray-800 mb-4">Create Your Profile</h1>
        </div>
        <main>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Profile Image</h2>
            {profileImage ? (
              <>
                <div className="mb-2">
                  <img src={profileImage} alt="Profile" className="w-20 h-20 rounded-full" />
                </div>
                <button
                  onClick={handleCancelProfileImage}
                  className="bg-red-400 text-white py-2 px-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </button>
              </>
            ) : (
              <input type="file" accept="image/*" onChange={handleProfileImageUpload} />
            )}
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Cover Image</h2>
            {coverImage ? (
              <>
                <div className="mb-2">
                  <img src={coverImage} alt="Cover" className="w-full rounded-lg" />
                </div>
                <button
                  onClick={handleCancelCoverImage}
                  className="bg-red-400 text-white py-2 px-2 rounded-full hover:bg-red-600 transition duration-300"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
                    <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
                  </svg>
                </button>
              </>
            ) : (
              <input type="file" accept="image/*" onChange={handleCoverImageUpload} />
            )}
          </div>

          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Headline{' '}<span className={`text-sm ${isLimitReached ? 'text-red-500' : 'text-gray-500'}`}>(max {maxCharacterLimit} characters)</span></h2>
            <input
              type="text"
              value={headline}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
              
            />
            <p className="text-sm text-gray-500">
              {characterCount} / {maxCharacterLimit} characters
            </p>
          </div>

          {/* About section here */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">About</h2>
            <textarea
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="w-full p-2 border rounded-lg focus-within:border-gray-500 outline-none"
            />
          </div>

        </main>
        <button
          onClick={handleNext}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProfilePageStep1;
