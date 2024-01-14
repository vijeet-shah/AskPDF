# AskPDF - PDF Analysis and Question-Answering SaaS Platform

## Overview
AskPDF is a powerful SaaS platform designed for PDF analysis and question-answering. Leveraging cutting-edge technologies such as Next.js, Prisma, and trpc, it provides a seamless and efficient solution for extracting details from PDF documents.

## Tech Stack
- **Next.js:** A React framework for building efficient and scalable web applications.
- **Prisma:** A modern database toolkit for Node.js and TypeScript, simplifying database access and management.
- **trpc:** A TypeScript-first RPC (Remote Procedure Call) library, ensuring type safety across server and client communication.

## Features
- **PDF Analysis:** Efficiently analyze and extract information from PDF documents.
- **Question-Answering:** Implement intelligent question-answering functionalities for extracted content.
- **User-Friendly Interface:** Next.js ensures a responsive and interactive user interface for an enhanced user experience.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/AskPDF.git
   ```

2. Navigate to the project directory:
   ```bash
   cd AskPDF
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Set up Prisma:
## Configure your database connection in prisma/schema.prisma & Run migrations:
   ```bash
   npx prisma migrate dev
   ```
5. Set up .env
   ```bash
   KINDE_CLIENT_ID=
   KINDE_CLIENT_SECRET=
   KINDE_ISSUER_URL=
   KINDE_SITE_URL=
   KINDE_POST_LOGOUT_REDIRECT_URL=
   KINDE_POST_LOGIN_REDIRECT_URL=
   DATABASE_URL=

   UPLOADTHING_SECRET=
   UPLOADTHING_APP_ID=

   PINECODE_API_KEY=

   OPENAI_API_KEY=
   STRIPE_SECRET_KEY=
   STRIPE_WEBHOOK_SECRET=
   ```
6. Start the application:
   ```bash
   npm run dev
   ```
Contributions are welcome! Please check the Contributing Guidelines for more details.

## License
This project is licensed under the MIT License.
