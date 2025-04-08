import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black text-gray-300 py-16 overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800 opacity-60"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">

        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-400">
            {["About Us", "Careers", "Contact", "Privacy Policy"].map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300 ease-in-out"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
            Contact Us
          </h3>
          <p className="text-gray-400 leading-relaxed">
            EDUMALL
            PLOT NO. 17-18, STREET NO. 2, SHIVAM PARK
            NANA MAVA ROAD, NR. AJMERA SHASTRI NAGAR
            SHASTRI NAGAR, RAJKOT, GUJARAT - 360005
          </p>
          <p className="mt-3 text-gray-400">📞 (123) 456-7890</p>
          <p className="text-gray-400">📧 info@edumall.com</p>
        </div>


        <div>
          <h3 className="text-xl font-bold text-white mb-6 tracking-wide">
            Follow Us
          </h3>
          <div className="flex space-x-6">
            {[
              { icon: <FaFacebook size={28} />, url: "https://facebook.com", color: "hover:text-blue-500" },
              { icon: <FaTwitter size={28} />, url: "https://twitter.com", color: "hover:text-blue-400" },
              { icon: <FaInstagram size={28} />, url: "https://instagram.com", color: "hover:text-pink-500" },
              { icon: <FaLinkedin size={28} />, url: "https://linkedin.com", color: "hover:text-blue-700" },
            ].map(({ icon, url, color }, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-400 ${color} transition transform hover:scale-110`}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>


      <div className="mt-12 text-center border-t border-gray-700 pt-6">
        <p className="text-white text-sm">
          &copy; {currentYear} <span className="text-yellow-400">Edu Mall</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
