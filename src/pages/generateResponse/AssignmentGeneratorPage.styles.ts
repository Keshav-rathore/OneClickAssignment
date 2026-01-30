import { COLORS } from '../../constants/colors';

export const styles = {
  page: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: COLORS.BACKGROUND,
    padding: '48px 24px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
  },

  error:{
    fontsize: '14px',
    color: 'red',
    marginBottom: '20px',
  },

  outputBox:{
    width: '100%',
    maxWidth: '620px',
    minHeight: '200px',
  },

  outputText:{
    whiteSpace: 'pre-wrap' as const,
    backgroundColor: COLORS.SURFACE,
    padding: '16px',
  },

  header: {
    textAlign: 'center' as const,
    marginBottom: '40px',
    maxWidth: '700px',
  },

  title: {
    fontSize: '40px',
    fontWeight: 800,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '12px',
    lineHeight: 1.2,
  },

  subtitle: {
    fontSize: '16px',
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 1.6,
  },

  card: {
    width: '100%',
    maxWidth: '620px',
    backgroundColor: COLORS.SURFACE,
    borderRadius: '20px',
    boxShadow: `0 20px 40px ${COLORS.SHADOW}`,
    padding: '32px',
    marginBottom: '32px',
  },

  cardTop: {
    height: '80px',
    borderRadius: '12px',
    backgroundColor: COLORS.PRIMARY_LIGHT,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '32px',
    marginBottom: '24px',
  },

  label: {
    display: 'block',
    fontSize: '14px',
    fontWeight: 600,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '6px',
  },

  input: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `1px solid ${COLORS.BORDER}`,
    fontSize: '14px',
    marginBottom: '20px',
    outline: 'none',
  },

  textarea: {
    width: '100%',
    minHeight: '120px',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `1px solid ${COLORS.BORDER}`,
    fontSize: '14px',
    resize: 'vertical' as const,
    marginBottom: '20px',
    outline: 'none',
  },

  select: {
    width: '100%',
    padding: '14px 16px',
    borderRadius: '12px',
    border: `1px solid ${COLORS.BORDER}`,
    fontSize: '14px',
    marginBottom: '28px',
    backgroundColor: COLORS.SURFACE,
  },

  generateButton: {
    width: '100%',
    padding: '16px',
    borderRadius: '14px',
    border: 'none',
    background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
    color: COLORS.TEXT_INVERTED,
    fontSize: '15px',
    fontWeight: 700,
    cursor: 'pointer',
    marginBottom: '12px',
  },

  estimate: {
    fontSize: '12px',
    textAlign: 'center' as const,
    color: COLORS.TEXT_MUTED,
  },

  features: {
    display: 'flex',
    gap: '24px',
    fontSize: '13px',
    color: COLORS.TEXT_SECONDARY,
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
    justifyContent: 'center',
  },

  footer: {
    fontSize: '12px',
    color: COLORS.TEXT_MUTED,
    textAlign: 'center' as const,
  },
};
