export default function (pseudoList = '', action) {

  if (action.type == 'savePseudo') {
    
    return action.pseudo

  } else {
    return pseudoList
  }
}