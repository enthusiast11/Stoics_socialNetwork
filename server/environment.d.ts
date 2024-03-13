declare global {
    namespace NodeJS {
      interface ProcessEnv {
        APP_PORT:string,
        SALT_ROUND: number,
        USER: string,
        PASSWORD: string,
        DATABASE: string,
        DB_PORT: number,
        HOST:string,
        JWT_SECRET_KEY: string,
      }
    }
  }

  
  export {}