import { COLORS } from '../../constants/colors';

export const styles = {
  page: {
    minHeight: 'calc(100vh - 64px)',
    backgroundColor: COLORS.BACKGROUND,
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    padding: '24px',
  },

  card: {
    width: '100%',
    maxWidth: '620px',
    backgroundColor: COLORS.SURFACE,
    borderRadius: '20px',
    padding: '40px 32px',
    boxShadow: `0 20px 40px ${COLORS.SHADOW}`,
    position: 'relative' as const,
  },

  topBar: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    height: '6px',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    background: `linear-gradient(90deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
  },

  title: {
    fontSize: '32px',
    fontWeight: 800,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '12px',
  },

  description: {
    fontSize: '15px',
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 1.6,
    marginBottom: '28px',
  },

  inputHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },

  label: {
    fontSize: '14px',
    fontWeight: 600,
    color: COLORS.TEXT_PRIMARY,
  },

  link: {
    fontSize: '13px',
    color: COLORS.PRIMARY,
    textDecoration: 'none',
    cursor: 'pointer',
  },

  inputWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    padding: '14px 16px',
    borderRadius: '999px',
    border: `1px solid ${COLORS.BORDER}`,
    backgroundColor: COLORS.SURFACE,
    marginBottom: '24px',
  },

  inputIcon: {
    fontSize: '16px',
    color: COLORS.TEXT_MUTED,
  },

  input: {
    flex: 1,
    border: 'none',
    outline: 'none',
    fontSize: '14px',
    color: COLORS.TEXT_PRIMARY,
    backgroundColor: 'transparent',
  },

  actions: {
    display: 'flex',
    gap: '16px',
    marginBottom: '32px',
    flexWrap: 'wrap' as const,
  },

  primaryButton: {
    padding: '14px 26px',
    borderRadius: '999px',
    border: 'none',
    background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
    color: COLORS.TEXT_INVERTED,
    fontWeight: 700,
    cursor: 'pointer',
  },

  secondaryButton: {
    padding: '14px 26px',
    borderRadius: '999px',
    border: `1px solid ${COLORS.BORDER}`,
    backgroundColor: COLORS.SURFACE,
    color: COLORS.TEXT_PRIMARY,
    fontWeight: 600,
    cursor: 'pointer',
  },

  infoBox: {
    display: 'flex',
    gap: '14px',
    padding: '20px',
    borderRadius: '16px',
    backgroundColor: COLORS.PRIMARY_LIGHT,
    color: COLORS.TEXT_PRIMARY,
  },

  infoIcon: {
    fontSize: '20px',
    color: COLORS.PRIMARY,
    marginTop: '2px',
  },

  infoTitle: {
    display: 'block',
    fontSize: '14px',
    marginBottom: '4px',
  },

  infoText: {
    fontSize: '13px',
    color: COLORS.TEXT_SECONDARY,
    marginBottom: '8px',
    lineHeight: 1.5,
  },

  message: {
    fontSize: '13px',
    marginBottom: '16px',
    color: COLORS.WARNING,
  },

  footer: {
    marginTop: '32px',
    fontSize: '12px',
    letterSpacing: '0.12em',
    color: COLORS.TEXT_MUTED,
    textAlign: 'center' as const,
  },
};
