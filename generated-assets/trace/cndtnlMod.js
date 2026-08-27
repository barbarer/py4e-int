
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-cndtnlMod";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "x = 8\nif x % 2 == 0 :\n    print('x is even')\nelse :\n    print('x is odd')\nprint('All done.')\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"x": 8}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"x": 8}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 6, "event": "step_line", "func_name": "<module>", "globals": {"x": 8}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": "x is even\n"}, {"line": 6, "event": "return", "func_name": "<module>", "globals": {"x": 8}, "ordered_globals": ["x"], "stack_to_render": [], "heap": {}, "stdout": "x is even\nAll done.\n"}], "startingInstruction": 0};
})();