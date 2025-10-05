// src/index.js
import { createChart } from './chart.js';
import * as d3 from 'd3';

async function loadData() {
    try {
        const data = await d3.csv('data/multisensory.csv');
        return data;
    } catch (error) {
        console.error('Error loading the CSV file:', error);
        return generateMockData();
    }
}

function generateMockData() {
    return [
        { age: '0-3 months', sleep: 14 },
        { age: '4-6 months', sleep: 13 },
        { age: '7-12 months', sleep: 12 },
        { age: '1-2 years', sleep: 11 },
        { age: '2-3 years', sleep: 10 }
    ];
}

async function init() {
    const data = await loadData();
    createChart(data);
}

init();