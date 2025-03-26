import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Email {
  id: number;
  subject: string;
  sender: string;
  content: string;
}

interface EmailState {
  emails: Email[];
  selectedEmail: Email | null;
}

const initialState: EmailState = {
  emails: [
    {
      id: 1,
      subject: "Welcome to Outlook",
      sender: "Microsoft",
      content: "Hello, this is your welcome email!",
    },
    {
      id: 2,
      subject: "Meeting Reminder",
      sender: "HR Team",
      content: "Reminder: Team meeting at 2 PM.",
    },
    {
      id: 3,
      subject: "Invoice #12345",
      sender: "Billing Dept",
      content: "Your invoice for March 2025 is attached.",
    },
    {
      id: 4,
      subject: "Project Deadline",
      sender: "Manager",
      content: "Please submit your work by Friday.",
    },
    {
      id: 5,
      subject: "Security Update",
      sender: "IT Support",
      content: "Please update your password.",
    },
    {
      id: 6,
      subject: "New Policy Changes",
      sender: "Admin",
      content: "Check out the latest company policies.",
    },
    {
      id: 7,
      subject: "Your Subscription",
      sender: "Netflix",
      content: "Your subscription will renew on April 1st.",
    },
    { id: 8, subject: "Weekend Plan", sender: "Friend", content: "Let’s go hiking this weekend!" },
    {
      id: 9,
      subject: "Important Announcement",
      sender: "CEO",
      content: "Company-wide meeting on Monday.",
    },
    {
      id: 10,
      subject: "Discount Offer!",
      sender: "E-Commerce",
      content: "Get 50% off on your next order.",
    },
    {
      id: 11,
      subject: "Job Opportunity",
      sender: "LinkedIn",
      content: "We found some jobs matching your profile.",
    },
    {
      id: 12,
      subject: "System Downtime",
      sender: "IT Team",
      content: "Maintenance scheduled for Sunday.",
    },
    {
      id: 13,
      subject: "Your Order Status",
      sender: "Amazon",
      content: "Your package is out for delivery.",
    },
    {
      id: 14,
      subject: "Upcoming Webinar",
      sender: "Tech Conference",
      content: "Join our live webinar next week!",
    },
    {
      id: 15,
      subject: "Daily News",
      sender: "News Portal",
      content: "Top stories of the day inside.",
    },
    {
      id: 16,
      subject: "Medical Appointment",
      sender: "Hospital",
      content: "Reminder: Doctor’s appointment on Wednesday.",
    },
    {
      id: 17,
      subject: "Tax Filing Reminder",
      sender: "Tax Department",
      content: "File your taxes before April 15th.",
    },
    {
      id: 18,
      subject: "Exclusive Invite",
      sender: "Event Organizer",
      content: "You're invited to our VIP event!",
    },
    {
      id: 19,
      subject: "New Feature Release",
      sender: "Software Team",
      content: "Check out the latest updates!",
    },
    {
      id: 20,
      subject: "Flight Booking Confirmation",
      sender: "Airline",
      content: "Your flight ticket is confirmed!",
    },
    {
      id: 21,
      subject: "Interview Schedule",
      sender: "HR Recruiter",
      content: "Your interview is scheduled for Thursday.",
    },
    {
      id: 22,
      subject: "Bank Statement",
      sender: "Bank",
      content: "Your monthly bank statement is ready.",
    },
    {
      id: 23,
      subject: "Your Fitness Report",
      sender: "Gym",
      content: "Your latest workout summary.",
    },
    {
      id: 24,
      subject: "Stock Market Update",
      sender: "Finance News",
      content: "Market trends for today.",
    },
    {
      id: 25,
      subject: "Weather Alert",
      sender: "Weather Dept",
      content: "Heavy rainfall expected tomorrow.",
    },
    {
      id: 26,
      subject: "Product Review Request",
      sender: "E-Commerce",
      content: "Tell us what you think!",
    },
    {
      id: 27,
      subject: "Password Reset",
      sender: "Security Team",
      content: "Click here to reset your password.",
    },
    {
      id: 28,
      subject: "Free Trial Ending",
      sender: "Subscription Service",
      content: "Renew before expiration!",
    },
    { id: 29, subject: "Happy Birthday!", sender: "Company", content: "Enjoy your special day!" },
    {
      id: 30,
      subject: "Training Schedule",
      sender: "HR Team",
      content: "Your training session details.",
    },
    {
      id: 31,
      subject: "Weekly Report",
      sender: "Manager",
      content: "Your performance report for this week.",
    },
    {
      id: 32,
      subject: "Shopping Cart Reminder",
      sender: "E-Commerce",
      content: "Your items are still in the cart.",
    },
    {
      id: 33,
      subject: "System Alert",
      sender: "IT Security",
      content: "Suspicious login detected.",
    },
    {
      id: 34,
      subject: "Insurance Renewal",
      sender: "Insurance Co.",
      content: "Your policy expires soon.",
    },
    {
      id: 35,
      subject: "Your Exam Schedule",
      sender: "University",
      content: "Check your exam timetable.",
    },
    {
      id: 36,
      subject: "Holiday Announcement",
      sender: "HR",
      content: "Office closed on upcoming holidays.",
    },
    {
      id: 37,
      subject: "Software License Expiry",
      sender: "Tech Support",
      content: "Renew your software license.",
    },
    {
      id: 38,
      subject: "New Chat Message",
      sender: "Messaging App",
      content: "You have a new unread message.",
    },
    {
      id: 39,
      subject: "Internship Offer",
      sender: "Company HR",
      content: "Congrats! You got selected.",
    },
    {
      id: 40,
      subject: "Health Tips",
      sender: "Health Blog",
      content: "How to stay fit during winter.",
    },
    {
      id: 41,
      subject: "Car Service Reminder",
      sender: "Auto Service",
      content: "Your car is due for servicing.",
    },
    {
      id: 42,
      subject: "Limited Time Sale",
      sender: "E-Commerce",
      content: "Exclusive deals for you!",
    },
    {
      id: 43,
      subject: "University Enrollment",
      sender: "Admissions",
      content: "Confirm your admission now!",
    },
    {
      id: 44,
      subject: "Music Playlist Update",
      sender: "Streaming Service",
      content: "New songs added to your playlist.",
    },
    {
      id: 45,
      subject: "Community Event",
      sender: "Local Club",
      content: "Join us for the charity event.",
    },
    {
      id: 46,
      subject: "Daily Motivation",
      sender: "Inspirational Blog",
      content: "Quote of the day!",
    },
    {
      id: 47,
      subject: "Travel Voucher",
      sender: "Travel Agency",
      content: "Claim your discount voucher.",
    },
    {
      id: 48,
      subject: "Customer Support",
      sender: "Support Team",
      content: "Your ticket has been resolved.",
    },
    {
      id: 49,
      subject: "New Connection Request",
      sender: "Social Network",
      content: "Someone wants to connect with you.",
    },
    { id: 50, subject: "Congratulations!", sender: "Company", content: "You won a lucky draw!" },
  ],
  selectedEmail: null,
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    selectEmail: (state, action: PayloadAction<Email>) => {
      state.selectedEmail = action.payload;
    },
  },
});

export const { selectEmail } = emailSlice.actions;
export default emailSlice.reducer;
