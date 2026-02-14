# Elevator Saga Checkpoint Solutions (1-30)

Runs are randomized, so treat these as reference strategies, not guaranteed one-run passes.

## How to use
1. Open a challenge (for example `index.html#challenge=7`).
2. Paste one profile code block below into the editor.
3. Click `Apply`.

## Challenge-by-Challenge Progression Map
- Challenge 1: `Profile L1-1` (fixed route, 3 floors). Knowledge required: variables, calling functions.
- Challenge 2: `Profile L1-2` (fixed route, 5 floors). Knowledge required: sequencing and repeated statements.
- Challenge 3: `Profile L1-3` (inside-elevator event only: `floor_button_pressed`). Knowledge required: basic event listener syntax.
- Challenge 4: `Challenge 4 Answer` (Easy: first single floor listener). Knowledge required: floor indexing + one callback.
- Challenge 5: `Challenge 5 Answer` (Easy: add second listener at top floor). Knowledge required: multiple listeners, no chaining.
- Challenge 6: `Challenge 6 Answer` (Easy: explicit listeners for all floors, no chaining). Knowledge required: safe bindings with `if (floors[i])`.
- Challenge 7: `Challenge 7 Answer` (Medium: both directions on middle floors). Knowledge required: separate up/down handlers.
- Challenge 8: `Challenge 8 Answer` (Medium: chained event syntax on middle floors). Knowledge required: chained events in one `.on(...)`.
- Challenge 9: `Challenge 9 Answer` (Hard: better sweep order + queue de-dup). Knowledge required: helper function + array `indexOf`.
- Challenge 10: `Challenge 10 Answer` (Hard: stable event handling under heavier calls). Knowledge required: queue hygiene and event prioritization.
- Challenge 11: `Challenge 11 Answer` (Profile C baseline). Knowledge required: multi-elevator handling + array iteration.
- Challenge 12: `Challenge 12 Answer` (C + relaxed passing-floor threshold). Knowledge required: `passing_floor` event + `loadFactor`.
- Challenge 13: `Challenge 13 Answer` (C + split idle parking). Knowledge required: indexed strategy per elevator.
- Challenge 14: `Challenge 14 Answer` (C + stricter passing-floor threshold). Knowledge required: tuning guard conditions.
- Challenge 15: `Challenge 15 Answer` (C + nearest tie-break refinement). Knowledge required: tie-break logic with queue length.
- Challenge 16: `Challenge 16 Answer` (Profile D baseline). Knowledge required: zoning concept and range checks.
- Challenge 17: `Challenge 17 Answer` (D + narrower zones). Knowledge required: parameter tuning for partitioning.
- Challenge 18: `Challenge 18 Answer` (D + stronger zone-aware passing). Knowledge required: combining zone and load guards.
- Challenge 19: `Challenge 19 Answer` (D + mid-zone parking). Knowledge required: computed defaults for idle behavior.
- Challenge 20: `Challenge 20 Answer` (D + cross-zone fallback). Knowledge required: fallback strategy when local choice is overloaded.
- Challenge 21: `Challenge 21 Answer` (Profile E baseline). Knowledge required: scoring functions for dispatch.
- Challenge 22: `Challenge 22 Answer` (E + heavier load penalty). Knowledge required: weighted heuristic tuning.
- Challenge 23: `Challenge 23 Answer` (E + wider parking spread). Knowledge required: proportional spacing math.
- Challenge 24: `Challenge 24 Answer` (E + stricter full-car skipping). Knowledge required: capacity-aware pickup policy.
- Challenge 25: `Challenge 25 Answer` (E + prioritize inside requests). Knowledge required: priority insertion with `goToFloor(..., true)`.
- Challenge 26: `Challenge 26 Answer` (Profile F baseline). Knowledge required: queue normalization and sorting helpers.
- Challenge 27: `Challenge 27 Answer` (F + tighter queue cap). Knowledge required: defensive queue limits.
- Challenge 28: `Challenge 28 Answer` (F + stronger direction penalty). Knowledge required: composite scoring with movement state.
- Challenge 29: `Challenge 29 Answer` (F + stricter passing pickup). Knowledge required: precision threshold tuning.
- Challenge 30: `Challenge 30 Answer` (F + final tuning for fairness/throughput). Knowledge required: multi-metric optimization tradeoffs.

---

## Profile L1-1 (Challenge 1)
Primitive Level 1 style: fixed route, no loops.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];
    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
    });
  },
  update: function() {}
}
```

## Profile L1-2 (Challenge 2)
Same style, larger building.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];
    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
      elevator.goToFloor(3);
      elevator.goToFloor(4);
    });
  },
  update: function() {}
}
```

