import React, { useState } from 'react';

function Headline() {
  const [headline, setHeadline] = useState('');
  const maxCharacterLimit = 250;

  const handleChange = (e) => {
    const input = e.target.value;
    if (input.length <= maxCharacterLimit) {
      setHeadline(input);
    }
  };

  const characterCount = headline.length;
  const isLimitReached = characterCount === maxCharacterLimit;

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold text-gray-700">
        Headline{' '}
        <span className={`text-sm ${isLimitReached ? 'text-red-500' : 'text-gray-500'}`}>
          (max {maxCharacterLimit} characters)
        </span>
      </h2>
      <input
        type="text"
        value={headline}
        onChange={handleChange}
        className="w-full p-2 border rounded-lg"
        disabled={isLimitReached}
      />
      <p className="text-sm text-gray-500">
        {characterCount} / {maxCharacterLimit} characters
      </p>
    </div>
  );
}

export default Headline;
