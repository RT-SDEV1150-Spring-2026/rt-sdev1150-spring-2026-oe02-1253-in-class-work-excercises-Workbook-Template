// Import the user-card component to register the custom element
import './user-card';

// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
<user-card avatar="assets/link-avatar.png">
      <span slot="name">Mipha</span>
      <span slot="description">The Champion</span>
</user-card>
`;
document.querySelector('main').insertAdjacentHTML('beforeend', dynamicUserCard);
;
// Create another user card using JavaScript DOM API only and append it to the main element
