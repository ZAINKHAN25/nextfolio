# Zain Khan Portfolio  

Hey guys this is a nextjs project. Inspired By <a href="https://github.com/huzaifa-khan-official">@Huzaifa Khan</a> Portfolio.

## 💻 UI

![zain-khan vercel app_](https://github.com/user-attachments/assets/7a911d16-ee43-46d8-953f-de40050db7d2)


## 📌 Setup Instructions

### 1️⃣ Update `constant.ts`
Modify the `constant.ts` file to update your personal details, social links, experiences, projects, services, and contact information.

#### **Path:**
```
./constants.ts
```
#### **Fields to Update:**
- **Hero Section** (name, title, subtitle, resume, social links)
- **About Section** (description, expertise)
- **Projects** (titles, descriptions, technologies, links, images)
- **Services** (offered services, descriptions, icons)
- **Contact Info** (email, phone, address)
- **Year** (Current year is dynamically set)

### 2️⃣ Update `layout.tsx`
Modify the `layout.tsx` file to update metadata and site information.

#### **Path:**
```
src/app/layout.tsx
```
#### **Fields to Update:**
- `APP_NAME` (Your name)
- `APP_DEFAULT_TITLE` (Page title)
- `APP_TITLE_TEMPLATE` (Page title format)
- `APP_DESCRIPTION` (Portfolio description)
- `APP_KEYWORDS` (SEO keywords)
- `manifest` (Ensure the path is `/manifest.json`)

### 3️⃣ Update `manifest.json`
Modify the `manifest.json` file in the `public` folder to reflect your portfolio details.

#### **Path:**
```
public/manifest.json
```
#### **Fields to Update:**
- `name` (Your name)
- `short_name` (Short version of your name)
- `description` (Short description of your portfolio)
- `start_url` (Keep `/` for the root directory)
- `theme_color` (Primary color of the PWA)
- `background_color` (Background color of the PWA)
- `icons` (Ensure icons are properly defined)

### 4️⃣ Configure Email Functionality
For contact form email functionality, set up a Google App Password in the `.env` file in the root directory.

#### **Path:**
```
.env
```
#### **Add the Following:**
```
GMAIL_APP_PASSWORD=your-google-app-password
```
🚨 **Note:** Ensure that "Less Secure Apps" is disabled, and use App Passwords if required by Google.

### 5️⃣ (Optional) Configure Google Analytics
To integrate Google Analytics and track page views, simply add your **Google Analytics Measurement ID** to the `.env` file.

#### **Path:**
```
.env
```
#### **Add the Following:**
```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```
🔎 **Note:** Replace `G-XXXXXXXXXX` with your actual Google Analytics Measurement ID.

## 🚀 Deployment
To deploy your portfolio:
1. Run the local development server:
   ```sh
   npm i
   npm run dev
   ```
2. Build for production:
   ```sh
   npm run build
   ```
3. Deploy using Vercel, Netlify, or any preferred hosting provider.

## 📌 Conclusion
This Next.js PWA Portfolio template allows easy customization and efficient deployment. Follow the above steps to personalize it according to your needs.

Happy Coding! 🚀
