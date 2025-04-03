const log4js = require("log4js");
const path = require("path");
log4js.configure({
    appenders: {
        default: {
            type: "dateFile",
            filename: path.resolve(__dirname, "logs/default/default.log"),
            maxLogSize: 1024 * 100,
        },
        sql: {
            type: "dateFile",
            filename: path.resolve(__dirname, "logs/sql/sql.log"),
            maxLogSize: 1024 ,
            layout: {
                type: "pattern",
                pattern: "%d{yyyy-MM-dd hh:mm:ss} [%p] %c: %m"
            }
        }
    },
    categories: {
        default: {
            appenders: ["default"],
            level: "all"
        },
        sql: {
            appenders: ["sql"],
            level: "all"
        }
    }
})
process.on('exit', () => {
    log4js.shutdown();
})

const loggerSQL = log4js.getLogger('sql');
const logger = log4js.getLogger();


exports.loggerSQL = loggerSQL;
exports.logger = logger;

