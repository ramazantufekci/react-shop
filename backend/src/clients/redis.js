const Redis = require("ioredis");
const redis = new Redis({
    host: '192.168.16.65',
    port: 6379,
    password: ''
});

export default redis;
