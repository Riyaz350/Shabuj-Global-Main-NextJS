'use client';
import { useMyContext } from '@/_components/Context/MyContextProvider';
import React from 'react';

const HomePageModal: React.FC = () => {
  // Modal open state from context
  const { modalOpen, setModalOpen } = useMyContext();
console.log(modalOpen)
  return (
    <div>
      {/* Only display the modal if modalOpen is true */}
      {modalOpen && (
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle w-full h-full" checked={modalOpen} readOnly />
          <div className="modal w-full h-full">
            <div className="modal-box w-full h-full flex flex-col justify-between">
              <h3 className="font-bold text-lg">Welcome to the Home Page!</h3>
              <p className="py-4">
                This modal is triggered as soon as you land on the home page.
              </p>
              <div className="modal-action">
                <label
                  onClick={() => setModalOpen(false)}
                  htmlFor="my-modal"
                  className="btn"
                >
                  Close
                </label>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePageModal;
