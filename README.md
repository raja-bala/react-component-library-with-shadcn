# React + TypeScript + Vite + Shadcn

## Installation/Setup steps ( follow this page https://ui.shadcn.com/docs/installation/vite until step )

1. Install Vite + React + TypeScript

```node
  npm create vite@latest
```

2. Install Tailwind

```node
  npm install tailwindcss @tailwindcss/vite
```

3. Replace everything in src/index.css with the following:

```node
@import "tailwindcss";
```

4. Edit tsconfig.json file add this to `compilerOptions` section of the tsconfig.json file

```json
"compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
```

5. Edit tsconfig.app.json file, Add the following code to the tsconfig.app.json file to resolve paths, for your IDE:

```json
    "compilerOptions": {
    // ...
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
    // ...
  }
```
