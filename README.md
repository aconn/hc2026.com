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

### 3. Google Calendar (Already Configured)

The calendar is already embedded. **However, you must ensure it is public:**

1. Go to [calendar.google.com](https://calendar.google.com) on your computer.
2. In the top right, click **Settings (gear icon)** > **Settings**.
3. On the left sidebar, select your calendar under "Settings for my calendars".
4. Scroll to **Access permissions for events**.
5. Check the box **"Make available to public"**.
   - *If you see a warning, click OK. This ensures parents can see it without logging in.*

To update the calendar embed if needed:
1. In the same Settings menu, scroll to **Integrate calendar**.
2. Copy the **Embed code**.
3. Replace the iframe in `index.html` (around line 110).

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
