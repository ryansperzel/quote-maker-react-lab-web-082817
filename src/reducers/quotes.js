export default (state = [], action) => {

  switch(action.type) {

    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      let newState = state.filter(quote => {
        return quote.id !== action.quoteId
      })
      return [...newState]

    case "UPVOTE_QUOTE":
      let allQuotes = state.filter(quote => {
        return quote.id !== action.quoteId
      })
      let chosenQuote = state.filter(quote => {
        return quote.id === action.quoteId
      })
      chosenQuote[0].votes ++
      return [...allQuotes, chosenQuote[0]]

    case "DOWNVOTE_QUOTE":
      let quotes = state.filter(quote => {
        return quote.id !== action.quoteId
      })
      let foundQuote = state.filter(quote => {
        return quote.id === action.quoteId
      })
      if (foundQuote[0].votes > 0) {
        foundQuote[0].votes --
      }
      return [...quotes, foundQuote[0]]

    default:
      return state;
  }
}
