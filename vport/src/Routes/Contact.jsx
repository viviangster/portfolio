import React from 'react';
import RefContact from '../Components/refContact.jsx'; 
import ContactForm from '../Components/contactForm.jsx';

const Contact = () => {
  return (
    <div
      className="min-h-screen p-6 pb-24 overflow-y-auto"
      style={{
        backgroundImage: "url('/assets/trees1.png')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}
    >
      <title>Contacts</title>
      <ContactForm />

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-amber-900 mb-6">References</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white px-6 py-12 max-w-4xl rounded-md text-gray-800 text-lg leading-relaxed">
          {RefContact.map((ref, index) => (
            <div key={index}>
              <strong>{ref.name}</strong><br />
              {ref.title}<br />
              {ref.company}
            </div>
          ))}
        </div>
        
        <div className="col-span-2 grid pt-1 justify-center ">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
