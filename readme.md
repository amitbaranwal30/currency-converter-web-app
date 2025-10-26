# 🌍 Currency Converter Web App

A sleek and responsive currency converter web application that allows users to convert between currencies in real-time, view country flags, and get instant exchange rates using open-source APIs.

## 📸 Screenshots

![Currency Converter](project_screenshot.png)

## 🚀 Features

- 💱 **Real-Time Currency Conversion**  
  Enter an amount, select source and target currencies, and get the latest exchange rate instantly.

- 🏳️ **Dynamic Country Flags Display**  
  Automatically displays the flag of the selected currency using [FlagsAPI](https://flagsapi.com/) based on country codes.

- 🌐 **Open Source Exchange Rate API Integration**  
  Fetches live exchange rates from a reliable open-source currency API [fawazahmed0/exchange-api](https://github.com/fawazahmed0/exchange-api) to fetch accurate and up-to-date exchange rates.

- 📱 **Responsive Design**  
  Works seamlessly across desktop and mobile devices.


## 🛠️ Technologies Used

- **HTML, CSS, JavaScript** – Core frontend technologies
- **FlagsAPI** – For fetching country flags dynamically
- **Open Exchange Rate API** – For real-time currency conversion


# 🔍 How It Works

1. **User Input**  
   The user enters an amount and selects the source and target currencies from dropdown menus.

2. **Currency Options Setup** 
   A static JSON[codes.js] file is used to map currency codes to their respective country codes. This mapping populates the dropdown menus and enables flag rendering

3. **Flag Display**  
   When a currency is selected, the app uses [FlagsAPI]https://flagsapi.com/{country-code}/flat/64.png to fetch and display the corresponding country flag based on the country code.

4. **Exchange Rate Fetching**  
   On clicking the **Get Exchange Rate** button, the app sends a request to an open-source currency exchange API [fawazahmed0/exchange-api](https://latest.currency-api.pages.dev/v1/currencies/{currency-code}.json) to fetch the latest conversion rate based on currency code.

5. **Conversion & Display**  
   The converted amount is calculated and displayed on the page along with the currency codes.

6. **Responsive UI**  
   The interface adapts to different screen sizes for a smooth experience on desktop and mobile devices.


## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/amitbaranwal30/currency-converter-web-app.git
