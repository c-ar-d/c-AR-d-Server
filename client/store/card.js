import axios from 'axios'

//ACTION TYPES

const GET_ALL_SENT_CARDS = 'GET_ALL_SENT_CARDS'
const SET_NEW_CARD_TEMPLATE = 'SET_NEW_CARD_TEMPLATE'
const SET_NEW_CARD_MESSAGE = 'SET_NEW_CARD_MESSAGE'
const SET_NEW_CARD_VIDEO = 'SET_NEW_CARD_VIDEO'
const CLEAR_NEW_CARD_DATA = 'CLEAR_NEW_CARD_DATA'

//INITIAL STATE

const initialState = {
  sentCards: [],
  newCardTemplate: 0,
  newCardMessage: '',
  newCardVideo: {}
}

//ACTION CREATORS

const getAllSentCards = cards => ({
  type: GET_ALL_SENT_CARDS,
  cards
})

export const setNewCardTemplate = id => ({
  type: SET_NEW_CARD_TEMPLATE,
  id
})

export const setNewCardMessase = message => ({
  type: SET_NEW_CARD_MESSAGE,
  message
})

export const setNewCardVideo = video => ({
  type: SET_NEW_CARD_VIDEO,
  video
})

export const clearNewCardData = () => ({
  type: SET_NEW_CARD_VIDEO
})

//THUNKS

export const getAllSentCardsThunk = () => async dispatch => {
  try {
    const {data} = await axios.get('/api/cards')
    dispatch(getAllSentCards(data))
  } catch (err) {
    console.error(err)
  }
}

export const createNewCardThunk = () => async dispatch => {
  try {
    const {data} = await axios.post('/api/cards/create')
    dispatch(clearNewCardData())
  } catch (err) {
    console.error(err)
  }
}

//REDUCER

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_RECEIVED_CARDS:
      return {...state, sentCards: action.cards}
    default:
      return state
  }
}
