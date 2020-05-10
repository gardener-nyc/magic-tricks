# magic tricks

A light bag of tricks to make building websites quick and fun.
* SASS toolkit is 7kb gzipped
* JS tools are _individually_ transpiled via babel. There is no "opt into all".

## Documentation

[https://magic-tricks.netlify.app/](https://magic-tricks.netlify.app/)


## Getting Started

### Installation

Install `magic-tricks` via yarn or npm.


```terminal
$ npm i magic-tricks --save
```

### Importing Scripts

All scripts are compiled and found in the `lib` directory. 

```js
import capitalize from 'magic-tricks/lib/capitalize';
import centsToPrice from 'magic-tricks/lib/centsToPrice';

capitalize('sup') // Sup
centsToPrice(100) // '$1.00'
```

### Importing SASS

All styles are found in the `sass` directory. You can electively import the utilities you'd like to use like so. _Make sure your compiler is set up to alias `~` to `node_modules`_. Check out [SASS](/docs/sass) for more info.

```scss
// Configuration
@import '~magic-tricks/sass/config';

//                                          //
// === Put Configuration Overrides Here === //
//                                          //

// Mixins
@import '~magic-tricks/sass/mixins';

// CSS Reset
@import '~magic-tricks/sass/reset';

// Utilities
@import '~magic-tricks/sass/utils/alignment';
@import '~magic-tricks/sass/utils/background';
@import '~magic-tricks/sass/utils/border';
@import '~magic-tricks/sass/utils/color';
@import '~magic-tricks/sass/utils/cursor';
@import '~magic-tricks/sass/utils/display';
@import '~magic-tricks/sass/utils/float';
@import '~magic-tricks/sass/utils/font-weight';
@import '~magic-tricks/sass/utils/margin';
@import '~magic-tricks/sass/utils/opacity';
@import '~magic-tricks/sass/utils/overflow';
@import '~magic-tricks/sass/utils/pointer-events';
@import '~magic-tricks/sass/utils/position';
@import '~magic-tricks/sass/utils/size';
@import '~magic-tricks/sass/utils/text-align';
@import '~magic-tricks/sass/utils/transform';
@import '~magic-tricks/sass/utils/transitions';
@import '~magic-tricks/sass/utils/whitespace';
@import '~magic-tricks/sass/utils/z-index';

// Utility Components
@import '~magic-tricks/sass/components/flex';
@import '~magic-tricks/sass/components/grid';
@import '~magic-tricks/sass/components/grid-container';
@import '~magic-tricks/sass/components/inline-grid';
@import '~magic-tricks/sass/components/list';
@import '~magic-tricks/sass/components/media';
@import '~magic-tricks/sass/components/spacer';
@import '~magic-tricks/sass/components/visibility';
@import '~magic-tricks/sass/components/visibility';
```

----

### Todo

- Add docs
- Test in prod
- Testing?