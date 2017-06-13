if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configureStore.prop');
} else {
    module.exports = require('./configureStore.dev');
}