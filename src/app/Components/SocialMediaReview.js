'use client';
import { useState } from 'react';
import Image from 'next/image';

const SocialMediaReview = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    countryCode: '+92',
    businessName: '',
    socialPlatforms: {
      facebook: '',
      instagram: '',
      twitter: '',
      linkedin: '',
      youtube: '',
      tiktok: '',
      pinterest: ''
    },
    reviewType: 'basic',
    additionalInfo: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith('social_')) {
      const platform = name.replace('social_', '');
      setFormData(prev => ({
        ...prev,
        socialPlatforms: {
          ...prev.socialPlatforms,
          [platform]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      const response = await fetch('/api/social-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          whatsapp: '',
          countryCode: '+92',
          businessName: '',
          socialPlatforms: {
            facebook: '',
            instagram: '',
            twitter: '',
            linkedin: '',
            youtube: '',
            tiktok: '',
            pinterest: ''
          },
          reviewType: 'basic',
          additionalInfo: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', data.error);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Network error:', error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(''), 5000);
    }
  };

  const socialPlatformOptions = [
    { name: 'facebook', label: 'Facebook', icon: '📘', placeholder: 'https://facebook.com/yourpage' },
    { name: 'instagram', label: 'Instagram', icon: '📸', placeholder: 'https://instagram.com/yourprofile' },
    { name: 'twitter', label: 'Twitter/X', icon: '🐦', placeholder: 'https://twitter.com/yourprofile' },
    { name: 'linkedin', label: 'LinkedIn', icon: '💼', placeholder: 'https://linkedin.com/company/yourcompany' },
    { name: 'youtube', label: 'YouTube', icon: '📺', placeholder: 'https://youtube.com/@yourchannel' },
    { name: 'tiktok', label: 'TikTok', icon: '🎵', placeholder: 'https://tiktok.com/@yourprofile' },
    { name: 'pinterest', label: 'Pinterest', icon: '📌', placeholder: 'https://pinterest.com/yourprofile' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Image
            src="/images/logo-white.png"
            alt="Socialhawks Logo"
            width={200}
            height={60}
            className="h-20 w-auto object-contain mx-auto mb-6"
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Social Media Review Request
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Get Professional Analysis of Your Social Media Presence
          </p>
          <p className="text-lg text-gray-400">
            Our experts will review your social media accounts and provide actionable insights
          </p>
        </div>

        {/* Review Form */}
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information */}
            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                    placeholder="Last Name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address* <span className="text-sm text-gray-500">(Recommended)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number*
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-20 px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 bg-gray-50"
                    >
                      <option value="+92">PK</option>
                      <option value="+1">US</option>
                      <option value="+44">UK</option>
                      <option value="+91">IN</option>
                      <option value="+86">CN</option>
                    </select>
                    <input
                      type="tel"
                      id="whatsapp"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                      placeholder="WhatsApp number"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                  Business/Brand Name
                </label>
                <input
                  type="text"
                  id="businessName"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                  placeholder="Your business or brand name"
                />
              </div>
            </div>

            {/* Social Media Platforms */}
            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Social Media Platforms <span className="text-sm text-gray-500 font-normal">(Optional)</span></h2>
              <p className="text-gray-600 mb-6">Enter the profile links for the platforms you want us to review. You can leave this blank if you want general consultation:</p>
              
              <div className="space-y-4">
                {socialPlatformOptions.map((platform) => (
                  <div key={platform.name} className="flex items-center space-x-4 p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                    <div className="text-2xl">{platform.icon}</div>
                    <div className="flex-1">
                      <label htmlFor={`social_${platform.name}`} className="block text-sm font-medium text-gray-700 mb-1">
                        {platform.label}
                      </label>
                      <input
                        type="url"
                        id={`social_${platform.name}`}
                        name={`social_${platform.name}`}
                        value={formData.socialPlatforms[platform.name]}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900"
                        placeholder={platform.placeholder}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Type */}
            <div className="border-b pb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Review Type</h2>
              <div className="space-y-4">
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="reviewType"
                    value="basic"
                    checked={formData.reviewType === 'basic'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Basic Review (Free)</div>
                    <div className="text-sm text-gray-600">General overview and basic recommendations</div>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="reviewType"
                    value="detailed"
                    checked={formData.reviewType === 'detailed'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Detailed Analysis</div>
                    <div className="text-sm text-gray-600">Comprehensive audit with actionable strategies</div>
                  </div>
                </label>
                <label className="flex items-center space-x-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="reviewType"
                    value="consultation"
                    checked={formData.reviewType === 'consultation'}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-primary focus:ring-primary"
                  />
                  <div>
                    <div className="font-medium text-gray-900">Review + Consultation Call</div>
                    <div className="text-sm text-gray-600">Detailed review plus 30-minute strategy call</div>
                  </div>
                </label>
              </div>
            </div>

            {/* Additional Information */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your goals and specific areas you'd like us to focus on
                </label>
                <textarea
                  id="additionalInfo"
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-gray-900 resize-none"
                  placeholder="e.g., I want to increase engagement, improve content strategy, grow followers, etc."
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-semibold py-4 px-8 rounded-lg transition-all duration-300 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 shadow-lg hover:shadow-xl'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Submitting Review Request...
                  </div>
                ) : (
                  '🚀 Submit Review Request'
                )}
              </button>
            </div>

            {/* Status Messages */}
            {submitStatus && (
              <div className="mt-6">
                {submitStatus === 'success' ? (
                  <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">🎉</div>
                    <p className="text-primary font-medium text-lg mb-2">
                      Review Request Submitted Successfully!
                    </p>
                    <p className="text-gray-600">
                      Our team will analyze your social media presence and get back to you within 24-48 hours with detailed insights and recommendations.
                    </p>
                  </div>
                ) : (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                    <div className="text-4xl mb-2">❌</div>
                    <p className="text-red-600 font-medium text-lg mb-2">
                      Submission Failed
                    </p>
                    <p className="text-red-600">
                      Sorry, there was an error submitting your review request. Please try again or contact us directly.
                    </p>
                  </div>
                )}
              </div>
            )}
          </form>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <button
            onClick={() => window.close()}
            className="text-white hover:text-primary transition-colors"
          >
            ← Back to Main Site
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaReview;