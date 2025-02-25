const {username , password} = process.env;
export const ConnnectionStr = "mongodb+srv://"+username+":"+password+"@cluster0.oqbif.mongodb.net/userData?retryWrites=true&w=majority&appName=Cluster0";