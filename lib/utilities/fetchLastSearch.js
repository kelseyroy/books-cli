export const fetchLastSearch = async function () {
    try {
        const response = await fetch('../data/lastSearch.json')
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error)
    }
}