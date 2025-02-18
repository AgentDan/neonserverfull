import {v1} from "uuid"

export const store = [
    {
        id: v1(),
        name: "poligon",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "poligonRhino",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "RhinoChrome", file: "poligonRhinoChrome", check: true},
                    {id: v1(), groupElements: 0, name: "RhinoGold", file: "poligonRhinoGold", check: false},
                    {id: v1(), groupElements: 0, name: "RhinoBlack", file: "poligonRhinoBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonFox",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "FoxChrome", file: "poligonFoxChrome", check: true},
                    {id: v1(), groupElements: 0, name: "FoxGold", file: "poligonFoxGold", check: false},
                    {id: v1(), groupElements: 0, name: "FoxBlack", file: "poligonFoxBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonBear",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "BearChrome", file: "poligonBearChrome", check: true},
                    {id: v1(), groupElements: 0, name: "BearGold", file: "poligonBearGold", check: false},
                    {id: v1(), groupElements: 0, name: "BearBlack", file: "poligonBearBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonHorse",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "HorseChrome", file: "poligonHorseChrome", check: true},
                    {id: v1(), groupElements: 0, name: "HorseGold", file: "poligonHorseGold", check: false},
                    {id: v1(), groupElements: 0, name: "HorseBlack", file: "poligonHorseBlack", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "poligonBull",
                def: [
                    {file: "poligonRhinoDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "BullChrome", file: "poligonBullChrome", check: true},
                    {id: v1(), groupElements: 0, name: "BullGold", file: "poligonBullGold", check: false},
                    {id: v1(), groupElements: 0, name: "BullBlack", file: "poligonBullBlack", check: false},
                ]
            },
        ]
    },
    {
        id: v1(),
        name: "konst",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "1000x150x95 RAL9011",
                def: [
                    {file: "polkaDefoult"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "1800x1600x300 RAL9004",
                def: [
                    {file: "polkaDefoult2"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "lab",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "logo",
                def: [
                    {file: "labDefoult"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "kinki",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "bathroom",
                def: [
                    {file: "kinkiDefoult0"},
                    {file: "kinkiDefoult1"},
                    {file: "kinkiDefoult2"},
                    {file: "kinkiDefoult3"},
                    {file: "kinkiDefoult4"},
                    {file: "kinkiDefoult5"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "ShowerFalse", file: "kinkiShower0", check: false},
                    {id: v1(), groupElements: 0, name: "ShowerTrue", file: "kinkiShower1", check: true},
                    {id: v1(), groupElements: 1, name: "SinkFalse", file: "kinkiSink0", check: false},
                    {id: v1(), groupElements: 1, name: "SinkVar1", file: "kinkiSink1", check: true},
                    {id: v1(), groupElements: 1, name: "SinkVar2", file: "kinkiSink2", check: false},
                    {id: v1(), groupElements: 2, name: "ToiletFalse", file: "kinkiToilet0", check: false},
                    {id: v1(), groupElements: 2, name: "ToiletVar1", file: "kinkiToilet1", check: true},
                    {id: v1(), groupElements: 2, name: "ToiletVar2", file: "kinkiToilet2", check: false},
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "jovanova",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "appartment",
                def: [
                    {file: "javanovaDefoult1"},
                    {file: "javanovaDefoult2"},
                    {file: "javanovaDefoult3"},
                    {file: "javanovaDefoult4"},
                    {file: "javanovaDefoult5"},
                    {file: "javanovaDefoult6"},
                    {file: "javanovaDefoult7"},
                    {file: "javanovaDefoult8"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "desk",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "desk",
                def: [
                    {file: "deskDefoult1"},
                    {file: "deskDefoult2"},
                    {file: "deskDefoult3"},
                    {file: "deskDefoult4"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "deskAlisaTrue", file: "deskAlisa1", check: true},
                    {id: v1(), groupElements: 0, name: "deskAlisaFalse", file: "deskAlisa2", check: false},
                    {id: v1(), groupElements: 1, name: "deskRackTrue", file: "deskRack1", check: true},
                    {id: v1(), groupElements: 1, name: "deskRackFalse", file: "deskRack2", check: false},
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "flowers",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers1",
                def: [
                    {file: "rackFlowersDefoult1"},
                    {file: "rackFlowersDefoult2"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers2",
                def: [
                    {file: "rackFlowersDefoult3"},
                    {file: "rackFlowersDefoult4"},
                ],
                components: [
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "rackFlowers3",
                def: [
                    {file: "rackFlowersDefoult5"},
                    {file: "rackFlowersDefoult6"},
                    {file: "rackFlowersDefoult7"},
                    {file: "rackFlowersDefoult8"},
                ],
                components: [
                ]
            }
        ]
    },
    {
        id: v1(),
        name: "railing",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "RailingOne",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    // {id: v1(), groupElements: 1, name: "Black", file: "railingRodBlack", check: true},
                    // {id: v1(), groupElements: 1, name: "Gray", file: "railingRodGray", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "RailingTwo",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    // {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    {id: v1(), groupElements: 0, name: "Black", file: "railingRodBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingRodGrey", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "RailingThree",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    // {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    {id: v1(), groupElements: 0, name: "Black", file: "railingThreeBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingThreeGrey", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "RailingFour",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    // {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    {id: v1(), groupElements: 0, name: "Black", file: "railingFourBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingFourGrey", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "RailingFive",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    // {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    {id: v1(), groupElements: 0, name: "Black", file: "railingFiveBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingFiveGray", check: false},
                ]
            },
            {
                id: v1(),
                check: false,
                nameProject: "RailingSix",
                def: [
                    // {file: "railingLine"},
                ],
                components: [
                    // {id: v1(), groupElements: 0, name: "Black", file: "railingLineBlack", check: true},
                    // {id: v1(), groupElements: 0, name: "Gray", file: "railingLineGray", check: false},
                    {id: v1(), groupElements: 0, name: "Black", file: "railingSixBlack", check: true},
                    {id: v1(), groupElements: 0, name: "Gray", file: "railingSixGray", check: false},
                ]
            }
        ]
    },
//-----------------------------------
    {
        id: v1(),
        name: "smartdesk",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "rackAndDesk",
                def: [
                    {file: "rackDefoult"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "rackButton1", file: "rackButton1", check: true},
                    {id: v1(), groupElements: 0, name: "rackButton2", file: "rackButton2", check: false},
                    {id: v1(), groupElements: 1, name: "rackLight1", file: "rackLight1", check: true},
                    {id: v1(), groupElements: 1, name: "rackLight2", file: "rackLight2", check: false},
                    {id: v1(), groupElements: 2, name: "rackNeon1", file: "rackNeon1", check: true},
                    {id: v1(), groupElements: 2, name: "rackNeon2", file: "rackNeon2", check: false},
                ]
            }
        ]
    },
//-----------------------------------
    {
        id: v1(),
        name: "box",
        projects: [
            {
                id: v1(),
                check: false,
                nameProject: "MyHouse",
                def: [
                    {file: "boxDefoult0"},
                    {file: "boxDefoult1"},
                    {file: "boxDefoult2"},
                ],
                components: [
                    {id: v1(), groupElements: 0, name: "boxKarkas0", file: "boxKarkas0", check: true},
                    {id: v1(), groupElements: 0, name: "boxKarkas1", file: "boxKarkas1", check: false},
                    {id: v1(), groupElements: 1, name: "boxOsb0", file: "boxOsb0", check: true},
                    {id: v1(), groupElements: 1, name: "boxOsb1", file: "boxOsb1", check: false},
                    {id: v1(), groupElements: 2, name: "boxOtdelka0", file: "boxOtdelka0", check: true},
                    {id: v1(), groupElements: 2, name: "boxOtdelka1", file: "boxOtdelka1", check: false},
                    {id: v1(), groupElements: 2, name: "boxOtdelka2", file: "boxOtdelka2", check: false},
                    {id: v1(), groupElements: 2, name: "boxOtdelka3", file: "boxOtdelka3", check: false},
                    {id: v1(), groupElements: 3, name: "boxRoof0", file: "boxRoof0", check: true},
                    {id: v1(), groupElements: 3, name: "boxRoof1", file: "boxRoof1", check: false}
                ]
            }
        ]
    },
]