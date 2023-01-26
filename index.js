import { writeFile } from 'node:fs/promises';
import { Buffer } from 'node:buffer';

const componentName = process.argv[2];

const component = (name) => {
    return `import { Component } from '@angular/core';

@Component({
    selector: 'svg-${name}',
    templateUrl: './${name}.component.svg',
})
export class ${name[0].toUpperCase() + name.slice(1)}Component {
}

`;
};

const data = new Uint8Array(Buffer.from(component(componentName)));

await writeFile(`./src/assets/components/${componentName}.component.ts`, data, { flag: 'wx' });

console.log('DONE!');
