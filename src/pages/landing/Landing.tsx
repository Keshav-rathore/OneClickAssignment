import { useNavigate } from 'react-router-dom';
import { styles } from './Landing.styles';
import { ROUTES } from '../../routes';

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <span style={styles.badge}>🎓 FOR UNIVERSITY STUDENTS</span>

        <h1 style={styles.heading}>
          Generate college assignments in{' '}
          <span style={styles.highlight}>one click.</span>
        </h1>

        <p style={styles.subheading}>
          The AI-powered tool designed specifically for freshers and seniors alike.
          Get structured, formatted, and academic-ready papers in seconds.
        </p>

      </section>

      {/* How it works */}
      <section style={styles.howItWorks}>
        <h2 style={styles.sectionTitle}>How it works</h2>
        <p style={styles.sectionSubtitle}>
          Three simple steps to your completed assignment.
        </p>

        <div style={styles.steps}>
          <div style={styles.stepCard}>
            <div style={styles.stepIcon}>✍️</div>
            <h3 style={styles.stepTitle}>1. Enter Topic</h3>
            <p style={styles.stepText}>
              Describe the subject or prompt you need to cover.
              Add any specific requirements or rubrics.
            </p>
          </div>

          <div style={styles.stepCardAlt}>
            <div style={styles.stepIcon}>⚡</div>
            <h3 style={styles.stepTitle}>2. Click Generate</h3>
            <p style={styles.stepText}>
              Our AI structures, researches, and writes the content instantly
              with academic formatting.
            </p>
          </div>

          <div style={styles.stepCardSuccess}>
            <div style={styles.stepIcon}>⬇️</div>
            <h3 style={styles.stepTitle}>3. Download</h3>
            <p style={styles.stepText}>
              Get your assignment in fully editable .docx or .pdf format,
              ready for submission.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2 style={styles.ctaTitle}>Ready to start?</h2>
        <p style={styles.ctaText}>
          Join thousands of students saving time today and focusing on what
          matters most.
        </p>

         <button
      style={styles.ctaButton}
     onClick={() => navigate(ROUTES.GENERATE_RESPONSE)}

    >
      Get Started Now
    </button>
      </section>
    </div>
  );
}
