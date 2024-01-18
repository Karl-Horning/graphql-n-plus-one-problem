const dotenv = require("dotenv");
const { ApolloServer } = require("apollo-server");
const chalk = require("chalk");
const resolvers = require("./src/resolvers");
const typeDefs = require("./src/schemas");

// Load environment variables from .env file
dotenv.config();

const { red, yellow } = chalk;

// Get the port number from the environment variables, or use 4000 as the default
const port = parseInt(process.env.PORT, 10) || 4000; // Validate and parse the port as an integer

let server;

/**
 * Start the Apollo Server.
 */
const startApolloServer = async () => {
    try {
        server = new ApolloServer({
            typeDefs,
            resolvers,
            context: () => ({
                // Add chalk to the context
                red,
                yellow,
            }),
        });
        const { url } = await server.listen({ port });
        console.log(`Apollo Server started at ${url} 🚀`);
    } catch (error) {
        handleServerStartError(error);
    }
};

/**
 * Handle errors that occur when starting the Apollo Server.
 * @param {Error} error - The error that occurred.
 */
const handleServerStartError = (error) => {
    if (error.code === "EADDRINUSE") {
        console.error(
            red(`Port ${port} is already in use. Please choose another port.`)
        );
    } else {
        console.error(red(`Error starting Apollo Server: ${error.message}`));
    }
};

/**
 * Gracefully shut down the Apollo Server on receiving a shutdown signal.
 */
const gracefulShutdown = () => {
    console.log(
        yellow(
            "\nReceived a graceful shutdown signal. Closing Apollo Server..."
        )
    );
    if (server) {
        server.stop().then(() => {
            console.log("Apollo Server closed. Goodbye! 👋");
            process.exit(0);
        });
    } else {
        console.log("Apollo Server not running. Goodbye! 👋");
        process.exit(0);
    }
};

// Start the Apollo Server
startApolloServer();

// Gracefully handle forced shutdown (Ctrl+C)
process.on("SIGINT", gracefulShutdown);
