/**
 * App Configuration Constants
 * Central place for all app-wide configuration values
 */

// Apprenticeship Progress Configuration
export const APPRENTICESHIP = {
  LEVELS: {
    LEVEL_1: 'Level 1',
    LEVEL_2: 'Level 2',
    LEVEL_3: 'Level 3',
    LEVEL_4: 'Level 4',
  },
  // Training hours per level
  TRAINING_HOURS_PER_LEVEL: 1800,
  // Total hours required for completion
  TOTAL_HOURS_REQUIRED: 6000,
  // Total competencies to complete
  TOTAL_COMPETENCIES: 60,
  // Payment-free period in weeks
  LOAN_PAYMENT_FREE_WEEKS: 312,
  // Maximum loan periods
  MAX_LOAN_PERIODS: 5,
} as const;

// Financial Configuration
export const FINANCIAL = {
  // Canada Apprentice Loan
  MAX_LOAN_AMOUNT: 4000,
  LOAN_PROVIDER: 'EPBC',
  // Training cost estimate
  EDUCATION_COST_PER_LEVEL: 1900,
  // Wage increase percentage
  WAGE_INCREASE_PERCENTAGE: 10,
} as const;

// Calendar Configuration
export const CALENDAR = {
  DAYS_IN_MONTH: 30,
  MONTHS: [
    'January', 'February', 'March', 'April',
    'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ],
  MONTH_ABBREVIATIONS: [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ],
  WEEK_DAYS: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
  WEEK_DAYS_FULL: [
    'Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'
  ],
} as const;

// Quiz Configuration
export const QUIZ = {
  TOTAL_QUESTIONS: 4,
  NAVIGATION_DELAY_MS: 500,
  MIN_PASSING_SCORE: 70,
} as const;

// User Profile
export const USER = {
  DEFAULT_NAME: 'Gilbert Pickles',
  DEFAULT_EMAIL: 'gpickles69@gmail.com',
} as const;

// Timing Configuration
export const TIMING = {
  NAVIGATION_DELAY: 500, // ms
  ANIMATION_DURATION: 300, // ms
  AUTO_SAVE_DELAY: 1000, // ms
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 10,
  MAX_PAGE_SIZE: 50,
} as const;

// Screen Names for Navigation
export const SCREENS = {
  DASHBOARD: 'Dashboard',
  SKILLS: 'Skills',
  FINANCES: 'Finances',
  SETTINGS: 'Settings',
  REMINDER: 'Reminder',
} as const;

// Tab Names
export const TABS = {
  HOME: 'index',
  SKILLS: 'skills',
  FINANCES: 'finances',
  SETTINGS: 'settings',
} as const;

// Audio Playback
export const AUDIO = {
  DEFAULT_PLAYBACK_SPEED: '1x',
  PLAYBACK_SPEEDS: ['0.5x', '0.75x', '1x', '1.25x', '1.5x', '2x'],
} as const;

// Red Seal Trade Information
export const RED_SEAL = {
  PROGRAM_NAME: 'Red Seal Trade',
  FREQUENCIES: {
    CANADA: 60, // Hz
    INTERNATIONAL: 50, // Hz
  },
} as const;

// Eligibility Criteria
export const ELIGIBILITY = {
  CITIZENSHIP_OPTIONS: [
    'Canadian Citizen',
    'Permanent Resident',
    'Protected Person',
    'Other'
  ],
  MIN_CREDIT_SCORE: 600, // Example value
} as const;

// Settings Options
export const SETTINGS_OPTIONS = {
  ACCOUNT: 'Account Settings',
  NOTIFICATIONS: 'Notification',
  ACCESSIBILITY: 'Accessibility',
  DISPLAY: 'Display Settings',
  LANGUAGE: 'Language',
  LOGOUT: 'Logout',
} as const;

// Resource Categories
export const RESOURCE_CATEGORIES = {
  ALL: 'All',
  FINANCIAL_SUPPORT: 'Financial Support',
  LOAN: 'Loan',
  TAX_CREDIT: 'Tax Credit',
  EMPLOYMENT_SUPPORT: 'Employment Support',
} as const;

export type ResourceCategory = typeof RESOURCE_CATEGORIES[keyof typeof RESOURCE_CATEGORIES];

