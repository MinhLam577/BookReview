import { Star, StarHalf } from 'lucide-react';
import { cn } from '../lib/utils';

interface RatingStarsProps {
  rating: number;
  className?: string;
  size?: number;
}

export default function RatingStars({ rating, className, size = 16 }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className={cn('flex items-center gap-0.5', className)}>
      {[...Array(fullStars)].map((_, i) => (
        <Star key={`full-${i}`} size={size} className="fill-brand-primary text-brand-primary" />
      ))}
      {hasHalfStar && <StarHalf size={size} className="fill-brand-primary text-brand-primary" />}
      {[...Array(emptyStars)].map((_, i) => (
        <Star key={`empty-${i}`} size={size} className="text-brand-primary opacity-20" />
      ))}
      <span className="ml-2 text-sm font-medium opacity-70">{rating.toFixed(1)}</span>
    </div>
  );
}
