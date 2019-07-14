// to install winston => npm i winston
   const winston = require('winston');
// creating current date folder 
   var dt = new Date();
   logFileName= `c:/WinstonLogging/${dt.getDate()}_${dt.getMonth()+1}_${dt.getFullYear()}/Logger.log` ;

//configuring winston log file
   const logConfiguration =
    {
       'format' : winston.format.combine(
           
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
            winston.format.simple()
        ),
    
     'transports' : [
         new winston.transports.File(
             {
                 filename : logFileName,
                 maxFiles : 10, // maximum number of files allowed in mentioned folder
                 maxsize  : 1000000, // max file size, in bytes
                 level    : 'info' ,    
                 
             }  )  ]
    }

    const logger = winston.createLogger(logConfiguration) ;   

    logger.info('Attempting to create log file using winston ...') ;

    console.log(` File has been created in ${logFileName}`);