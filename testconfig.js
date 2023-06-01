exports.config = {
    spects: [

    ],
    suites: { 
        
    },
    host: 'localhost',
    port: 4444,
    capabilities: [{
        browserName: 'chrome',
    }],

    frameworks: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 50000,
    },
    logLevelL: 'verbose'
}