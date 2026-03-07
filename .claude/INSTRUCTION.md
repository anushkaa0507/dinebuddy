```markdown
# Folder Structure

Follow the modular folder structure:

- **modules/**
  - **auth/**
  - **floor-table/**
    - **components/**
      - manage-floor/
      - manage-table/
        - header.tsx
        - table-list.tsx
    - **constants/**
    - **hooks/**
    - **pages/**
      - table-management.tsx
      - floor-management.tsx
    - **types/**
  - **order/**
  - **payment/**
  - **user/**
  - **waitlist/**
- **components/**
  - **ui/**
- **lib/**
  - **utils/**
- **hooks/**
- **constants/**
- **types/**
- \*\*pages
```

Design system

- use tailwind css for writing styles
- use shadcn ui theme system for colors and styles. Don't use any hardcoded colors for text, background, border, etc. Use the theme system for all colors.
- use lucide icons for icons
- use nextjs for routing
- use react for ui
- use typescript for type safety
- use react for ui
- use typescript for type safety
- use shadcn components where ever possible. create own variants if needed in that component.
