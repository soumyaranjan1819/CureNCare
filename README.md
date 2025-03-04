src/
│── components/
│   ├── ui/ ✅ (General UI components)
│   │   ├── FeatureCard.tsx
│   ├── modals/ ✅ (Main folder for all modals)
│   │   ├── reusable/ ✅ (Only for reusable modals)
│   │   │   ├── AuthModal.tsx ✅ (Reusable modal)
│   │   ├── specific/ ✅ (For non-reusable modals)
│   │   │   ├── LoginModal.tsx ✅ (Uses AuthModal)
│   │   │   ├── CreateAccountModal.tsx ✅ (Uses AuthModal)
│   │   │   ├── ForgotPasswordModal.tsx ✅ (Standalone)
│   ├── Navbar.tsx
│   ├── UserManagement.tsx
│── constants/ ✅ (Static data like featureItems)
│── assets/ ✅ (Images, icons, etc.)
│── pages/ ✅ (Page-specific components)
│   ├── Home.tsx
│── App.tsx
│── index.tsx
