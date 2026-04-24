import { Book, User } from '../types';

export const currentUser: User = {
  id: 'u1',
  name: 'Alex Rivera',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
  email: 'alex.rivera@example.com',
  bio: 'Avid reader, espresso enthusiast, and lover of all things sci-fi and historical fiction.',
  joinedDate: 'March 2024'
};

export const mockBooks: Book[] = [
  {
    id: '1',
    title: 'The Midnight Library',
    author: 'Matt Haig',
    coverImage: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800&auto=format&fit=crop',
    description: 'Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?',
    rating: 4.8,
    reviewCount: 1240,
    category: 'Fiction',
    reviews: [
      {
        id: 'r1',
        userId: 'u2',
        username: 'Sarah Jenkins',
        userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        content: 'Absolutely life-changing. It made me rethink every "what if" moment in my own life. A beautiful exploration of regret and hope.',
        date: '2 days ago'
      },
      {
        id: 'r2',
        userId: 'u3',
        username: 'David Chen',
        userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
        rating: 4,
        content: 'Engaging concept and very well written. Some parts felt a bit repetitive, but the emotional payoff at the end was worth it.',
        date: '1 week ago'
      }
    ]
  },
  {
    id: '2',
    title: 'Circe',
    author: 'Madeline Miller',
    coverImage: 'https://images.unsplash.com/photo-1543004471-240ce44a0be1?q=80&w=800&auto=format&fit=crop',
    description: 'In the house of Helios, god of the sun and mightiest of the Titans, a daughter is born. But Circe is a strange child—not powerful, like her father, nor viciously alluring like her mother. Turning to the world of mortals for companionship, she discovers that she does possess power—the power of witchcraft, which can transform rivals into monsters and menace the gods themselves.',
    rating: 4.9,
    reviewCount: 890,
    category: 'Mythology',
    reviews: [
      {
        id: 'r3',
        userId: 'u4',
        username: 'Emma Watson',
        userAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop',
        rating: 5,
        content: 'Miller has a way with words that is simply spellbinding. Circe is a character you will carry with you long after the final page.',
        date: '3 days ago'
      }
    ]
  },
  {
    id: '3',
    title: 'Project Hail Mary',
    author: 'Andy Weir',
    coverImage: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=800&auto=format&fit=crop',
    description: 'Ryland Grace is the sole survivor on a desperate, last-chance mission—and if he fails, humanity and the earth itself will perish. Except that right now, he doesn’t know that. He can’t even remember his own name, let alone the nature of his assignment or how to complete it.',
    rating: 4.7,
    reviewCount: 2100,
    category: 'Sci-Fi',
    reviews: []
  },
  {
    id: '4',
    title: 'Klara and the Sun',
    author: 'Kazuo Ishiguro',
    coverImage: 'https://images.unsplash.com/photo-1589998059171-d88d6645f51f?q=80&w=800&auto=format&fit=crop',
    description: 'Klara and the Sun, the first novel by Kazuo Ishiguro since he was awarded the Nobel Prize in Literature, tells the story of Klara, an Artificial Friend with outstanding observational qualities, who, from her place in the shop, watches carefully the behavior of those who come in to browse, and of those who pass on the street outside.',
    rating: 4.5,
    reviewCount: 750,
    category: 'Dystopian',
    reviews: []
  },
  {
    id: '5',
    title: 'The Seven Husbands of Evelyn Hugo',
    author: 'Taylor Jenkins Reid',
    coverImage: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=800&auto=format&fit=crop',
    description: 'Aging and reclusive Hollywood movie icon Evelyn Hugo is finally ready to tell the truth about her glamorous and scandalous life. But when she chooses unknown magazine reporter Monique Grant for the job, no one is more astounded than Monique herself.',
    rating: 4.8,
    reviewCount: 3200,
    category: 'Historical Fiction',
    reviews: []
  },
  {
    id: '6',
    title: 'Atomic Habits',
    author: 'James Clear',
    coverImage: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
    description: 'No matter your goals, Atomic Habits offers a proven framework for improving—every day. James Clear, one of the world’s leading experts on habit formation, reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.',
    rating: 4.9,
    reviewCount: 5400,
    category: 'Self-Help',
    reviews: []
  }
];
