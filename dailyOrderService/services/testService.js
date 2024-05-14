const TransactionSchema = require('../models/Transaction'); // Import Transaction model

const findTransactionsInDay = async () => {
    try {
        const userId = 1;
        const query = { userId: userId };
        if (true) {
          query.title = "all";
        }
    
        const transaction = await TransactionSchema.find(query).sort({ createdAt: -1 });
        console.log(transaction);
      } catch (error) {
        console.log(error);
      }
};

findTransactionsInDay();
