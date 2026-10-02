# DBT Simple Microservices

A class demo project showcasing a microservices architecture for back-end students. This project demonstrates how to build and run multiple services that communicate through a central gateway.

## Project Structure

The project consists of three microservices:

- **Gateway** - Central API gateway (runs on port 3000)
- **Users Service** - User microservice (runs on port 3001)
- **Products Service** - Products microservice (runs on port 3002)

Each service uses hard-coded data for demonstration purposes.

## Installation

### Prerequisites

Ensure you have Node.js installed on your system.

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/warren-west/dbt-simple-microservices.git
   cd dbt-simple-microservices
   ```

2. Install dependencies for each microservice:
   ```bash
   # Install gateway dependencies
   cd gateway
   npm install
   cd ..

   # Install users service dependencies
   cd users
   npm install
   cd ..

   # Install products service dependencies
   cd products
   npm install
   cd ..
   ```

## Configuration

Create a `.env` file in each microservice directory with the appropriate PORT:

- `gateway/.env` - PORT 3000
- `users/.env` - PORT 3001
- `products/.env` - PORT 3002

See `.env.example` in each directory for the template.

## Running the Services

Each service must run in a separate terminal window. Start them in the following order:

### 1. Start the Users Service (Port 3001)

```bash
cd users
npm start
```

### 2. Start the Products Service (Port 3002)

```bash
cd products
npm start
```

### 3. Start the Gateway (Port 3000)

```bash
cd gateway
npm start
```

Once all three services are running, the gateway will be available at `http://localhost:3000` and can route requests to the other microservices.

## Architecture

- The **Gateway** acts as the main entry point for all API requests
- The **Users Service** handles user-related operations
- The **Products Service** handles product-related operations
- Services communicate using HTTP requests

All services use in-memory data structures for demonstration purposes.
