# Doctor Station - Base Portal

## 📋 Project Overview

**Doctor Station Base Portal** is a web portal application built with Nuxt 3, providing a management and interaction platform for the healthcare system. The application supports the following main features:

- **Challenges**: Manage and track health challenges
- **Missions**: Manage daily health-related tasks
- **Questionnaires**: Collect and manage information through questionnaires
- **Recipes**: Manage recipes and nutrition information
- **Timeline**: Track history and progress
- **Supply**: Manage supply resources
- **Todo**: Manage task lists

## 🛠️ Technology Stack

- **Nuxt 3**: Vue.js framework with SSR/SSG
- **Vue 3**: Progressive JavaScript framework
- **TypeScript**: Type safety and better developer experience
- **Tailwind CSS**: Utility-first CSS framework
- **Flowbite**: Component library for Tailwind CSS
- **pnpm**: Primary package manager

## 📦 System Requirements

- **Node.js**: Version 18.x or higher
- **pnpm**: Version 10.18.3 or higher (specified in `package.json`)
- **Git**: For cloning the repository

## 🚀 Installation Guide

### 1. Install pnpm (If Not Already Installed)

If you haven't installed pnpm, you can install it using one of the following methods:

```bash
# Using npm
npm install -g pnpm

# Using Homebrew (macOS)
brew install pnpm

# Using PowerShell (Windows)
iwr https://get.pnpm.io/install.ps1 -useb | iex
```

### 2. Clone Repository

```bash
git clone <repository-url>
cd base_portal
```

### 3. Install Dependencies

```bash
pnpm install
```

This command will:

- Install all dependencies from `package.json`
- Automatically run `nuxt prepare` after installation (via `postinstall` script)

### 4. Configure Environment Variables

Create a `.env` file in the project root directory:

```bash
# Windows
copy .env.example .env

# Linux/macOS
cp .env.example .env
```

Edit the `.env` file with appropriate values:

```env
NUXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

**Environment Variables Explanation:**

- `NUXT_PUBLIC_API_BASE_URL`: Base URL of the backend API (default: `localhost`)

### 5. Run Development Server

```bash
pnpm dev
```

The application will run at: `http://localhost:3000`

## 📜 Other Commands

### Build for Production

```bash
pnpm build
```

### Preview Production Build

```bash
pnpm preview
```

### Generate Static Site

```bash
pnpm generate
```

## 📁 Project Structure

```
base_portal/
├── assets/                    # Static resources (CSS, JS, images)
│   ├── styles/               # Global styles
│   │   └── common.css        # Common styles
│   └── template/             # Template assets
│       ├── css/              # Template CSS files
│       │   ├── common.css
│       │   ├── reset.css
│       │   ├── home.css
│       │   ├── challenge.css
│       │   ├── challenge_detail.css
│       │   ├── mission.css
│       │   ├── questionnaire.css
│       │   ├── recipe_all.css
│       │   ├── supply.css
│       │   ├── timeline.css
│       │   ├── todo.css
│       │   └── login.css
│       └── js/               # Template JavaScript files
│           ├── mission_modal.js
│           ├── questionnaire.js
│           ├── timeline_ingredient_modal.js
│           └── timeline_mission_modal.js
│
├── components/                # Vue components
│   ├── header/               # Header components
│   │   └── Header.vue
│   ├── modal/                # Modal components
│   │   ├── QuestionnaireModal.vue
│   │   ├── TimelineIngredientModal.vue
│   │   └── TimelineMissionModal.vue
│   ├── sidebar-right/        # Right sidebar components
│   │   ├── SbrHome.vue
│   │   ├── SbrChallenge.vue
│   │   ├── SbrChallengeDetail.vue
│   │   ├── SbrMission.vue
│   │   ├── SbrQuestionnaire.vue
│   │   ├── SbrRecipe.vue
│   │   ├── SbrRecipeDetail.vue
│   │   ├── SbrSupply.vue
│   │   └── SbrTimeline.vue
│   ├── ChallengeHeaderNav.vue # Challenge header navigation
│   ├── Notification.vue      # Notification component
│   └── Sidebar.vue           # Main sidebar component
│
├── composables/              # Reusable composition functions
│   ├── useApi.ts            # API fetching composable
│   └── useLayoutConfig.ts   # Layout configuration composable
│
├── constants/                # Constants and configuration
│   ├── index.ts             # General constants
│   ├── challenge.ts         # Challenge constants and enums
│   └── sidebar.ts           # Sidebar constants
│
├── layouts/                  # Layout templates
│   ├── default.vue          # Default layout
│   ├── auth.vue             # Authentication layout
│   └── challenge.vue        # Challenge layout
│
├── middleware/               # Route middleware
│   └── reset-layout.global.ts  # Global layout reset middleware
│
├── pages/                    # File-based routing (Nuxt 3)
│   ├── (auth)/              # Auth route group
│   │   └── login.vue        # Login page
│   ├── challenge/           # Challenge pages
│   │   ├── index.vue        # Challenge list
│   │   ├── general.vue       # General challenge
│   │   └── [name]/          # Dynamic challenge routes
│   │       ├── index.vue
│   │       ├── challenge-content.vue
│   │       ├── challenge-check.vue
│   │       └── timeline-list/
│   │           ├── index.vue
│   │           └── timeline-detail.vue
│   ├── index.vue            # Home page
│   ├── mission.vue          # Mission page
│   ├── questionnaire.vue    # Questionnaire page
│   ├── recipe_all.vue       # Recipe list page
│   ├── settings.vue         # Settings page
│   ├── supply.vue           # Supply page
│   ├── timeline.vue         # Timeline page
│   └── todo.vue             # Todo page
│
├── plugins/                  # Nuxt plugins
│   └── flowbite.client.ts   # Flowbite plugin (client-side only)
│
├── public/                   # Public static files
│   ├── images/              # Image assets
│   │   ├── challenge_detail/
│   │   ├── home/
│   │   ├── mission/
│   │   ├── questionnaire/
│   │   ├── recipe_all/
│   │   ├── supply/
│   │   ├── timeline/
│   │   └── [various icons and images]
│   ├── js/                  # Public JavaScript files
│   ├── favicon.ico
│   └── robots.txt
│
├── server/                   # Server-side code
│   └── tsconfig.json        # TypeScript config for server
│
├── types/                    # TypeScript type definitions
│   └── sidebar.ts           # Sidebar types and interfaces
│
├── utils/                    # Utility functions
│   ├── image.ts             # Image utilities
│   └── index.ts             # General utilities
│
├── app.vue                   # Root component
├── nuxt.config.ts           # Nuxt configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── package.json             # Project dependencies
```

