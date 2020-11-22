const subcommand = 'push';
const category = 'testing';

module.exports = {
  name: subcommand,
  run: async context => {
    const { amplify, parameters } = context;
    const resourceName = parameters.first;
    context.amplify.constructExeInfo(context);
    return amplify.pushResources(context, category, resourceName).catch(err => {
      context.print.info(err.stack);
      context.print.error('An error occurred when pushing the testing resource');
      context.usageData.emitError(err);
      process.exitCode = 1;
    });
  },
};
