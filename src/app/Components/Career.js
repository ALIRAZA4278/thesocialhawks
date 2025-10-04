'use client';
import { useState } from 'react';
import Link from 'next/link';
import { jobsData, getFeaturedJobs, getDepartments } from '../data/jobs';
import Navbar from './Navbar';

const Career = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const featuredJobs = getFeaturedJobs();
  const departments = getDepartments();
  
  // Filter jobs based on selected department and search term
  const filteredJobs = jobsData.filter(job => {
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesDepartment && matchesSearch;
  });

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(5deg); }
          66% { transform: translateY(-5px) rotate(-5deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-gray-50">
        {/* Navbar */}
        <Navbar />
        
        {/* Hero Section - Simple */}
      <section className="bg-purple-600 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Explore Careers at TheSocialHawks
          </h1>
          
          <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
            At TheSocialHawks, we&apos;re focused on doing good work and growing together. If you&apos;re passionate about marketing and looking for a place to learn and contribute, we&apos;d love to have you on the team. Check out our openings and see if you&apos;d be a good fit.
          </p>

          <button 
            onClick={() => document.getElementById('job-listings').scrollIntoView({ behavior: 'smooth' })}
            className="bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-200"
          >
            View Openings
          </button>
        </div>
      </section>

      {/* Company Culture & Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-purple-800 text-white relative overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-pink-400/20 rounded-full blur-2xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why Choose 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-300"> TheSocialHawks?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              We&apos;re not just a workplace - we&apos;re a launchpad for your career, creativity, and personal growth in the digital marketing universe.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Benefit 1 - Learning & Development */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-60"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Learning & Development</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Access to premium courses, certifications, conferences, and workshops to keep you ahead of industry trends.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Premium learning resources</li>
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Industry certifications</li>
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Conference attendance</li>
              </ul>
            </div>

            {/* Benefit 2 - Work-Life Balance */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full opacity-60"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                <span className="text-2xl">⚖️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Work-Life Balance</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Flexible schedules, remote work options, and a culture that values your personal time and well-being.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Flexible working hours</li>
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Remote work options</li>
                <li className="flex items-center"><span className="text-emerald-400 mr-2">✓</span> Wellness programs</li>
              </ul>
            </div>

            {/* Benefit 3 - Competitive Rewards */}
            <div className="group relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105">
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full opacity-60"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300">
                <span className="text-2xl">💰</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Competitive Rewards</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Attractive salary packages, performance bonuses, health benefits, and equity options for key positions.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Competitive salaries</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Performance bonuses</li>
                <li className="flex items-center"><span className="text-yellow-400 mr-2">✓</span> Health insurance</li>
              </ul>
            </div>
          </div>

          {/* Culture Highlights */}
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 lg:mb-8">Our Culture in Numbers</h3>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-1 lg:mb-2">95%</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400 mb-1 lg:mb-2">24</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Average Age</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-1 lg:mb-2">40+</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 mb-1 lg:mb-2">3.5</div>
                <div className="text-gray-400 text-xs sm:text-sm lg:text-base">Years Avg. Tenure</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section id="job-listings" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
              Job Opportunities
            </h2>
          </div>

          {/* Enhanced Filters */}
          {/* <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8 mb-8 lg:mb-12 border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative">
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <span className="text-gray-600 mr-2">🔍</span>
                  Search Jobs
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search by title, skills, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 placeholder-gray-500 transition-all duration-200 text-sm sm:text-base"
                  />
                  <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <span className="text-base sm:text-lg">🔍</span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="flex items-center text-sm font-bold text-gray-800 mb-3">
                  <span className="text-gray-600 mr-2">🏢</span>
                  Department
                </label>
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 sm:px-6 py-3 sm:py-4 pl-10 sm:pl-12 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-gray-800 transition-all duration-200 appearance-none cursor-pointer text-sm sm:text-base"
                  >
                    <option value="All">All Departments</option>
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                  <div className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <span className="text-base sm:text-lg">🏢</span>
                  </div>
                  <div className="absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none">
                    <span className="text-base sm:text-lg">▼</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 text-sm text-gray-600">
              Showing {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''}
              {selectedDepartment !== 'All' && ` in ${selectedDepartment}`}
              {searchTerm && ` matching "${searchTerm}"`}
            </div>
          </div> */}

          {/* Job Listings */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Link key={job.id} href={`/career/${job.slug}`}
                  className="block bg-white rounded-lg border border-gray-300 hover:shadow-md transition p-6 h-full">
                  <div className="text-sm text-gray-500 mb-2">{job.type}</div>
                  <div className="text-xl font-semibold text-gray-900 mb-1">{job.title}</div>
                  <div className="text-gray-600 text-sm">{job.location}</div>
                </Link>
              ))
            ) : (
              <div className="text-center py-12 col-span-full">
                <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-600 text-sm sm:text-base px-4">Try adjusting your search criteria or check back later for new opportunities.</p>
              </div>
            )}
          </div>
        </div>
      </section>
        {/* Bottom Section */}
          <div className="border-t bg-primary border-gray-800  p-4 px-8 mt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-white text-sm">
                <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              </p>
              <p className="text-text-white  text-sm">
                ©socialhawks. All Rights Reserved.
              </p>
            </div>
          </div>  
      </div>
    </>
  );
};

export default Career;