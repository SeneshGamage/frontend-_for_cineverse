import React, { useState, useEffect } from 'react';
import NavBar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { useNavigate, Link } from 'react-router-dom';

const Verification = () => {
  const [otp, setOtp] = useState('');
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  useEffect(() => {
    if (otp.length === 6) {
      setError(''); // Clear the error if the OTP is valid
    }
  }, [otp]);

  const handleResendOtp = () => {
    setTimeLeft(60);
    setCanResend(false);
    // Logic to resend OTP goes here
  };

  const handleConfirm = () => {
    if (otp.length !== 6) {
      setError('Please enter a 6-digit OTP code.');
    } else {
      // Logic to verify OTP goes here
      navigate('/login'); // Redirect to sign-in page after successful verification
    }
  };

  return (
    <div className='relative min-h-screen bg-gray-900 text-white'>
      <NavBar />
      <div className='flex flex-col justify-center items-center min-h-screen'>
        <h1 className='text-4xl font-bold mb-6'>Verification</h1>
        <p className='mb-4'>Please enter the 6-digit OTP code sent to your email address.</p>
        <input
          type='text'
          maxLength='6'
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          className='p-2 mb-4 text-black rounded-lg text-center w-32'
        />
        {error && (
          <div className='mb-4 text-red-500 text-center'>
            {error}
          </div>
        )}
        <Link
          to = '/login'
          onClick={handleConfirm}
          className={`bg-blue-500 text-white py-2 px-4 rounded shadow-md hover:bg-blue-600 ${otp.length !== 6 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={otp.length !== 6}
        >
          Confirm
        </Link>
        <div className='mt-4'>
          {canResend ? (
            <button
              onClick={handleResendOtp}
              className='text-blue-500 hover:underline'
            >
              Resend OTP
            </button>
          ) : (
            <p>Resend OTP in {timeLeft} seconds</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Verification;
