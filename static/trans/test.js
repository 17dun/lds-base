var brain = require('brain');
var net = new brain.NeuralNetwork();

net.train([{input: [623, 921600], output: {o:1}},
           {input: [733, 128640], output: {o:0}},
           {input: [764, 288000], output: {o:0}},
           {input: [820, 181760], output: {o:0}},
           {input: [663, 921600], output: {o:1}}
]);

var output = net.run([830, 181760]);

console.log(output)
