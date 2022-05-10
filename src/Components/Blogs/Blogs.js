import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h3>***Difference between authorization and authentication</h3>
            <p>উত্তর: সহজভাবে বলতে গেলে, authentication হল কেউ কে তা যাচাই করার প্রক্রিয়া, যেখানে authorization হল ব্যবহারকারীর কোন নির্দিষ্ট অ্যাপ্লিকেশন, ফাইল এবং ডেটাতে অ্যাক্সেস রয়েছে তা যাচাই করার প্রক্রিয়া। authentication প্রক্রিয়ায়, সিস্টেমে অ্যাক্সেস প্রদানের জন্য ব্যবহারকারীদের পরিচয় পরীক্ষা করা হয়। যখন authorization হল তাদের কী অ্যাক্সেস আছে তা যাচাই করার প্রক্রিয়া।</p>
            <h3>***Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Google Firebase ব্যবহার করার কারণ হল একটি অ্যাপ্লিকেশন ডেভেলপমেন্ট প্ল্যাটফর্ম যা ডেভেলপারদের iOS, Android এবং ওয়েব অ্যাপ তৈরি করতে দেয়। সাধারণত, একটি সার্ভার দ্বারা authentication একটি ব্যবহারকারীর নাম এবং পাসওয়ার্ড ব্যবহার entails । Authentication অন্যান্য উপায়গুলি কার্ড, রেটিনা স্ক্যান, ভয়েস রিকগনিশন এবং আঙ্গুলের ছাপের মাধ্যমে হতে পারে।</p>
            <h3>***What other services does firebase provide other than authentication</h3>
            <p>1. Parse – Open Source Backend Platform; 2. Back4app – Parse Hosting Platform; 3. Kinvey – Mobile Backend as a Service (mBaaS) for the Enterprise; 4. Backendless – Mobile Backend and API Services Platform; 5. Kuzzle – Backend for web, hybrid, or native mobile apps and IoT projects; 6. Pubnub – Real-time APIs and Global Messaging; 7. Kumulos – App Performance Management; 8. Game Sparks – Game Backend Platform; 9. Hoodie – Generic backend with a client API for Offline First applications; 10. Appwrite – Open-Source backend for Flutter developers</p>
        </div>
    );
};

export default Blogs;