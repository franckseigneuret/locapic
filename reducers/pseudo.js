export default function (pseudoList = [], action) {

  if (action.type == 'addPseudo') {
    var pseudoListCopy = [...pseudoList]
    pseudoListCopy.push(action.pseudo)
    return pseudoListCopy

  } else {
    return pseudoList
  }
}