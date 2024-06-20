// Import the rex-setup-wizard-manager package
const SetupWizard = require('rex-setup-wizard-manager');

// Initialize the setup wizard
const setupWizard = new SetupWizard({
    general: {
        title: "Welcome to the Wizard",
        currentStep: 0,
        logo:'',
        targetElement: "wizardContainer",
        logoStyles: 'logo',
      },
      steps: [
        {
          stepText: "Welcome",
          html: "<p>Welcome to Step 1 description of content</p>",
          isNextStep: true,
          isPreviousStep: false,
          isSkip: false,
        },
        {
          stepText: "Type",
          html: "<p>Welcome to Step 2 description of content </p>",
          isNextStep: true,
          isPreviousStep: true,
          isSkip: true,
        },
        {
          stepText: "Page Builder",
          html: "<p>Welcome to Step 3 description of content</p>",
          isNextStep: false,
          isPreviousStep: true,
          isSkip: false,
        },
        {
          stepText: "Essential plugings",
          html: "<p>Welcome to Step 4 description of content</p>",
          isNextStep: false,
          isPreviousStep: true,
          isSkip: false,
        },
        {
          stepText: "Done",
          html: "<p>Welcome to Step 6 description of content</p>",
          isNextStep: false,
          isPreviousStep: true,
          isSkip: false,
        },
      ],
});

// Mount the setup wizard onto the DOM
setupWizard.mount('#setup-wizard-container');
