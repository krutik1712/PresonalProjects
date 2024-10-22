import React from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialTwitter } from "react-icons/sl";

export default function Footer() {
    return (
        <footer className="py-10 px-4">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
                <div>
                    <h3 className="text-lg font-bold mb-4">Customer Services</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:underline">Help Center</a></li>
                        <li><a href="#" className="hover:underline">FAQs</a></li>
                        <li><a href="#" className="hover:underline">Track Order</a></li>
                        <li><a href="#" className="hover:underline">Return Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Information</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                        <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
                        <li><a href="#" className="hover:underline">Security</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Partner With Us</h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:underline">Sell On Our Platform</a></li>
                        <li><a href="#" className="hover:underline">Franchise</a></li>
                        <li><a href="#" className="hover:underline">Advertise With Us</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-bold mb-4">Categories <a href="#" className="text-green-600 text-md ml-5 font-medium">see all</a></h3>
                    <ul className="space-y-2 text-gray-700">
                        <li><a href="#" className="hover:underline">Vegetables & Fruits</a></li>
                        <li><a href="#" className="hover:underline">Cold Drinks & Juices</a></li>
                        <li><a href="#" className="hover:underline">Bakery & Biscuits</a></li>
                        <li><a href="#" className="hover:underline">Dry Fruits, Masala & Oil</a></li>
                    </ul>
                </div>

                <div className="hidden lg:block">
                    <br />
                    <br />
                    <ul className="space-y-2 text-gray-700 mt-10 lg:mt-0">
                        <li><a href="#" className="hover:underline">Dairy & Breakfast</a></li>
                        <li><a href="#" className="hover:underline">Instant & Frozen Food</a></li>
                        <li><a href="#" className="hover:underline">Sweet Tooth</a></li>
                        <li><a href="#" className="hover:underline">Organic & Premium</a></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-300 flex justify-between">
                <ul className="flex space-x-4 text-gray-700">
                    <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                    <li><a href="#" className="hover:underline">Terms of Use</a></li>
                    <li><a href="#" className="hover:underline">Site Map</a></li>
                </ul>
                <ul className="flex space-x-4">
                    <li className="p-2 bg-black text-white rounded-full text-2xl"><a href="#"><FaFacebookF /></a></li>
                    <li className="p-2 bg-black text-white rounded-full text-2xl"><a href="#"><FaInstagram /></a></li>
                    <li className="p-2 bg-black text-white rounded-full text-2xl"><a href="#"><SlSocialTwitter /></a></li>
                </ul>
            </div>
        </footer>
    );
}
