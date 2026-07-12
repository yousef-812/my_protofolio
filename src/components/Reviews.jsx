import React, { useState, useEffect } from 'react';
import { Star, CheckCircle, MessageSquare, AlertCircle } from 'lucide-react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [satisfaction, setSatisfaction] = useState('Fully Matched');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Load reviews on mount
  useEffect(() => {
    const stored = localStorage.getItem('yousef_public_reviews');
    if (stored) {
      setReviews(JSON.parse(stored));
    } else {
      localStorage.setItem('yousef_public_reviews', JSON.stringify([]));
      setReviews([]);
    }
  }, [submitted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newReview = {
      id: Date.now().toString(),
      name,
      stars: rating,
      satisfaction,
      comment,
      status: 'pending', // Starts as pending moderation
      date: new Date().toISOString()
    };

    const stored = localStorage.getItem('yousef_public_reviews');
    const list = stored ? JSON.parse(stored) : [];
    list.unshift(newReview);
    localStorage.setItem('yousef_public_reviews', JSON.stringify(list));

    // Reset form
    setName('');
    setRating(5);
    setSatisfaction('Fully Matched');
    setComment('');
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  // Only display approved reviews to the public
  const approvedReviews = reviews.filter(r => r.status === 'approved');

  // Helper to render stars
  const renderStars = (count, size = "w-4 h-4") => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star 
        key={i} 
        className={`${size} ${i < count ? 'fill-amber-400 text-amber-400' : 'text-zinc-300 fill-zinc-200'}`} 
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 px-6 bg-white text-[#1E1E1E] flex flex-col items-center">
      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* LEFT COLUMN: Public Reviews List */}
        <div className="md:col-span-6 text-left space-y-6">
          <div className="flex gap-4 items-center mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-zinc-800 flex-shrink-0"></span>
            <h2 className="text-3xl font-extrabold tracking-tight font-display text-[#1E1E1E]">
              Client Feedback
            </h2>
          </div>
          <p className="text-sm text-zinc-500 max-w-md mb-8">
            Real feedback from partners and clients. Only verified reviews audited by the administrator are published below.
          </p>

          <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
            {approvedReviews.length === 0 ? (
              <div className="text-center py-12 text-zinc-400 border border-zinc-200 border-dashed rounded-2xl bg-zinc-50">
                No reviews published yet. Be the first to leave feedback!
              </div>
            ) : (
              approvedReviews.map((rev) => (
                <div key={rev.id} className="p-6 bg-[#F4F4F6] rounded-2xl border border-zinc-200/60 space-y-3">
                  <div className="flex justify-between items-start gap-2 flex-wrap">
                    <div>
                      <h4 className="font-bold text-sm text-zinc-850 font-display">{rev.name}</h4>
                      <span className="text-[10px] text-zinc-400">{new Date(rev.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex">{renderStars(rev.stars)}</div>
                      <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full border ${
                        rev.satisfaction === 'Fully Matched' ? 'bg-emerald-50 border-emerald-250 text-emerald-600' :
                        rev.satisfaction === 'Partially Matched' ? 'bg-amber-50 border-amber-250 text-amber-600' :
                        'bg-rose-50 border-rose-250 text-rose-600'
                      }`}>
                        {rev.satisfaction}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs md:text-sm text-zinc-600 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Submit Review Form */}
        <div className="md:col-span-6 bg-[#E4E4E6] p-8 rounded-3xl border border-zinc-300/40 text-left flex flex-col justify-between">
          <div>
            <h3 className="font-bold text-lg font-display text-zinc-850 mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-indigo-500" /> Share Your Review
            </h3>
            <p className="text-xs text-zinc-500 mb-6">
              Rate your experience. Note that all reviews are queued for admin approval before they go public.
            </p>
          </div>

          {submitted ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4 animate-fadeIn">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 border border-indigo-500/25 text-indigo-600 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 animate-scaleUp" />
              </div>
              <h4 className="font-bold font-display text-base text-zinc-850">Thank You for Your Feedback!</h4>
              <p className="text-xs text-zinc-500 max-w-[280px] leading-relaxed">
                Your rating and comment have been received. They will be published to the public section shortly after admin audit.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs md:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Reviewer Name */}
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">Your Name</label>
                  <input 
                    type="text" 
                    placeholder="Alice Johnson" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs font-medium"
                    required
                  />
                </div>

                {/* Satisfaction selection */}
                <div className="space-y-1.5">
                  <label className="font-bold text-zinc-700">Requirement Match</label>
                  <select 
                    value={satisfaction}
                    onChange={(e) => setSatisfaction(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs font-medium cursor-pointer"
                  >
                    <option>Fully Matched</option>
                    <option>Partially Matched</option>
                    <option>Not Matched</option>
                  </select>
                </div>
              </div>

              {/* Star Rating Selector */}
              <div className="space-y-1.5">
                <label className="font-bold text-zinc-700 block">Rating</label>
                <div className="flex gap-1.5 items-center py-1">
                  {Array.from({ length: 5 }).map((_, idx) => {
                    const starVal = idx + 1;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setRating(starVal)}
                        onMouseEnter={() => setHoverRating(starVal)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="cursor-pointer focus:outline-none"
                      >
                        <Star 
                          className={`w-6 h-6 transition-all duration-150 ${
                            starVal <= (hoverRating || rating) 
                              ? 'fill-amber-400 text-amber-400 scale-105' 
                              : 'text-zinc-450 fill-zinc-300'
                          }`}
                        />
                      </button>
                    );
                  })}
                  <span className="text-zinc-500 font-bold text-xs ml-2 font-mono">
                    ({rating} / 5)
                  </span>
                </div>
              </div>

              {/* Comment Textarea */}
              <div className="space-y-1.5">
                <label className="font-bold text-zinc-700">Your Comment</label>
                <textarea 
                  rows="3" 
                  placeholder="Share details about the quality of delivery, features, or code structure..." 
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-zinc-350 rounded-xl focus:border-indigo-500 focus:outline-none text-zinc-800 text-xs resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
