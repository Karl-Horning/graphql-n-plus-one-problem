module.exports = {
    Mutation: {
        createAnAuthor: async (_, args, { dataSources }) => {
            console.log("Here!");
            console.log({...args});
            try {
                const author = await dataSources.createAnAuthor({ ...args });

                if (!author) {
                    throw new Error(`Author not created`);
                }

                return author;
            } catch (error) {
                console.error("Error writing data:", error);
                throw new Error("Failed to write data");
            }
        },
    },
};
