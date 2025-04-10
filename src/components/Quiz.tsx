
import React, { useState } from 'react';
import GlassCard from './GlassCard';
import GlassButton from './GlassButton';
import { CheckCircle2, XCircle, Award } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface QuizProps {
  character: 'child' | 'elderly' | 'homemaker';
  onClose: () => void;
}

interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

const getQuizQuestions = (character: 'child' | 'elderly' | 'homemaker'): QuizQuestion[] => {
  switch (character) {
    case 'child':
      return [
        {
          question: "Which planet is closest to the sun?",
          options: ["Earth", "Venus", "Mercury", "Mars"],
          correctAnswer: 2
        },
        {
          question: "What is the capital of France?",
          options: ["London", "Berlin", "Paris", "Madrid"],
          correctAnswer: 2
        },
        {
          question: "How many legs does a spider have?",
          options: ["4", "6", "8", "10"],
          correctAnswer: 2
        }
      ];
    case 'elderly':
      return [
        {
          question: "Which exercise is best for joint health?",
          options: ["Running", "Swimming", "Weight lifting", "High-impact aerobics"],
          correctAnswer: 1
        },
        {
          question: "Which food is highest in antioxidants?",
          options: ["White bread", "Blueberries", "Processed meat", "Soda"],
          correctAnswer: 1
        },
        {
          question: "What is a recommended daily water intake for seniors?",
          options: ["1-2 cups", "3-4 cups", "6-8 cups", "10-12 cups"],
          correctAnswer: 2
        }
      ];
    case 'homemaker':
      return [
        {
          question: "Which cleaning product should NOT be mixed with bleach?",
          options: ["Water", "Baking soda", "Ammonia", "Dish soap"],
          correctAnswer: 2
        },
        {
          question: "What temperature should a refrigerator be set to?",
          options: ["50°F (10°C)", "40°F (4°C)", "32°F (0°C)", "45°F (7°C)"],
          correctAnswer: 1
        },
        {
          question: "Which meal prep container is safest for reheating food?",
          options: ["Any plastic container", "Glass container", "Styrofoam", "Metal container"],
          correctAnswer: 1
        }
      ];
  }
};

const Quiz = ({ character, onClose }: QuizProps) => {
  const questions = getQuizQuestions(character);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);

  const themeColors = {
    child: 'from-blue-500 to-indigo-600',
    elderly: 'from-teal-500 to-blue-600',
    homemaker: 'from-pink-500 to-purple-600'
  };

  const handleAnswerSelect = (index: number) => {
    setSelectedAnswer(index);
    const correct = index === questions[currentQuestion].correctAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setShowResult(true);
  };

  const handleNextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer(null);
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      const percentage = Math.round((score / questions.length) * 100);
      
      toast({
        title: "Quiz Complete!",
        description: `You scored ${score} out of ${questions.length} (${percentage}%)`,
      });
    }
  };

  const characterTitle = {
    child: "Fun Quiz Time!",
    elderly: "Knowledge Check",
    homemaker: "Quick Quiz"
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-md z-50">
      <GlassCard 
        className="w-full max-w-2xl p-6" 
        is3D={true} 
        metallic={true}
        glowing={true}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-white">{characterTitle[character]}</h2>
          <GlassButton 
            variant="ghost" 
            onClick={onClose}
            className="text-white hover:text-red-400"
          >
            Close
          </GlassButton>
        </div>
        
        {!quizComplete ? (
          <div className="space-y-6">
            <div className="relative p-6 rounded-xl overflow-hidden bg-black/30">
              <div className={`absolute inset-0 bg-gradient-to-br ${themeColors[character]} opacity-10`}></div>
              <h3 className="text-xl font-semibold text-white mb-4 relative z-10">
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <p className="text-lg text-white relative z-10">{questions[currentQuestion].question}</p>
            </div>
            
            <div className="grid grid-cols-1 gap-3">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => !showResult && handleAnswerSelect(index)}
                  disabled={showResult}
                  className={`relative overflow-hidden p-4 rounded-lg text-left text-white font-medium transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] ${
                    showResult && index === questions[currentQuestion].correctAnswer 
                      ? 'bg-green-500/20 border border-green-500/50' 
                      : showResult && index === selectedAnswer && !isCorrect
                        ? 'bg-red-500/20 border border-red-500/50'
                        : selectedAnswer === index
                          ? `bg-${character === 'child' ? 'blue' : character === 'elderly' ? 'teal' : 'pink'}-500/30`
                          : 'bg-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center">
                    <span className="mr-3 flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-white/10">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span>{option}</span>
                    {showResult && index === questions[currentQuestion].correctAnswer && (
                      <CheckCircle2 className="ml-auto text-green-400 h-6 w-6" />
                    )}
                    {showResult && index === selectedAnswer && !isCorrect && (
                      <XCircle className="ml-auto text-red-400 h-6 w-6" />
                    )}
                  </div>
                  <div 
                    className={`absolute bottom-0 left-0 h-1 ${
                      index === questions[currentQuestion].correctAnswer && showResult 
                        ? 'bg-green-500' 
                        : `bg-${character === 'child' ? 'blue' : character === 'elderly' ? 'teal' : 'pink'}-500`
                    }`} 
                    style={{ 
                      width: showResult && (index === questions[currentQuestion].correctAnswer || index === selectedAnswer) 
                        ? '100%' 
                        : '0%',
                      transition: 'width 0.5s ease-out'
                    }}
                  ></div>
                </button>
              ))}
            </div>
            
            {showResult && (
              <div className="flex justify-center pt-4">
                <GlassButton 
                  variant="neon"
                  onClick={handleNextQuestion}
                  className={`px-8 bg-gradient-to-r ${themeColors[character]} bg-opacity-20`}
                >
                  {currentQuestion < questions.length - 1 ? "Next Question" : "Complete Quiz"}
                </GlassButton>
              </div>
            )}
            
            <div className="w-full bg-white/10 h-2 rounded-full mt-4">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${themeColors[character]}`}
                style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <div className="text-center py-8 space-y-6">
            <div className="mb-6 flex justify-center">
              <div className={`w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br ${themeColors[character]} animate-pulse-gentle`}>
                <Award className="h-12 w-12 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">Quiz Complete!</h3>
            <p className="text-xl text-gray-300">You scored: {score} out of {questions.length}</p>
            <div className="w-full bg-white/10 h-4 rounded-full">
              <div 
                className={`h-full rounded-full bg-gradient-to-r ${themeColors[character]}`}
                style={{ width: `${(score / questions.length) * 100}%` }}
              ></div>
            </div>
            <div className="pt-4">
              <GlassButton 
                variant="neon"
                onClick={onClose}
                className={`px-8 bg-gradient-to-r ${themeColors[character]} bg-opacity-20`}
              >
                Close Quiz
              </GlassButton>
            </div>
          </div>
        )}
      </GlassCard>
    </div>
  );
};

export default Quiz;
