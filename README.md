# FormChat

FormChat will be a conversational alternative to traditional form builders like Google Forms. This project aims to replace rigid form fields with natural conversations for both creating and filling out forms.

## 🌟 Vision

- **Conversational Creation**: Set up forms by simply writing prompts in natural language
- **Chat Interface**: Respondents interact through a familiar chat UI instead of form fields 
- **Seamless Experience**: No more dropdown menus or "Other" fields - just answer naturally
- **AI-Powered Analysis**: Understand responses better through conversational context

## 🚧 Development Status

**This project is in very early development.** We've just started building the foundation and core functionality. It is not yet ready for use.

## 🚀 Getting Started

This project is built with Turborepo in a monorepo structure.

### Prerequisites

- Node.js 18.x or higher
- npm 11.x or higher

### Installation

```sh
# Clone the repository
git clone https://github.com/Tatsatbh/formchat.git
cd formchat

# Install dependencies
npm install
```

### Development

To run the development environment:

```sh
npm run dev
```

### Build

To build all applications:

```sh
npm run build
```

## 📦 Project Structure

This monorepo includes:

### Apps
- `web`: Next.js application for the main FormChat interface
- `docs`: Next.js application for documentation

### Packages
- `@repo/ui`: Shared React component library 
- `@repo/common`: Common utilities and shared code
- `@repo/db`: Database access layer and models
- `@repo/eslint-config`: ESLint configurations
- `@repo/typescript-config`: TypeScript configurations

## 📝 License

[MIT](LICENSE)
