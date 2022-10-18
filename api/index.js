export default function handler(request, response) {
  response.setHeader("Content-Type", "image/svg+xml");

  const svgString = `
  <svg width="100%" height="250" viewBox="0 0 500 250" xmlns="http://www.w3.org/2000/svg">
    <style>
      @keyframes fadeIn {
          from, to { opacity: 0 }
          50% { opacity: 1; }
      }
      .indicator {
        animation: fadeIn 1s;
        animation-iteration-count: infinite;
      }
      .text {
        font-family: 'Helvetica', sans-serif;
      }
    </style>

    <rect x="0" y="0" width="100%" height="100%" fill="white"/>
    
    <text x="47%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="6rem" class="text">
      ODDS
      <text>test</text>
    </text>
    <line x1="77%" x2="77%" y1="15%" y2="70%" stroke="black" stroke-width="10" class="indicator"/>
  </svg>
  `;

  return response.send(svgString);
}
