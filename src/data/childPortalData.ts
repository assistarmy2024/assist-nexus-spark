
export interface Game {
  id: number;
  name: string;
  description: string;
  iconUrl: string;
  routePath: string;
}

export interface Quiz {
  id: number;
  title: string;
  questionText: string;
  optionA: string;
  optionB: string;
  optionC: string;
  optionD: string;
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  category: string;
}

export interface MathExercise {
  id: number;
  problemStatement: string;
  solution: string;
  difficultyLevel: 'Easy' | 'Medium' | 'Hard';
}

export interface Video {
  id: number;
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  durationSeconds: number;
}

export interface Audio {
  id: number;
  title: string;
  description: string;
  audioUrl: string;
  durationSeconds: number;
}

export const games: Game[] = [
  {
    id: 1,
    name: 'Shape Match Adventure',
    description: 'Match shapes of different colors and sizes to complete each level!',
    iconUrl: '/assets/icons/shape-match.png',
    routePath: '/child/game/shape-match',
  },
  {
    id: 2,
    name: 'Alphabet Zoo',
    description: 'Learn the alphabet with friendly animals for each letter',
    iconUrl: '/assets/icons/alphabet-zoo.png',
    routePath: '/child/game/alphabet-zoo',
  },
  {
    id: 3,
    name: 'Number Cruncher',
    description: 'Solve simple math problems in this fun counting game',
    iconUrl: '/assets/icons/number-cruncher.png',
    routePath: '/child/game/number-cruncher',
  },
  {
    id: 4,
    name: 'Color Mixer',
    description: 'Mix primary colors to create new ones in this creative puzzle game',
    iconUrl: '/assets/icons/color-mixer.png',
    routePath: '/child/game/color-mixer',
  },
  {
    id: 5,
    name: 'Memory Match',
    description: 'Find matching pairs of cards to test your memory skills',
    iconUrl: '/assets/icons/memory-match.png',
    routePath: '/child/game/memory-match',
  },
  // Add more games as in the SQL script
];

export const quizzes: Quiz[] = [
  {
    id: 1,
    title: 'Animal Facts',
    questionText: 'Which animal is known as the King of the Jungle?',
    optionA: 'Elephant',
    optionB: 'Lion',
    optionC: 'Tiger',
    optionD: 'Giraffe',
    correctAnswer: 'B',
    category: 'Animals',
  },
  {
    id: 2,
    title: 'Space Knowledge',
    questionText: 'Which is the closest planet to the Sun?',
    optionA: 'Earth',
    optionB: 'Venus',
    optionC: 'Mercury',
    optionD: 'Mars',
    correctAnswer: 'C',
    category: 'Science',
  },
  {
    id: 3,
    title: 'Math Quiz',
    questionText: 'What is 5 + 7?',
    optionA: '10',
    optionB: '11',
    optionC: '12',
    optionD: '13',
    correctAnswer: 'C',
    category: 'Math',
  },
  // Add more quizzes as in the SQL script
];

export const mathExercises: MathExercise[] = [
  {
    id: 1,
    problemStatement: '5 + 3 = ?',
    solution: '8',
    difficultyLevel: 'Easy',
  },
  {
    id: 2,
    problemStatement: '10 - 2 = ?',
    solution: '8',
    difficultyLevel: 'Easy',
  },
  {
    id: 3,
    problemStatement: '2 × 4 = ?',
    solution: '8',
    difficultyLevel: 'Easy',
  },
  // Add more math exercises as in the SQL script
];

export const videos: Video[] = [
  {
    id: 1,
    title: 'Counting with Cats',
    description: 'Learn to count from 1 to 10 with funny cats!',
    videoUrl: '/assets/videos/counting-cats.mp4',
    thumbnailUrl: '/assets/thumbnails/counting-cats.jpg',
    durationSeconds: 180,
  },
  {
    id: 2,
    title: 'The Solar System Adventure',
    description: 'Join Alex on a journey through our solar system',
    videoUrl: '/assets/videos/solar-system.mp4',
    thumbnailUrl: '/assets/thumbnails/solar-system.jpg',
    durationSeconds: 240,
  },
  // Add more videos as in the SQL script
];

export const audios: Audio[] = [
  {
    id: 1,
    title: 'The Three Little Pigs',
    description: 'A classic fairy tale about three pigs and a wolf',
    audioUrl: '/assets/audio/three-little-pigs.mp3',
    durationSeconds: 180,
  },
  {
    id: 2,
    title: 'Little Red Riding Hood',
    description: 'The adventure of a little girl on her way to grandma\'s house',
    audioUrl: '/assets/audio/red-riding-hood.mp3',
    durationSeconds: 165,
  },
  // Add more audios as in the SQL script
];
