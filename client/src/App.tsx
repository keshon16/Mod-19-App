import Quiz from './components/Quiz';



function App() {
  const Quiz = () => {
    const [questions, setQuestions] = useState<Question[]>([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const [quizStarted, setQuizStarted] = useState(false);
  
    const getRandomQuestions = async () => {
      try {
        const questions = await getQuestions();
  
        if (!questions) {
          throw new Error('something went wrong!');
        }
  
        setQuestions(questions);
      } catch (err) {
        console.error(err);
      }
    };
  return (
    <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Quiz Challenge</h1>
          <p className="text-white text-lg">Test your knowledge!</p>
        </header>
        
        <main className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-6">
          <Quiz />
        </main>

        <footer className="text-center mt-8 text-white">
          <p>&copy; {new Date().getFullYear()} Quiz App. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}

    <div className="App">
      <Quiz />
    </div>
  );


export default App;
