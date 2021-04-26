import { schema, normalize } from 'normalizr'
import defaultState from './api-data.json'

const user = new schema.Entity('users')
const card = new schema.Entity('cards', { assignedTo: user })
const list = new schema.Entity('lists', {
  cards: [card],
})

const normalizedLists = normalize(defaultState.lists, [list])
const normalizedUsers = normalize(defaultState.users, [user])

const lists = {
  byIds: normalizedLists.entities.lists,
  allIds: normalizedLists.result,
}

const users = {
  byIds: normalizedUsers.entities.users,
  allIds: normalizedUsers.result,
}

const cards = {
  byIds: normalizedLists.entities.cards,
  allIds: Object.keys(normalizedLists.entities.cards),
}

export { users, lists, cards }
