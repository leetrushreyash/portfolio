# Shreyash Sharma - Developer Portfolio

Welcome to the source code for my personal developer portfolio. This project serves as a showcase of my technical skills, educational background, and recent projects, presented in a clean, modern interface.

## Design Rationale

The portfolio features a professional, "digital" aesthetic tailored for a software engineer. 
* **Color Palette:** The design leverages a high-contrast theme—a crisp white background with stark black text—maximizing readability. A vibrant orange accent (`#ff6600`) is used strategically for interactive elements, hover states, and gradient headers to draw the user's eye and add a modern flair.
* **Typography:** To reinforce the developer persona, the site uses Google Fonts combinations: **'Share Tech Mono'** for body text to emulate a terminal-like feel, and **'Orbitron'** for bold, futuristic headings.

## Layout Technique Justification

The layout relies on modern CSS layout modules rather than outdated techniques like floats:
* **CSS Grid:** The project section (`.project-grid`) utilizes CSS Grid. Grid is the optimal choice for creating structured, two-dimensional layouts, easily handling uniform column widths and gaps.
* **Flexbox:** Flexbox is used in the navigation bar to evenly distribute space between links (`justify-content: space-between`). It excels at one-dimensional alignment, making it perfect for horizontal menus.
* **Responsive Design:** Media queries gracefully collapse the three-column project grid into two columns on tablets (`max-width: 768px`) and a single column on mobile devices (`max-width: 480px`), ensuring usability across all screen sizes.

## Known Limitations

While functional, this static iteration of the portfolio has a few limitations:
1. **Form Functionality:** The contact form currently lacks a backend processor; submissions will not send actual emails without integrating a service like Formspree or a custom API.
2. **Scalability:** The single-page scrolling architecture works well for the current amount of content, but could become cumbersome to navigate if dozens of new projects are added.
3. **Accessibility:** While contrast is generally high, further accessibility audits are needed (e.g., adding comprehensive `aria-labels` and screen-reader optimizations).
