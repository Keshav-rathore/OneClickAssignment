import { useState, useEffect } from 'react';
import { styles } from './ApiKeySetupPage.styles';
import {
  getApiKeySafe,
  saveApiKey,
  clearApiKey,
} from '../../services/apiService';
import { validateGeminiApiKey } from '../../services/geminiService';

export default function ApiKeySetupPage() {
  const [apiKey, setApiKey] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);


  // Optional: preload existing key
  useEffect(() => {
    const existingKey = getApiKeySafe();
    if (existingKey) {
      setApiKey(existingKey);
    }
  }, []);

  const handleSave = async () => {
    if (!apiKey.trim()) {
      setMessage('Please enter an API key.');
      return;
    }

    setLoading(true);
    setMessage('🔍 Validating API key...');

    try {
      const isValid = await validateGeminiApiKey(apiKey.trim());

      if (!isValid) {
        setMessage('❌ Invalid Gemini API key.');
        return;
      }

      saveApiKey(apiKey.trim());
      setMessage('✅ API key validated and saved!');
      
    } catch {
      setMessage('⚠️ Something went wrong while validating.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    clearApiKey();
    setApiKey('');
    setMessage('🗑️ API key cleared successfully.');
  };
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.topBar} />

        <h1 style={styles.title}>Add your Gemini API Key</h1>

        <p style={styles.description}>
          To generate assignments, you need a Gemini API Key. This allows the
          app to process your requests securely and locally within your browser.
        </p>

        {/* Input */}
        <div style={styles.inputHeader}>
          <label style={styles.label}>Gemini API Key</label>
          <a
            style={styles.link}
            href='https://aistudio.google.com/app/api-keys'
            target='_blank'
            rel='noopener noreferrer'
          >
            Where do I get a key?
          </a>
        </div>

        <div style={styles.inputWrapper}>
          <span style={styles.inputIcon}>🔑</span>
          <input
            type='password'
            placeholder='Paste Gemini API Key'
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            style={styles.input}
          />
        </div>

        {/* Feedback message */}
        {message && <p style={styles.message}>{message}</p>}

        {/* Actions */}
        <div style={styles.actions}>
          <button
            style={styles.primaryButton}
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? 'Validating...' : 'Save Key'}
          </button>

          <button style={styles.secondaryButton} onClick={handleClear}>
            Clear Key
          </button>
        </div>

        {/* Info box */}
        <div style={styles.infoBox}>
          <div style={styles.infoIcon}>🔒</div>
          <div>
            <strong style={styles.infoTitle}>
              We never store your API key.
            </strong>
            <p style={styles.infoText}>
              Your key is saved only in your browser's local storage. You can
              erase it anytime using the "Clear Key" button.
            </p>
          </div>
        </div>
      </div>

      <footer style={styles.footer}>
        ONECLICKASSIGNMENT © 2026 • ACADEMIC EXCELLENCE SIMPLIFIED
      </footer>
    </div>
  );
}
