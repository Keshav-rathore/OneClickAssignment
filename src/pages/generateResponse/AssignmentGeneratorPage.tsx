import { useState, useEffect } from 'react';
import { styles } from './AssignmentGeneratorPage.styles';
import { getApiKeySafe, hasApiKey } from '../../services/apiService';
import { generateAssignment } from '../../services/geminiService';
import  buildUniversalAssignmentPrompt  from '../../services/promptService';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../routes';

export default function AssignmentGeneratorPage() {
  const [subject, setSubject] = useState('');
  const [question, setQuestion] = useState('');
  const [wordCount, setWordCount] = useState('500');

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  // 🔐 Route guard
  useEffect(() => {
    if (!hasApiKey()) {
      navigate(ROUTES.API_SETUP);
    }
  }, [navigate]);

  const handleGenerate = async () => {
    if (!subject || !question) {
      setError('Please fill in all fields.');
      return;
    }

    const apiKey = getApiKeySafe();
    if (!apiKey) {
      navigate(ROUTES.API_SETUP);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const prompt = buildUniversalAssignmentPrompt({
        subject,
        question,
        wordCount,
      });

      const response = await generateAssignment(apiKey, prompt);
       navigate(ROUTES.RESPONSE_EDITOR, {
      state: {
        content: response,
        subject,
        wordCount,
        generatedAt: new Date().toISOString(),
      },
    });
    } catch {
      setError('Failed to generate assignment. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <h1 style={styles.title}>
          Generate Your Assignment in <br /> One Click
        </h1>
        <p style={styles.subtitle}>
          Transform your research requirements into a complete draft instantly.
        </p>
      </div>

      {/* Card */}
      <div style={styles.card}>
        <div style={styles.cardTop}>✨</div>

        <label style={styles.label}>🎓 Subject</label>
        <input
          style={styles.input}
          placeholder="e.g. Computer Science"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />

        <label style={styles.label}>📄 Question</label>
        <textarea
          style={styles.textarea}
          placeholder="Paste your assignment question here..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />

        <label style={styles.label}>📊 Word Count</label>
        <select
          style={styles.select}
          value={wordCount}
          onChange={(e) => setWordCount(e.target.value)}
        >
          <option value="300">300 words</option>
          <option value="500">500 words</option>
          <option value="1000">1000 words</option>
        </select>

        <button
          style={styles.generateButton}
          onClick={handleGenerate}
          disabled={loading}
        >
          {loading ? '⏳ Generating...' : '⚡ Generate Assignment'}
        </button>

        {error && <p style={styles.error}>{error}</p>}


        <p style={styles.estimate}>
          Estimated time: ~45 seconds. Powered by oneClickAssignment AI.
        </p>
      </div>

      <footer style={styles.footer}>
        © 2024 oneClickAssignment. All rights reserved.
      </footer>
    </div>
  );
}
