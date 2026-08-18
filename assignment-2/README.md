# Assignment 2 — React Portfolio

A personal portfolio website built with **React + Vite** as part of a web development learning assignment. This project demonstrates core React concepts including component architecture, props, state management, routing, and side effects.

---

## Live Demo

> Run locally with `npm run dev` → open [http://localhost:5173](http://localhost:5173)

---

## Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI library |
| Vite | Build tool & dev server |
| React Router DOM | Client-side routing |
| lucide-react | Icon library |
| CSS Variables | Theming (dark/light mode) |
| Google Fonts | Orbitron + Share Tech Mono |

---

## Project Structure

```
assignment-2/
├── index.html                  # Entry HTML (Google Fonts loaded here)
├── src/
│   ├── main.jsx                # React root — mounts App into #root
│   ├── App.jsx                 # Root component — layout, routing, theme state
│   ├── App.css                 # Global styles, theme variables, all CSS
│   │
│   ├── components/             # Reusable UI components
│   │   ├── Navbar.jsx          # Sticky navbar with nav links + theme toggle
│   │   ├── Footer.jsx          # Footer with social links
│   │   ├── ProjectCard.jsx     # Expandable project card (local state)
│   │   └── TechStack.jsx       # Tech badge (grandchild — prop drilling demo)
│   │
│   ├── pages/                  # Page-level components (rendered by Router)
│   │   ├── Home.jsx            # Hero section with loading screen (useEffect)
│   │   ├── About.jsx           # Education, skills, responsibilities
│   │   ├── Projects.jsx        # Renders project grid by mapping data
│   │   ├── Contact.jsx         # Controlled form with validation
│   │   └── PageDetails.jsx     # Dynamic project detail page (useParams)
│   │
│   └── data/
│       └── projects.js         # Project data array (single source of truth)
```

---

## React Concepts Demonstrated

### 1. Component Architecture
The UI is broken into small, focused, reusable components. `Navbar` and `Footer` are persistent layout components. Page components (`Home`, `About`, etc.) are swapped in dynamically by the router.

### 2. Props & Prop Drilling (2 levels deep)
Data flows from **`Projects.jsx`** (parent) → **`ProjectCard.jsx`** (child) → **`TechStack.jsx`** (grandchild). Each component receives only the props it needs.

### 3. Client-Side Routing
Built with `react-router-dom`. All navigation uses `<Link>` instead of `<a>` tags to prevent page reloads. Includes a wildcard `*` route for 404 handling.

| Route | Component |
|---|---|
| `/` | `Home` |
| `/about` | `About` |
| `/projects` | `Projects` |
| `/contacts` | `Contact` |
| `/projects/:id` | `PageDetails` |

### 4. Local State (`useState`)
Each `ProjectCard` has its own independent `showDetails` state. Clicking "View Details" on one card does not affect other cards — each component instance has its own isolated memory.

### 5. Lifted State (Theme Toggle)
The `theme` state lives in `App.jsx` (the closest common ancestor of `Navbar` and all pages). The toggle function is passed *down* as a prop to `Navbar`. When called, it updates the state in `App`, which re-renders the entire tree with the new theme class.

### 6. Controlled Form (`Contact.jsx`)
React is the single source of truth for every input value. Each field is bound with `value={state}` and `onChange={(e) => setState(e.target.value)}`. The submit button is `disabled` until all three fields are non-empty, computed as a derived variable on every render.

### 7. Side Effects (`useEffect`)

**Loading screen** (`Home.jsx`):
```js
useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
}, []); // Empty array = runs once on mount only
```

**Persisting theme to localStorage** (`App.jsx`):
```js
useEffect(() => {
    localStorage.setItem("myPortfoliotheme", theme);
}, [theme]); // Runs every time theme changes
```
On page load, the initial state reads from localStorage:
```js
useState(localStorage.getItem("myPortfoliotheme") || 'light')
```

### 8. Dynamic Routing (`useParams`)
The route `/projects/:id` uses a URL parameter. `PageDetails.jsx` reads it with `useParams()`, converts it to a number, and finds the matching project in the data array using `.find()`.

---

## Features

- **Dark / Light theme toggle** — persists across page refreshes via `localStorage`
- **Loading animation** — 1-second spinner on Home page mount
- **Expandable project cards** — independent toggle per card
- **Controlled contact form** — disabled submit until all fields are filled
- **Dynamic project detail pages** — `/projects/1`, `/projects/2`, `/projects/3`
- **404 fallback route** — catches any unrecognized URL
- **Sticky navbar** — stays at top while scrolling
- **Sticky footer** — always pinned to bottom using flexbox layout
- **Responsive grid** — 3 columns → 2 → 1 at mobile breakpoints

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Author

**Shreyash Sharma**
B.Tech Computer Science — National Institute of Technology, Warangal (2024–2028)

- GitHub: [leetrushreyash](https://github.com/leetrushreyash)
- LinkedIn: [shreyash-sharma-73aa0a374](https://www.linkedin.com/in/shreyash-sharma-73aa0a374)
- Email: shreyash2006sharma@gmail.com
