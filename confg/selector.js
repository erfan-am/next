const { createSelector } = require("reselect");
const places=state=>state.reduce
export const products=createSelector(
    [places],
    places=>places.root.places
)
export const placeId=createSelector(
    [places],
    place=>place.root.place
)