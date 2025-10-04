'use client';
import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';


const JobApplication = ({ job }) => {
  const [showApplication, setShowApplication] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    countryCode: '+92',
    currentPosition: '',
    experience: '',
    expectedSalary: '',
    availableFrom: '',
    portfolio: '',
    linkedin: '',
    coverLetter: '',
    resume: null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create FormData to handle file upload
      const submitData = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key]) {
          submitData.append(key, formData[key]);
        }
      });
      submitData.append('jobTitle', job.title);
      submitData.append('jobSlug', job.slug);
      submitData.append('jobDepartment', job.department);

      const response = await fetch('/api/job-application', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          countryCode: '+92',
          currentPosition: '',
          experience: '',
          expectedSalary: '',
          availableFrom: '',
          portfolio: '',
          linkedin: '',
          coverLetter: '',
          resume: null
        });
        // Reset file input
        const fileInput = document.getElementById('resume');
        if (fileInput) fileInput.value = '';
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

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gray-700 transition-colors">
              Home
            </Link>
            <span>→</span>
            <Link href="/career" className="hover:text-gray-700 transition-colors">
              Career
            </Link>
            <span>→</span>
            <span className="text-gray-900 font-medium">{job.title}</span>
          </div>
        </nav>

        {/* Job Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded text-sm font-medium">
                  {job.department}
                </span>
                {job.featured && (
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded text-sm font-medium">
                    Featured
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                {job.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {job.description}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📍</span>
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">⏰</span>
                  <span>{job.type}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">👨‍💼</span>
                  <span>{job.experience}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">💰</span>
                  <span>{job.salary}</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 lg:mt-0 lg:ml-8">
              <button
                onClick={() => setShowApplication(!showApplication)}
                className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
              >
                {showApplication ? 'Hide Application' : 'Apply Now'}
              </button>
            </div>
          </div>
          
          <div className="text-sm text-gray-500 border-t border-gray-200 pt-4">
            <span>Posted: {formatDate(job.postedDate)}</span>
            <span className="mx-4">•</span>
            <span>Application Deadline: {formatDate(job.deadline)}</span>
          </div>
        </div>

        {/* Application Form */}
        {showApplication && (
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div className="mb-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <div className="flex">
                    <select
                      name="countryCode"
                      value={formData.countryCode}
                      onChange={handleInputChange}
                      className="w-20 px-3 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none bg-gray-50 text-black"
                    >
                      <option value="+92">PK</option>
                      <option value="+1">US</option>
                      <option value="+44">UK</option>
                      <option value="+91">IN</option>
                      <option value="+86">CN</option>
                    </select>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="flex-1 px-4 py-3 border border-l-0 border-gray-300 rounded-r-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                      placeholder="Phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="currentPosition" className="block text-sm font-medium text-gray-700 mb-2">
                    Current Position
                  </label>
                  <input
                    type="text"
                    id="currentPosition"
                    name="currentPosition"
                    value={formData.currentPosition}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="Your current job title"
                  />
                </div>
                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
                    Years of Experience*
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                  >
                    <option value="">Select experience</option>
                    <option value="0-1 years">0-1 years</option>
                    <option value="1-2 years">1-2 years</option>
                    <option value="2-3 years">2-3 years</option>
                    <option value="3-5 years">3-5 years</option>
                    <option value="5-8 years">5-8 years</option>
                    <option value="8+ years">8+ years</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="expectedSalary" className="block text-sm font-medium text-gray-700 mb-2">
                    Expected Salary
                  </label>
                  <input
                    type="text"
                    id="expectedSalary"
                    name="expectedSalary"
                    value={formData.expectedSalary}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="e.g., PKR 80,000 or Negotiable"
                  />
                </div>
                <div>
                  <label htmlFor="availableFrom" className="block text-sm font-medium text-gray-700 mb-2">
                    Available From
                  </label>
                  <input
                    type="date"
                    id="availableFrom"
                    name="availableFrom"
                    value={formData.availableFrom}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black"
                  />
                </div>
              </div>

              {/* Links */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-2">
                    Portfolio/Website
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
                <div>
                  <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
                    LinkedIn Profile
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none text-black placeholder-gray-500"
                    placeholder="https://linkedin.com/in/yourprofile"
                  />
                </div>
              </div>

              {/* Resume Upload */}
              <div>
                <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                  Resume/CV* <span className="text-gray-500">(PDF, DOC, DOCX - Max 5MB)</span>
                </label>
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-black"
                />
              </div>

              {/* Cover Letter */}
              <div>
                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-2">
                  Cover Letter*
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="text-black w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                  placeholder="Tell us why you're the perfect fit for this role. Include your relevant experience, achievements, and what excites you about joining TheSocialHawks..."
                />
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
                      Submitting Application...
                    </div>
                  ) : (
                    '🚀 Submit Application'
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus && (
                <div className="mt-6">
                  {submitStatus === 'success' ? (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-2">🎉</div>
                      <p className="text-green-700 font-medium text-lg mb-2">
                        Application Submitted Successfully!
                      </p>
                      <p className="text-green-600">
                        Thank you for applying! Our HR team will review your application and get back to you within 3-5 business days.
                      </p>
                    </div>
                  ) : (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
                      <div className="text-4xl mb-2">❌</div>
                      <p className="text-red-600 font-medium text-lg mb-2">
                        Application Failed
                      </p>
                      <p className="text-red-600">
                        Sorry, there was an error submitting your application. Please try again or contact us directly.
                      </p>
                    </div>
                  )}
                </div>
              )}
            </form>
          </div>
        )}

        {/* Job Details */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Responsibilities */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
              <ul className="space-y-3">
                {job.responsibilities.map((responsibility, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">•</span>
                    <span className="text-gray-600 leading-relaxed">{responsibility}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements</h2>
              <ul className="space-y-3">
                {job.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">✓</span>
                    <span className="text-gray-600 leading-relaxed">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Benefits & Perks</h2>
              <ul className="space-y-3">
                {job.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-gray-400 mr-3 mt-1">★</span>
                    <span className="text-gray-600 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Job Summary */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Job Summary</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Department</div>
                  <div className="font-medium text-gray-900">{job.department}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Location</div>
                  <div className="font-medium text-gray-900">{job.location}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Employment Type</div>
                  <div className="font-medium text-gray-900">{job.type}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Experience Required</div>
                  <div className="font-medium text-gray-900">{job.experience}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Salary Range</div>
                  <div className="font-medium text-gray-900">{job.salary}</div>
                </div>
                <div>
                  <div className="text-sm text-gray-500 mb-1">Application Deadline</div>
                  <div className="font-medium text-red-600">{formatDate(job.deadline)}</div>
                </div>
              </div>
            </div>

            {/* Share Job */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Share this Job</h3>
              <div className="flex space-x-3">
                <button className="flex-1 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                  Facebook
                </button>
                <button className="flex-1 bg-blue-400 text-white p-3 rounded-lg hover:bg-blue-500 transition-colors text-sm">
                  Twitter
                </button>
                <button className="flex-1 bg-blue-700 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors text-sm">
                  LinkedIn
                </button>
              </div>
            </div>

            {/* Contact HR */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Questions?</h3>
              <p className="text-gray-600 mb-4">
                Have questions about this role? Our HR team is here to help!
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📧</span>
                  <span>info@thesocialhawks.com</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <span className="mr-2">📱</span>
                  <span>+92 310-4999 701</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Jobs */}
        <div className="mt-12 text-center">
          <Link 
            href="/career"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            ← Back to All Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobApplication;