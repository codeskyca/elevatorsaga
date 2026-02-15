
var createEditor = function() {
    var lsKey = "elevatorCrushCode_v5";
    var currentChallengeIndex = 0;

    var getDefaultCodeForChallenge = function(challengeIndex) {
        if(challengeIndex <= 1) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(1);",
                "            elevator.goToFloor(2);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 2) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(1);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(3);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 3) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        if(floors[0]) floors[0].on(\"up_button_pressed\", function() { elevator.goToFloor(0); });",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(1);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(3);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 4 || challengeIndex === 5) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        if(floors[0]) floors[0].on(\"up_button_pressed\", function() { elevator.goToFloor(0); });",
                "        if(floors[3]) floors[3].on(\"down_button_pressed\", function() { elevator.goToFloor(3); });",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(1);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(3);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 6) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        if(floors[1]) {",
                "            floors[1].on(\"up_button_pressed\", function() { elevator.goToFloor(1); });",
                "            floors[1].on(\"down_button_pressed\", function() { elevator.goToFloor(1); });",
                "        }",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(4);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 7) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        if(floors[1]) floors[1].on(\"up_button_pressed down_button_pressed\", function() { elevator.goToFloor(1); });",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(4);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex === 8 || challengeIndex === 9) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        function enqueueIfMissing(floorNum) {",
                "            if(elevator.destinationQueue.indexOf(floorNum) === -1) {",
                "                elevator.goToFloor(floorNum);",
                "            }",
                "        }",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            enqueueIfMissing(floorNum);",
                "        });",
                "        if(floors[1]) floors[1].on(\"up_button_pressed down_button_pressed\", function() { enqueueIfMissing(1); });",
                "        elevator.on(\"idle\", function() {",
                "            enqueueIfMissing(0);",
                "            enqueueIfMissing(2);",
                "            enqueueIfMissing(4);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        if(challengeIndex <= 9) {
            return [
                "{",
                "    init: function(elevators, floors) {",
                "        var elevator = elevators[0];",
                "        elevator.on(\"floor_button_pressed\", function(floorNum) {",
                "            elevator.goToFloor(floorNum);",
                "        });",
                "        if(floors[0]) {",
                "            floors[0].on(\"up_button_pressed\", function() {",
                "                elevator.goToFloor(0);",
                "            });",
                "        }",
                "        elevator.on(\"idle\", function() {",
                "            elevator.goToFloor(0);",
                "            elevator.goToFloor(1);",
                "            elevator.goToFloor(2);",
                "            elevator.goToFloor(3);",
                "        });",
                "    },",
                "    update: function(dt, elevators, floors) {",
                "    }",
                "}"
            ].join("\n");
        }

        return [
            "{",
            "    init: function(elevators, floors) {",
            "        elevators.forEach(function(elevator, index) {",
            "            elevator.on(\"floor_button_pressed\", function(floorNum) {",
            "                elevator.goToFloor(floorNum);",
            "            });",
            "            elevator.on(\"idle\", function() {",
            "                elevator.goToFloor(index === 0 ? 0 : floors.length - 1);",
            "            });",
            "        });",
            "",
            "        floors.forEach(function(floor) {",
            "            floor.on(\"up_button_pressed down_button_pressed\", function() {",
            "                elevators[0].goToFloor(floor.floorNum());",
            "            });",
            "        });",
            "    },",
            "    update: function(dt, elevators, floors) {",
            "    }",
            "}"
        ].join("\n");
    };

    var cm = CodeMirror.fromTextArea(document.getElementById("code"), {
        lineNumbers: true,
        indentUnit: 4,
        indentWithTabs: false,
        theme: "solarized light",
        mode: "javascript",
        autoCloseBrackets: true,
        extraKeys: {
            // the following Tab key mapping is from http://codemirror.net/doc/manual.html#keymaps
            Tab: function(cm) {
                var spaces = new Array(cm.getOption("indentUnit") + 1).join(" ");
                cm.replaceSelection(spaces);
            }
        }
    });

    // reindent on paste (adapted from https://github.com/ahuth/brackets-paste-and-indent/blob/master/main.js)
    cm.on("change", function(codeMirror, change) {
        if(change.origin !== "paste") {
            return;
        }

        var lineFrom = change.from.line;
        var lineTo = change.from.line + change.text.length;

        function reindentLines(codeMirror, lineFrom, lineTo) {
            codeMirror.operation(function() {
                codeMirror.eachLine(lineFrom, lineTo, function(lineHandle) {
                    codeMirror.indentLine(lineHandle.lineNo(), "smart");
                });
            });
        }

        reindentLines(codeMirror, lineFrom, lineTo);
    });

    var reset = function() {
        cm.setValue(getDefaultCodeForChallenge(currentChallengeIndex));
    };
    var saveCode = function() {
        localStorage.setItem(lsKey, cm.getValue());
        $("#save_message").text("Code saved " + new Date().toTimeString());
        returnObj.trigger("change");
    };

    // Always start from challenge default template on page load.
    // This keeps scaffolding aligned with each challenge.
    reset();

    $("#button_save").click(function() {
        saveCode();
        cm.focus();
    });

    $("#button_reset").click(function() {
        if(confirm("Do you really want to reset to the default implementation for this challenge?")) {
            localStorage.setItem("develevateBackupCode", cm.getValue());
            reset();
        }
        cm.focus();
    });

    $("#button_resetundo").click(function() {
        if(confirm("Do you want to bring back the code as before the last reset?")) {
            cm.setValue(localStorage.getItem("develevateBackupCode") || "");
        }
        cm.focus();
    });

    var returnObj = riot.observable({});
    var autoSaver = _.debounce(saveCode, 1000);
    cm.on("change", function() {
        autoSaver();
    });

    returnObj.getCodeObj = function() {
        console.log("Getting code...");
        var code = cm.getValue();
        var obj;
        try {
            obj = getCodeObjFromCode(code);
            returnObj.trigger("code_success");
        } catch(e) {
            returnObj.trigger("usercode_error", e);
            return null;
        }
        return obj;
    };
    returnObj.setCode = function(code) {
        cm.setValue(code);
    };
    returnObj.getCode = function() {
        return cm.getValue();
    }
    returnObj.setDevTestCode = function() {
        cm.setValue($("#devtest-elev-implementation").text().trim());
    }
    returnObj.setChallengeIndex = function(challengeIndex) {
        currentChallengeIndex = challengeIndex;
    };
    returnObj.resetToChallengeDefault = function() {
        reset();
    };

    $("#button_apply").click(function() {
        returnObj.trigger("apply_code");
    });
    return returnObj;
};


