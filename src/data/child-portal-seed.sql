
-- Child Portal Database Seed Script
-- This script creates and populates tables for the Child Portal application

BEGIN TRANSACTION;

-- Create Games table
CREATE TABLE IF NOT EXISTS games (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    icon_url VARCHAR(255) NOT NULL,
    route_path VARCHAR(100) NOT NULL
);

-- Create Quizzes table
CREATE TABLE IF NOT EXISTS quizzes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    question_text TEXT NOT NULL,
    option_a VARCHAR(255) NOT NULL,
    option_b VARCHAR(255) NOT NULL,
    option_c VARCHAR(255) NOT NULL,
    option_d VARCHAR(255) NOT NULL,
    correct_answer CHAR(1) NOT NULL,
    category VARCHAR(50) NOT NULL
);

-- Create MathExercises table
CREATE TABLE IF NOT EXISTS math_exercises (
    id SERIAL PRIMARY KEY,
    problem_statement VARCHAR(255) NOT NULL,
    solution VARCHAR(100) NOT NULL,
    difficulty_level VARCHAR(20) NOT NULL
);

-- Create Videos table
CREATE TABLE IF NOT EXISTS videos (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    video_url VARCHAR(255) NOT NULL,
    thumbnail_url VARCHAR(255) NOT NULL,
    duration_seconds INTEGER NOT NULL
);

-- Create Audios table
CREATE TABLE IF NOT EXISTS audios (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT NOT NULL,
    audio_url VARCHAR(255) NOT NULL,
    duration_seconds INTEGER NOT NULL
);

-- Insert data into Games table
INSERT INTO games (name, description, icon_url, route_path) VALUES
('Shape Match Adventure', 'Match shapes of different colors and sizes to complete each level!', '/assets/icons/shape-match.png', '/child/game/shape-match'),
('Alphabet Zoo', 'Learn the alphabet with friendly animals for each letter', '/assets/icons/alphabet-zoo.png', '/child/game/alphabet-zoo'),
('Number Cruncher', 'Solve simple math problems in this fun counting game', '/assets/icons/number-cruncher.png', '/child/game/number-cruncher'),
('Color Mixer', 'Mix primary colors to create new ones in this creative puzzle game', '/assets/icons/color-mixer.png', '/child/game/color-mixer'),
('Memory Match', 'Find matching pairs of cards to test your memory skills', '/assets/icons/memory-match.png', '/child/game/memory-match'),
('Dinosaur Discovery', 'Dig for dinosaur fossils and learn about prehistoric creatures', '/assets/icons/dinosaur-discovery.png', '/child/game/dinosaur-discovery'),
('Space Explorer', 'Travel through the solar system and learn about planets', '/assets/icons/space-explorer.png', '/child/game/space-explorer'),
('Word Builder', 'Create words from given letters to improve vocabulary', '/assets/icons/word-builder.png', '/child/game/word-builder'),
('Animal Sounds', 'Listen and match sounds to the correct animals', '/assets/icons/animal-sounds.png', '/child/game/animal-sounds'),
('Pattern Maker', 'Complete sequences by identifying the pattern', '/assets/icons/pattern-maker.png', '/child/game/pattern-maker'),
('Bubble Pop Math', 'Pop bubbles with the correct answers to math problems', '/assets/icons/bubble-pop.png', '/child/game/bubble-pop'),
('Story Creator', 'Create your own stories by choosing characters and settings', '/assets/icons/story-creator.png', '/child/game/story-creator'),
('Ocean Adventure', 'Explore the ocean and learn about marine life', '/assets/icons/ocean-adventure.png', '/child/game/ocean-adventure'),
('Music Maker', 'Create melodies by arranging musical notes', '/assets/icons/music-maker.png', '/child/game/music-maker'),
('Racing Counters', 'Race cars by counting correctly to move forward', '/assets/icons/racing-counters.png', '/child/game/racing-counters'),
('Weather Watch', 'Learn about different weather patterns and seasons', '/assets/icons/weather-watch.png', '/child/game/weather-watch'),
('Healthy Heroes', 'Learn about nutrition and exercise in this adventure game', '/assets/icons/healthy-heroes.png', '/child/game/healthy-heroes'),
('Science Lab', 'Conduct virtual experiments to learn basic science concepts', '/assets/icons/science-lab.png', '/child/game/science-lab'),
('Time Teller', 'Learn to tell time with interactive clock puzzles', '/assets/icons/time-teller.png', '/child/game/time-teller'),
('Geography Explorer', 'Discover countries, continents, and landmarks around the world', '/assets/icons/geography-explorer.png', '/child/game/geography-explorer');

