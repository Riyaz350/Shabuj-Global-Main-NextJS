'use client'
import React, { useState, useEffect } from 'react';

const HomePageModal: React.FC = () => {
  // Modal open state
  const [open, setOpen] = useState(false);

  // Open modal when the component mounts (on page load)
  useEffect(() => {
    setOpen(true); // Open modal on page load
  }, []);

  return (
    <div>
      <input type="checkbox" id="my-modal" className="modal-toggle w-full h-full" checked={open} readOnly />
      <div className="modal w-full h-full">
        <div className="modal-box w-full h-full flex flex-col justify-between">
          <h3 className="font-bold text-lg ">Welcome to the Home Page!</h3>
          <p className="py-4">
            This modal is triggered as soon as you land on the home page.
          </p>
          <div className="modal-action">
            <label
              onClick={() => setOpen(false)}
              htmlFor="my-modal"
              className="btn"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageModal;
