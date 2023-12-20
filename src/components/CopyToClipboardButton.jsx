import React from 'react';

const CopyToClipboardButton = ({ text }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(text).then(() => {
      // Display some message to the user that the text has been copied
      console.log('Text copied to clipboard');
    }).catch(err => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <button className="copy-button" onClick={copyToClipboard}>
      Copy
    </button>
  );
};

export default CopyToClipboardButton;
