// Import rex-setup-wizard-manager
import rexWizard from 'rex-setup-wizard-manager';

// Define your wizard configuration
const steps = [
  {
    stepText: 'Welcome',
    html: '<p>Welcome to Step 1 description of content</p>',
    isNextStep: true,
    isPreviousStep: false,
    isSkip: false,
  },
  {
    stepText: 'Type',
    html: '<p>Welcome to Step 2 description of content</p>',
    isNextStep: true,
    isPreviousStep: true,
    isSkip: true,
  },
  {
    stepText: 'Page Builder',
    html: '<p>Welcome to Step 3 description of content</p>',
    isNextStep: false,
    isPreviousStep: true,
    isSkip: false,
  },
  {
    stepText: 'Essential plugins',
    html: '<p>Welcome to Step 4 description of content</p>',
    isNextStep: false,
    isPreviousStep: true,
    isSkip: false,
  },
  {
    stepText: 'Done',
    html: '<p>Welcome to Step 5 description of content</p>',
    isNextStep: false,
    isPreviousStep: true,
    isSkip: false,
  },
];

const logoUrl = 'http://techsite.local/wp-content/uploads/2024/04/logo-wpfnl.png';
const logoClass = 'wpfnl-setup-wizard__logo';

// Function to initialize the wizard
function initializeWizard() {
  rexWizard({
    general: {
      title: 'Welcome to the Wizard',
      currentStep: 0,
      logo: logoUrl,
      targetElement: 'wizardContainer',
      logoStyles: logoClass,
    },
    steps: steps,
  });
}

// Event listeners for navigation buttons
document.getElementById('prevBtn').addEventListener('click', () => {
  rexWizard().previousStep();
});

document.getElementById('nextBtn').addEventListener('click', () => {
  rexWizard().nextStep();
});

// Initialize the wizard when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeWizard);
