import React from 'react';

export default function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">
        Soundtrack respects your privacy. We collect only the necessary data to enhance your experience with our app.
        This includes your Spotify account information (such as top tracks and listening stats) after your explicit
        authorization. We do not share your personal data with third parties.
      </p>
      <p className="mb-4">
        All Spotify data is stored securely using Firebase, and you can revoke access at any time. By using Soundtrack,
        you agree to this privacy policy.
      </p>
      <p>For questions, contact us at: <a href="mailto:moalsheikh2004@gmail.com" className="text-blue-500 underline">moalsheikh2004@gmail.com</a></p>
    </div>
  );
}
