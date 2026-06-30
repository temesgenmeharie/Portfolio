# 📧 EmailJS Setup Guide — Contact Form

Follow these steps to activate the contact form so messages go to your Gmail inbox.

---

## Step 1 — Create a Free EmailJS Account

Go to → **https://www.emailjs.com** and sign up (free tier = 200 emails/month).

---

## Step 2 — Add Your Email Service

1. In the EmailJS dashboard, click **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** and sign in with `temesgenmeharie71@gmail.com`
4. Click **Create Service**
5. Copy the **Service ID** (looks like `service_abc1234`)

---

## Step 3 — Create an Email Template

1. Click **Email Templates** → **Create New Template**
2. Set the template content like this:

**Subject:**
```
New Contact Message: {{subject}}
```

**Body:**
```
You have a new message from your portfolio contact form.

Name:    {{from_name}}
Email:   {{from_email}}
Subject: {{subject}}

Message:
{{message}}
```

3. In **To Email**, set: `temesgenmeharie71@gmail.com`
4. Click **Save**
5. Copy the **Template ID** (looks like `template_xyz7890`)

---

## Step 4 — Get Your Public Key

1. Click your profile icon → **Account**
2. Under **API Keys**, copy your **Public Key** (looks like `abcDEFghiJKL123mno`)

---

## Step 5 — Add Keys to the Code

Open `src/components/Contact.jsx` and replace the three placeholders at the top:

```js
const EMAILJS_SERVICE_ID  = "service_abc1234";    // ← your Service ID
const EMAILJS_TEMPLATE_ID = "template_xyz7890";   // ← your Template ID
const EMAILJS_PUBLIC_KEY  = "abcDEFghiJKL123mno"; // ← your Public Key
```

---

## ✅ Done!

Save the file, and the contact form will now send real emails directly to your Gmail whenever someone submits it.
