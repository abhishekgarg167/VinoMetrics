import React from 'react';
import wineData from './data';
import { calculateMean, calculateMedian, calculateMode } from './utilityfunc';

const FlavanoidsComp = () => {

  const meanFlavanoids = calculateMean(wineData, 'Flavanoids');
  const medianFlavanoids = calculateMedian(wineData, 'Flavanoids');
  const modeFlavanoids = calculateMode(wineData, 'Flavanoids');

  return (
    <div>
      <h2>Flavanoids Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(meanFlavanoids).map(alcoholClass => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Flavanoids Mean</td>
            {Object.keys(meanFlavanoids).map(alcoholClass => (
              <td key={alcoholClass}>{meanFlavanoids[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Median</td>
            {Object.keys(medianFlavanoids).map(alcoholClass => (
              <td key={alcoholClass}>{medianFlavanoids[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Flavanoids Mode</td>
            {Object.keys(modeFlavanoids).map(alcoholClass => (
              <td key={alcoholClass}>{modeFlavanoids[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default FlavanoidsComp;
