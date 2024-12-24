

## Title:  A Multi-Step Form 

### Tech Stack:
- **Next.js**
- **Tailwind CSS**
- **Zustand**
- **ShadCN UI**

---



### Install Required Dependencies:
- Install libraries:
  - Zustand 
  - ShadCN UI
  - Framer Motion



## Multi-Step Form Layout

### Form Navigation:
- Use ShadCN UI’s Tabs component or build a custom stepper to indicate the current step visually.

###  Form :
- sections:
  - **1:** Personal Information (static inputs).
  - **2:** Address Details (static inputs).
  - **3:** Preferences (static toggles or checkboxes).
  - **4:** Review & Submit (static summary).

## State Management

### Global State Setup:
-  Zustand for managing the form’s state across components.


## Animations and Transitions

### Animations:
- Framer Motion to animate transitions between form steps.


### Progress Bar:
- a custom-built one to visually track form progress.





### Responsive Design:
- Ensure the form is fully responsive and optimized for mobile, tablet, and desktop screens.

### Dark Mode Polishing:
- Ensure all components adapt seamlessly to dark mode.



### Toast Notifications:
- Use ShadCN’s Toast component to notify users about successful submissions or validation errors.
