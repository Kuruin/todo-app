const zod = require('zod');

const todoFormat = zod.object({
    name: zod.string(),
    description: zod.string()
})

module.exports = {
    todoFormat
}