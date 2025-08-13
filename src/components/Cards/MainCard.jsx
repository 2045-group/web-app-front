import React, { useState } from 'react'

const MainCard = ({ data }) => {
  const [isFavorite, setIsFavorite] = useState(false)

  if (!data) return null

  // Calculate discounted price
  const discountedPrice = data.price - (data.price * data.discountPercentage / 100)

  // Generate star rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5
    const stars = []

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <svg key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <div key={i} className="relative w-3 h-3">
            <svg className="absolute inset-0 w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
            <svg className="absolute inset-0 w-3 h-3 text-yellow-400 overflow-hidden" fill="currentColor" viewBox="0 0 24 24" style={{ clipPath: 'inset(0 50% 0 0)' }}>
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        )
      } else {
        stars.push(
          <svg key={i} className="w-3 h-3 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        )
      }
    }

    return stars
  }

  // Get availability color and icon
  const getAvailabilityStyle = () => {
    if (data.stock === 0) return { color: 'text-red-600', bg: 'bg-red-50', icon: '❌' }
    if (data.stock < 10) return { color: 'text-orange-600', bg: 'bg-orange-50', icon: '⚠️' }
    return { color: 'text-green-600', bg: 'bg-green-50', icon: '✅' }
  }

  const availabilityStyle = getAvailabilityStyle()

  return (
    <div className="bg-white cursor-pointer rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200">
      {/* Image Section with Creative Overlay */}
      <div className="relative aspect-square overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 flex items-center justify-center">
          {data.thumbnail && data.thumbnail !== "..." ? (
            <img
              src={data.thumbnail}
              alt={data.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          ) : (
            <div className="text-4xl text-gradient bg-gradient-to-r from-purple-400 to-pink-400">📦</div>
          )}
        </div>

        {/* Creative gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Top badges row */}
        <div className="absolute top-2 left-2 right-2 flex justify-between items-start">
          {/* Discount Badge */}
          {data.discountPercentage > 0 && (
            <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-lg text-xs font-bold shadow-lg">
              <span className="block">-{Math.round(data.discountPercentage)}%</span>
              <span className="block text-[10px] opacity-90">OFF</span>
            </div>
          )}

          {/* Favorite Button with animation */}
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="w-8 h-8 bg-white/95 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:scale-125 active:scale-95 transition-all duration-200 border border-white/20"
          >
            <svg className={`w-4 h-4 transition-all duration-200 ${isFavorite ? 'fill-red-500 text-red-500 scale-125' : 'text-gray-600 hover:text-red-400'}`} viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06A5.5,5.5,0,0,0,20.84,4.61Z" />
            </svg>
          </button>
        </div>

        {/* Bottom quick action on hover */}
        <div className="absolute bottom-2 left-2 right-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-white/95 backdrop-blur-md text-gray-900 py-2 px-3 rounded-lg font-medium hover:bg-white transition-all duration-200 shadow-lg border border-white/20 text-sm">
            🔍 Quick View
          </button>
        </div>
      </div>

      {/* Content Section with Creative Layout */}
      <div className="p-3 space-y-3">
        {/* Brand & Category with Creative Styling */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">{(data.brand || data.category).charAt(0).toUpperCase()}</span>
            </div>
            <span className="text-xs font-semibold text-gray-700 capitalize truncate">
              {data.brand || data.category}
            </span>
          </div>
          <div className="flex items-center space-x-1">
            {renderStars(data.rating)}
            <span className="text-xs text-gray-500 font-medium">({data.rating})</span>
          </div>
        </div>

        {/* Title with Better Typography */}
        <div>
          <h3 className="font-bold text-gray-900 text-sm leading-tight mb-1 line-clamp-2 min-h-[2.5rem] hover:text-blue-600 transition-colors duration-200">
            {data.title}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Stock Status with Creative Indicator */}
        <div className={`flex items-center space-x-2 px-2 py-1 rounded-lg ${availabilityStyle.bg}`}>
          <span className="text-sm">{availabilityStyle.icon}</span>
          <span className={`text-xs font-semibold ${availabilityStyle.color}`}>
            {data.stock === 0 ? 'Out of Stock' :
              data.stock < 10 ? `Only ${data.stock} left` :
                'In Stock'}
          </span>
          {data.stock > 0 && (
            <div className="flex-1 bg-gray-200 rounded-full h-1.5">
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${data.stock < 5 ? 'bg-red-400' :
                    data.stock < 15 ? 'bg-orange-400' :
                      'bg-green-400'
                  }`}
                style={{ width: `${Math.min((data.stock / 20) * 100, 100)}%` }}
              ></div>
            </div>
          )}
        </div>

        {/* Price Section with Creative Layout */}
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-lg font-bold text-gray-900">
                  ${discountedPrice.toFixed(2)}
                </span>
                {data.discountPercentage > 0 && (
                  <span className="text-sm text-gray-500 line-through">
                    ${data.price.toFixed(2)}
                  </span>
                )}
              </div>
              {data.discountPercentage > 0 && (
                <span className="text-xs text-green-600 font-medium">
                  Save ${(data.price - discountedPrice).toFixed(2)}
                </span>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Free shipping</div>
              <div className="text-xs text-blue-600 font-medium">⚡ Fast delivery</div>
            </div>
          </div>
        </div>

        {/* Action Buttons with Creative Design */}
        <div className="flex space-x-2">
          <button
            disabled={data.stock === 0}
            className={`flex-1 py-2.5 px-3 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center space-x-2 text-sm ${data.stock === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl active:scale-95'
              }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13v5a2 2 0 002 2h7.5" />
            </svg>
            <span className="hidden sm:inline">
              {data.stock === 0 ? 'Sold Out' : 'Add to Cart'}
            </span>
            <span className="sm:hidden">
              {data.stock === 0 ? 'Sold' : 'Add'}
            </span>
          </button>

          <button className="bg-white border-2 border-gray-200 hover:border-blue-300 text-gray-700 hover:text-blue-600 px-3 py-2.5 rounded-xl transition-all duration-200 hover:shadow-md active:scale-95">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
          </button>
        </div>

        {/* Additional Product Info */}
        <div className="flex items-center justify-between text-xs text-gray-500 pt-1 border-t border-gray-100">
          <div className="flex items-center space-x-3">
            <span className="flex items-center space-x-1">
              <span>🚚</span>
              <span>Ships in {data.shippingInformation?.split(' ')[2] || '1-2'} days</span>
            </span>
          </div>
          <span className="flex items-center space-x-1">
            <span>🔄</span>
            <span>30d return</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default MainCard