import React, {useEffect} from 'react';

const NotFound = () => {
  useEffect(() => {
    document.title = 'Not Found - Instagram';
  }, []);
  return (
    <div className="text-center">
      <h1 className="text-5xl">Sorry, Page Not Found!</h1>
    </div>
  );
};

export default NotFound;