## Profile L1-3 (Challenge 3)
Step 1 event onboarding: only inside-elevator button events.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
      elevator.goToFloor(3);
      elevator.goToFloor(4);
    });
  },
  update: function() {}
}
```

## Challenge 4 Answer
Easy 1: add one floor listener only.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { elevator.goToFloor(0); });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
      elevator.goToFloor(3);
    });
  },
  update: function() {}
}
```

## Challenge 5 Answer
Easy 2: add top-floor listener, still no chaining.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { elevator.goToFloor(0); });
    if (floors[4]) floors[4].on("down_button_pressed", function() { elevator.goToFloor(4); });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
      elevator.goToFloor(3);
      elevator.goToFloor(4);
    });
  },
  update: function() {}
}
```

## Challenge 6 Answer
Easy 3: explicit listeners for each floor, no chaining.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { elevator.goToFloor(0); });
    if (floors[1]) floors[1].on("up_button_pressed", function() { elevator.goToFloor(1); });
    if (floors[2]) floors[2].on("up_button_pressed", function() { elevator.goToFloor(2); });
    if (floors[3]) floors[3].on("down_button_pressed", function() { elevator.goToFloor(3); });
    if (floors[4]) floors[4].on("down_button_pressed", function() { elevator.goToFloor(4); });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(1);
      elevator.goToFloor(2);
      elevator.goToFloor(3);
      elevator.goToFloor(4);
    });
  },
  update: function() {}
}
```

## Challenge 7 Answer
Medium 1: both directions on middle floors (separate listeners).

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { elevator.goToFloor(0); });
    if (floors[1]) {
      floors[1].on("up_button_pressed", function() { elevator.goToFloor(1); });
      floors[1].on("down_button_pressed", function() { elevator.goToFloor(1); });
    }
    if (floors[2]) {
      floors[2].on("up_button_pressed", function() { elevator.goToFloor(2); });
      floors[2].on("down_button_pressed", function() { elevator.goToFloor(2); });
    }
    if (floors[3]) {
      floors[3].on("up_button_pressed", function() { elevator.goToFloor(3); });
      floors[3].on("down_button_pressed", function() { elevator.goToFloor(3); });
    }
    if (floors[4]) floors[4].on("down_button_pressed", function() { elevator.goToFloor(4); });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(2);
      elevator.goToFloor(4);
    });
  },
  update: function() {}
}
```

## Challenge 8 Answer
Medium 2: switch middle floors to chained event syntax.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    elevator.on("floor_button_pressed", function(floorNum) {
      elevator.goToFloor(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { elevator.goToFloor(0); });
    if (floors[1]) floors[1].on("up_button_pressed down_button_pressed", function() { elevator.goToFloor(1); });
    if (floors[2]) floors[2].on("up_button_pressed down_button_pressed", function() { elevator.goToFloor(2); });
    if (floors[3]) floors[3].on("up_button_pressed down_button_pressed", function() { elevator.goToFloor(3); });
    if (floors[4]) floors[4].on("up_button_pressed down_button_pressed", function() { elevator.goToFloor(4); });
    if (floors[5]) floors[5].on("down_button_pressed", function() { elevator.goToFloor(5); });

    elevator.on("idle", function() {
      elevator.goToFloor(0);
      elevator.goToFloor(2);
      elevator.goToFloor(4);
      elevator.goToFloor(5);
    });
  },
  update: function() {}
}
```

