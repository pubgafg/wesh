// یک API ساده شبیه دیتابیس
let ads = [
  { id: 1, title: "موتر کرولا", price: 5000, desc: "مدل 2008، بسیار پاک" },
  { id: 2, title: "خانه برای فروش", price: 30000, desc: "3 اطاقه، موقعیت عالی" },
];

const API = {
  getAds: async () => ads,

  getAdById: async (id) => ads.find((ad) => ad.id === parseInt(id)),

  addAd: async (newAd) => {
    newAd.id = ads.length + 1;
    ads.push(newAd);
    return newAd;
  },
};

export default API;
