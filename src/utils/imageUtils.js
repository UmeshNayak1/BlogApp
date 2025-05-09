// Color pallette for placeholder backgrounds
const colors = ['3498db', '2ecc71', 'e74c3c', 'f39c12', '9b59b6'];

// Use picsum.photos which is more reliable than via.placeholder.com
export const getPlaceholderImage = () => {
  // Get a random id between 1 and 1000 for picsum photos
  const randomId = Math.floor(Math.random() * 1000) + 1;
  return `https://picsum.photos/seed/${randomId}/800/400`;
};

// Fallback to local images if needed
export const getLocalPlaceholder = () => {
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  // Create an SVG data URL with the random color
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400' viewBox='0 0 800 400'%3E%3Crect width='800' height='400' fill='%23${randomColor}'/%3E%3Ctext x='50%25' y='50%25' font-size='32' text-anchor='middle' fill='white' font-family='Arial, sans-serif' dominant-baseline='middle'%3EBlog Post%3C/text%3E%3C/svg%3E`;
};

// Ensure an image exists, use placeholder if not
export const ensureImage = (image) => {
  if (image) return image;
  
  try {
    return getPlaceholderImage();
  } catch (e) {
    // Fallback to local SVG if network request fails
    return getLocalPlaceholder();
  }
};

// Additional utility for generating consistent author avatars
export const getAvatarUrl = (name) => {
  // Handle null/undefined names
  const safeName = name || 'Unknown Author';
  return `https://ui-avatars.com/api/?name=${encodeURIComponent(safeName)}&background=0D8ABC&color=fff&size=150`;
};
