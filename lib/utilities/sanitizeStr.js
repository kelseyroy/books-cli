export const sanitizeStr = str => {

    let noSpecialCharacters = str.replace(/[&]/g,"and").replace(/[\t\n]/g,"").replace(/[.,\/#?!$%\^\*;:{}=\-_`~()"'+]/g,"");
    let whitespaceFilter = noSpecialCharacters.trim().toLowerCase().split(' ').filter(n => n).join(' ');

    return whitespaceFilter;
}