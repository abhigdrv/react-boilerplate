# Contributing to React Boilerplate

Thank you for your interest in contributing to React Boilerplate! This document provides guidelines and instructions for contributing.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in Issues
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your environment (OS, Node version, etc.)

### Suggesting Enhancements

1. Check if the enhancement has already been suggested
2. Create a new issue with:
   - Clear title and description
   - Use case and benefits
   - Possible implementation approach

### Pull Requests

1. Fork the repository
2. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes following our coding standards

4. Write or update tests as needed

5. Ensure all tests pass:
   ```bash
   pnpm test
   pnpm test:e2e
   ```

6. Ensure code quality checks pass:
   ```bash
   pnpm lint
   pnpm type-check
   pnpm format:check
   ```

7. Commit your changes using conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   ```

8. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

9. Create a Pull Request with:
   - Clear title and description
   - Reference to related issues
   - Screenshots/GIFs for UI changes

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Enable strict mode
- Avoid `any` type when possible
- Define proper interfaces and types

### React

- Use functional components with hooks
- Keep components small and focused
- Use meaningful component names
- Extract reusable logic into custom hooks

### Styling

- Use Tailwind CSS utility classes
- Follow the existing design system
- Use the `cn()` utility for conditional classes
- Avoid inline styles

### State Management

- Use Zustand for client state
- Use React Query for server state
- Keep stores small and focused
- Document complex state logic

### Testing

- Write tests for new features
- Maintain or improve code coverage
- Use meaningful test descriptions
- Follow AAA pattern (Arrange, Act, Assert)

### File Organization

```
src/
├── components/
│   ├── ui/              # Reusable UI components
│   ├── layout/          # Layout components
│   └── common/          # Common components
├── features/            # Feature modules
│   └── [feature-name]/
│       ├── components/  # Feature-specific components
│       ├── hooks/       # Feature-specific hooks
│       ├── store/       # Feature-specific stores
│       └── index.ts     # Public API
├── pages/               # Route pages
├── hooks/               # Global custom hooks
├── stores/              # Global stores
├── services/            # API services
└── utils/               # Utility functions
```

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Hooks**: camelCase with 'use' prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: PascalCase (e.g., `User.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_BASE_URL`)

### Git Commit Messages

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

body

footer
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks
- `ci`: CI/CD changes
- `build`: Build system changes

**Examples:**
```
feat(auth): add OAuth2 login
fix(button): correct disabled state styling
docs(readme): update installation instructions
test(counter): add unit tests for counter store
```

## Development Workflow

1. **Install dependencies:**
   ```bash
   pnpm install
   ```

2. **Start development server:**
   ```bash
   pnpm dev
   ```

3. **Run tests in watch mode:**
   ```bash
   pnpm test --watch
   ```

4. **Before committing:**
   ```bash
   pnpm lint:fix
   pnpm format
   pnpm type-check
   pnpm test
   ```

## Questions?

Feel free to open an issue for any questions or concerns.

Thank you for contributing! 🎉
