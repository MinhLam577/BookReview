import { motion } from 'motion/react';
import { Settings, MapPin, Calendar, Mail } from 'lucide-react';
import { currentUser, mockBooks } from '../data/mockData';
import ReviewCard from '../components/ReviewCard';

export default function Profile() {
  // Mocking that the first review of the first book is by the current user
  const userReviews = [
    {
      review: mockBooks[0].reviews[0],
      book: mockBooks[0]
    },
    {
      review: mockBooks[1].reviews[0],
      book: mockBooks[1]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left: Profile Info */}
        <div className="lg:col-span-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="bg-white rounded-[2.5rem] p-8 border border-black/5 shadow-sm text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-accent mx-auto mb-6">
                <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
              </div>
              
              <h1 className="text-3xl font-serif font-bold mb-2">{currentUser.name}</h1>
              <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">Avid Reader</p>
              
              <p className="text-brand-primary/70 leading-relaxed mb-8">
                {currentUser.bio}
              </p>

              <div className="space-y-4 text-left border-t border-black/5 pt-8">
                <div className="flex items-center gap-3 text-brand-primary/60">
                  <Mail size={18} />
                  <span className="text-sm font-medium">{currentUser.email}</span>
                </div>
                <div className="flex items-center gap-3 text-brand-primary/60">
                  <MapPin size={18} />
                  <span className="text-sm font-medium">San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-3 text-brand-primary/60">
                  <Calendar size={18} />
                  <span className="text-sm font-medium">Joined {currentUser.joinedDate}</span>
                </div>
              </div>

              <button className="w-full mt-10 py-4 border border-black/10 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-black/5 transition-all">
                <Settings size={18} />
                Edit Profile
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white p-6 rounded-3xl border border-black/5 text-center">
                <p className="text-2xl font-serif font-bold">124</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Books Read</p>
              </div>
              <div className="bg-white p-6 rounded-3xl border border-black/5 text-center">
                <p className="text-2xl font-serif font-bold">42</p>
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">Reviews</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right: User Reviews */}
        <div className="lg:col-span-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-4xl font-serif font-bold mb-12">My Reviews</h2>
            
            <div className="space-y-8">
              {userReviews.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <ReviewCard 
                    review={item.review} 
                    book={item.book} 
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
