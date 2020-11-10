const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
  apply(compiler) {
    compiler.hooks.run.tap(pluginName, compilation => {
      console.log('WEBPACK IS RUNNING');
    });
  }
}

module.exports = ConsoleLogOnBuildWebpackPlugin;
