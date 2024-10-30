import React, { useState, useEffect } from 'react';

const DaysSincePost = ({ postDate }) => {
  const [daysSince, setDaysSince] = useState(0);

  useEffect(() => {
    const calculateDaysSince = () => {
      const postDateObj = new Date(postDate);  // Convert postDate to Date object
      const currentDate = new Date();  // Get current date

      const differenceInTime = currentDate - postDateObj;  // Difference in milliseconds
      const differenceInDays = Math.floor(differenceInTime / (1000 * 3600 * 24));  // Convert to days
      
      setDaysSince(differenceInDays);
    };

    calculateDaysSince();
  }, [postDate]);

  return (
    <div>
      <p>This post is {isNaN(daysSince) ? '0' : daysSince} days old.</p>
    </div>
  );
};

export default DaysSincePost;
