
if (allTraceData === undefined) {
    var allTraceData = {};
}
(function() { // IIFE to avoid variable collision
    let codelensID = "rs-str-count-errors";  //fallback
    let partnerCodelens = document.currentScript.parentElement.querySelector(".pytutorVisualizer");
    if (partnerCodelens) {
        codelensID = partnerCodelens.id;
    }
    allTraceData[codelensID] = {"code": "def count(text, aChar):\n  count = 0\n  for c in text:\n    if c == aChar:\n      count = count + 1\n  return count\n\n  from unittest.gui import TestCaseGui\n\nclass myTests(TestCaseGui):\n    def testOne(self):\n        # Format: self.assertEqual(actual_expression, expected_value, feedback_string)\n        self.assertEqual(count('banana', 'a'), 3, \"Tested 'a' in 'banana'\")\n        self.assertEqual(count('pineapple', 'a'), 1, \"Tested 'a' in 'pineapple'\")\n        self.assertEqual(count('pepperoni pizza', 'p'), 4, \"Tested 'p' in 'pepperoni pizza'\")\n        self.assertEqual(count('racecar', 'r'), 2, \"Tested 'r' in 'racecar'\")\n\nmyTests().main()\n", "trace": [{"line": 1, "event": "step_line", "func_name": "<module>", "globals": {}, "ordered_globals": [], "stack_to_render": [], "heap": {}, "stdout": ""}, {"line": 10, "event": "step_line", "func_name": "<module>", "globals": {"count": ["REF", 1]}, "ordered_globals": ["count"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "count(text, aChar)", null]}, "stdout": ""}, {"line": 10, "event": "exception", "func_name": "<module>", "globals": {"count": ["REF", 1]}, "ordered_globals": ["count"], "stack_to_render": [], "heap": {"1": ["FUNCTION", "count(text, aChar)", null]}, "stdout": "", "exception_msg": "NameError: name 'TestCaseGui' is not defined"}], "startingInstruction": 0};
})();