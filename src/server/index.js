function createConfig() {
  const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;
  const DATABASE_URL = import.meta.env.VITE_DATABSE_URL; //needed for notmal queries
  const FIREBASE_API_URL = import.meta.env.VITE_FIRABASE_API_URL; //needed for AUTH
  return {
    FIREBASE_API_KEY,
    DATABASE_URL,
    FIREBASE_API_URL
  };
}
export default createConfig;
