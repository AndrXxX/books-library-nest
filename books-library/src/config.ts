export default {
  port: process.env.PORT || 3000,
  dbUrl: process.env.DB_URL || "mongodb://localhost:27017/mydb",
  jwtSecret: process.env.JWT_SECRET || "jwtSecret",
}
