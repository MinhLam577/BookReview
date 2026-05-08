import { motion } from "motion/react";
import { MapPin, Calendar, Mail } from "lucide-react";
import ReviewCard from "../components/ReviewCard";
import { useMe } from "../hooks/useMe";
import { useNavigate } from "react-router-dom";
import { useLogout } from "../hooks/useLockout";
import { convertToTimeAgo } from "../lib/convertTime";
import ReviewSkeleton from "../components/ReviewSkeleton";

export default function Profile() {
    const { data: currentUser, isLoading } = useMe();
    const navigate = useNavigate();
    const logOut = useLogout();
    const user = currentUser ?? null;
    const isLoggedIn = !!user;
    const userReviews = user
        ? user.reviews.map((rw) => ({
              review: {
                  ...rw,
                  userAvatar: user.avatar,
                  username: user.name,
                  date: convertToTimeAgo(rw.date),
              },
              book: rw.book,
          }))
        : [];
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
                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-brand-accent mx-auto mb-6">
                                <img
                                    src={
                                        user?.avatar ||
                                        "/images/default-user.webp"
                                    }
                                    alt={user?.name || "Guest"}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Name */}
                            <h1 className="text-3xl font-serif font-bold mb-2">
                                {user?.name || "Guest"}
                            </h1>

                            {/* Role / tagline */}
                            <p className="text-sm font-bold uppercase tracking-widest opacity-40 mb-6">
                                {isLoggedIn ? "Avid Reader" : "Welcome Guest"}
                            </p>

                            {/* Bio */}
                            <p className="text-brand-primary/70 leading-relaxed mb-8">
                                {user?.bio || "No bio yet."}
                            </p>

                            {/* Info */}
                            <div className="space-y-4 text-left border-t border-black/5 pt-8">
                                <div className="flex items-center gap-3 text-brand-primary/60">
                                    <Mail size={18} />
                                    <span className="text-sm font-medium">
                                        {user?.email || "guest@gmail.com"}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-brand-primary/60">
                                    <MapPin size={18} />
                                    <span className="text-sm font-medium">
                                        {isLoggedIn
                                            ? "San Francisco, CA"
                                            : "Unknown"}
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 text-brand-primary/60">
                                    <Calendar size={18} />
                                    <span className="text-sm font-medium">
                                        {user?.joinedDate
                                            ? `Joined ${user.joinedDate}`
                                            : "Not joined yet"}
                                    </span>
                                </div>
                            </div>

                            {/* Action buttons */}
                            {isLoggedIn ? (
                                <>
                                    <button
                                        onClick={logOut}
                                        className="w-full mt-4 py-4 border border-red-300 text-red-500 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-red-50 transition-all cursor-pointer"
                                    >
                                        Logout
                                    </button>
                                </>
                            ) : (
                                <button
                                    onClick={() => navigate("/login")}
                                    className="w-full mt-10 py-4 bg-brand-primary text-white rounded-full font-bold hover:opacity-90 transition-all"
                                >
                                    Login
                                </button>
                            )}
                        </div>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <div className="bg-white p-6 rounded-3xl border border-black/5 text-center">
                                <p className="text-2xl font-serif font-bold">
                                    {user?.totalBooksRead || 0}
                                </p>
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                                    Books Read
                                </p>
                            </div>
                            <div className="bg-white p-6 rounded-3xl border border-black/5 text-center">
                                <p className="text-2xl font-serif font-bold">
                                    {user?.totalReviews || 0}
                                </p>
                                <p className="text-[10px] font-bold uppercase tracking-widest opacity-40">
                                    Reviews
                                </p>
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
                        <h2 className="text-4xl font-serif font-bold mb-12">
                            My Reviews
                        </h2>

                        <div className="space-y-8">
                            {isLoading ? (
                                <ReviewSkeleton />
                            ) : userReviews.length === 0 ? (
                                <div className="text-center py-16 border border-dashed border-black/10 rounded-2xl">
                                    <div className="text-5xl mb-4">📖</div>

                                    <h3 className="text-lg font-semibold mb-2">
                                        No reviews yet
                                    </h3>

                                    <p className="text-sm text-gray-500 mb-6">
                                        Start sharing your thoughts on books
                                        you've read.
                                    </p>

                                    <button
                                        onClick={() => navigate("/explore")}
                                        className="px-6 py-3 bg-brand-primary text-white rounded-full font-medium hover:opacity-90"
                                    >
                                        Browse Books
                                    </button>
                                </div>
                            ) : (
                                userReviews.map((item, index) => (
                                    <motion.div
                                        key={item.review.id} // 🔥 tránh dùng index
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.3 + index * 0.1,
                                        }}
                                    >
                                        <ReviewCard
                                            review={item.review}
                                            book={item.book}
                                        />
                                    </motion.div>
                                ))
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
