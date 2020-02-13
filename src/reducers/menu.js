import {TOGGLE_NESTED_MENU_ITEMS} from "../constants";

const INITIAL_STATE = [
    {
        name: 'Inbox',
        multiple: false,
        open: false
    },
    {
        name: 'Tags',
        multiple: true,
        open: false
    },
    {
        name: 'Archived Items',
        multiple: false,
        open: false
    }
];


export const menuItems = (state = INITIAL_STATE , action) => {
    switch (action.type) {
        case TOGGLE_NESTED_MENU_ITEMS:
            return state.map(item =>
                item.name === action.payload ? {...item, open: !item.open} : item
            );
        default:
            return state
    }
};
