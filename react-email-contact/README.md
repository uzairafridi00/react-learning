# React Email.js App

Send email from contact form without server code using emailjs.

#### Emailjs.com

1. Go to Emailjs.com website and create an account.
2. Click `Add New Service` button and then click on Gmail.
3. Now connect your Gmail account.
4. Now create Email Template.

```
Subject -> New message from {{from_name}}

From: {{user_name}}
Email: {{user_email}}

{{message}}

```

5. In To Email section write your email which you connected.
6. Now Save your template.
7. Go to Docs `https://www.emailjs.com/docs/examples/reactjs/`.
8. Now install emailjs library `npm install @emailjs/browser`.
9. Must keep the form names with email template same.

```js
<form ref={form} onSubmit={sendEmail}>
  <label>Name</label>
  <input type="text" name="user_name" />
  <label>Email</label>
  <input type="email" name="user_email" />
  <label>Message</label>
  <textarea name="message" />
  <input type="submit" value="Send" />
</form>
```
