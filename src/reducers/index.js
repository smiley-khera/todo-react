import { combineReducers } from 'redux'
import { menuItems} from './menu'
import {visibilityFilter} from './visibilityFilter'
import { tags } from './tags'
import { todoItems } from './todoItems'

export default combineReducers({
    visibilityFilter,
    menuItems,
    tags,
    todoItems
})