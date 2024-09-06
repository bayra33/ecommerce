import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMessage } from "react-icons/md";

export const Footer = () => {
  return (
    <footer className="bg-black h-[282px] text-white w-full">
      {/* Top section with contact details */}
      <div className="max-w-[1040px] mx-auto py-6 flex justify-between items-center border-b border-gray-700">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <svg
            width="42"
            height="36"
            viewBox="0 0 42 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M40.0561 13.9004L34.5292 3.65254C33.5106 1.75984 31.5182 0.577454 29.3494 0.577454H23.4795V3.48088H23.482C24.5644 3.48088 25.5606 4.07084 26.0697 5.01744L31.595 15.2667C32.0567 16.1211 32.2866 17.0598 32.2866 18C32.2866 18.9402 32.0567 19.8784 31.595 20.7332L26.0697 30.9825C25.5606 31.9291 24.5644 32.5191 23.482 32.5191H23.4795V35.4225H29.3494C31.5182 35.4225 33.5106 34.2401 34.5292 32.3474L40.0561 22.0996C40.7456 20.8171 41.0911 19.4093 41.0911 18C41.0911 16.5907 40.7456 15.1829 40.0561 13.9004ZM11.7408 0.577454H17.6116V3.48088H17.6091C16.5267 3.48088 15.5305 4.07084 15.0205 5.01744L9.49661 15.2667C9.03442 16.1211 8.80457 17.0598 8.80457 18C8.80457 18.9402 9.03442 19.8784 9.49661 20.7332L15.0205 30.9825C15.5305 31.9291 16.5267 32.5191 17.6091 32.5191H17.6116V35.4225H11.7408C9.57289 35.4225 7.58053 34.2401 6.56192 32.3474L1.03507 22.0996C0.345521 20.8171 0 19.4093 0 18C0 16.5907 0.345521 15.1829 1.03507 13.9004L6.56192 3.65254C7.58053 1.75984 9.57289 0.577454 11.7408 0.577454Z"
              fill="white"
            />
          </svg>
          <h2 className="text-lg font-semibold">Pinecone Academy</h2>
        </div>

        {/* Contact Information */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <IoCallOutline className="w-6 h-6" />
            <p>(976) 7007-1234</p>
          </div>
          <div className="flex items-center space-x-2">
            <MdOutlineMessage className="w-6 h-6" />
            <p>contact@ecommerce.mn</p>
          </div>
        </div>
      </div>

      {/* Bottom section with navigation and social media */}
      <div className="max-w-[1040px] mx-auto py-6 flex justify-between items-center px-4">
        {/* Left Section - Copyright */}
        <div className="flex flex-col">
          <p className="text-sm">© {new Date().getFullYear()} Ecommerce MN. All rights reserved.</p>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-8">
          <a href="#home" className="text-sm hover:text-gray-400">Home</a>
          <a href="#about" className="text-sm hover:text-gray-400">About</a>
          <a href="#services" className="text-sm hover:text-gray-400">Services</a>
          <a href="#contact" className="text-sm hover:text-gray-400">Contact</a>
        </div>

        {/* Right Section - Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://www.facebook.com/" className="hover:text-gray-400">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77 3.56-3.46 6-7.46 6-1.52 0-3-.46-4.2-1.24a7.96 7.96 0 01-4.3-7.2C6.49 4.6 10.41 0 15 0c1.96 0 3.74.76 5.07 2a8.44 8.44 0 012.39 4z" />
            </svg>
          </a>
          <a href="#" className="hover:text-gray-400">
            <svg
              className="w-6 h-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M22.46 6c-.77 3.56-3.46 6-7.46 6-1.52 0-3-.46-4.2-1.24a7.96 7.96 0 01-4.3-7.2C6.49 4.6 10.41 0 15 0c1.96 0 3.74.76 5.07 2a8.44 8.44 0 012.39 4z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};
