/* chrysalis-keymap -- Chrysalis keymap library
 * Copyright (C) 2018  Keyboardio, Inc.
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU General Public License for more
 * details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program. If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * Is an Array of objects of values that have to be modified.
 */

import { withModifiers } from "../../db/utils"

const deutsch = [
    {
        code: 53,
        labels: {
            primary: "^"
        }
    },
    {
        code: 45,
        labels: {
            primary: "ß"
        },
        newGroupName: "Letters"
    },
    {
        code: 46,
        labels: {
            primary: "´"
        }
    },
    {
        code: 28,
        labels: {
            primary: "Z"
        }
    },
    {
        code: 47,
        labels: {
            primary: "Ü",
        },
        newGroupName: "Letters"
    },
    {
        code: 48,
        labels: {
            primary: "+"
        }
    },
    {
        code: 49,
        labels: {
            primary: "#"
        }
    },
    {
        code: 51,
        labels: {
            primary: "Ö"
        },
        newGroupName: "Letters"
    },
    {
        code: 52,
        labels: {
            primary: "Ä"
        },
        newGroupName: "Letters"
    },
    {
        code: 29,
        labels: {
            primary: "Y"
        }
    },
    {
        code: 56,
        labels: {
            primary: "-"
        }
    },
    {
        code: 799,
        labels: {
            primary: "²"
        },
        newGroupName: "Digits"
    },
    {
        code: 800,
        labels: {
            primary: "³"
        },
        newGroupName: "Digits"
    },
    {
        code: 801,
        labels: {
            primary: "{"
        },
        newGroupName: "Digits"
    },
    {
        code: 802,
        labels: {
            primary: "["
        },
        newGroupName: "Digits"
    },
    {
        code: 803,
        labels: {
            primary: "]"
        },
        newGroupName: "Digits"
    },
    {
        code: 804,
        labels: {
            primary: "}"
        },
        newGroupName: "Digits"
    },
    {
        code: 813,
        labels: {
            primary: "\\"
        }
    },
    {
        code: 788,
        labels: {
            primary: "@"
        },
        newGroupName: "Digits"
    },
    {
        code: 776,
        labels: {
            primary: "€"
        },
        newGroupName: "Digits"
    },
    {
        code: 816,
        labels: {
            primary: "~"
        }
    },
    {
        code: 817,
        labels: {
            primary: "|"
        }
    },
    {
        code: 784,
        labels: {
            primary: "µ"
        }
    },
    {
        code: 2076,
        labels: {
            primary: "Z",
            top: "S+"
        }
    },
    {
        code: 2095,
        labels: {
            primary: "Ü",
            top: "S+"
        },
        newGroupName: "Letters"
    },
    {
        code: 2099,
        labels: {
            primary: "Ö",
            top: "S+"
        },
        newGroupName: "Letters"
    },
    {
        code: 2100,
        labels: {
            primary: "Ä",
            top: "S+"
        },
        newGroupName: "Letters"
    },
    {
        code: 2077,
        labels: {
            primary: "Y",
            top: "S+"
        }
    },
    {
        code: 2101,
        labels: {
            primary: "°"
        }
    },
    {
        code: 2079,
        labels: {
            primary: "\""
        }
    },
    {
        code: 2080,
        labels: {
            primary: "§"
        }
    },
    {
        code: 2083,
        labels: {
            primary: "&"
        }
    },
    {
        code: 2084,
        labels: {
            primary: "/"
        }
    },
    {
        code: 2085,
        labels: {
            primary: "("
        }
    },
    {
        code: 2086,
        labels: {
            primary: ")"
        }
    },
    {
        code: 2087,
        labels: {
            primary: "="
        }
    },
    {
        code: 2093,
        labels: {
            primary: "?"
        }
    },
    {
        code: 2094,
        labels: {
            primary: "`"
        }
    },
    {
        code: 2096,
        labels: {
            primary: "*"
        }
    },
    {
        code: 2097,
        labels: {
            primary: "'"
        }
    },
    {
        code: 2102,
        labels: {
            primary: ";"
        }
    },
    {
        code: 2103,
        labels: {
            primary: ":"
        }
    },
    {
        code: 2104,
        labels: {
            primary: "_"
        }
    }
];
const table = {keys: deutsch};

const deutschCtrlTable = withModifiers(table, "Control +", "C+", 256)
const deutschLAltTable = withModifiers(table, "Alt +", "A+", 512)

const deutschModifiedTables = [
    deutschCtrlTable,
    deutschLAltTable
]

export { deutsch as default, deutschModifiedTables }
// export default deutsch;
