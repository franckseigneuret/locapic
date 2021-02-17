export default function (poiList = [], action) {

  if (action.type == 'savePOI') {
    let poiListCopy = [...poiList]
    poiListCopy.push(action.poi)

    return poiListCopy

  } else if (action.type == 'deletePOI') {

    return poiList.filter((e) => action.poiTitle !== e.title)

  } else {
    return poiList
  }
}