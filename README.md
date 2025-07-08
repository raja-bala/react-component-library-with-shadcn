# React + TypeScript + Vite + Shadcn

## Installation/Setup steps ( follow this page https://ui.shadcn.com/docs/installation/vite until step 9)

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

6. Add the following code to the vite.config.ts so your app can resolve paths without error

```node
npm install -D @types/node
```

7. Add the following code to the vite.config.ts so your app can resolve paths without error:

```ts
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

8. Run the shadcn init command to setup shadcn

```node
npx shadcn@latest init
```

9. For Testing we add few components

```node
npx shadcn@latest add button
```

10. Remove all unncessary files as we are going to build libary

```node
index.html;
App.css;
App.tsx;
main.tsx;
```
