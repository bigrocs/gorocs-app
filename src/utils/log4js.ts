
import { configure, getLogger } from "log4js";
configure({
  appenders: {
    console: {
      type: "console"
    },
    logfile: { 
      type: "dateFile", 
      filename: "log/app.log",
      pattern: '-yyyy-MM-dd.log'
    }
  },
  categories: { 
    default: { 
      appenders: ["console", "logfile"], 
      level: "error" 
    }
  }
});

export const logger = getLogger();