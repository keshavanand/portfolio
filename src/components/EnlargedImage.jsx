/* eslint-disable react/prop-types */

const EnlargedImage = ({ imageUrl, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-80" onClick={onClose}>
      <img src={imageUrl} alt="Enlarged" className="max-w-full max-h-full" />
    </div>
  );
};

export default EnlargedImage;