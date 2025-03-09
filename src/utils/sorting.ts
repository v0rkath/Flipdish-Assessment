import { Menu, MenuItem, MenuItemOptionSet, MenuItemOptionSetItem, MenuSection } from "@/types";


function sortMenuSections(sections: MenuSection[]) {
    sections.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
    sections.forEach(section => sortMenuItems(section.MenuItems));
}

function sortMenuItems(items: MenuItem[]) {
    items.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
    items.forEach(item => sortMenuItemOptionSets(item.MenuItemOptionSets));
}

function sortMenuItemOptionSets(optionSets: MenuItemOptionSet[]) {
    optionSets.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
    optionSets.forEach(set => sortMenuItemOptionSetItems(set.MenuItemOptionSetItems));
}

function sortMenuItemOptionSetItems(optionSetItems: MenuItemOptionSetItem[]) {
    optionSetItems.sort((a, b) => a.DisplayOrder - b.DisplayOrder);
}

export function sortByOrder(menu: Menu) {
    sortMenuSections(menu.MenuSections);
    console.log(menu);
}