var createParamsUrl = function(current, overrides) {
    return "#" + _.map(_.merge(current, overrides), function(val, key) {
        return key + "=" + val;
    }).join(",");
};

var validateCodeForChallenge = function(code, challengeIndex) {
    // Challenges 1-10 are intentionally scaffolded to practice explicit event wiring.
    if(challengeIndex <= 9) {
        var blockedPatterns = [
            { regex: /\bfor\s*\(/, label: "for loops" },
            { regex: /\bwhile\s*\(/, label: "while loops" },
            { regex: /\bdo\s*\{/, label: "do-while loops" },
            { regex: /\.(forEach|map|filter|reduce|some|every)\s*\(/, label: "array iteration helpers (forEach/map/etc)" },
            { regex: /\bfloors\s*\[\s*[A-Za-z_$][\w$]*\s*\]/, label: "dynamic floor indexing (floors[i])" },
            { regex: /\belevators\s*\[\s*[A-Za-z_$][\w$]*\s*\]/, label: "dynamic elevator indexing (elevators[i])" },
            { regex: /\bfloors\.length\b/, label: "floors.length shortcuts" },
            { regex: /\belevators\.length\b/, label: "elevators.length shortcuts" }
        ];
        var violations = _.chain(blockedPatterns)
            .filter(function(rule) { return rule.regex.test(code); })
            .map("label")
            .uniq()
            .value();

        if(violations.length) {
            return "Challenge " + (challengeIndex + 1) + " restriction: use explicit bindings only. Blocked here: " +
                violations.join(", ") + ". Write direct listeners like floors[1].on(...) and explicit goToFloor(...) calls.";
        }

        // Challenge-specific concept checks so students cannot solve with idle-only routing.
        var requiredByChallenge = {
            2: { pattern: /floor_button_pressed/, message: "Challenge 3 requires using elevator inside-button events (`floor_button_pressed`)." },
            3: { pattern: /up_button_pressed|down_button_pressed/, message: "Challenge 4 requires at least one floor button listener (`up_button_pressed` or `down_button_pressed`)." },
            4: { pattern: /up_button_pressed[\s\S]*down_button_pressed|down_button_pressed[\s\S]*up_button_pressed/, message: "Challenge 5 requires both up and down floor event handling." },
            5: { pattern: /up_button_pressed[\s\S]*down_button_pressed|down_button_pressed[\s\S]*up_button_pressed/, message: "Challenge 6 requires explicit floor-event coverage (both directions used)." },
            6: { pattern: /\.on\s*\(\s*"up_button_pressed"\s*,[\s\S]*\.on\s*\(\s*"down_button_pressed"\s*,/, message: "Challenge 7 requires separate up/down listeners (no chained events yet)." },
            7: { pattern: /up_button_pressed\s+down_button_pressed/, message: "Challenge 8 requires chained event syntax: \"up_button_pressed down_button_pressed\"." },
            8: { pattern: /destinationQueue\.indexOf|enqueueIfMissing/, message: "Challenge 9 requires duplicate-request control (queue de-dup logic)." },
            9: { pattern: /destinationQueue\.indexOf|enqueueIfMissing/, message: "Challenge 10 requires stable queue handling under repeated calls (keep de-dup logic)." }
        };
        if(requiredByChallenge[challengeIndex] && !requiredByChallenge[challengeIndex].pattern.test(code)) {
            return requiredByChallenge[challengeIndex].message;
        }
    }
    return null;
};



$(function() {
    var tsKey = "elevatorTimeScale";
    var editor = createEditor();

    var $syntaxDrawer = $("#syntax_drawer");
    var $syntaxToggle = $("#syntax_drawer_toggle");
    var $syntaxClose = $("#syntax_drawer_close");

    var setSyntaxDrawerOpen = function(isOpen) {
        $syntaxDrawer.toggleClass("open", isOpen);
        $syntaxDrawer.attr("aria-hidden", isOpen ? "false" : "true");
        $syntaxToggle.attr("aria-expanded", isOpen ? "true" : "false");
    };
    var updateSyntaxForChallenge = function(challengeIndex) {
        var levelNum = challengeIndex + 1;
        var isDemo = levelNum >= challenges.length;

        $(".syntax-card").each(function() {
            var $card = $(this);
            var minLevel = parseInt($card.attr("data-level-min"), 10) || 1;
            var maxLevel = parseInt($card.attr("data-level-max"), 10) || 999;
            var visible = isDemo ? true : (levelNum >= minLevel && levelNum <= maxLevel);
            $card.toggle(visible);
        });

        $("#syntax_level_badge").text(isDemo ? "Demo Syntax (All)" : ("Level " + levelNum + " Syntax"));
    };

    $syntaxToggle.on("click", function() {
        setSyntaxDrawerOpen(!$syntaxDrawer.hasClass("open"));
    });
    $syntaxClose.on("click", function() {
        setSyntaxDrawerOpen(false);
    });
    $(document).on("keydown", function(e) {
        if(e.key === "Escape") {
            setSyntaxDrawerOpen(false);
        }
    });
    setSyntaxDrawerOpen(false);

    var params = {};

    var $world = $(".innerworld");
    var $stats = $(".statscontainer");
    var $feedback = $(".feedbackcontainer");
    var $challenge = $(".challenge");
    var $codestatus = $(".codestatus");

    var floorTempl = document.getElementById("floor-template").innerHTML.trim();
    var elevatorTempl = document.getElementById("elevator-template").innerHTML.trim();
    var elevatorButtonTempl = document.getElementById("elevatorbutton-template").innerHTML.trim();
    var userTempl = document.getElementById("user-template").innerHTML.trim();
    var challengeTempl = document.getElementById("challenge-template").innerHTML.trim();
    var feedbackTempl = document.getElementById("feedback-template").innerHTML.trim();
    var codeStatusTempl = document.getElementById("codestatus-template").innerHTML.trim();

    var app = riot.observable({});
    app.worldController = createWorldController(1.0 / 60.0);
    app.worldController.on("usercode_error", function(e) {
        console.log("World raised code error", e);
        editor.trigger("usercode_error", e);
    });

    console.log(app.worldController);
    app.worldCreator = createWorldCreator();
    app.world = undefined;

    app.currentChallengeIndex = 0;

    app.startStopOrRestart = function() {
        if(app.world.challengeEnded) {
            app.startChallenge(app.currentChallengeIndex);
        } else {
            app.worldController.setPaused(!app.worldController.isPaused);
        }
    };

    app.startChallenge = function(challengeIndex, autoStart) {
        app.currentChallengeIndex = challengeIndex;
        editor.setChallengeIndex(challengeIndex);
        updateSyntaxForChallenge(challengeIndex);

        var restrictionError = validateCodeForChallenge(editor.getCode(), challengeIndex);
        if(restrictionError) {
            editor.trigger("usercode_error", restrictionError);
            return;
        }

        if(typeof app.world !== "undefined") {
            app.world.unWind();
            // TODO: Investigate if memory leaks happen here
        }
        app.world = app.worldCreator.createWorld(challenges[challengeIndex].options);
        window.world = app.world;

        clearAll([$world, $feedback]);
        presentStats($stats, app.world);
        presentChallenge($challenge, challenges[challengeIndex], app, app.world, app.worldController, challengeIndex + 1, challengeTempl);
        presentWorld($world, app.world, floorTempl, elevatorTempl, elevatorButtonTempl, userTempl);

        app.worldController.on("timescale_changed", function() {
            localStorage.setItem(tsKey, app.worldController.timeScale);
            presentChallenge($challenge, challenges[challengeIndex], app, app.world, app.worldController, challengeIndex + 1, challengeTempl);
        });

        app.world.on("stats_changed", function() {
            var challengeStatus = challenges[challengeIndex].condition.evaluate(app.world);
            if(challengeStatus !== null) {
                app.world.challengeEnded = true;
                app.worldController.setPaused(true);
                if(challengeStatus) {
                    presentFeedback($feedback, feedbackTempl, app.world, "Success!", "Challenge completed", createParamsUrl(params, { challenge: (challengeIndex + 2)}));
                } else {
                    presentFeedback($feedback, feedbackTempl, app.world, "Challenge failed", "Maybe your program needs an improvement?", "");
                }
            }
        });

        var codeObj = editor.getCodeObj();
        console.log("Starting...");
        app.worldController.start(app.world, codeObj, window.requestAnimationFrame, autoStart);
    };

    editor.on("apply_code", function() {
        app.startChallenge(app.currentChallengeIndex, true);
    });
    editor.on("code_success", function() {
        presentCodeStatus($codestatus, codeStatusTempl);
    });
    editor.on("usercode_error", function(error) {
        presentCodeStatus($codestatus, codeStatusTempl, error);
    });
    editor.on("change", function() {
        $("#fitness_message").addClass("faded");
        var codeStr = editor.getCode();
        // fitnessSuite(codeStr, true, function(results) {
        //     var message = "";
        //     if(!results.error) {
        //         message = "Fitness avg wait times: " + _.map(results, function(r){ return r.options.description + ": " + r.result.avgWaitTime.toPrecision(3) + "s" }).join("&nbsp&nbsp&nbsp");
        //     } else {
        //         message = "Could not compute fitness due to error: " + results.error;
        //     }
        //     $("#fitness_message").html(message).removeClass("faded");
        // });
    });
    editor.trigger("change");

    riot.route(function(path) {
        params = _.reduce(path.split(","), function(result, p) {
            var match = p.match(/(\w+)=(\w+$)/);
            if(match) { result[match[1]] = match[2]; } return result;
        }, {});
        var requestedChallenge = 0;
        var autoStart = false;
        var timeScale = parseFloat(localStorage.getItem(tsKey)) || 2.0;
        _.each(params, function(val, key) {
            if(key === "challenge") {
                requestedChallenge = _.parseInt(val) - 1;
                if(requestedChallenge < 0 || requestedChallenge >= challenges.length) {
                    console.log("Invalid challenge index", requestedChallenge);
                    console.log("Defaulting to first challenge");
                    requestedChallenge = 0;
                }
            } else if(key === "autostart") {
                autoStart = val === "false" ? false : true;
            } else if(key === "timescale") {
                timeScale = parseFloat(val);
            } else if(key === "devtest") {
                editor.setDevTestCode();
            } else if(key === "fullscreen") {
                makeDemoFullscreen();
            }
        });
        app.worldController.setTimeScale(timeScale);
        editor.setChallengeIndex(requestedChallenge);
        editor.resetToChallengeDefault();
        app.startChallenge(requestedChallenge, autoStart);
    });
});