-- Insert data into Quizzes table
INSERT INTO quizzes (title, question_text, option_a, option_b, option_c, option_d, correct_answer, category) VALUES
('Animal Facts', 'Which animal is known as the King of the Jungle?', 'Elephant', 'Lion', 'Tiger', 'Giraffe', 'B', 'Animals'),
('Space Knowledge', 'Which is the closest planet to the Sun?', 'Earth', 'Venus', 'Mercury', 'Mars', 'C', 'Science'),
('Math Quiz', 'What is 5 + 7?', '10', '11', '12', '13', 'C', 'Math'),
('Colors', 'What color do you get when you mix blue and yellow?', 'Purple', 'Orange', 'Green', 'Brown', 'C', 'Art'),
('Body Parts', 'Which organ pumps blood around your body?', 'Brain', 'Lungs', 'Heart', 'Stomach', 'C', 'Science'),
('Dinosaurs', 'Which dinosaur could fly?', 'Tyrannosaurus Rex', 'Stegosaurus', 'Pterodactyl', 'Triceratops', 'C', 'Animals'),
('Ocean Life', 'Which sea creature has eight legs?', 'Jellyfish', 'Octopus', 'Shark', 'Dolphin', 'B', 'Animals'),
('Fruits', 'Which fruit is yellow and curved?', 'Apple', 'Orange', 'Banana', 'Strawberry', 'C', 'Food'),
('Transportation', 'Which vehicle flies in the sky?', 'Car', 'Boat', 'Train', 'Airplane', 'D', 'Transportation'),
('Weather', 'What falls from clouds during a storm?', 'Snow', 'Rain', 'Sunshine', 'Wind', 'B', 'Science'),
('Plants', 'What do plants need to grow?', 'Chocolate', 'Toys', 'Water', 'Books', 'C', 'Science'),
('Shapes', 'How many sides does a triangle have?', 'Two', 'Three', 'Four', 'Five', 'B', 'Math'),
('Animals', 'Which animal hops?', 'Snake', 'Fish', 'Rabbit', 'Lion', 'C', 'Animals'),
('Planets', 'Which planet has rings around it?', 'Earth', 'Mars', 'Saturn', 'Jupiter', 'C', 'Science'),
('Counting', 'How many legs does a spider have?', 'Four', 'Six', 'Eight', 'Ten', 'C', 'Math'),
('Music', 'Which of these is a string instrument?', 'Drum', 'Guitar', 'Flute', 'Trumpet', 'B', 'Music'),
('Seasons', 'In which season do leaves fall from trees?', 'Summer', 'Winter', 'Spring', 'Autumn', 'D', 'Science'),
('Sports', 'Which sport uses a racket?', 'Football', 'Swimming', 'Tennis', 'Running', 'C', 'Sports'),
('Food', 'Which food is made from milk?', 'Bread', 'Cheese', 'Apple', 'Carrot', 'B', 'Food'),
('Insects', 'Which insect makes honey?', 'Ant', 'Butterfly', 'Bee', 'Spider', 'C', 'Animals');

