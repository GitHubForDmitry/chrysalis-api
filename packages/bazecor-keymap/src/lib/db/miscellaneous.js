/* bazecor-keymap -- Bazecor keymap library
 * Copyright (C) 2018  Keyboardio, Inc.
 * Copyright (C) 2019  DygmaLab SE
 *
 * This program is free software: you can redistribute it and/or modify it under
 * the terms of the GNU General Public License as published by the Free Software
 * Foundation, version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const MiscellaneousTable = {
    groupName: "Miscellaneous",
    keys: [
        {
            code: 70,
            labels: {
                primary: "PRINT SCREEN",
                verbose: "Print Screen"
            }
        },
        {
            code: 71,
            labels: {
                primary: "SCROLL LOCK",
                verbose: "Scroll Lock"
            }
        },
        {
            code: 72,
            labels: {
                primary: "PAUSE"
            }
        },
        {
            code: 53291,
            labels: {
                primary: "CYCLE"
            }
        },
        {
            code: 53292,
            labels: {
                primary: "SYSTEM"
            }
        }
    ]
}

export default MiscellaneousTable
