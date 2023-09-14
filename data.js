var APP_DATA = {
  "scenes": [
    {
      "id": "0-01-strada",
      "name": "01 STRADA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.38792549025411915,
          "pitch": 0.18153300825270158,
          "rotation": 0,
          "target": "1-02-pasaj"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-02-pasaj",
      "name": "02 pasaj",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7978883813559534,
          "pitch": 0.0097980574314942,
          "rotation": 0,
          "target": "0-01-strada"
        },
        {
          "yaw": -0.24567703826520315,
          "pitch": -0.05853828238019965,
          "rotation": 0,
          "target": "2-03-curte"
        },
        {
          "yaw": 0.23081751497816683,
          "pitch": 0.12601375837952133,
          "rotation": 0,
          "target": "16-casa-scara-demisol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-03-curte",
      "name": "03 curte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11622158580444264,
          "pitch": 0.0805931396138444,
          "rotation": 0,
          "target": "1-02-pasaj"
        },
        {
          "yaw": -0.4187383507334097,
          "pitch": 0.1086350794516413,
          "rotation": 6.283185307179586,
          "target": "3-04-acces-curte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-04-acces-curte",
      "name": "04 acces curte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "4-05-hol-demisol"
        },
        {
          "yaw": 2.8573161649770498,
          "pitch": 0.03426071449719181,
          "rotation": 0,
          "target": "2-03-curte"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-05-hol-demisol",
      "name": "05 hol demisol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.2723416828211622,
          "pitch": 0.010157163043023942,
          "rotation": 0,
          "target": "3-04-acces-curte"
        },
        {
          "yaw": 1.16102717240223,
          "pitch": -0.029637628479989075,
          "rotation": 0,
          "target": "16-casa-scara-demisol"
        },
        {
          "yaw": -1.008490614530558,
          "pitch": 0.005621992811613907,
          "rotation": 0,
          "target": "5-06-sala-de-mese"
        },
        {
          "yaw": 0.09079345366323288,
          "pitch": 0.0331593015067142,
          "rotation": 0,
          "target": "6-07-arhiva"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-06-sala-de-mese",
      "name": "06 sala de mese",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9928389568747527,
          "pitch": 0.03850270457961713,
          "rotation": 0,
          "target": "0-01-strada"
        },
        {
          "yaw": -1.8203324787149207,
          "pitch": 0.14988337939151464,
          "rotation": 0,
          "target": "4-05-hol-demisol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-07-arhiva",
      "name": "07 arhiva",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.188005842695409,
          "pitch": 0.06668966223712758,
          "rotation": 0,
          "target": "4-05-hol-demisol"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-birou-1-parter",
      "name": "birou 1 parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.46215084245989324,
          "pitch": 0.0706429719993622,
          "rotation": 0,
          "target": "18-hol-casa_sc-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-birou-mare-e-1",
      "name": "birou mare e 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.719327867204063,
          "pitch": 0.1189675278451201,
          "rotation": 0,
          "target": "21-receptie-etaj-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-birou-mare-e2",
      "name": "birou mare e2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.024564062030178,
          "pitch": 0.28415400173498995,
          "rotation": 0,
          "target": "17-casa-scara-e2"
        },
        {
          "yaw": -0.37540410195857987,
          "pitch": 0.11976494864184772,
          "rotation": 0,
          "target": "12-birou-mic-e2"
        },
        {
          "yaw": 2.5757631863034067,
          "pitch": 0.2568840316252121,
          "rotation": 0,
          "target": "19-meeting-etaj-2"
        },
        {
          "yaw": -2.405949552806824,
          "pitch": 0.28735945908290006,
          "rotation": 0,
          "target": "11-birou-mic-2-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-birou-mare-parter",
      "name": "birou mare parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1814035201363833,
          "pitch": 0.14708948874708483,
          "rotation": 0,
          "target": "22-receptie-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-birou-mic-2-e2",
      "name": "birou mic 2 e2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4350567009073849,
          "pitch": 0.14411216770146318,
          "rotation": 0,
          "target": "9-birou-mare-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-birou-mic-e2",
      "name": "birou mic e2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5518863179592426,
          "pitch": 0.23353366280579024,
          "rotation": 0,
          "target": "9-birou-mare-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-birou-mic-parter",
      "name": "birou mic parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5578673732888504,
          "pitch": 0.05082168613354554,
          "rotation": 0,
          "target": "22-receptie-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-casa-de-scara-etaj-1",
      "name": "casa de scara etaj 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8877582484307531,
          "pitch": 0.44795330396665634,
          "rotation": 0,
          "target": "15-casa-de-scara-parter"
        },
        {
          "yaw": 3.0284918588330187,
          "pitch": 0.2018828285650489,
          "rotation": 0,
          "target": "21-receptie-etaj-1"
        },
        {
          "yaw": -0.04957092311097533,
          "pitch": -0.27788847487103396,
          "rotation": 0,
          "target": "17-casa-scara-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-casa-de-scara-parter",
      "name": "casa de scara parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.030680163278173467,
          "pitch": 0.12482758537680638,
          "rotation": 0,
          "target": "18-hol-casa_sc-parter"
        },
        {
          "yaw": -0.33634364967343977,
          "pitch": 0.6070475423767832,
          "rotation": 4.71238898038469,
          "target": "16-casa-scara-demisol"
        },
        {
          "yaw": -1.3333442515182021,
          "pitch": -0.3226157966823209,
          "rotation": 0,
          "target": "14-casa-de-scara-etaj-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-casa-scara-demisol",
      "name": "casa scara demisol",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1048349253475962,
          "pitch": -0.18360208076428464,
          "rotation": 0,
          "target": "15-casa-de-scara-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-casa-scara-e2",
      "name": "casa scara e2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9216948932133917,
          "pitch": 0.6938612738783796,
          "rotation": 0,
          "target": "14-casa-de-scara-etaj-1"
        },
        {
          "yaw": -0.7373010237376914,
          "pitch": 0.06076380249828084,
          "rotation": 4.71238898038469,
          "target": "9-birou-mare-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-hol-casa_sc-parter",
      "name": "hol casa_sc parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.28344494250182173,
          "pitch": 0.33468328723789575,
          "rotation": 4.71238898038469,
          "target": "16-casa-scara-demisol"
        },
        {
          "yaw": 0.4380110932396768,
          "pitch": 0.058184858887326385,
          "rotation": 0,
          "target": "7-birou-1-parter"
        },
        {
          "yaw": 1.9776029389235683,
          "pitch": 0.18485340187323374,
          "rotation": 0,
          "target": "22-receptie-parter"
        },
        {
          "yaw": -1.0401274950996715,
          "pitch": -0.37004189817554334,
          "rotation": 0,
          "target": "14-casa-de-scara-etaj-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-meeting-etaj-2",
      "name": "meeting etaj 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5421561316953021,
          "pitch": 0.21402652209884465,
          "rotation": 0,
          "target": "9-birou-mare-e2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-meeting-parter",
      "name": "meeting parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.24416596570645765,
          "pitch": 0.1381794386173958,
          "rotation": 0,
          "target": "22-receptie-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-receptie-etaj-1",
      "name": "receptie etaj 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7844620256214547,
          "pitch": 0.16709581620303204,
          "rotation": 0,
          "target": "8-birou-mare-e-1"
        },
        {
          "yaw": -1.0498698749379152,
          "pitch": 0.12380334367935397,
          "rotation": 0,
          "target": "14-casa-de-scara-etaj-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-receptie-parter",
      "name": "receptie parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3040376708054477,
          "pitch": 0.09225911358554484,
          "rotation": 0,
          "target": "10-birou-mare-parter"
        },
        {
          "yaw": -0.4201403742719254,
          "pitch": 0.1317963190704443,
          "rotation": 0,
          "target": "13-birou-mic-parter"
        },
        {
          "yaw": -3.0431314696646243,
          "pitch": 0.05153634932710993,
          "rotation": 4.71238898038469,
          "target": "20-meeting-parter"
        },
        {
          "yaw": -1.8842467076327623,
          "pitch": 0.30704729894580574,
          "rotation": 0,
          "target": "18-hol-casa_sc-parter"
        },
        {
          "yaw": -1.2231863357329633,
          "pitch": 0.11896669670826654,
          "rotation": 0,
          "target": "23-terasa-verde-parter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-terasa-verde-parter",
      "name": "terasa verde parter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.20095350684142232,
          "pitch": 0.21610629157612848,
          "rotation": 0,
          "target": "22-receptie-parter"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
