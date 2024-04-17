import React from 'react';
import wineData from './data';
import { calculateMean, calculateMedian, calculateMode } from './utilityfunc';

const GammaComp = () => {

  const calculateGamma = (data) => {
    return data.map(entry => {
      const { Ash, Hue, Magnesium } = entry;
      const gamma = parseFloat((Ash * Hue) / Magnesium);
      return { ...entry, Gamma: gamma };
    });
  };



  const dataWithGamma = calculateGamma(wineData);
  const meanGamma = calculateMean(dataWithGamma, 'Gamma');
  const medianGamma = calculateMedian(dataWithGamma, 'Gamma');
  const modeGamma = calculateMode(dataWithGamma, 'Gamma');

  return (
    <div>
      <h2>Gamma Statistics</h2>
      <table>
        <thead>
          <tr>
            <th>Measure</th>
            {Object.keys(meanGamma).map(alcoholClass => (
              <th key={alcoholClass}>Class {alcoholClass}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gamma Mean</td>
            {Object.keys(meanGamma).map(alcoholClass => (
              <td key={alcoholClass}>{meanGamma[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Median</td>
            {Object.keys(medianGamma).map(alcoholClass => (
              <td key={alcoholClass}>{medianGamma[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
          <tr>
            <td>Gamma Mode</td>
            {Object.keys(modeGamma).map(alcoholClass => (
              <td key={alcoholClass}>{modeGamma[alcoholClass].toFixed(3)}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default GammaComp;
