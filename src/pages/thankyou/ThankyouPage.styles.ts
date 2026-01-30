import { COLORS } from '../../constants/colors'

 export const styles = {
  page: {
    minHeight: 'calc(100vh - 64px)', // header height excluded
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKGROUND,
    padding: '24px',
  },

  card: {
    width: '100%',
    maxWidth: '720px',
    backgroundColor: COLORS.SURFACE,
    borderRadius: '16px',
    padding: '48px 32px',
    textAlign: 'center' as const,
    boxShadow: `0 10px 30px ${COLORS.SHADOW}`,
    border: `1px solid ${COLORS.BORDER_SOFT}`,
  },

  iconWrapper: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '24px',
  },

  iconCircle: {
    width: '64px',
    height: '64px',
    borderRadius: '50%',
    backgroundColor: COLORS.SUCCESS_BG,
    color: COLORS.SUCCESS,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '28px',
    fontWeight: 700,
    border: `1px solid ${COLORS.SUCCESS}`,
  },

  title: {
    fontSize: '36px',
    fontWeight: 700,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '16px',
    lineHeight: 1.2,
  },

  description: {
    fontSize: '16px',
    color: COLORS.TEXT_SECONDARY,
    maxWidth: '520px',
    margin: '0 auto 32px',
    lineHeight: 1.6,
  },

  actions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '40px',
    flexWrap: 'wrap' as const,
  },

  primaryButton: {
    padding: '14px 26px',
    borderRadius: '10px',
    border: 'none',
    background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
    color: COLORS.TEXT_INVERTED,
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },

  secondaryButton: {
    padding: '14px 26px',
    borderRadius: '10px',
    border: `1px solid ${COLORS.BORDER}`,
    backgroundColor: COLORS.SURFACE,
    color: COLORS.TEXT_PRIMARY,
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },

  footerText: {
    fontSize: '12px',
    letterSpacing: '0.12em',
    color: COLORS.TEXT_MUTED,
  },
};
