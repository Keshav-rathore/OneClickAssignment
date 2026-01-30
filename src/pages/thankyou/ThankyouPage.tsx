import { useNavigate } from 'react-router-dom';
import { styles } from './ThankyouPage.styles';
import { ROUTES } from '../../routes';

export default function ThankyouPage() {
  const navigate = useNavigate();
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Icon */}
        <div style={styles.iconWrapper}>
          <div style={styles.iconCircle}>
            ✓
          </div>
        </div>

        {/* Content */}
        <h1 style={styles.title}>
          Submission<br />Successfully Prepared.
        </h1>

        <p style={styles.description}>
          Your academic materials are finalized and ready for review.
          Thank you for choosing oneClickAssignment for your research and
          drafting needs.
        </p>

        {/* Actions */}
        <div style={styles.actions}>
          <button style={styles.primaryButton}
           onClick={() => navigate(ROUTES.GENERATE_RESPONSE)
            
           }>
            Generate Another
          </button>

          <button style={styles.secondaryButton}
           onClick={() => navigate(ROUTES.HOME)}>
            Return Home
          </button>
        </div>

        {/* Footer text */}
        <div style={styles.footerText}>
          COMMITMENT TO ACADEMIC EXCELLENCE
        </div>
      </div>
    </div>
  );
}
