// frontend/src/api.js

// شبیه‌سازی API — بعداً می‌تونی به بک‌اند واقعی وصل کنی
const API = {
  // 📌 لاگین
  login: async (username, password) => {
    // اینجا فقط شبیه‌سازیه
    if (username === "test" && password === "1234") {
      return { token: "fake-token-123" };
    } else {
      throw new Error("نام کاربری یا رمز اشتباه است");
    }
  },

  // 📌 گرفتن لیست آگهی‌ها
  getAds: async () => {
    return [
      { id: 1, title: "خانه برای فروش", price: "20000", desc: "خانه ۲ طبقه در کابل" },
      { id: 2, title: "موتور سیکلت", price: "5000", desc: "موتور در حد نو" },
      { id: 3, title: "موبایل سامسونگ", price: "12000", desc: "گوشی A52 کارکرده" },
    ];
  },

  // 📌 گرفتن جزئیات یک آگهی بر اساس id
  getAdById: async (id) => {
    const ads = await API.getAds();
    return ads.find((ad) => ad.id === Number(id));
  },
};

export default API;
