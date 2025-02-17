# Countdown Customizer

A fully customizable countdown tool that allows users to **set a date, upload a video background, and personalize countdown text styles**.

## Live Demo

I have deployed this Countdown Timer on **Vercel**, so you can access it anytime!

 **Click below to view the deployed website:**
👉 [Countdown Timer on Vercel](https://countdown-timer-pied.vercel.app/)

This deployment ensures that the latest version of the project is always available online with fast performance and easy accessibility.

---

## Features

### ✅ **Core Features (Tier 1)**
#### **Approach & Implementation**
To build the **foundation of the countdown tool**, I followed a structured approach by breaking down the tasks into **smaller, manageable components**. The first step was addressing the **essential user inputs**—such as date selection, video uploads, and basic styling options. I structured the application in a **modular way**, creating **dedicated components** to handle **user input, data processing, and UI updates efficiently**.

#### **Countdown Timer Implementation**
Implementing the **countdown timer** was a new challenge for me, so I spent time researching how countdown logic works. This involved:
- **Understanding how to convert user-inputted dates** into a format usable for the timer, which invovled certain calcualtions for the day, hours, minutes, and seconds.
- **Calculating the time difference dynamically** and updating the UI in real time.
- **Formatting the countdown properly** (displaying **days, hours, minutes, seconds**).
- **Deciding the layout** to ensure the countdown was visually appealing.

#### **Focus on Visual & Interactive Design**
Tier 1 took roughly 2-3 hours which consisited of set up and planning how I wanted to structure my code and of course majority of the development time was spent on **refining the UI, styling, and enhancing user interactions**. Beyond just implementing the countdown logic, I focused on:
- **Ensuring a clean, visually appealing design** for both the countdown and input elements.
- **Improving user experience (UX)** by making interactions intuitive and responsive.
- **Polishing the CSS** to ensure text, colors, and layout adjustments were fluid across different screen sizes by making the application responsive.

Once I had the core countdown functionality working, I dedicated time to refining the **user interface** to ensure that **customization options were easy to use and visually engaging**.

#### **Completed Features**
- **Live Countdown Timer** → Updates every second with **days, hours, minutes, and seconds**.
- **Custom Target Date Selection** → Users can set a **specific date & time**.
- **Video & Image Upload** → Users can upload **.mp4 or .PNG files** to use as the background.
- **Basic Styling Controls** → Users can set:
  - **Font size**
  - **Text color**

---

### ✅ **Extended Features (Tier 2)**
#### **Approach & Implementation**
After completing **Tier 1**, I found that implementing some of the components from **Tier 2** to be relatively straightforward since it primarily involved refining and extending existing functionalities. My approach was simialr to how approached in tier one but this time **further modularize what I had already built**, specifically **breaking down text customization** (such as color and text size) into separate controls for each countdown component, compared to having one colour or text size that controlled all components.

#### **Font Selection Challenge**
The most significant challenge in **Tier 2** for me was implementing **font selection**. Initially, I wasn’t sure how to **access and apply different fonts dynamically**. I researched various approaches, including:
- **Google Fonts API** (which required API keys and network requests).
- **Predefined font arrays** (storing a fixed set of fonts for selection).
- **Third-party font libraries** (which offered more variety but introduced additional dependencies and security concerns).

Ultimately, I decided to use a **predefined array of fonts** because:
- It provided an **easy-to-implement and efficient solution** for basic font selection.
- It aligned well with **Tier 3**, where users would be able to **upload custom fonts**. while still offering preset fonts from my array, ensuring both flexibility and customization in font selection.
- Avoided potential **security concerns** that come with handling API keys or third-party services.

#### **Draggable Countdown Implementation & NodeRef Issue**
I used the **`react-draggable`** library to allow users to **move countdown elements freely**. Implementing it was relatively straightforward as it simply required to just **wrap each countdown component in a `<Draggable>` tag**. However, I ran into some issues where:
- The draggable component **wasn’t responding properly** because I **wasn’t assigning unique refs (`useRef`)** to each element.
- I mistakenly **assigned the same `nodeRef` to multiple components**, which **confused the draggable library** and caused unexpected behavior.

After reading the documentation and understanding how **`react-draggable` works with DOM elements** through YouTube and GPT, I was able to resolve the issue by ensuring each countdown element had its **own unique reference**.

#### **Completed Features**
- **Individual Styling** → Users can apply **different fonts, sizes, colors, and positions** to each countdown segment.
- **Draggable Text** → Countdown text can be moved anywhere over the video.
- **Live Preview** → Changes **instantly reflect** over the video.

---

### ✅ **Advanced Enhancements (Tier 3)**
#### **Font Upload Challenges & Implementation**
One of the **most difficult tasks** in the project was **implementing font uploads**. I spent a lot of time trying to figure out the best way to structure the logic so that:
1. **Users could seamlessly switch between predefined fonts and their uploaded fonts.**
2. **The uploaded font would override the predefined font** only when a custom font was selected.
3. How to save and store the fonts inputted as the format was a bit different from .png and .mp4 files

This was particularly tricky for me because **font uploads are processed differently than other user inputs** (like text size, color, and adding png or .mp4) as the file had to be converted into base64 data URL rather than for when I processed .PNG and .MP4 this only requried creating a temporoary object URL. Since uploading `.ttf` and `.otf` files was **new to me**, I had to:
- **Research different ways of handling font files in the browser.**
- **Troubleshoot why certain fonts weren’t applying correctly.**
- **Understand how to create Base64 data URLsfor uploaded fonts** and dynamically apply them.

After extensive debugging and testing, I was able to successfully implement a **system that allows users to choose between predefined fonts and uploaded fonts**, while keeping the experience seamless.

#### **Save & Reload Implementation**
Another feature that was relatively **new to me** and I faced some trouble was **saving and reloading user settings using `localStorage`**. To better understand how it works, I spent time:
- **Watching YouTube tutorials** and researching different `localStorage` techniques and learning through GPT of course.
- **Learning how to serialize and deserialize complex objects** (like fonts and colors).
- **Testing persistence** to ensure all data reloads properly when the user revisits the app.

Although I initially expected **saving & reloading** to be difficult, I found that the actual **implementation to be fairly straightforward** after understanding `localStorage`. This feature now ensures that **user preferences (fonts, colors, sizes, target date, etc.) persist across sessions**.

#### **Completed Features**
- **Font Upload** → Users can upload **.ttf or .otf font files**.
- **Save & Reload Settings** → User preferences (date, styles, fonts) **are stored in `localStorage`**.

## Smooth Animations with Framer Motion

I integrated **Framer Motion** to enhance the user experience by adding **smooth transitions and animations** to various elements such as:
- **Buttons** – Subtle hover and click effects for better interactivity.
- **Timer** – Animated transitions for when countdownd first loads in.
- **Menu Bar** – Sliding and fading effects to create a fluid UI.

Using **Framer Motion**, the interface feels more dynamic, responsive, and visually appealing, making interactions **smoother and more engaging**.

### **Libraries Implemented**
- react-draggable: This was to make components draggable
- framer-motion: This allowed me to implement the animations on the timer and menu bar


## 🛠 **Installation & Setup**
## 📌 How to Clone and Run This Project Locally  

Follow these steps to **clone the repository and run it locally** on your machine.  

---

## 🚀 1. Clone the Repository from GitHub  
First, open your terminal and run:  

```sh
git clone (https://github.com/Imran-az/Countdown.git)
```
cd into desired directory:
```sh
cd YOUR-REPO
```
Then Install any Dependencies :
```sh
npm install
```
To run the code:
```sh
npm run dev
```

