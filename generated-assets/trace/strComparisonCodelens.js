
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-strComparisonCodelens";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "word = \"Pineapple\"\nif word < 'banana':\n    print('Your word, ' + word + ', comes before banana.')\nelif word > 'banana':\n    print('Your word, ' + word + ', comes after banana.')\nelse:\n    print('All right, bananas.')\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 2, "event": "step_line", "func_name": "<module>", "globals": {"word": "Pineapple"}, "ordered_globals": ["word"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "step_line", "func_name": "<module>", "globals": {"word": "Pineapple"}, "ordered_globals": ["word"], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 3, "event": "return", "func_name": "<module>", "globals": {"word": "Pineapple"}, "ordered_globals": ["word"], "stack_to_render": [], "heap": {}, "stdout": "Your word, Pineapple, comes before banana.\n"}], "startingInstruction": 0};
})();