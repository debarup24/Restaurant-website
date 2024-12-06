import React from "react";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import twitter from "../assets/twitter.png";
import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted text-muted-foreground bg-orange-100 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-950 ">
              <li className="hover:text-orange-600 cursor-pointer">Home</li>
              <li className="hover:text-orange-600 cursor-pointer">Menu</li>
              <li className="hover:text-orange-600 cursor-pointer">
                Reservations
              </li>
              <li className="hover:text-orange-600 cursor-pointer">About Us</li>
              <li className="hover:text-orange-600 cursor-pointer">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              Contact Us
            </h3>
            <div className="flex gap-2">
              <MapPin className="text-red-500" />
              <div>
                <p>123 Restaurant Street</p>
                <p>City, State 12345</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <Phone className="text-red-500 my-4" />
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="flex gap-2">
              <Mail className="text-red-500" />
              <p>Email: info@restaurant.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              Opening Hours
            </h3>
            <p>Monday - Friday: 11am - 10pm</p>
            <p>Saturday - Sunday: 10am - 11pm</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-red-500">
              Follow Us
            </h3>

            <div className="flex space-x-4">
              <img
                src={facebook}
                alt="facebook"
                className="h-6 w-6 cursor-pointer"
              />
              <span className="sr-only cursor-pointer">Facebook</span>

              <img
                src={instagram}
                alt="instagram"
                className="h-6 w-6 cursor-pointer"
              />
              <span className="sr-only">Instagram</span>

              <img
                src={twitter}
                alt="twitter"
                className="h-6 w-6 cursor-pointer"
              />
              <span className="sr-only">Twitter</span>
            </div>
          </div>
        </div>
        <div className="mt-8 py-2 border-black border-b border-muted-foreground/20 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Your{" "}
            <span className="text-red-500 font-semibold">Spicy</span>Bites. All
            rights reserved.
          </p>{" "}
        </div>
        <p className="text-center mt-2 py-1">
          Created by{" "}
          <a
            className="text-orange-600 font-semibold hover:text-red-800"
            href="https://www.linkedin.com/in/debarup-s/"
          >
            Debarup
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
