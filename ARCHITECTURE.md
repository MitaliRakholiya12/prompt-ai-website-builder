# System Architecture & Flow

## High-Level Overview

The system consists of a **Frontend** (React) that captures user prompts and displays the generated website, and a **Backend** (to be implemented) that processes the prompt using an AI model (like GPT-4) and returns the code/layout structure.

## User Flow Chart

```mermaid
graph TD
    A[User Visits Landing Page] --> B{Logged In?}
    B -- No --> C[Login / Register]
    C --> B
    B -- Yes --> D[Dashboard]
    D --> E[Click "Create New Site"]
    E --> F[Prompt Input Interface]
    F --> G[Enter Prompt e.g., "Portfolio for Photographer"]
    G --> H[Submit Prompt]
    H --> I[AI Processing (Backend)]
    I --> J[Generate Website Structure (JSON/HTML)]
    J --> K[Preview Generated Site]
    K --> L{Satisfied?}
    L -- No --> M[Refine Prompt / Edit Manually]
    M --> I
    L -- Yes --> N[Publish / Export Code]
```

## Module Breakdown

### 1. Frontend (React + Vite)
- **Prompt Interface**: A clean UI to accept natural language input.
- **Preview Engine**: An iframe or component renderer that takes the AI-generated JSON/HTML and renders it safely.
- **Editor**: A simple visual editor to tweak the generated result (change text, colors).
- **Dashboard**: Manage created projects.

### 2. Backend (Future Scope)
- **API Gateway**: Handle requests from frontend.
- **AI Service**: Integrate with OpenAI API or similar.
- **Database**: Store user profiles and saved projects (MongoDB/PostgreSQL).

## Data Flow (Simplified)

1. **Input**: User sends string: `"Create a coffee shop landing page"`
2. **Process**: Backend sends prompt to AI with system instructions:
   > "Generate a JSON structure for a landing page with sections: Hero, About, Menu, Contact. Use Tailwind CSS classes."
3. **Response**: AI returns JSON:
   ```json
   {
     "theme": "warm",
     "sections": [
       { "type": "hero", "content": "Best Coffee in Town", "image": "coffee.jpg" },
       { "type": "menu", "items": [...] }
     ]
   }
   ```
4. **Render**: Frontend maps JSON to React components (e.g., `<HeroSection />`, `<MenuSection />`).

## Getting Started Guidelines

1. **Phase 1: Static UI**: Build the Dashboard and Prompt Input screens. Mock the AI response with static JSON.
2. **Phase 2: Preview Engine**: Build the components that can render based on a JSON config.
3. **Phase 3: Backend Integration**: Connect to a real AI API.
