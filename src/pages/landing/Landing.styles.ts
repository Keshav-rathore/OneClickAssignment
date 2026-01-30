import { COLORS } from '../../constants/colors';

export const styles = {
  page: {
    backgroundColor: COLORS.BACKGROUND,
  },

  /* Hero */
  hero: {
    textAlign: 'center' as const,
    padding: '96px 24px 72px',
    maxWidth: '900px',
    margin: '0 auto',
  },

  badge: {
    display: 'inline-block',
    padding: '6px 14px',
    borderRadius: '999px',
    backgroundColor: COLORS.PRIMARY_LIGHT,
    color: COLORS.PRIMARY,
    fontSize: '12px',
    fontWeight: 600,
    marginBottom: '24px',
  },

  heading: {
    fontSize: '48px',
    fontWeight: 800,
    color: COLORS.TEXT_PRIMARY,
    lineHeight: 1.2,
    marginBottom: '16px',
  },

  highlight: {
    color: COLORS.PRIMARY,
    position: 'relative' as const,
  },

  subheading: {
    fontSize: '16px',
    color: COLORS.TEXT_SECONDARY,
    maxWidth: '640px',
    margin: '0 auto 32px',
    lineHeight: 1.6,
  },

  /* How it works */
  howItWorks: {
    padding: '24px 24px',
    maxWidth: '1100px',
    margin: '0 auto',
    textAlign: 'center' as const,
  },

  sectionTitle: {
    fontSize: '28px',
    fontWeight: 700,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '8px',
  },

  sectionSubtitle: {
    fontSize: '14px',
    color: COLORS.TEXT_SECONDARY,
    marginBottom: '40px',
  },

  steps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '24px',
  },

  stepCard: {
    padding: '28px',
    borderRadius: '16px',
    backgroundColor: COLORS.SURFACE_SOFT,
    textAlign: 'left' as const,
  },

  stepCardAlt: {
    padding: '28px',
    borderRadius: '16px',
    backgroundColor: COLORS.INFO_BG,
    textAlign: 'left' as const,
  },

  stepCardSuccess: {
    padding: '28px',
    borderRadius: '16px',
    backgroundColor: COLORS.SUCCESS_BG,
    textAlign: 'left' as const,
  },

  stepIcon: {
    fontSize: '24px',
    marginBottom: '16px',
  },

  stepTitle: {
    fontSize: '16px',
    fontWeight: 700,
    color: COLORS.TEXT_PRIMARY,
    marginBottom: '8px',
  },

  stepText: {
    fontSize: '14px',
    color: COLORS.TEXT_SECONDARY,
    lineHeight: 1.6,
  },

  /* CTA */
  cta: {
    margin: '80px 24px',
    padding: '64px 32px',
    borderRadius: '24px',
    textAlign: 'center' as const,
    background: `linear-gradient(135deg, ${COLORS.GRADIENT_START}, ${COLORS.GRADIENT_END})`,
    color: COLORS.TEXT_INVERTED,
  },

  ctaTitle: {
    fontSize: '32px',
    fontWeight: 700,
    marginBottom: '12px',
  },

  ctaText: {
    fontSize: '14px',
    opacity: 0.9,
    marginBottom: '24px',
  },

  ctaButton: {
    padding: '14px 26px',
    borderRadius: '999px',
    border: 'none',
    backgroundColor: COLORS.SURFACE,
    color: COLORS.PRIMARY,
    fontWeight: 700,
    cursor: 'pointer',
  },
};
