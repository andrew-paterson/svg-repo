const tagAndRelease  = require('tag-and-release');
const commitMessage = getNamedArgVal('--commit_msg');
const fs = require('fs');

if (!commitMessage) {
  console.log('The --commit_msg argument is required.');
  return;
}

(async function () {
  const res = await tagAndRelease.run({commitMessage: commitMessage});
  console.log(res);
})()

// tagAndRelease.run({commitMessage: 'New commit'})
function getNamedArgVal(requested) {
  const [ , , ...args ] = process.argv;
  var val;
  args.forEach(arg => {
    if (arg.indexOf('=') < 0) { return; }
    var argName = arg.split('=')[0];
    if (argName === requested) {
      val = arg.split('=')[1];
    }
  });
  return val;
}

