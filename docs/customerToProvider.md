# FoodHub 🍱 – All Final Results (Requirement-based Summary)

এই ডকুমেন্টে তোমার সব প্রশ্নের **final, consistent, real‑world answers** এক জায়গায় list আকারে দেওয়া হলো।

---

## 1️⃣ Customer Dashboard কি Requirement-এ আছে?

❌ **না**

- Requirement-এ কোথাও "Customer Dashboard" explicitly বলা নেই
- Customer features = functional pages (orders, profile, tracking)

✅ **Best Practice**

- Customer dashboard না রেখে **Account-based navigation** ব্যবহার করা
- Real apps (Foodpanda, Uber Eats) dashboard ব্যবহার করে না

---

## 2️⃣ Customer → Provider Apply System কি Requirement ভাঙে?

❌ না, ভাঙে না

- Requirement-এ provider role আছে
- Apply → Review → Approve হলো **real-world interpretation**
- Assignment / interview-এ এটা **bonus system design decision**

---

## 3️⃣ Customer → Provider Apply System কোথায় রাখবে?

❌ Dashboard-এর ভেতরে নয়

✅ **Best Place (Industry Standard)**

```
Avatar / Account Menu
 └─ My Account
     ├─ Profile
     ├─ Orders
     └─ Become a Provider 👨‍🍳
```

📌 Reason:

- Dashboard = daily operation
- Provider apply = business upgrade
- Non-intrusive & discoverable UX

---

## 4️⃣ Next.js App Router Folder Structure (Final)

```
src/app/
 ├─ (public)/
 │   ├─ login/
 │   └─ register/
 │
 ├─ (account)/              ← Customer Area
 │   ├─ profile/
 │   ├─ orders/
 │   └─ become-provider/
 │       ├─ page.tsx        ← Apply intro + form
 │       └─ status/
 │           └─ page.tsx    ← Pending / Approved / Rejected
 │
 ├─ (provider)/             ← Only after approval
 │   ├─ dashboard/
 │   ├─ profile/
 │   ├─ menu/
 │   └─ orders/
 │
 └─ (admin)/
     └─ provider-requests/
```

---

## 5️⃣ Customer Profile System (Frontend)

📍 Route: `/account/profile`

Customer can:

- Name edit
- Phone
- Delivery address

No approval needed

---

## 6️⃣ Provider Apply & Profile System (Step-by-Step)

### Step 1: Apply

- Route: `/account/become-provider`
- Restaurant info form

### Step 2: Status

- Route: `/account/become-provider/status`
- States:
  - ⏳ PENDING
  - ❌ REJECTED
  - ✅ APPROVED

### Step 3: After Approval

- Auto redirect → `/provider/profile`
- Provider creates restaurant profile

---

## 7️⃣ Provider Profile Create কখন সম্ভব?

❗ **Only if providerStatus === APPROVED**

❌ Before approval → blocked

---

## 8️⃣ Meal Details – Who sees what?

### 👤 Customer sees:

- Meal name, image, price
- Category
- Provider name
- Availability
- Reviews & rating

❌ No edit / internal data

---

### 🍳 Provider (own meals only) sees:

- Editable meal info
- Availability toggle
- Order count (optional)

❌ Other provider meal internal data

---

## 9️⃣ Role & Status Model (Final)

```ts
user = {
  role: CUSTOMER | PROVIDER | ADMIN,
  providerStatus: NONE | PENDING | APPROVED | REJECTED,
};
```

---

## 🔟 Why This Design Is Correct

✔ Requirement compliant
✔ Real-world UX
✔ Scalable
✔ Easy RBAC
✔ Interview-ready explanation

---

## 🏁 Final Verdict

- Customer dashboard ❌ unnecessary
- Account-based navigation ✅ best
- Provider apply inside account area ✅ correct
- Approval-based provider system ✅ real-world

---

📌 এই ডকুমেন্ট তুমি ব্যবহার করতে পারো:

- Assignment submission
- README.md
- Viva explanation
- System design interview
