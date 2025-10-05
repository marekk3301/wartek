# Baby Sleep Predictor

This project is designed to predict baby sleep time using statistical data visualized through charts. The application utilizes the Plot framework from Observable to create interactive and informative visualizations based on data sourced from a CSV file or generated mock data.

## Project Structure

```
baby-sleep-predictor
├── src
│   ├── index.js          # Entry point of the application
│   ├── chart.js          # Contains the function to create and display the chart
│   └── data
│       └── multisensory.csv  # Data file used for predictions
├── public
│   └── index.html        # Main HTML file for the application
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd baby-sleep-predictor
   ```

2. Install the required dependencies:
   ```
   npm install
   ```

## Usage

1. To run the application, use the following command:
   ```
   npm start
   ```

2. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Functionality

- The application loads data from `src/data/multisensory.csv` to predict baby sleep time.
- If the CSV file is not available, the application generates mock data for demonstration purposes.
- The chart is rendered using the Plot framework, providing a visual representation of the data.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.