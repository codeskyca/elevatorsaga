
var requireUserCountWithinTime = function(userCount, timeLimit) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people in <span class='emphasis-color'>" + timeLimit.toFixed(0) + "</span> seconds or less",
        evaluate: function(world) {
            if(world.elapsedTime >= timeLimit || world.transportedCounter >= userCount) {
                return world.elapsedTime <= timeLimit && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireUserCountWithMaxWaitTime = function(userCount, maxWaitTime) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people and let no one wait more than <span class='emphasis-color'>" + maxWaitTime.toFixed(1) + "</span> seconds",
        evaluate: function(world) {
            if(world.maxWaitTime >= maxWaitTime || world.transportedCounter >= userCount) {
                return world.maxWaitTime <= maxWaitTime && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireUserCountWithinTimeWithMaxWaitTime = function(userCount, timeLimit, maxWaitTime) {
    return {
       description: "Transport <span class='emphasis-color'>" + userCount + "</span> people in <span class='emphasis-color'>" + timeLimit.toFixed(0) + "</span> seconds or less and let no one wait more than <span class='emphasis-color'>" + maxWaitTime.toFixed(1) + "</span> seconds",
       evaluate: function(world) {
            if(world.elapsedTime >= timeLimit || world.maxWaitTime >= maxWaitTime || world.transportedCounter >= userCount) {
                return world.elapsedTime <= timeLimit && world.maxWaitTime <= maxWaitTime && world.transportedCounter >= userCount;
            } else {
                return null;
            }
       }
    };
};

var requireUserCountWithinMoves = function(userCount, moveLimit) {
    return {
        description: "Transport <span class='emphasis-color'>" + userCount + "</span> people using <span class='emphasis-color'>" + moveLimit + "</span> elevator moves or less",
        evaluate: function(world) {
            if(world.moveCount >= moveLimit || world.transportedCounter >= userCount) {
                return world.moveCount <= moveLimit && world.transportedCounter >= userCount;
            } else {
                return null;
            }
        }
    };
};

var requireDemo = function() {
    return {
        description: "Perpetual demo",
        evaluate: function() { return null; }
    };
};

var withCurriculumFocus = function(checkpointLabel, focusText, condition) {
    return {
        description: "<span class='emphasis-color'>" + checkpointLabel + "</span> - " + focusText + "<br>" + condition.description,
        evaluate: function(world) {
            return condition.evaluate(world);
        }
    };
};

/* jshint laxcomma:true */
var challenges = [
     {options: {floorCount: 3, elevatorCount: 1, spawnRate: 0.22}
      ,condition: withCurriculumFocus("Level 1 (L1 C1-3)", "Variables, strings, and booleans with simple routing",
                  requireUserCountWithinTime(12, 70))}
    ,{options: {floorCount: 3, elevatorCount: 1, spawnRate: 0.25}
      ,condition: withCurriculumFocus("Level 2 (L1 C4-6)", "Comparisons, boolean expressions, and basic event reactions",
                  requireUserCountWithinTime(14, 70))}
    ,{options: {floorCount: 4, elevatorCount: 1, spawnRate: 0.27}
      ,condition: withCurriculumFocus("Level 3 (L1 C7-9)", "Event step 1: inside elevator button listening only",
                  requireUserCountWithinTime(16, 72))}
    ,{options: {floorCount: 4, elevatorCount: 1, spawnRate: 0.29}
      ,condition: withCurriculumFocus("Level 4 (L1 C10-12)", "Easy step 2: add one simple floor listener",
                  requireUserCountWithinTime(17, 74))}
    ,{options: {floorCount: 5, elevatorCount: 1, spawnRate: 0.31, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 5 (L1 C13-15)", "Easy step 3: add two floor listeners and gentle idle route",
                  requireUserCountWithinTime(18, 76))}

    ,{options: {floorCount: 5, elevatorCount: 1, spawnRate: 0.34, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 6 (L2 C1-3)", "Easy step 4: safe bindings for all floors (no chaining yet)",
                  requireUserCountWithinTime(20, 78))}
    ,{options: {floorCount: 5, elevatorCount: 1, spawnRate: 0.38, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 7 (L2 C4-6)", "Medium step 1: respond faster to repeated calls",
                  requireUserCountWithinTime(24, 82))}
    ,{options: {floorCount: 6, elevatorCount: 1, spawnRate: 0.42, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 8 (L2 C7-9)", "Medium step 2: introduce chained middle-floor listeners",
                  requireUserCountWithinTime(28, 86))}
    ,{options: {floorCount: 6, elevatorCount: 1, spawnRate: 0.46, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 9 (L2 C10-12)", "Hard step 1: optimize event order and reduce wasted trips",
                  requireUserCountWithinTime(32, 90))}
    ,{options: {floorCount: 6, elevatorCount: 1, spawnRate: 0.50, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 10 (L2 C13-15)", "Hard step 2: stable full-floor event handling under pressure",
                  requireUserCountWithinTime(36, 94))}

    ,{options: {floorCount: 6, elevatorCount: 2, spawnRate: 0.52, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 11 (L3 C1-3)", "New concept start: multi-elevator coordination",
                  requireUserCountWithinTime(42, 100))}
    ,{options: {floorCount: 8, elevatorCount: 2, spawnRate: 0.64}
      ,condition: withCurriculumFocus("Level 12 (L3 C4-6)", "Loop patterns and accumulator-style scheduling",
                  requireUserCountWithinMoves(52, 120))}
    ,{options: {floorCount: 8, elevatorCount: 3, spawnRate: 0.70}
      ,condition: withCurriculumFocus("Level 13 (L3 C7-9)", "Arrays, iteration, and queue discipline",
                  requireUserCountWithinTime(58, 115))}
    ,{options: {floorCount: 9, elevatorCount: 3, spawnRate: 0.76}
      ,condition: withCurriculumFocus("Level 14 (L3 C10-12)", "Array methods and conditional filtering",
                  requireUserCountWithMaxWaitTime(66, 24))}
    ,{options: {floorCount: 9, elevatorCount: 3, spawnRate: 0.82}
      ,condition: withCurriculumFocus("Level 15 (L3 C13-15)", "Loop + array integration at higher demand",
                  requireUserCountWithinTimeWithMaxWaitTime(74, 130, 23))}

    ,{options: {floorCount: 10, elevatorCount: 3, spawnRate: 0.90, elevatorCapacities: [5,8]}
      ,condition: withCurriculumFocus("Level 16 (L4 C1-3)", "Functions and parameterized control logic",
                  requireUserCountWithinTime(84, 135))}
    ,{options: {floorCount: 10, elevatorCount: 4, spawnRate: 0.96, elevatorCapacities: [5,8]}
      ,condition: withCurriculumFocus("Level 17 (L4 C4-6)", "Objects, state updates, and event handlers",
                  requireUserCountWithinMoves(94, 145))}
    ,{options: {floorCount: 11, elevatorCount: 4, spawnRate: 1.02, elevatorCapacities: [5,8]}
      ,condition: withCurriculumFocus("Level 18 (L4 C7-9)", "Object methods and evolving state decisions",
                  requireUserCountWithMaxWaitTime(104, 20))}
    ,{options: {floorCount: 11, elevatorCount: 4, spawnRate: 1.08, elevatorCapacities: [5,8]}
      ,condition: withCurriculumFocus("Level 19 (L4 C10-12)", "Modular logic with time and fairness constraints",
                  requireUserCountWithinTimeWithMaxWaitTime(116, 155, 19))}
    ,{options: {floorCount: 12, elevatorCount: 4, spawnRate: 1.14, elevatorCapacities: [5,8]}
      ,condition: withCurriculumFocus("Level 20 (L4 C13-15)", "Integrated advanced JS control patterns",
                  requireUserCountWithinTime(128, 160))}

    ,{options: {floorCount: 12, elevatorCount: 5, spawnRate: 1.20, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 21 (L5 C1-3)", "Cleaner ES6-style strategy structure",
                  requireUserCountWithinMoves(142, 170))}
    ,{options: {floorCount: 13, elevatorCount: 5, spawnRate: 1.26, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 22 (L5 C4-6)", "Patterns, readability, and stable throughput",
                  requireUserCountWithMaxWaitTime(156, 17))}
    ,{options: {floorCount: 14, elevatorCount: 5, spawnRate: 1.32, elevatorCapacities: [6]}
      ,condition: withCurriculumFocus("Level 23 (L5 C7-9)", "Pattern composition under mixed metrics",
                  requireUserCountWithinTimeWithMaxWaitTime(172, 190, 16))}
    ,{options: {floorCount: 14, elevatorCount: 6, spawnRate: 1.38, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 24 (L5 C10-12)", "Code quality + coordination with more resources",
                  requireUserCountWithinTime(190, 195))}
    ,{options: {floorCount: 15, elevatorCount: 6, spawnRate: 1.44, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 25 (L5 C13-15)", "Robustness and maintainable heuristics",
                  requireUserCountWithinMoves(210, 205))}

    ,{options: {floorCount: 16, elevatorCount: 6, spawnRate: 1.50, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 26 (L6 C1-3)", "Advanced integration with tighter service quality",
                  requireUserCountWithMaxWaitTime(230, 15))}
    ,{options: {floorCount: 17, elevatorCount: 7, spawnRate: 1.58, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 27 (L6 C4-6)", "System-level balancing across many elevators",
                  requireUserCountWithinTimeWithMaxWaitTime(255, 240, 14))}
    ,{options: {floorCount: 18, elevatorCount: 7, spawnRate: 1.66, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 28 (L6 C7-9)", "High-load control with strategic prioritization",
                  requireUserCountWithinTime(285, 250))}
    ,{options: {floorCount: 20, elevatorCount: 8, spawnRate: 1.74, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 29 (L6 C10-12)", "Near-capstone performance and wait control",
                  requireUserCountWithMaxWaitTime(320, 13))}
    ,{options: {floorCount: 21, elevatorCount: 8, spawnRate: 1.82, elevatorCapacities: [6,8]}
      ,condition: withCurriculumFocus("Level 30 (L6 C13-15)", "Mastery capstone: throughput + efficiency + fairness",
                  requireUserCountWithinTimeWithMaxWaitTime(360, 300, 12))}

    ,{options: {floorCount: 21, elevatorCount: 8, spawnRate: 1.82, elevatorCapacities: [6,8]}, condition: requireDemo()}
];
/* jshint laxcomma:false */
