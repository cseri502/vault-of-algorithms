<p align="center">
	<img src="https://github.com/cseri502/vault-of-algorithms/blob/main/public/machine-learning.png" width="128" title="Vault of Algorithms">
</p>

<h1 align="center">Vault of Algorithms</h1>

## 📒 Description

A curated collection of algorithms implemented in multiple programming languages with detailed explanations. This interactive web application helps developers and computer science enthusiasts discover, learn, and implement various algorithms.

## 🚀 Technologies & Tools

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=for-the-badge)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
<br />
![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

## ✨ Features

- **Multi-language Support**: Access algorithm implementations in various programming languages
- **Comprehensive Collection**: Explore algorithms across different categories
- **Detailed Explanations**: Learn how each algorithm works with thorough documentation
- **Syntax Highlighting**: View code with proper syntax highlighting for easier comprehension
- **Copy & Use**: Easily copy code snippets for immediate use in your projects
- **Dark/Light Mode**: Choose your preferred theme for a comfortable viewing experience
- **Responsive Design**: Enjoy a seamless experience across desktop and mobile devices
- **Search Functionality**: Quickly find specific algorithms with the built-in search feature

## 🏗️ Project Structure

```
vault-of-algorithms/
├── src/
│   ├── components/
│   │   ├── AlgorithmCard.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── SearchBar.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   ├── algorithms.ts
│   │   └── languages.ts
│   ├── pages/
│   │   ├── AlgorithmPage.tsx
│   │   └── HomePage.tsx
│   └── snippets/
│       ├── sorting/
│       ├── searching/
│       └── ...
│   ├── utils/
│   │   └── snippetLoader.ts
│   └── App.tsx
└── README.md
```

## 🚦 Getting Started

### Prerequisites

- Node.js (version 14.x or higher)
- npm, pnpm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/cseri502/vault-of-algorithms.git
   ```

2. Navigate to the project directory
   ```
   cd vault-of-algorithms
   ```

3. Install dependencies
   ```
   (p)npm install
   # or
   yarn install
   ```

4. Start the development server
   ```
   (p)npm run dev
   # or
   yarn start
   ```

5. Open your browser and visit `http://localhost:xxxx`

## 📝 Adding New Algorithms

To add a new algorithm to the collection:

1. Add the algorithm details to `src/data/algorithms.ts`
2. Create implementation files in the appropriate language folders under `snippets/`
3. Make sure to update the `availableLanguages` property to reflect supported languages

## ⏩ References
- [Machine learning icons created by Muhammad_Usman - Flaticon](https://www.flaticon.com/free-icons/machine-learning)

<br />

➡️ [Take a look at some of my other projects.](https://github.com/cseri502)