-- Insert data into MathExercises table
INSERT INTO math_exercises (problem_statement, solution, difficulty_level) VALUES
('5 + 3 = ?', '8', 'Easy'),
('10 - 2 = ?', '8', 'Easy'),
('2 × 4 = ?', '8', 'Easy'),
('3 + 5 = ?', '8', 'Easy'),
('9 - 1 = ?', '8', 'Easy'),
('6 + 6 = ?', '12', 'Easy'),
('15 - 5 = ?', '10', 'Easy'),
('7 + 8 = ?', '15', 'Medium'),
('20 - 7 = ?', '13', 'Medium'),
('4 × 3 = ?', '12', 'Easy'),
('18 ÷ 2 = ?', '9', 'Medium'),
('9 + 11 = ?', '20', 'Medium'),
('25 - 10 = ?', '15', 'Medium'),
('3 × 5 = ?', '15', 'Medium'),
('16 ÷ 4 = ?', '4', 'Medium'),
('12 + 12 = ?', '24', 'Medium'),
('30 - 15 = ?', '15', 'Medium'),
('6 × 4 = ?', '24', 'Medium'),
('27 ÷ 3 = ?', '9', 'Medium'),
('5 × 6 = ?', '30', 'Medium');

-- Insert data into Videos table
INSERT INTO videos (title, description, video_url, thumbnail_url, duration_seconds) VALUES
('Counting with Cats', 'Learn to count from 1 to 10 with funny cats!', '/assets/videos/counting-cats.mp4', '/assets/thumbnails/counting-cats.jpg', 180),
('The Solar System Adventure', 'Join Alex on a journey through our solar system', '/assets/videos/solar-system.mp4', '/assets/thumbnails/solar-system.jpg', 240),
('Dinosaur Facts for Kids', 'Learn amazing facts about dinosaurs that lived millions of years ago', '/assets/videos/dinosaur-facts.mp4', '/assets/thumbnails/dinosaur-facts.jpg', 210),
('ABC Song', 'Sing along with the alphabet song and learn your ABCs', '/assets/videos/abc-song.mp4', '/assets/thumbnails/abc-song.jpg', 150),
('Animal Sounds for Children', 'Learn what sounds different animals make', '/assets/videos/animal-sounds.mp4', '/assets/thumbnails/animal-sounds.jpg', 200),
('Simple Addition', 'Learn how to add numbers together with fun examples', '/assets/videos/simple-addition.mp4', '/assets/thumbnails/simple-addition.jpg', 190),
('Colors of the Rainbow', 'Discover all the colors of the rainbow through fun activities', '/assets/videos/rainbow-colors.mp4', '/assets/thumbnails/rainbow-colors.jpg', 170),
('The Water Cycle', 'Learn about how water moves around our planet', '/assets/videos/water-cycle.mp4', '/assets/thumbnails/water-cycle.jpg', 230),
('Healthy Eating', 'Discover which foods help us grow strong and healthy', '/assets/videos/healthy-eating.mp4', '/assets/thumbnails/healthy-eating.jpg', 185),
('Emotions and Feelings', 'Learn about different emotions and how to express them', '/assets/videos/emotions.mp4', '/assets/thumbnails/emotions.jpg', 195),
('The Seasons', 'Explore the four seasons and how they change throughout the year', '/assets/videos/seasons.mp4', '/assets/thumbnails/seasons.jpg', 220),
('Ocean Life', 'Discover amazing creatures that live in the ocean', '/assets/videos/ocean-life.mp4', '/assets/thumbnails/ocean-life.jpg', 250),
('Simple Subtraction', 'Learn how to subtract numbers with easy examples', '/assets/videos/subtraction.mp4', '/assets/thumbnails/subtraction.jpg', 175),
('Telling Time', 'Learn how to read a clock and tell the time', '/assets/videos/telling-time.mp4', '/assets/thumbnails/telling-time.jpg', 190),
('Shapes All Around', 'Discover shapes in everyday objects around us', '/assets/videos/shapes.mp4', '/assets/thumbnails/shapes.jpg', 160),
('Farm Animals', 'Meet different animals that live on a farm', '/assets/videos/farm-animals.mp4', '/assets/thumbnails/farm-animals.jpg', 180),
('Transportation Vehicles', 'Learn about different vehicles and how they move', '/assets/videos/transportation.mp4', '/assets/thumbnails/transportation.jpg', 210),
('The Five Senses', 'Explore our five senses and how they help us', '/assets/videos/five-senses.mp4', '/assets/thumbnails/five-senses.jpg', 195),
('Plants Growing', 'Watch how plants grow from seeds and learn what they need', '/assets/videos/plants-growing.mp4', '/assets/thumbnails/plants-growing.jpg', 225),
('Counting by Twos', 'Learn to count by twos with fun animations', '/assets/videos/counting-twos.mp4', '/assets/thumbnails/counting-twos.jpg', 165);

