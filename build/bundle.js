define(function () { 'use strict';

    // This function isn't used anywhere, so

    // This function gets included
    function cube(x) {
        // rewrite this as `square( x ) * x`
        // and see what happens!
        return x * x * x;
    }

    /* TREE-SHAKING */
    const a = () => {
        console.log(cube(5)); // 125
    };
    a();

});
//# sourceMappingURL=bundle.js.map
