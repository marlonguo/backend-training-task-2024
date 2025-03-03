const members = ["Alice", "Bob", "Charlie", "Diana", "Evan", "Fiona", "George", "Hannah"];

const purchaseRecords = [];

function addPurchaseRecord(member, coursesNum) {
  if (!members.includes(member) || typeof coursesNum !== "number" || coursesNum <= 0 || !Number.isInteger(coursesNum)) {
    console.error("輸入錯誤，請輸入有效的會員名稱和課程數量。");
    return
  }

  let price = 1500;

  if (coursesNum > 10 && coursesNum <= 20) {
    price = 1300;
  } else if (coursesNum > 20) {
    price = 1100;
  } 

  const record = {
    name: member,
    courses: coursesNum,
    price: price,
    totalPrice: price * coursesNum,
  };
  purchaseRecords.push(record);
  console.log(`新增購買記錄成功！會員 ${member} 購買 ${coursesNum} 堂課，總金額為 ${record.totalPrice} 元。`);
}

function calculateTotalPrice() {
  const totalPrice = purchaseRecords.reduce((accumulator, record) => accumulator + record.totalPrice, 0);
  console.log(`目前總營業額為 ${totalPrice} 元`);
}

function filterNoPurchaseMember() {
  const PurchaseMembers = purchaseRecords.map(record => record.name); // 已購課會員名單
  const NoPurchaseMembers = members.filter(member => !PurchaseMembers.includes(member));  // 未購課會員名單
  NoPurchaseMembers.forEach(item => console.log(`未購買課程的會員有： ${item}`));
}
