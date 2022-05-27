// Loads the data from the API

export const loadData = async () => {
    const response = await fetch('https://test-api.codingbootcamp.cz/api/3133bb4f/events');
    const parsedResponse = await response.json();
    return parsedResponse
}