## 🏗️ Project Architecture

### Patterns and Rules

The project follows these patterns and rules:

#### 1. Types (TypeScript Interfaces)

- All TypeScript interfaces and types are placed in the `types/` directory
- One file per domain: `types/sidebar.ts`
- Export interfaces and response types from the types directory
- Import shared types from `types/` when needed

#### 2. Constants

- Constants and enums are placed in the `constants/` directory
- One file per domain: `constants/challenge.ts`, `constants/sidebar.ts`
- Export enums and constant mappings from the constants directory
- Import constants from `constants/` when needed

#### 3. Composables

- All reusable logic is in the `composables/` directory
- Naming pattern: `use{Feature}.ts` (e.g., `useApi.ts`)
- Import types from `types/`, do not define inline
- Use `useApi` for API calls
- Use `useLayoutConfig` for layout state management

#### 4. Components

- Vue components in the `components/` directory
- Use PascalCase naming (e.g., `Header.vue`, `ChallengeHeaderNav.vue`)
- Import composables and types when needed
- Use `<script setup lang="ts">` syntax
- Organize components in subdirectories by feature (header, modal, sidebar-right)

#### 5. Pages

- Follow Nuxt 3 file-based routing
- Dynamic routes: `[param].vue`
- Nested routes: `[parent]/[child].vue`
- Route groups: `(group)/` for organizing routes
- Example: `pages/challenge/[name]/challenge-content.vue`

### Pattern Example:

```
types/sidebar.ts → SidebarItem interface
constants/challenge.ts → ChallengeTab enum, ChallengeTabLabelMap
composables/useApi.ts → useApi composable (imports from types/)
composables/useLayoutConfig.ts → useLayoutConfig composable
components/SbrChallenge.vue → Uses composables
pages/challenge/index.vue → Uses composables
```

## 💻 Code Rules

### General Principles

- **Single Responsibility**: Each function/component should do one thing
- **DRY**: Extract reusable logic into composables
- **Meaningful Names**: Use meaningful variable and function names
- **Small Functions**: Keep functions small and focused
- **Code Comments**: All code comments must be written in English

### TypeScript

- Always define types/interfaces for data structures
- Use `interface` for objects, `type` for unions/intersections
- Avoid using `any` type
- Use proper type annotations for function parameters and return types

### Vue/Nuxt

- Use `<script setup lang="ts">` for components
- Use Composition API with TypeScript
- Use composables for reusable logic
- Use `computed` for derived state
- Use `watch` for side effects
- Prefer `useState` over local refs for shared state
- Use scoped styles: `<style lang="css" scoped>`

### API Calls

- Use the `useApi()` composable from `composables/useApi.ts`
- API base URL is retrieved from `runtimeConfig.public.apiBaseURL`
- Always include XSRF token in headers when available
- Use `credentials: 'include'` for CORS requests
- Handle errors properly with try-catch

### Styling

- Use Tailwind CSS classes for main styling
- Custom CSS in `assets/styles/` and `assets/template/css/`
- Import CSS files in `nuxt.config.ts`
- Use scoped styles in components when needed

## 🔧 Troubleshooting Common Issues

### Error: pnpm not found

**Solution**: Install pnpm following the instructions above.

### Error: Port 3000 is already in use

**Solution**: Change the port by specifying it when running:

```bash
pnpm dev --port 3001
```

### Error: API connection failed

**Solution**:

- Check `NUXT_PUBLIC_API_BASE_URL` in the `.env` file
- Ensure the backend API is running
- Check CORS settings on the backend

### Error: Module not found

**Solution**:

```bash
# Remove node_modules and reinstall
rm -rf node_modules .nuxt
pnpm install
```

### Error: TypeScript errors

**Solution**:

- Run `pnpm install` to ensure all dependencies are installed
- Check that `nuxt prepare` has been run (automatically via postinstall)
- Verify TypeScript configuration in `tsconfig.json`

## 📝 Additional Notes

- The project uses Nuxt 3 auto-imports, so you don't need to manually import many utilities
- All code comments must be written in English
- Use pnpm for package management (as specified in `package.json`)
- Follow Nuxt 3 conventions and best practices
- Maintain consistency with the current codebase
