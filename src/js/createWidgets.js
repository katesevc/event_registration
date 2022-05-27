// Makes widgets using the data

import { Event } from './events.js';
import { FeaturedEvent } from './featuredevent.js';

export const createWidgets = (data) => {
    data.forEach((item, index) => {
        if (index == 3) {
            new FeaturedEvent(item.id, item.name, item.description, item.image_url, item.date, '.container');
        } else {
            new Event(item.id, item.name, item.description, item.image_url, item.date);
        }
        
        // console.log(item);
    });
};