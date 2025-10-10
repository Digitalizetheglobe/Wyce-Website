"use client";

import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Header Section */}
      <section className="w-full text-white py-10 md:py-16" style={{background: 'linear-gradient(180deg, #090909 0%, #B7AC88 100%)'}}>
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">Privacy Policy</h2>
          <p className="text-gray-200 text-sm md:text-base">
            Learn how WYCE protects and manages your personal information
          </p>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="w-full bg-black py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className=" p-6 md:p-8 text-white">
            
            {/* 1. Who we are */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">1. Who we are?</h2>
              <p className="text-gray-300 mb-2">Our website address is:</p>
              <p className="text-[#B7AC88] font-medium">https://wycecorp.com</p>
            </div>

            {/* 2. What personal data we collect and why we collect it */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-6">2. What personal data we collect and why we collect it?</h2>
              
              {/* Comments */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Comments</h3>
                <p className="text-gray-300 leading-relaxed">
                  When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&apos;s IP address and browser user agent string to help spam detection. An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                </p>
              </div>

              {/* Media */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Media</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                </p>
              </div>

              {/* Contact forms */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Contact forms</h3>
                <p className="text-gray-300 leading-relaxed">
                  When you contact us through our website forms, we collect your name, email address, phone number, and any message you provide. This information is used to respond to your inquiries and provide you with information about our properties and services. We may also use this information to send you updates about WYCE developments and real estate opportunities.
                </p>
              </div>

              {/* Cookies */}
              <div className="mb-6">
                <h3 className="text-lg md:text-xl font-semibold text-white mb-3">Cookies</h3>
                <p className="text-gray-300 leading-relaxed">
                  If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
                </p>
                <p className="text-gray-300 leading-relaxed mt-3">
                  If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
                </p>
              </div>
            </div>

            {/* 3. Who we share your data with */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">3. Who we share your data with</h2>
              <p className="text-gray-300 leading-relaxed">
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this privacy policy. We may share your information with trusted third parties who assist us in operating our website, conducting our business, or serving our customers, as long as those parties agree to keep this information confidential.
              </p>
            </div>

            {/* 4. How long we retain your data */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">4. How long we retain your data</h2>
              <p className="text-gray-300 leading-relaxed">
                If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
              </p>
              <p className="text-gray-300 leading-relaxed mt-3">
                For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
              </p>
            </div>

            {/* 5. What rights you have over your data */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">5. What rights you have over your data</h2>
              <p className="text-gray-300 leading-relaxed">
                If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
              </p>
            </div>

            {/* 6. Where we send your data */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">6. Where we send your data</h2>
              <p className="text-gray-300 leading-relaxed">
                Visitor comments may be checked through an automated spam detection service. We may also share your information with our business partners, service providers, and other third parties who assist us in providing our services to you.
              </p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Contact Information</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-[#1a1a1a] rounded-lg p-4">
                <p className="text-[#B7AC88] font-medium mb-2">WYCE Corporation</p>
                <p className="text-gray-300 mb-1">Email: info@wycecorp.com</p>
                <p className="text-gray-300 mb-1">Phone: +91 829 829 4450</p>
                <p className="text-gray-300">Address: Bavdhan, Pune, Maharashtra, India</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-[#D9D9D933] pt-6">
              <p className="text-gray-400 text-sm">
                Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

