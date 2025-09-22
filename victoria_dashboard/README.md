# Victoria Dashboard

A modern, RTL-friendly dashboard web application for managing products, orders, sections, and user profiles. Built with HTML, CSS (custom styles, Bootstrap), and vanilla JavaScript. Designed for Arabic-speaking users and optimized for usability and responsiveness.

## Features
- Responsive dashboard layout
- Sidebar navigation for sections, products, orders, and settings
- Order summary and detailed tables
- User profile and notifications
- RTL (right-to-left) language support
- Custom styles with CSS variables for easy theming

## Folder Structure
```
├── add.html
├── addproduct.html
├── css/
│   ├── animate.min.css
│   ├── bootstrap.min.css
│   ├── datatables.min.css
│   ├── font-awesome.css
│   ├── style.css         # Main custom styles
├── fonts/                # Custom fonts and icon fonts
├── img/                  # Images and icons
├── js/
│   ├── bootstrap.min.js
│   ├── datatables.min.js
│   ├── jquery-3.2.1.min.js
│   ├── script.js         # Main custom scripts
├── index.html            # Dashboard home
├── login.html            # Login page
├── products.html         # Products management
├── sections.html         # Sections management
├── requests_1.html       # Incoming orders
├── requests_2.html       # Orders in progress
├── requests_3.html       # Completed orders
├── success.html          # Order success/summary
├── ...                   # Other HTML pages
```

## Getting Started
This is a static web project. To run it locally:

1. **Clone the repository:**
   ```sh
   git clone <your-repo-url>
   cd victoria_dashboard_new
   ```
2. **Open `index.html` in your browser.**
   - You can use [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code for auto-reload.
   - Or simply double-click any HTML file to view it.

## Customization
- **Branding:** Replace images in the `img/` folder and update logo references in HTML.
- **Colors & Fonts:** Edit `css/style.css` and adjust CSS variables at the top for easy theming.
- **RTL Support:** The dashboard is designed for right-to-left languages by default.

## Credits
- [Bootstrap](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/)
- [jQuery](https://jquery.com/)
- [DataTables](https://datatables.net/)
- Custom design and implementation by the Victoria Dashboard team.

## License
This project is for demonstration and internal use. For commercial or public use, please check with the project owner. 