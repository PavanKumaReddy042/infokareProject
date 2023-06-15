//import { useState } from 'react';
// import PureModal from 'react-pure-modal';
// import 'react-pure-modal/dist/react-pure-modal.min.css';

// import React, { useState } from 'react';

// const ModalTheme = () => {
//   const [isOpen, setIsOpen] = useState(true);

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <>
//       {isOpen && (
//         <dialog open>
//           {/* Privacy statement content */}
//           <h1>Privacy statement</h1>
//           <ul className='unorder-list-data'>
//             {/* List items describing the privacy policy */}
//           </ul>
//           <button onClick={closeModal}>Close</button>
//         </dialog>
//       )}
//     </>
//   );
// };

// export default ModalTheme;


import React from 'react';
import useModals from 'react-use-modals';

const ModalTheme = () => {
  const { modalRef, isOpen, openModal, closeModal } = useModals();

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
        <dialog ref={modalRef}>
            <h1>Privacy statement</h1>
            <ul className='unorder-list-data'>
                <li>Information Collection:
                    When you subscribe to our service using the subscription form, we collect your email address. The email address you provide is used solely for the purpose of sending you updates, newsletters, or other relevant information related to our services.</li>
                <li>Consent:
                    By submitting the subscription form and providing your email address, you explicitly consent to the collection, use, and processing of your personal information as described in this Privacy Statement.</li>
                <li>Information Use:
                    We use your email address to deliver the requested content or information and to keep you informed about our products, services, or promotional offers. We may also use your email address to improve our services or customize the content based on your preferences.</li>
                <li>Information Sharing:
                    We do not sell, trade, or otherwise transfer your email address to third parties without your consent, except as required by law or with explicit consent. We may share your email address with trusted service providers who assist us in managing our subscriptions and delivering content to you.</li>
                <li>Data Security:
                    We implement appropriate technical and organizational measures to protect the personal information we collect and maintain. We use industry-standard security protocols to safeguard your email address and ensure its confidentiality. However, no method of transmission or storage is 100% secure, and we cannot guarantee absolute security.</li>
            </ul>
            <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default ModalTheme;