const quilt = require('@quilt/quilt');
const machineFactory = require('./machines');
const hotrod = require('./hotrod');
const placement = require('./placements0');

// const namespace = "hotrod-app-" + Math.floor(Math.random() * 10000).toString();
const namespace = "hotrod-app-emerson-0000"
const deployment = quilt.createDeployment({namespace: namespace, adminACL: ['0.0.0.0/0']});

var machines = new machineFactory(4);
// var machines = new machineFactory(21);

hotrodApp = new hotrod();
new placement(hotrodApp, machines.getSizes()).three_per();

deployment.deploy(machines);
deployment.deploy(hotrodApp);
