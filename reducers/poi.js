export default function (poiList = [], action) {

  if (action.type == 'savePOI') {
    var poiListCopy = [...poiList]
    poiListCopy.push(action.poi)
    // console.log(poiListCopy)
    return poiListCopy

  } else if (action.type == 'deletePOI') {
    // console.log('action ==', action.poiTitle)
    var poiListCopy = [...poiList]
    poiListCopy = poiListCopy.filter((e) => action.poiTitle !== e.title)
    // console.log(poiListCopy)
    return poiListCopy

  } else {
    return poiList
  }
}