import { configure } from '@storybook/react';
import "ress";
import "../src/static/global.css";

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /stories\.tsx$/), module);