## Challenge 9 Answer
Hard 1: better sweep order and duplicate-request protection.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    function enqueueIfMissing(floorNum) {
      if (elevator.destinationQueue.indexOf(floorNum) === -1) {
        elevator.goToFloor(floorNum);
      }
    }

    elevator.on("floor_button_pressed", function(floorNum) {
      enqueueIfMissing(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { enqueueIfMissing(0); });
    if (floors[1]) floors[1].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(1); });
    if (floors[2]) floors[2].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(2); });
    if (floors[3]) floors[3].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(3); });
    if (floors[4]) floors[4].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(4); });
    if (floors[5]) floors[5].on("down_button_pressed", function() { enqueueIfMissing(5); });

    elevator.on("idle", function() {
      enqueueIfMissing(0);
      enqueueIfMissing(5);
      enqueueIfMissing(2);
      enqueueIfMissing(3);
    });
  },
  update: function() {}
}
```

## Challenge 10 Answer
Hard 2: stable full-floor event handling under heavier repeated calls.

```javascript
{
  init: function(elevators, floors) {
    var elevator = elevators[0];

    function enqueueIfMissing(floorNum) {
      if (elevator.destinationQueue.indexOf(floorNum) === -1) {
        elevator.goToFloor(floorNum);
      }
    }

    elevator.on("floor_button_pressed", function(floorNum) {
      enqueueIfMissing(floorNum);
    });

    if (floors[0]) floors[0].on("up_button_pressed", function() { enqueueIfMissing(0); });
    if (floors[1]) floors[1].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(1); });
    if (floors[2]) floors[2].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(2); });
    if (floors[3]) floors[3].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(3); });
    if (floors[4]) floors[4].on("up_button_pressed down_button_pressed", function() { enqueueIfMissing(4); });
    if (floors[5]) floors[5].on("down_button_pressed", function() { enqueueIfMissing(5); });

    elevator.on("idle", function() {
      enqueueIfMissing(0);
      enqueueIfMissing(5);
      enqueueIfMissing(2);
      enqueueIfMissing(3);
      enqueueIfMissing(1);
      enqueueIfMissing(4);
    });
  },
  update: function() {}
}
```

## Profile C (Base for Challenges 11-15)
Direction-aware stops while passing floors.

```javascript
{
  init: function(elevators, floors) {
    function nearest(targetFloor) {
      return elevators.reduce(function(best, e) {
        var b = Math.abs(best.currentFloor() - targetFloor) + best.destinationQueue.length;
        var s = Math.abs(e.currentFloor() - targetFloor) + e.destinationQueue.length;
        return s < b ? e : best;
      }, elevators[0]);
    }

    elevators.forEach(function(e) {
      e.on("floor_button_pressed", function(floorNum) { e.goToFloor(floorNum); });
      e.on("passing_floor", function(floorNum, direction) {
        var want = direction === "up" ? floors[floorNum].buttonStates.up : floors[floorNum].buttonStates.down;
        if (want && e.loadFactor() < 0.85) { e.goToFloor(floorNum, true); }
      });
      e.on("idle", function() { e.goToFloor(0); });
    });

    floors.forEach(function(f) {
      function call() { nearest(f.floorNum()).goToFloor(f.floorNum()); }
      f.on("up_button_pressed", call);
      f.on("down_button_pressed", call);
    });
  },
  update: function() {}
}
```

### Challenges 11-15 Individual Answers
- **Challenge 11 Answer:** Use `Profile C` exactly as shown.
- **Challenge 12 Answer:** `Profile C` with passing-floor threshold changed to `e.loadFactor() < 0.9`.
- **Challenge 13 Answer:** `Profile C` plus idle parking split:
  `e.on("idle", function() { e.goToFloor(i === 0 ? 0 : floors.length - 1); });`
- **Challenge 14 Answer:** `Profile C` with stricter threshold `e.loadFactor() < 0.8`.
- **Challenge 15 Answer:** `Profile C` plus tie-break in `nearest()` by shorter `destinationQueue.length`.

## Profile D (Base for Challenges 16-20)
Zoning: split elevators by floor ranges.

```javascript
{
  init: function(elevators, floors) {
    var top = floors.length - 1;
    var zoneSize = Math.ceil(floors.length / elevators.length);

    function zoneOfElevator(i) {
      return { min: i * zoneSize, max: Math.min(top, (i + 1) * zoneSize - 1) };
    }

    function inZone(floor, z) { return floor >= z.min && floor <= z.max; }

    function pick(targetFloor) {
      var idx = Math.min(elevators.length - 1, Math.floor(targetFloor / zoneSize));
      return elevators[idx];
    }

    elevators.forEach(function(e, i) {
      var z = zoneOfElevator(i);
      e.on("floor_button_pressed", function(floorNum) { e.goToFloor(floorNum); });
      e.on("idle", function() {
        var mid = Math.floor((z.min + z.max) / 2);
        e.goToFloor(mid);
      });
      e.on("passing_floor", function(floorNum, direction) {
        var up = floors[floorNum].buttonStates.up;
        var down = floors[floorNum].buttonStates.down;
        var want = direction === "up" ? up : down;
        if (want && inZone(floorNum, z) && e.loadFactor() < 0.9) e.goToFloor(floorNum, true);
      });
    });

    floors.forEach(function(f) {
      var call = function() { pick(f.floorNum()).goToFloor(f.floorNum()); };
      f.on("up_button_pressed", call);
      f.on("down_button_pressed", call);
    });
  },
  update: function() {}
}
```

### Challenges 16-20 Individual Answers
- **Challenge 16 Answer:** Use `Profile D` exactly as shown.
- **Challenge 17 Answer:** `Profile D` with narrower zones:
  `var zoneSize = Math.max(2, Math.floor(floors.length / elevators.length));`
- **Challenge 18 Answer:** `Profile D` plus stricter zone-aware stop:
  `if (want && inZone(floorNum, z) && e.loadFactor() < 0.8) ...`
- **Challenge 19 Answer:** `Profile D` with mid-zone parking:
  `var mid = Math.floor((z.min + z.max) / 2); e.goToFloor(mid);`
- **Challenge 20 Answer:** `Profile D` plus cross-zone fallback when queue is long:
  in `pick()`, if chosen elevator queue `> 4`, choose best-score elevator globally.

## Profile E (Base for Challenges 21-25)
Dynamic zoning + load-aware fallback.

```javascript
{
  init: function(elevators, floors) {
    function score(e, target) {
      return Math.abs(e.currentFloor() - target) + e.destinationQueue.length * 2 + e.loadFactor() * 6;
    }

    function pick(target) {
      return elevators.reduce(function(best, e) {
        return score(e, target) < score(best, target) ? e : best;
      }, elevators[0]);
    }

    elevators.forEach(function(e, i) {
      e.on("floor_button_pressed", function(floorNum) { e.goToFloor(floorNum); });
      e.on("passing_floor", function(floorNum, direction) {
        var f = floors[floorNum];
        var want = direction === "up" ? f.buttonStates.up : f.buttonStates.down;
        if (want && e.loadFactor() < 0.8) e.goToFloor(floorNum, true);
      });
      e.on("idle", function() {
        var park = Math.round((i + 0.5) * (floors.length - 1) / elevators.length);
        e.goToFloor(park);
      });
    });

    floors.forEach(function(f) {
      var call = function() { pick(f.floorNum()).goToFloor(f.floorNum()); };
      f.on("up_button_pressed", call);
      f.on("down_button_pressed", call);
    });
  },
  update: function() {}
}
```

### Challenges 21-25 Individual Answers
- **Challenge 21 Answer:** Use `Profile E` exactly as shown.
- **Challenge 22 Answer:** `Profile E` with heavier load penalty in `score()`:
  `+ e.loadFactor() * 7`.
- **Challenge 23 Answer:** `Profile E` with wider parking spread:
  `var park = Math.round((i + 0.5) * (floors.length - 1) / elevators.length);`
- **Challenge 24 Answer:** `Profile E` with stricter pickup guard:
  `if (want && e.loadFactor() < 0.75) ...`
- **Challenge 25 Answer:** `Profile E` plus inside-request prioritization:
  when `floor_button_pressed`, insert urgent stop via `e.goToFloor(floorNum, true)`.

## Profile F (Base for Challenges 26-30)
High-load controller: queue cleanup, fast pickup, balanced parking.

```javascript
{
  init: function(elevators, floors) {
    function uniqueSorted(arr, currentFloor) {
      var seen = {};
      arr.forEach(function(f) { seen[f] = true; });
      return Object.keys(seen).map(Number).sort(function(a, b) {
        return Math.abs(a - currentFloor) - Math.abs(b - currentFloor);
      });
    }

    function score(e, target) {
      var dirPenalty = e.destinationDirection() === "stopped" ? 0 : 1;
      return Math.abs(e.currentFloor() - target) + e.destinationQueue.length * 2 + e.loadFactor() * 8 + dirPenalty;
    }

    function pick(target) {
      return elevators.reduce(function(best, e) {
        return score(e, target) < score(best, target) ? e : best;
      }, elevators[0]);
    }

    elevators.forEach(function(e, i) {
      e.on("floor_button_pressed", function(floorNum) {
        e.destinationQueue.push(floorNum);
        e.destinationQueue = uniqueSorted(e.destinationQueue, e.currentFloor());
        e.checkDestinationQueue();
      });

      e.on("passing_floor", function(floorNum, direction) {
        var f = floors[floorNum];
        var want = direction === "up" ? f.buttonStates.up : f.buttonStates.down;
        if (want && e.loadFactor() < 0.75) e.goToFloor(floorNum, true);
      });

      e.on("idle", function() {
        var park = Math.round((i + 0.5) * (floors.length - 1) / elevators.length);
        e.goToFloor(park);
      });
    });

    floors.forEach(function(f) {
      var call = function() { pick(f.floorNum()).goToFloor(f.floorNum()); };
      f.on("up_button_pressed", call);
      f.on("down_button_pressed", call);
    });
  },
  update: function(dt, elevators) {
    elevators.forEach(function(e) {
      if (e.destinationQueue.length > 8) {
        e.destinationQueue = e.destinationQueue.slice(0, 8);
        e.checkDestinationQueue();
      }
    });
  }
}
```

### Challenges 26-30 Individual Answers
- **Challenge 26 Answer:** Use `Profile F` exactly as shown.
- **Challenge 27 Answer:** `Profile F` with tighter queue cap in `update()`:
  `if (e.destinationQueue.length > 7) e.destinationQueue = e.destinationQueue.slice(0, 7);`
- **Challenge 28 Answer:** `Profile F` with stronger direction penalty:
  `var dirPenalty = e.destinationDirection() === "stopped" ? 0 : 2;`
- **Challenge 29 Answer:** `Profile F` stricter passing-floor pickup:
  `if (want && e.loadFactor() < 0.7) ...`
- **Challenge 30 Answer:** `Profile F` final tune:
  direction penalty `2`, queue cap `7`, pickup threshold `< 0.7`.