-- Insert data into Audios table
INSERT INTO audios (title, description, audio_url, duration_seconds) VALUES
('The Three Little Pigs', 'A classic fairy tale about three pigs and a wolf', '/assets/audio/three-little-pigs.mp3', 180),
('Little Red Riding Hood', 'The adventure of a little girl on her way to grandma''s house', '/assets/audio/red-riding-hood.mp3', 165),
('Twinkle Twinkle Little Star', 'A soothing lullaby about stars in the night sky', '/assets/audio/twinkle-star.mp3', 90),
('The Alphabet Song', 'Learn the ABC''s with this catchy tune', '/assets/audio/alphabet-song.mp3', 60),
('Old MacDonald Had a Farm', 'A fun song about a farmer and his animals', '/assets/audio/old-macdonald.mp3', 120),
('The Itsy Bitsy Spider', 'A classic nursery rhyme about a determined spider', '/assets/audio/itsy-bitsy-spider.mp3', 75),
('Goldilocks and the Three Bears', 'The tale of a girl who visits the home of three bears', '/assets/audio/goldilocks.mp3', 210),
('Jack and the Beanstalk', 'An adventure about magic beans and a giant', '/assets/audio/jack-beanstalk.mp3', 195),
('Five Little Monkeys', 'A fun counting rhyme about five playful monkeys', '/assets/audio/five-monkeys.mp3', 85),
('The Wheels on the Bus', 'A popular song about bus parts and passengers', '/assets/audio/wheels-bus.mp3', 110),
('Cinderella', 'The story of a girl who finds her prince with the help of a fairy godmother', '/assets/audio/cinderella.mp3', 230),
('The Gingerbread Man', 'The tale of a running cookie who can''t be caught', '/assets/audio/gingerbread-man.mp3', 150),
('Hickory Dickory Dock', 'A rhyme about a mouse and a clock', '/assets/audio/hickory-dickory.mp3', 65),
('Row, Row, Row Your Boat', 'A gentle song about rowing a boat down a stream', '/assets/audio/row-boat.mp3', 70),
('The Tortoise and the Hare', 'A fable about a race between a tortoise and a rabbit', '/assets/audio/tortoise-hare.mp3', 170),
('Humpty Dumpty', 'The rhyme about an egg who had a great fall', '/assets/audio/humpty-dumpty.mp3', 55),
('Baa Baa Black Sheep', 'A nursery rhyme about a sheep with wool', '/assets/audio/black-sheep.mp3', 60),
('The Lion and the Mouse', 'A story about how a small mouse helps a mighty lion', '/assets/audio/lion-mouse.mp3', 145),
('Head, Shoulders, Knees and Toes', 'A song that teaches body parts with movement', '/assets/audio/head-shoulders.mp3', 80),
('The Ugly Duckling', 'The story of a duckling who transforms into a beautiful swan', '/assets/audio/ugly-duckling.mp3', 190);

COMMIT;
