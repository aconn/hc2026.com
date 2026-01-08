# Holy Cross Class of 2026 - Graduation Website

A single-page website for parents of 8th graders at Holy Cross, providing centralized information for graduation planning.

## Features

- 🎓 Countdown timer to graduation
- 📅 Embedded Google Calendar for events
- 📱 Responsive design for all devices
- 🔗 Quick links to important resources
- ❓ FAQ section
- 📢 Announcements banner

## Setup

### 1. Deploy to GitHub Pages

1. Push this repository to GitHub
2. Go to **Settings > Pages**
3. Set Source to **Deploy from a branch**
4. Select **main** branch and **/ (root)**
5. Click **Save**

### 2. Configure Custom Domain

Add these DNS records at your domain registrar:

| Type | Name | Value |
|------|------|-------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |
| CNAME | www | yourusername.github.io |

### 3. Set Up Google Calendar

1. Create a new Google Calendar at [calendar.google.com](https://calendar.google.com)
2. Go to **Settings > [Your Calendar] > Integrate calendar**
3. Copy the **Embed code**
4. Replace the placeholder in `index.html` with your embed code

### 4. Customize Content

Edit `index.html` to update:
- Announcement banner text
- FAQ questions and answers
- Contact information
- Quick links

## Updating the Graduation Date

Edit `js/main.js` and change the `GRADUATION_DATE` value:

```javascript
const GRADUATION_DATE = new Date('2026-05-20T18:00:00');
```

## License

This project is for Holy Cross Class of 2026 use only.
