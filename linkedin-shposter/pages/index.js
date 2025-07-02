import { useState } from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [topic, setTopic] = useState('');
  const [industry, setIndustry] = useState('Software Engineering');
  const [tone, setTone] = useState('Reflective & Insightful');
  const [generatedPost, setGeneratedPost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isCopied, setIsCopied] = useState(false);

  const suggestions = [
    "Folding laundry",
    "Watering my plants",
    "Brushing my teeth",
    "Staring at my ceiling",
    "Making toast",
    "Sorting the recycling",
    "Charging my phone",
    "Cleaning under the couch",
    "Wiping kitchen counters",
    "Refilling the soap dispenser",
    "Waiting for the microwave",
    "Untangling earbuds",
    "Organizing the junk drawer",
    "Reading shampoo labels",
    "Dusting the bookshelf",
    "Adjusting the thermostat",
    "Waiting for the elevator",
    "Replacing the toilet paper",
    "Walking to the mailbox",
    "Drinking lukewarm coffee",
    "Folding fitted sheets badly",
    "Checking the fridge again",
    "Repeating myself to Siri",
    "Rearranging couch cushions",
    "Watching water boil",
    "Stepping on my cat's tail",
    "Spilling coffee on my shirt",
    "Arguing with autocorrect",
    "Slamming my finger in drawer",
    "Tripping on flat ground",
    "Sitting on something wet",
    "Sneezing mid-zoom call",
    "Dropping phone on my face",
    "Tearing off a fingernail",
    "Locking myself out again",
    "Biting into a lemon slice",
    "Laughing while drinking water",
    "Deleting an important email",
    "Microwave explodes spaghetti sauce",
    "Ripping my pants squatting",
    "Choking on spit alone",
    "Emailing the wrong \"Chris\"",
    "Setting off smoke alarm",
    "Drinking sour milk unknowingly",
    "Dropping keys in toilet",
    "Getting toothpaste in my eye",
    "Forgetting why I stood up",
    "Waving at someone who wasn't",
    "Putting deodorant on twice",
    "Slipping in the shower",
    "Peeling bananas backwards",
    "Losing my bookmark",
    "Talking while muted",
    "Stepping on LEGO",
    "Getting paper cuts",
    "Burning my tongue",
    "Walking into glass doors",
    "Untangling Christmas lights",
    "Pushing pull doors",
    "Opening fridge aimlessly",
    "Mixing up salt and sugar",
    "Getting static shocks",
    "Pulling push doors",
    "Sneezing mid-bite",
    "Getting soap in eyes",
    "Leaving laundry wet overnight",
    "Hitting my funny bone",
    "Hiccupping during calls",
    "Arguing with Alexa",
    "Wearing clothes backwards"
  ];

  const toneOptions = [
    "Reflective & Insightful",
    "Humorous but Professional", 
    "Direct & Authoritative",
    "Narrative / Storytelling",
    "Conversational & Relatable",
    "Vulnerable",
    "Cautionary / Advisory",
    "Philosophical",
    "Spicy humor"
  ];

  const getRandomSuggestion = () => {
    const randomIndex = Math.floor(Math.random() * suggestions.length);
    return suggestions[randomIndex];
  };

  const handleSuggestionClick = () => {
    setTopic(getRandomSuggestion());
  };

  const generatePost = async (e) => {
    e.preventDefault();
    if (!topic.trim()) {
      setError('Please enter a topic');
      return;
    }

    setIsLoading(true);
    setError('');
    setGeneratedPost('');

    try {
      const response = await fetch('/api/generate-post', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          topic: topic.trim(),
          industry: industry.trim(),
          tone: tone
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate post');
      }

      setGeneratedPost(data.post);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(generatedPost);
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>LinkedIn Post Generator</title>
        <meta name="description" content="Generate engaging LinkedIn posts from everyday topics" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          LinkedIn FISHIT Post Generator
        </h1>
        
        <p className={styles.description}>
          Turn your daily experiences into engaging LinkedIn content
        </p>

        <div className={styles.contentContainer}>
          <div className={styles.inputSection}>
            <form onSubmit={generatePost} className={styles.form}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Your mundane experience:</label>
                <div className={styles.inputWithButton}>
                  <input
                    type="text"
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Enter a topic from your daily life..."
                    className={styles.textInputHalf}
                    maxLength={500}
                  />
                  <button 
                    type="button" 
                    onClick={handleSuggestionClick}
                    className={styles.suggestionBtn}
                  >
                    Get Random Suggestion
                  </button>
                </div>
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Focused on which industry:</label>
                <input
                  type="text"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  placeholder="e.g., Software Engineering, Marketing, Healthcare..."
                  className={styles.textInput}
                  maxLength={100}
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Tone of post:</label>
                <select
                  value={tone}
                  onChange={(e) => setTone(e.target.value)}
                  className={styles.selectInput}
                >
                  {toneOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <button 
                type="submit" 
                disabled={isLoading}
                className={styles.generateBtn}
              >
                {isLoading ? 'Generating...' : 'Generate LinkedIn Post'}
              </button>
            </form>

            {error && (
              <div className={styles.error}>
                <p>Error: {error}</p>
              </div>
            )}
          </div>

          <div className={styles.outputSection}>
            {generatedPost && (
              <div className={styles.result}>
                <h3>Your LinkedIn Post:</h3>
                <div className={styles.postContainer}>
                  <pre className={styles.generatedPost}>{generatedPost}</pre>
                  <button 
                    onClick={copyToClipboard}
                    className={styles.copyBtn}
                  >
                    {isCopied ? 'Copied! ✓' : 'Copy to Clipboard'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className={styles.footerContainer}>
          <div className={styles.donation}>
            <p>Find this useful? Support the project:</p>
            <div id="paypal-button-container">
              {/* PayPal button will be inserted here */}
              <a 
                href="https://www.paypal.com/donate" 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.donateBtn}
              >
                Donate via PayPal
              </a>
            </div>
          </div>

          <div className={styles.whyFishit}>
            <h2 className={styles.whyFishitTitle}>Why FISHIT?</h2>
            <ul className={styles.whyFishitList}>
              <li>Cause it's a fishy thing to do.</li>
              <li><strong>FI</strong> = Fake Intellectual</li>
              <li><strong>SHIT</strong> = Because it really adds no value</li>
              <li><strong>HIT</strong> = Because ppl do it just to get hits (engagement)</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}