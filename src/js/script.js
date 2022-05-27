// Importing functions
import { loadData } from './loadData.js';
import { createWidgets } from './createWidgets.js';

// Importing values
import { APIkey } from './constants.js'


// Takes the data and makes the widgets
const loadAndCreateWidgets = async () => {
    const data = await loadData();
    createWidgets(data);
}

loadAndCreateWidgets();