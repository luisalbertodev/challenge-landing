const dev = {
   BASE_URL: 'http://localhost:8080/'
 };
 
 const prod = {
   BASE_URL: ''
 };
 
 const config = {
   // Default to dev if not set
   ...(process.env.REACT_APP_STAGE === 'dev' ? dev : prod)
 };
 
 export default config;
 