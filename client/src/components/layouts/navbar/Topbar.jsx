import React from 'react';
import { Phone, Clock, Mail } from 'lucide-react';

const Topbar = () => {
  return (
    <div className="w-full bg-teal-700 text-white text-sm">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-2 sm:gap-6 px-4 py-2">
        
        <div className="flex items-center gap-2">
          <Phone size={14} className="fill-white text-white" />
          <span>Emergency Call : 1234567890</span>
        </div>

        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>10:00am TO 10:00pm</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} />
          <span>help@techinfoyt.com</span>
        </div>

      </div>
    </div>
  );
};

export default Topbar;