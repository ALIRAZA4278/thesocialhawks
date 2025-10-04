"use client"

const Socialmedia = () => {
    return (
        <div className="text-center mb-8">
            <div className="bg-purple-600 rounded-2xl p-6 mb-8">
                <h3 className="text-white font-bold text-xl mb-3">Get a free anlysis on your brand Now</h3>
                <p className="text-gray-200 mb-4">Get a FREE professional review of all your social media accounts!</p>
                <button
                    type="button"
                    onClick={() => window.open('/social-review', '_blank')}
                    className="group inline-flex items-center gap-2 bg-white text-primary font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                    <span className="text-xl group-hover:animate-pulse">📊</span>
                    Get Your FREE Review Now
                    <span className="group-hover:translate-x-1 transition-transform duration-300">✨</span>
                </button>
            </div>
        </div>
    )
}

export default Socialmedia
