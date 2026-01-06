# Prompt-Based AI Website Builder

A web-based SaaS platform that allows users to create fully functional, modern websites simply by describing their requirements in natural language.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, etc.)
├── components/      # React components
│   ├── common/      # Reusable UI components (Buttons, Inputs, etc.)
│   ├── layout/      # Layout components (Header, Footer, Sidebar)
│   └── features/    # Feature-specific components (PromptInput, Preview)
├── context/         # Global state context (UserContext, ThemeContext)
├── hooks/           # Custom React hooks
├── pages/           # Page components (Home, Dashboard, Builder)
├── services/        # API services and external integrations
├── utils/           # Helper functions and constants
└── styles/          # Global styles
```

## 🛠 Tech Stack
- **Frontend**: React, Vite
- **Styling**: Tailwind CSS
- **State Management**: React Context / Hooks
- **Routing**: React Router (to be installed)

## 🤝 Collaboration Guidelines (For 2-Member Team)

1. **Branching Strategy**:
   - `main`: Production-ready code.
   - `develop`: Integration branch.
   - Feature branches: `feature/feature-name` (e.g., `feature/login-page`, `feature/prompt-input`).

2. **Workflow**:
   - **Member A** picks a task (e.g., "Setup Login UI").
   - Create a branch: `git checkout -b feature/login-ui`.
   - Commit changes often: `git commit -m "feat: add login form layout"`.
   - Push to origin: `git push origin feature/login-ui`.
   - Open a Pull Request (PR) to `develop`.
   - **Member B** reviews the code and approves.
   - Merge to `develop`.

3. **Communication**:
   - Use comments in code for complex logic.
   - daily standup (15 mins) to sync on what you are working on.
   - Use a Trello board or GitHub Projects to track tasks (To Do, In Progress, Done).

4. **Code Quality**:
   - Run linter before pushing.
   - Keep components small and focused.
   - Use meaningful variable names.

## 📝 Project Flow

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed system flow.
