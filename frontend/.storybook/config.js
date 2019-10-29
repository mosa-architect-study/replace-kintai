import { configure } from '@storybook/react';
import "ress";

// automatically import all files ending in *.stories.js
configure(require.context('../src/components', true, /stories\.tsx$/), module);
