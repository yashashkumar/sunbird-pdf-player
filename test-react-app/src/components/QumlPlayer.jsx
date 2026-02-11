import { useEffect, useRef } from 'react';

// Note: Web component is loaded via <script> tag in index.html
// This ensures jQuery and Reflect are available before the component initializes

const playerConfig = {
    "context": {
        "mode": "play",
        "partner": [],
        "pdata": {
            "id": "staging.sunbird.portal",
            "ver": "7.0.0",
            "pid": "sunbird-portal"
        },
        "contentId": "do_214501408872210432134",
        "sid": "HJBtxohM7Rtcy0sNS9DCfisTxCcOIv13",
        "uid": "a5a1d92d-45a3-45e5-a25e-8c95e109412e",
        "timeDiff": -0.114,
        "contextRollup": {
            "l1": "0144880972895272960"
        },
        "channel": "0144880972895272960",
        "did": "137e72ae085cfac8ffa872ed9745e457",
        "dims": [
            "0144880972895272960",
            "0144880972895272960"
        ],
        "tags": [
            "0144880972895272960"
        ],
        "app": [
            "0144880972895272960"
        ],
        "objectRollup": {},
        "userData": {
            "firstName": "Content Creator",
            "lastName": ""
        },
        "threshold": 3
    },
    "config": {
        "showEndPage": false,
        "endPage": [
            {
                "template": "assessment",
                "contentType": [
                    "SelfAssess"
                ]
            }
        ],
        "showStartPage": true,
        "host": "",
        "overlay": {
            "showUser": false
        },
        "splash": {
            "text": "",
            "icon": "",
            "bgImage": "assets/icons/splacebackground_1.png",
            "webLink": ""
        },
        "apislug": "/action",
        "repos": [
            "/sunbird-plugins/renderer"
        ],
        "plugins": [
            {
                "id": "org.sunbird.iframeEvent",
                "ver": 1,
                "type": "plugin"
            },
            {
                "id": "org.sunbird.player.endpage",
                "ver": 1.1,
                "type": "plugin"
            }
        ],
        "sideMenu": {
            "showDownload": true,
            "showExit": true,
            "showPrint": true,
            "showReplay": true,
            "showShare": true
        },
        "enableTelemetryValidation": false,
        "traceId": "13cba410-7ccb-46be-afc1-b1adcff303b1",
        "pagesHistory": [],
        "totalPages": 0,
        "duration": 689716,
        "rotation": [],
        "progressBar": [
            {
                "index": "A",
                "class": "partial",
                "score": 0,
                "isActive": false,
                "identifier": "do_214501409276370944136",
                "children": [
                    {
                        "index": 1,
                        "class": "skipped",
                        "score": 0,
                        "showFeedback": false
                    }
                ]
            }
        ],
        "questions": [
            {
                "id": "do_214501409276370944136",
                "questions": [
                    {
                        "code": "59e16976-2c33-4d3d-b4d4-dcc8aeb417c2",
                        "qumlVersion": 1.1,
                        "prevStatus": "Processing",
                        "downloadUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177575_do_214501409431265280140_1.ecar",
                        "channel": "0144880972895272960",
                        "language": [
                            "English"
                        ],
                        "mimeType": "application/vnd.sunbird.question",
                        "showHints": false,
                        "media": [],
                        "variants": {
                            "full": {
                                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177575_do_214501409431265280140_1.ecar",
                                "size": "2347"
                            },
                            "online": {
                                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177659_do_214501409431265280140_1_ONLINE.ecar",
                                "size": "1132"
                            }
                        },
                        "body": "<p>Q1</p>",
                        "editorState": {
                            "answer": "<p>Ans</p>",
                            "question": "<p>Q1</p>"
                        },
                        "createdOn": "2026-02-04T07:53:01.259+0000",
                        "objectType": "Question",
                        "interactions": {},
                        "primaryCategory": "Subjective Question",
                        "contentDisposition": "inline",
                        "artifactUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/do_214501409431265280140_1770207177286.zip",
                        "lastUpdatedOn": "2026-02-04T12:12:57.700+0000",
                        "contentEncoding": "gzip",
                        "showSolutions": false,
                        "allowAnonymousAccess": "Yes",
                        "identifier": "do_214501409431265280140",
                        "lastStatusChangedOn": "2026-02-04T12:12:57.700+0000",
                        "schemaVersion": "1.1",
                        "visibility": "Parent",
                        "showTimer": false,
                        "se_languages": "[\"[\\\"English\\\"]\"]",
                        "se_FWIds": [
                            "NCF"
                        ],
                        "solutions": {},
                        "outcomeDeclaration": {
                            "maxScore": {
                                "cardinality": "single",
                                "type": "integer",
                                "defaultValue": 1
                            },
                            "hint": {
                                "cardinality": "single",
                                "type": "string",
                                "defaultValue": "a07f6065-b0e5-4330-aef0-89ecc2007851"
                            }
                        },
                        "qType": "SA",
                        "maxScore": 1,
                        "lastPublishedBy": "aaa91661-c266-4204-8c67-0788ad622bf8",
                        "languageCode": [
                            "en"
                        ],
                        "pkgVersion": 1,
                        "showFeedback": false,
                        "versionKey": "214501409433673728142",
                        "license": "CC BY 4.0",
                        "framework": "NCF",
                        "answer": "<div class='answer-container'><div class='answer-body'><p>Ans</p></div></div>",
                        "createdBy": "a5a1d92d-45a3-45e5-a25e-8c95e109412e",
                        "compatibilityLevel": 5,
                        "name": "Q1",
                        "status": "Live"
                    }
                ]
            }
        ],
        "questionIds": [],
        "lastQuestionId": ""
    },
    "metadata": {
        "lastStatusChangedOn": "2026-02-04T07:53:45.866+0000",
        "identifier": "do_214501408872210432134",
        "allowSkip": "Yes",
        "se_subjects": [
            "[\"English\"]"
        ],
        "qumlVersion": 1.1,
        "se_languages": [
            "[\"English\"]"
        ],
        "shuffle": true,
        "se_gradeLevels": [
            "[\"Class 1\"]"
        ],
        "se_FWIds": [
            "NCF",
            "[\"NCF\"]"
        ],
        "pkgVersion": 1,
        "timeLimits": {
            "questionSet": {
                "max": 0,
                "min": 0
            }
        },
        "children": [
            {
                "lastStatusChangedOn": "2026-02-04T07:53:45.859+0000",
                "timeLimits": {
                    "questionSet": {
                        "max": 0,
                        "min": 0
                    }
                },
                "parent": "do_214501408872210432134",
                "children": [
                    {
                        "lastStatusChangedOn": "2026-02-04T12:12:57.700+0000",
                        "parent": "do_214501409276370944136",
                        "name": "Q1",
                        "createdOn": "2026-02-04T07:53:01.259+0000",
                        "channel": "0144880972895272960",
                        "maxScore": 1,
                        "lastUpdatedOn": "2026-02-04T12:12:57.700+0000",
                        "showTimer": false,
                        "identifier": "do_214501409431265280140",
                        "compatibilityLevel": 5,
                        "primaryCategory": "Subjective Question",
                        "downloadUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177575_do_214501409431265280140_1.ecar",
                        "framework": "NCF",
                        "versionKey": "214501409433673728142",
                        "mimeType": "application/vnd.sunbird.question",
                        "code": "59e16976-2c33-4d3d-b4d4-dcc8aeb417c2",
                        "license": "CC BY 4.0",
                        "qumlVersion": 1.1,
                        "se_languages": "[\"[\\\"English\\\"]\"]",
                        "prevStatus": "Processing",
                        "showHints": false,
                        "language": [
                            "English"
                        ],
                        "showFeedback": false,
                        "objectType": "Question",
                        "status": "Live",
                        "graphId": "domain",
                        "createdBy": "a5a1d92d-45a3-45e5-a25e-8c95e109412e",
                        "contentEncoding": "gzip",
                        "depth": 2,
                        "lastPublishedBy": "aaa91661-c266-4204-8c67-0788ad622bf8",
                        "se_FWIds": [
                            "NCF"
                        ],
                        "allowAnonymousAccess": "Yes",
                        "contentDisposition": "inline",
                        "schemaVersion": "1.1",
                        "artifactUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/do_214501409431265280140_1770207177286.zip",
                        "visibility": "Parent",
                        "qType": "SA",
                        "showSolutions": false,
                        "variants": {
                            "full": {
                                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177575_do_214501409431265280140_1.ecar",
                                "size": "2347"
                            },
                            "online": {
                                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/question/do_214501409431265280140/q1_1770207177659_do_214501409431265280140_1_ONLINE.ecar",
                                "size": "1132"
                            }
                        },
                        "index": 1,
                        "pkgVersion": 1
                    }
                ],
                "name": "Section 1",
                "navigationMode": "non-linear",
                "createdOn": "2026-02-04T07:52:42.057+0000",
                "channel": "0144880972895272960",
                "generateDIALCodes": "No",
                "lastUpdatedOn": "2026-02-04T07:53:45.859+0000",
                "showTimer": false,
                "identifier": "do_214501409276370944136",
                "description": "Desc",
                "containsUserData": "No",
                "allowSkip": "Yes",
                "compatibilityLevel": 6,
                "trackable": {
                    "enabled": "No",
                    "autoBatch": "No"
                },
                "primaryCategory": "Practice Question Set",
                "setType": "materialised",
                "languageCode": [
                    "en"
                ],
                "attributions": [],
                "scoreCutoffType": "AssessmentLevel",
                "versionKey": "1770191562057",
                "mimeType": "application/vnd.sunbird.questionset",
                "code": "4c245433-39e1-432f-aa6e-74931008da83",
                "license": "CC BY 4.0",
                "qumlVersion": 1.1,
                "prevStatus": "Draft",
                "showHints": false,
                "language": [
                    "English"
                ],
                "showFeedback": false,
                "objectType": "QuestionSet",
                "status": "Live",
                "requiresSubmit": "No",
                "shuffle": true,
                "contentEncoding": "gzip",
                "depth": 1,
                "instructions": "<p>Ins</p>",
                "allowAnonymousAccess": "Yes",
                "contentDisposition": "inline",
                "schemaVersion": "1.1",
                "allowBranching": "No",
                "visibility": "Parent",
                "showSolutions": false,
                "index": 1
            }
        ],
        "name": "Untitled QuestionSet",
        "navigationMode": "non-linear",
        "channel": "0144880972895272960",
        "createdOn": "2026-02-04T07:51:52.758+0000",
        "createdFor": [
            "0144880972895272960"
        ],
        "pdfUrl": "",
        "generateDIALCodes": "No",
        "lastUpdatedOn": "2026-02-04T07:53:45.948+0000",
        "subject": [
            "English"
        ],
        "size": 4829,
        "showTimer": false,
        "description": "Desc",
        "gradeLevel": [
            "Class 1"
        ],
        "containsUserData": "No",
        "compatibilityLevel": 6,
        "audience": [
            "Student"
        ],
        "trackable": {
            "enabled": "No",
            "autoBatch": "No"
        },
        "se_boards": [
            "CBSE"
        ],
        "primaryCategory": "Practice Question Set",
        "setType": "materialised",
        "appIcon": "",
        "se_mediums": [
            "[\"English\"]"
        ],
        "downloadUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/questionset/do_214501408872210432134/untitled-questionset_1770207181804_do_214501408872210432134_1.ecar",
        "medium": [
            "English"
        ],
        "attributions": [],
        "scoreCutoffType": "AssessmentLevel",
        "framework": "NCF",
        "versionKey": "214501409799766016145",
        "mimeType": "application/vnd.sunbird.questionset",
        "code": "8572575e-c8d8-49f9-8bf1-0e59b132281f",
        "license": "CC BY 4.0",
        "prevStatus": "Review",
        "showHints": false,
        "language": [
            "English"
        ],
        "board": "CBSE",
        "showFeedback": false,
        "lastPublishedOn": "2026-02-04T12:13:01.681+0000",
        "objectType": "QuestionSet",
        "status": "Live",
        "graphId": "domain",
        "targetFWIds": [
            "NCF"
        ],
        "createdBy": "a5a1d92d-45a3-45e5-a25e-8c95e109412e",
        "requiresSubmit": "No",
        "contentEncoding": "gzip",
        "depth": 0,
        "consumerId": "4c6965ca-6dd1-4bf0-9d5d-8b13c405339f",
        "lastPublishedBy": "aaa91661-c266-4204-8c67-0788ad622bf8",
        "allowAnonymousAccess": "Yes",
        "contentDisposition": "inline",
        "schemaVersion": "1.1",
        "allowBranching": "No",
        "previewUrl": "",
        "childNodes": [
            "do_214501409431265280140",
            "do_214501409276370944136"
        ],
        "visibility": "Default",
        "showSolutions": false,
        "variants": {
            "spine": {
                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/questionset/do_214501408872210432134/untitled-questionset_1770207181695_do_214501408872210432134_1_SPINE.ecar",
                "size": "3561"
            },
            "online": {
                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/questionset/do_214501408872210432134/untitled-questionset_1770207181773_do_214501408872210432134_1_ONLINE.ecar",
                "size": "3560"
            },
            "full": {
                "ecarUrl": "https://eddevlda72f12a.blob.core.windows.net/ed-devl-public-4e0bb10266/questionset/do_214501408872210432134/untitled-questionset_1770207181804_do_214501408872210432134_1.ecar",
                "size": "4829"
            }
        },
        "outcomeDeclaration": {
            "maxScore": {
                "cardinality": "single",
                "type": "integer",
                "defaultValue": 1
            }
        }
    },
    "data": {}
};

