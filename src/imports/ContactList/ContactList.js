/*
 * Copyright (C) 2012-2013 Canonical, Ltd.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; version 3.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

var sectionData = [];
var _sections = [];

function initSectionData(list) {
    if (!list || !list.model) {
        return;
    }

    sectionData = [];
    _sections = [];

    var current = "",
        prop = list.section.property,
        item;

    for (var i = 0, count = list.model.contacts.length; i < count; i++) {
        item = list.sectionValueForContact(list.model.contacts[i])
        if (item !== current) {
            current = item;
            _sections.push(current);
            sectionData.push({ index: i, header: current });
        }
    }
}

function getIndexFor(sectionName) {
    var val = sectionData[_sections.indexOf(sectionName)].index;
    return val === 0 || val > 0 ? val : -1;
}