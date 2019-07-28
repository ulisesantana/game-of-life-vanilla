export default function Led(on) {
  const size = window.innerHeight > window.innerWidth ? "1vw" : "1vh";
  return (
    `
  <div 
    class="Led${on ? " active" : ""}" 
    style="` +
    `height: ${size}; ` +
    `width: ${size};` +
    `"></div>
  `
  );
}
