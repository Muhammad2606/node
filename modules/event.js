
const Events = require('events')

class Logger  extends Events {
    log(a , b){
        this.emit('kakulate', a + b)
    }
}

const logger = new Logger()

logger.on('kakulate', data =>{
    console.log(data);
})

logger.log(11, 9)