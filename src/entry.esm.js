
import * as components from './components/index';

const install = function installUpcComponents(app) {
  Object.entries(components).forEach(([componentName, component]) => {
    app.component(componentName, component);
  });
};

export default install;

export * from './components/index';