import * as dotenv from 'dotenv';
dotenv.config();

const G_JWT_KEY = process.env.JWT_KEY;
const G_MONGODB_PATH = 'mongodb+srv://'+ process.env.MONGO_USERNAME +':'+ process.env.MONGO_PW +'@cluster0.wrcgf.mongodb.net/'+ process.env.MONGO_DB +'?retryWrites=true&w=majority';
const G_PORT = process.env.PORT;
const GLOBAL = {
    G_JWT_KEY,
    G_MONGODB_PATH,
    G_PORT,
    
};

export { GLOBAL }