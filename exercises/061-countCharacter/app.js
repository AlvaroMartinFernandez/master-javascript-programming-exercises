function countCharacter(str, char) {
    let charArray = str.split('');
    let newArray = charArray.filter((character) => character ===char);

    return newArray.length;
    
}