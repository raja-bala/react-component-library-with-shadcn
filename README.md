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

11. Install StoryBook

```node
npm create storybook@latest
```

? New to Storybook? › - Use arrow-keys. Return to submit.
❯ Yes: Help me with onboarding

- Choose Yes

12. After the StoryBook installation remove all the contents(files and folders) from the `src/stories` folder

13. Add `index.ts` file in `/src/lib/` folder to expose all the component from the libary

- currently we have only button component from shadcn
- so add that with the `index.css` file so that all the css will be export with the libary

14. Lets add stories for the Shadcn button component in `/src/stories` folder

15. Also import the index.css in `./storybook/preview.ts` file so the css styles will be applied correcly while previewing the storybook
    - run `npm run storybook` to see the preview of the storybook

### Lets do the required steps to build the libary

16. Install vite-plugin-dts

```node
npm install -D vite-plugin-dts
```

17. Do the config changes in `vite.config.ts` file

18. Do the config changes in `package.json` file

- change `private` to `false`
- add these change accoringly based on the name of the libary
  ```json
  "main": "./dist/react-component-library-with-shadcn.umd.js",
  "module": "./dist/react-component-library-with-shadcn.es.js",
  "types": "./dist/index.d.ts",
  "files": [
    "dist"
  ],
  "sideEffects": [
    "**/*.css",
    "dist/react-component-library-with-shadcn.css"
  ],
  ```
- change "dependencies": to "peerDependencies":
- and do `npm run build' to build the libary and verify the build is ok or not

19. Even the build generate all the expected files,

- /dist/react-component-library-with-shadcn.umd.js
- /dist/react-component-library-with-shadcn.es.js
- /dist/index.d.ts
- /dist/react-component-library-with-shadcn.css

  it will through error: Cannot find module '../index.css' or its corresponding type declarations.

  1 import "../index.css";

20. The above error is thrown because of css files are not allowed while building the libary, let fix this

- let add `global.d.ts`
- do the config changes in `vite.config.ts` file , "src/global.d.ts" in this line
  include: ["src/components", "src/lib", "src/global.d.ts"],
- now there is should not be any error

### Lets publish to local npm registry

```node
npm publish --registry http://localhost:4873/
```

### Consume this Libary

- install the libary

```node

npm install --registry http://localhost:4873/ react-component-library-with-shadcn@0.0.0

```

- import the css depenecy in `index.css`

@import "react-component-library/dist/react-component-library-with-shadcn.css";

- import the Button Component

import { Button } from "react-component-library-with-shadcn";

#### Whenever there is a change and before publishing chang the version number in the package.json