function QumlPlayer() {
    const playerContainerRef = useRef(null);

    useEffect(() => {
        // Set up global environment for QUML player
        window.questionListUrl = 'https://dev.sunbirded.org/api/question/v2/list';

        // Create the web component element
        const qumlElement = document.createElement('sunbird-quml-player');

        // Set the player configuration as an attribute
        qumlElement.setAttribute('player-config', JSON.stringify(playerConfig));

        // Add event listeners for player events
        const handlePlayerEvent = (event) => {
            console.log('QUML Player Event:', event.detail);
        };

        const handleTelemetryEvent = (event) => {
            console.log('QUML Telemetry Event:', event.detail);
        };

        qumlElement.addEventListener('playerEvent', handlePlayerEvent);
        qumlElement.addEventListener('telemetryEvent', handleTelemetryEvent);

        // Append the element to the container
        if (playerContainerRef.current) {
            playerContainerRef.current.innerHTML = '';
            playerContainerRef.current.appendChild(qumlElement);
        }

        // Cleanup function
        return () => {
            if (qumlElement) {
                qumlElement.removeEventListener('playerEvent', handlePlayerEvent);
                qumlElement.removeEventListener('telemetryEvent', handleTelemetryEvent);
                if (playerContainerRef.current && qumlElement.parentNode) {
                    playerContainerRef.current.removeChild(qumlElement);
                }
            }
        };
    }, []);

    return (
        <div style={{
            minHeight: '90vh',
            width: '100%',
            padding: '20px',
            boxSizing: 'border-box'
        }}>
            <div style={{ height: "80vh" }} ref={playerContainerRef}></div>
        </div>
    );
}

export default QumlPlayer;
