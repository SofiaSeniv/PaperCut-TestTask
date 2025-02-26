# Project Setup Guide

## Cloning the Repository

To get started with the project, you need to clone the repository from the remote source to your local machine.

### Steps:

1. Open a terminal or command prompt.
2. Navigate to the directory where you want to clone the project.
3. Run the following command:
   ```sh
   git clone https://github.com/SofiaSeniv/PaperCut-TestTask.git
   ```
4. Change to the project directory:
   ```sh
   cd PaperCut-TestTask
   ```

## Project Structure

The repository contains two projects:

- **Backend**: ASP.NET Core Web API (located in the `PaperCut` folder)
- **Frontend**: React application (located in the `paper-cut-web` folder)

---

## Running the Backend (ASP.NET Core Web API)

### Prerequisites:

- [.NET SDK](https://dotnet.microsoft.com/en-us/download/dotnet) installed

### Steps:

1. Navigate to the backend folder:
   ```sh
   cd PaperCut
   ```
2. Restore dependencies:
   ```sh
   dotnet restore
   ```
3. Navigate to the `PaperCut.API` folder.

   ```bash
   cd PaperCut.API
   ```

4. Run the API:
   ```sh
   dotnet run
   ```
   After running this command, the project will be running.
5. To test the project, copy the localhost URL displayed in the terminal and append /swagger to it. For example:
   ```sh
    http://localhost:5179/swagger
   ```
   This will open the Swagger UI, allowing you to interact with the API.

---

## Running the Frontend (React Application)

### Prerequisites:

- [Node.js](https://nodejs.org/) installed
- [Yarn](https://yarnpkg.com/) or npm installed

### Steps:

1. Navigate to the frontend folder:
   ```sh
   cd paper-cut-web
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
   or (if using Yarn):
   ```sh
   yarn install
   ```
3. Start the React application:
   ```sh
   npm run dev
   ```
4. The application should be available at `http://localhost:5173`.

---

## Additional Notes

- Make sure that both backend and frontend are running simultaneously for full functionality.
