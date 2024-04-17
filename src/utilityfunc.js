// Function to calculate the mean value for each class of data based on a specific property
const calculateMean = (data, property) => {
    // Object to store the calculated mean values for each class
    const means = {};

    // Loop through each data object
    data.forEach(obj => {
        const classData = obj.Alcohol;
        const value = parseFloat(obj[property]);
        if (!means[classData]) {
            means[classData] = [];
        }
        means[classData].push(value);
    });

    // Calculate the mean for each class
    Object.keys(means).forEach(classData => {
        const sum = means[classData].reduce((acc, obj) => acc + obj, 0);
        means[classData] = sum / means[classData].length;
    });

    return means;
};


// Function to calculate the median value for each class of data based on a specific property
const calculateMedian = (data, property) => {
    const medians = {};

    data.forEach(obj => {
        const classData = obj.Alcohol;
        const value = parseFloat(obj[property]);

        if (!medians[classData]) {
            medians[classData] = [];
        }

        medians[classData].push(value);
    });

    Object.keys(medians).forEach(classData => {
        medians[classData].sort((a, b) => a - b);
        const mid = Math.floor(medians[classData].length / 2);

        if (medians[classData].length % 2 === 0) {
            medians[classData] = (medians[classData][mid - 1] + medians[classData][mid]) / 2;
        } else {
            medians[classData] = medians[classData][mid];
        }
    });

    return medians;
};


// Function to calculate the mode value for each class of data based on a specific property
const calculateMode = (data, property) => {
    const modes = {};

    data.forEach(obj => {
        const classData = obj.Alcohol;
        const value = parseFloat(obj[property]);

        if (!modes[classData]) {
            modes[classData] = {};
        }

        // Increment the count for the property value in the class object
        modes[classData][value] = modes[classData][value] ? modes[classData][value] + 1 : 1;
    });

    Object.keys(modes).forEach(classData => {
        let maxCnt = 0;
        let ans;

        Object.keys(modes[classData]).forEach(obj => {
            if (modes[classData][obj] > maxCnt) {
                maxCnt = modes[classData][obj];
                ans = parseFloat(obj);
            }
        });

        modes[classData] = ans;
    });

    return modes;
};

export {
    calculateMean,
    calculateMedian,
    calculateMode
};
