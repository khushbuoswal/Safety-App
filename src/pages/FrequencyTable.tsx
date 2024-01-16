// Import React for creating functional components
import React from "react";
// Import the CSS file for styling
import "./ProgressBar.css";

// Define the props interface for the ProgressBar component
interface ProgressBarProps {
  incidents: number;         // Number of incidents for the specific time range
  totalIncidents: number;    // Total number of incidents for all time ranges
  level: number;             // Level of the incidents (used to determine the background color)
}

// Define the ProgressBar functional component
const ProgressBar: React.FC<ProgressBarProps> = ({ incidents, totalIncidents, level }) => {
  // Set the maximum width for the progress bar
  const MAX_WIDTH = 200;
  // Calculate the percentage of incidents relative to the total incidents
  const percentage = (incidents / totalIncidents) * MAX_WIDTH;

  // Define background color based on the level of incidents
  let backgroundColor = "";
  if (level === 3) {
    backgroundColor = "#FFD3D3"; // Red background for level 3 incidents
  } else if (level === 2) {
    backgroundColor = "#FEFFBB"; // Yellow background for level 2 incidents
  } else if (level === 1) {
    backgroundColor = "#E0FFAF"; // Green background for level 1 incidents
  }

  // Return the JSX structure for the ProgressBar component
  return (
    <div style={{ marginBottom: "10px", marginLeft: "5px" }}>
      <div className="progress-container" style={{ width: MAX_WIDTH }}>
        <div className="progress-bar" style={{ width: percentage, background: backgroundColor }}>
          {/* Display the number of incidents as text inside the progress bar */}
          {incidents > 0 ? (
            <div className="progress-text">
              {incidents}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

// Export the ProgressBar component for use in other files
export default ProgressBar;
