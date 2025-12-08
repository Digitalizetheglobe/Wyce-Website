"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OTPPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onVerify: (otp: string) => void;
  onSkip?: () => void;
  phoneNumber: string;
  error?: string;
}

export default function OTPPopup({
  isOpen,
  onClose,
  onVerify,
  onSkip,
  phoneNumber,
  error,
}: OTPPopupProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Reset OTP when popup opens
  useEffect(() => {
    if (isOpen) {
      setOtp(["", "", "", "", "", ""]);
      // Focus first input after a short delay
      setTimeout(() => {
        inputRefs.current[0]?.focus();
      }, 100);
    }
  }, [isOpen]);

  const handleChange = (index: number, value: string) => {
    // Only allow digits
    const digit = value.replace(/\D/g, "").slice(0, 1);
    
    if (digit) {
      const newOtp = [...otp];
      newOtp[index] = digit;
      setOtp(newOtp);

      // Auto-focus next input
      if (index < 5 && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    } else {
      // Allow backspace to clear
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      // Move to previous input on backspace if current is empty
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    
    if (pastedData.length > 0) {
      const newOtp = [...otp];
      for (let i = 0; i < 6; i++) {
        newOtp[i] = pastedData[i] || "";
      }
      setOtp(newOtp);
      
      // Focus the next empty input or the last one
      const nextIndex = Math.min(pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const handleSubmit = () => {
    const otpString = otp.join("");
    if (otpString.length === 6) {
      onVerify(otpString);
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-black border border-[#866448] rounded-lg shadow-2xl max-w-md w-full p-6 sm:p-8"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl leading-none cursor-pointer"
            aria-label="Close OTP popup"
          >
            ×
          </button>

          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl mb-2 text-center text-[#B7AC88] font-bold">
            Enter your OTP
          </h3>

          {/* Instruction Text */}
          <p className="text-xs sm:text-sm text-gray-400 text-center mb-6">
            Check your WhatsApp for your OTP
          </p>

          {/* Error Message */}
          {error && (
            <motion.div
              className="mb-4 p-3 rounded-md bg-red-900/50 border border-red-600 text-red-200 text-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {error}
            </motion.div>
          )}

          {/* OTP Input Boxes */}
          <div className="flex justify-center gap-2 sm:gap-3 mb-6">
            {otp.map((digit, index) => (
              <input
                key={index}
                ref={(el) => (inputRefs.current[index] = el)}
                type="text"
                inputMode="numeric"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                className="w-12 h-12 sm:w-14 sm:h-14 text-center text-xl sm:text-2xl font-bold rounded border-2 bg-transparent text-white focus:outline-none focus:border-[#B7AC88] transition-colors border-gray-600"
                autoComplete="off"
              />
            ))}
          </div>

          {/* Phone Number Display */}
          <p className="text-xs text-gray-500 text-center mb-6">
            OTP sent to: {phoneNumber}
          </p>

          {/* Verify Button */}
          <button
            onClick={handleSubmit}
            disabled={otp.join("").length !== 6}
            className="w-full border hover:text-[#B7AC88] hover:border-[#B7AC88] cursor-pointer
                        text-white px-6 py-3 shadow-md text-bold border-2
                        hover:scale-105 active:scale-95 transition-transform 
                        text-base font-bold
                        disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mb-3"
          >
            Verify OTP
          </button>

          {/* Skip Button (Optional) */}
          {onSkip && (
            <button
              onClick={onSkip}
              className="w-full text-gray-400 hover:text-white text-sm transition-colors"
            >
              Skip verification
            </button>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
