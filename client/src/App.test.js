import axios from "axios";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("able to access keyword from search text.", () => {
  const apiCall = jest.spyOn(axios, "get").mockImplementationOnce(() => {
    return Promise.resolve({
      data: {
        data: [
          {
            title:
              "คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว!",
            eid: "1",
            url: "https://www.wongnai.com/trips/travel-koh-chang",
            description:
              "วันว่างนี้ไปเที่ยวเกาะช้างกัน พร้อมทำกิจกรรมต่าง ๆ เช่น เที่ยวน้ำตก ล่องเรือชมป่าชายเลน ขี่ช้างท่องป่า ผจญภัยเหนือยอดไม้ และดำน้ำตื้น รับรอทริปนี้สนุกแน่!\n\n“เกาะช้าง” จังหวัดตราด ที่เที่ยวทะเลใกล้กรุงเทพฯ สามารถเที่ยวกันได้ทุกฤดู เคลียร์งานและวันว่างได้แล้วก็แค่จัดกระเป๋าไปกันได้เลยกับแพลน เที่ยวเกาะช้าง ต้องไปกิน เที่ยว พักที่ไหน? อ่านจบครบที่เดียว! ซึ่งหลายคนสงสัยว่าไปเกาะช้างเที่ยวไหนดี? Wongnai Travel บอกเลยเกาะช้างไม่ได้มีแค่ไปเล่นน้ำทะเล หรือนอนพักริมหาดทรายเท่านั้น เพราะมีกิจกรรมสนุก ๆ รออยู่เพียบ ชนิดที่ไม่ว่างให้นอนอยู่ห้องเฉย ๆ อย่าง เที่ยวชมน้ำตก พายเรือคายัค ล่องเรือมาด ชมธรรมชาติป่าชายเลน ขี่ช้างท่องป่า ตื่นเต้นกับการผจญภัยเหนือยอดไม้ ดำน้ำตื้นชมปะการังและฝูงปลาแบบใกล้ชิด นอกจากนี้ยังมีที่พักเกาะช้าง และร้านอาหารเกาะช้าง มาให้เลือกกันอีกด้วย รับรองทริปนี้กินอิ่ม นอนหลับ เที่ยวสนุกแน่นอน",
            photos: [
              "https://img.wongnai.com/p/1600x0/2019/07/02/3c758646aa6c426ba3c6a81f57b20bd6.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/02/6a2733ab91164ac8943b77deb14fdbde.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/02/941dbb607f0742bbadd63bbbd993e187.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/02/bd1d256256c14c208d0843a345f75741.jpg",
            ],
            tags: ["เกาะ", "ทะเล", "จุดชมวิว", "ธรรมชาติ", "ตราด"],
          },
          {
            title: "เที่ยวเกาะหลีเป๊ะ กิน เที่ยว พักที่ไหน? จัดมาให้ครบ!",
            eid: "6",
            url: "https://www.wongnai.com/trips/travel-koh-lipe",
            description:
              "ไปเที่ยวเกาะหลีเป๊ะ พักผ่อนบนหาดทรายขาว เล่นน้ำทะเลใส ๆ ดำน้ำตื้นชมความสวยงามโลกใต้ทะเล รับรองทริปนี้ไม่มีหลงเพราะจัดให้แบบเป๊ะ ๆ ทั้งกิน เที่ยว และที่พัก มีครบ",
            photos: [
              "https://img.wongnai.com/p/1600x0/2019/07/31/b3986319d85a4d85baecbacf03a519d8.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/31/9969a296fe1b452a8e64c2b7cfd58319.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/31/4edab94617f642d7ac11efd9bccb9863.jpg",
              "https://img.wongnai.com/p/1600x0/2019/07/31/58348f4c3ace47349e80e5930a7a525a.jpg",
            ],
            tags: ["ทะเล", "เกาะ", "สตูล", "ธรรมชาติ"],
          },
        ],
      },
    });
  });

  render(<App />);

  const travelPlaceInput = screen.getByLabelText("ค้นหาที่เที่ยว");

  fireEvent.change(travelPlaceInput, { target: { value: "เกาะ" } });

  expect(travelPlaceInput.value).toBe("เกาะ");
  expect(apiCall).toHaveBeenCalledTimes(0);
});

// ยังใช้การไม่ได้ 

// test("able to show content from keywords.", () => {
//   render(<App />);
//   const travelPlacesList = screen.getByRole("list");

//   expect(travelPlacesList.childNodes.length).toEqual(10);
// });
