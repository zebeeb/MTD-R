### Specifications for Developer and AI Coding Agent 


#### 1\. Project Overview

The goal is to create a cross-platform Todo app for Muslims that integrates Islamic prayer times, task management, and AI-driven task allocation. The app will be built using expo/React Native, ensuring a single codebase for iOS, Android, and Web. The app will include features like prayer-time-based task segmentation, AI-driven task allocation, Kanban board view, social login, and subscription-based Google Calendar sync.  
---

#### 2\. Technical Stack

* Expo
* Frontend: React Native, React Native for Web, TypeScript
* UI and animation Library: Tamagui 
* Backend/Database: Supabase  
* End to end testing: Maestro
* State Management: Zustand
* React Query 
* Github
* Push Notifications: Firebase Cloud Messaging (FCM) for Android and APNs for iOS  
* Production Monitoring: Firebase Crashlytics + Performance (after launch)
* AI Integration: OpenAI API (or similar) for task allocation  
* Payment Integration: RevenueCat (for subscription management) 
* Calendar Sync: Google Calendar API  
* Prayer Times API: Use a third-party API like [Aladhan](https://aladhan.com/prayer-times-api) or [PrayTimes.org](http://praytimes.org/)



#### 3\. Core Features


1. Task Management:  
   * Users can create tasks with:  
     * Title  
     * Description  
     * Due Date  
     * lists (e.g., Work, Personal, Errands, etc.)  
   * Tasks can be edited or deleted. 
   * user can arrange the tasks order via Drag and Drop
2. Prayer Time Integration:  
   * Fetch prayer times (Fajr, Dhuhr, Asr, Maghrib, Isha) from a third-party API based on the user's location.  
   * Automatically divide the day into segments based on prayer times. 
3. AI-Driven Task Allocation:  
   * When task is created, Use AI (e.g., OpenAI API) to analyze task title/descriptions and auto-allocate tasks to time slots between prayers.  
   * Users can manually drag and drop tasks to different prayers sections.  
4. Navigation Tabs:  
   * Main navigation (buttom) includes 3 tabs (Today, Tomorrow, All tasks)
   * Today: Tasks divided into sections based on prayer times.  
   * Tomorrow: Same as Today but for the next day.  
   * All tasks: Kanban board view where each column represents a list, and tasks are sorted by due date. 
   * In All tasks: user can swipe left and right to move across the lists kanban board
5. Social Login:  
   * Allow users to log in via Google, Apple using Firebase Authentication.  
6. Subscription Model:  
   * Subscription unlocks two-way sync with Google Calendar.  
7. Push Notifications:  
   * Notify users when a task's due date is approaching.  
8. Cross-Platform Support:  
   * the app is mobile first, with Single codebase for iOS, Android, and Web using React Native and React Native for Web.

---

#### 4\. Detailed Specifications

##### A. Prayer Time Integration

* Use a third-party API to fetch prayer times based on the user's location.  
* Store prayer times locally for offline access. 
* upon start the app, the app requests access to location services, to be able to fetch the prayer times based on the user's location.  
* Divide the day into segments:  
  * Fajr to Dhuhr  
  * Dhuhr to Asr  
  * Asr to Maghrib  
  * Maghrib to Isha  
  * Isha to Fajr (next day)

##### B. Task Management

* Task Creation:  
  * Title (required)  
  * Description (optional)  
  * Due Date (optional)  
  * List (Optional, e.g., Work, Personal, Errands)  
* Lists logic
  * A task can be only in one list
  * A list has a name, color, and icon
  * Available list Colours are Red, Orange, blue, green, Purple, Pink, Yellow
  * icons are typical emoji icons
* Task Editing:  
  * when task is opened, Users can edit any field of a task by tabbing on it.  
* Task Deletion:  
  * Users can delete tasks with a confirmation dialog.

##### C. AI-Driven Task Allocation

* Use OpenAI API to analyze task descriptions and suggest an appropriate time slot.  
* Example:  
  * Task: "Buy groceries" → Allocate to "Asr to Maghrib" (afternoon).  
  * Task: "Finish report" → Allocate to "Fajr to Dhuhr" (morning).  
* Allow users to manually drag and drop tasks to place them in deferent prayer time slots or between other tas.

##### D. Navigation Tabs

* Today:  
  * Display tasks divided into sections based on prayer times.  
  * Each section shows tasks allocated to that time slot.  
  * includes the tasks whose due date is today or in the past
* Tomorrow:  
  * Same as Today but for the next day.  
* All:  
  * Kanban board view with columns for each list.  
  * Tasks sorted by due date within each column.

##### E. Social Login

* Use Firebase Authentication for:  
  * Google Login  
  * Apple Login  

##### F. Subscription Model

* Subscription unlocks:  
  * Two-way sync with Google Calendar.  
  * Premium features (if any).

##### G. Push Notifications

* app requests permission to send notifications up on start
* Use Firebase Cloud Messaging (FCM) for Android and iOS.  
* Notify users:  
  * When a task's due date is approaching.  

##### H. Cross-Platform Support

* Use React Native for iOS and Android.  
* Use React Native for Web for the web version.  
* Ensure the UI is responsive and works seamlessly across all platforms.

---

#### 5\. UI/UX Design

* Today/Tomorrow Tabs:  
  * Visually divide the screen into sections for each prayer time.  
  * Each section should have a clear header (e.g., "Fajr to Dhuhr") and a list of tasks.  
  * each task is a card that includes the task title, list, and due date.  
* All Tab:  
  * Kanban board with columns for each tag.  
  * Tasks displayed as cards with title, and due date.  
* Task View:  
  * When task is opened, it will show the task details in a Slide up modal.  
  * The modal will have a close button to go back to the list view.  
  * The modal will have a delete button to delete the task.  
* Task Editing:  
  * When task is opened, Users can edit any field of a task by tabbing on it.  
* Task Creation:  
  * Slide up modal for creating tasks.  
* Drag and Drop:  
  * Smooth drag-and-drop functionality for moving tasks between time slots.

#### 6\. Compliance

* Apple App Store:  
  * Follow [App Store Review Guidelines](https://developer.apple.com/app-store/review/guidelines/).  
* Google Play Store:  
  * Follow [Google Play Developer Policy](https://play.google.com/console/about/guides/developer-policy/).  
* GDPR Compliance:  
  * Ensure user data is handled securely and transparently.

#### 7\. AI Coding Agent (Cursor/Windsurf) Instructions

* Task Allocation Logic:  
  * Use OpenAI API to analyze task descriptions and suggest time slots.  
  * Example prompt: "Analyze the task 'Buy groceries' and suggest the best time slot between Fajr, Dhuhr, Asr, Maghrib, and Isha."  
* Code Generation:  
  * Generate reusable components for:  
    * Task creation/editing modal.  
    * Drag-and-drop functionality.  
    * Kanban board view.  
  * Ensure code follows Apple and Google review guidelines.


#### 8\. Deliverables

* Fully functional cross-platform app (iOS, Android, Web).  
* Source code with proper documentation.  
* Test cases for all features.  
* Deployment to App Store, Google Play, and Web.

---

