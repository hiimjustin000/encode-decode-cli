#!/usr/bin/env node
const cli = require("../cli");
const args = process.argv.slice(2);

if (args[0] == "help") return console.log("Schemes: base32, base64, binary, hex, morse");

if (Object.keys(cli.decode).includes(args[0])) console.log(cli.decode[args[0]](args.slice(1).join(" ")));
else console.log("Invalid encoding scheme. Use \"decode help\" for list of schemes.");