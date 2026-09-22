# TechStore Dashboards

## Added pages
- `user-dashboard.html` — customer dashboard with account summary, recent orders, wishlist/cart counts, spending summary and quick actions.
- `admin.html` — front-end administrator dashboard with order status management, user list, product catalog and store statistics.

## Demo admin login
- Email: `admin@techstore.com`
- Password: `Admin@123`

Open the admin page at:
`admin.html`

## Important security note
This TechStore project is a static GitHub Pages/Vanilla JavaScript college project. The admin session uses `sessionStorage`, and store/user/order data use browser storage. The demo admin credentials are therefore not production-secure. A real store would require server-side authentication, authorization and a database.


## Login flow
The main `login.html` page now provides two choices:
- **User Login**: existing customer authentication, then `user-dashboard.html`.
- **Admin Login**: opens `admin.html`, where the administrator signs in and sees store-wide demo data.

## Order visibility
Orders created through checkout are saved in `techstoreOrders` and include the logged-in user's `userId`, customer details, items, total and status. The User Dashboard shows only that user's orders; the Admin Dashboard shows all orders available in the same browser storage.

Because GitHub Pages is static, LocalStorage is browser-specific. An order placed on a different phone/browser will not automatically appear in an administrator's browser. A real multi-user admin system would require a backend/database.
