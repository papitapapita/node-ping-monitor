# Node.js Ping Monitoring System

A simple **Node.js monitoring tool** that **pings multiple endpoints** at a set interval and sends **email notifications** if an endpoint goes down.

## 🚀 Features

- ✅ **Ping multiple endpoints** to check availability.
- ✅ **Email notifications** when an endpoint fails.
- ✅ **Retry mechanism** to avoid false alerts.
- ✅ **Logging with Winston** for debugging and analysis.
- ✅ **Fully typed with TypeScript** for better maintainability.

---

## 📦 Installation

1.  **Clone the repository**

    ```sh
    git clone https://github.com/your-username/node-ping-monitor.git
    cd node-ping-monitor
    ```

2.  **Install dependencies**

    ```sh
     npm install

    ```

3.  **Set up environment variables**

    Create a .env file and add your email credentials:

    ```ini
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ALERT_EMAIL=recipient-email@gmail.com
    ```

4.  **Compile TypeScript**

    ```sh
    npm run build
    ```

5.  **Run the monitor**

    ```sh
    npm start
    ```

## 🛠 Configuration

Edit src/config.ts to add or modify endpoints and settings:

```js
export const config = {
  endpoints: [
    { url: '8.8.8.8', name: 'Google DNS' },
    { url: '1.1.1.1', name: 'Cloudflare DNS' }
  ],
  interval: 30000, // Check every 30 seconds
  maxRetries: 3 // Retries before sending alert
};
```

## 📂 Project Structure

```bash
node-ping-monitor/
│── src/
│ ├── config.ts # Monitoring configuration
│ ├── logger.ts # Logging system (Winston)
│ ├── notifier.ts # Email notification system
│ ├── monitor.ts # Main monitoring logic
│── .env # Environment variables (ignored in Git)
│── .gitignore # Ignored files list
│── .eslintrc.json # ESLint configuration
│── .prettierrc # Prettier formatting rules
│── package.json # Project metadata & scripts
│── tsconfig.json # TypeScript configuration
│── README.md # Project documentation
```

## 📝 Logging

The system logs events in monitor.log and also displays them in the console.

Example logs:

```csharp
✅ Google DNS (8.8.8.8) is UP
⚠️ Cloudflare DNS (1.1.1.1) is DOWN
🚨 Alert sent: Cloudflare DNS is DOWN!
```

## 📬 Future Improvements

- 📡 Add Telegram or Twilio SMS notifications.
- 📊 Create a web dashboard to monitor endpoints in real-time.
- 📈 Store monitoring history in a database.
- ⌨️ Create a CLI command that receives a file of IP addresses as argument

## 👨‍💻 Contributing

Feel free to submit issues or pull requests to improve the project!

## 📜 License

This project is licensed under the MIT License.

### **Next Steps**

1. Replace `your-username` with your GitHub username in the **clone** section.
2. Add a **LICENSE file** (optional but recommended).
3. Customize the **Future Improvements** section if you plan to add more features.
