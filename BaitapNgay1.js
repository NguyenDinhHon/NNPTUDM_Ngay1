// Câu 1: Khai báo constructor function Product để tạo đối tượng sản phẩm
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price;
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable;
}
console.log("Câu 1 - Constructor function Product đã được tạo");
console.log("\n");

// Câu 2: Khởi tạo mảng products gồm ít nhất 6 sản phẩm, thuộc tối thiểu 2 danh mục khác nhau
const products = [
  new Product(1, "MacBook Pro M3", 45000000, 12, "Electronics", true),
  new Product(2, "AirPods Pro 2", 5500000, 25, "Electronics", true),
  new Product(3, "Máy lọc không khí Xiaomi", 3200000, 0, "Electronics", false),
  new Product(4, "Ghế gaming Ergonomic", 3500000, 8, "Home & Garden", true),
  new Product(5, "Bàn làm việc gỗ", 2800000, 15, "Home & Garden", true),
  new Product(6, "Đèn LED thông minh", 850000, 30, "Home & Garden", true),
  new Product(7, "Máy chạy bộ điện", 12000000, 3, "Sports", true),
  new Product(8, "Tạ tay 20kg", 1200000, 0, "Sports", false),
  new Product(9, "Kinh Pháp Hoa", 120000, 50, "Books", true),
  new Product(10, "Sách Tứ Diệu Đế", 95000, 0, "Books", false),
  new Product(11, "Kinh Kim Cang", 150000, 35, "Books", true),
  new Product(12, "Đồng hồ Rolex", 45000000, 3, "Accessories", true),
  new Product(13, "Túi xách Louis Vuitton", 38000000, 5, "Accessories", true),
  new Product(14, "Kính mắt Rayban", 3500000, 0, "Accessories", false)
];
console.log("Câu 2 - Danh sách sản phẩm:");
console.log(products);
console.log("\n");

// Câu 3: Tạo mảng mới chỉ chứa name, price của mỗi sản phẩm
const productInfo = products.map(p => ({
  name: p.name,
  price: p.price
}));
console.log("Câu 3 - Thông tin sản phẩm (name, price):");
console.log(productInfo);
console.log("\n");

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0)
const inStockProducts = products.filter(p => p.quantity > 0);
console.log("Câu 4 - Sản phẩm còn hàng trong kho:");
console.log(inStockProducts);
console.log("\n");

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không
const hasExpensiveProduct = products.some(p => p.price > 30000000);
console.log("Câu 5 - Có sản phẩm giá trên 30.000.000:");
if (hasExpensiveProduct) {
  const expensiveProducts = products.filter(p => p.price > 30000000);
  console.log("True - Các sản phẩm đó là:");
  expensiveProducts.forEach(p => {
    console.log(`   - ${p.name}: ${p.price.toLocaleString('vi-VN')} đ`);
  });
} else {
  console.log("False - Không có sản phẩm nào có giá trên 30.000.000 đ");
}
console.log("\n");

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán (isAvailable = true) hay không
const accessoriesProducts = products.filter(p => p.category === "Accessories");
const allAccessoriesAvailable = accessoriesProducts.every(p => p.isAvailable === true);
console.log("Câu 6 - Tất cả Accessories có đang bán:");
if (allAccessoriesAvailable) {
  console.log("True - Tất cả sản phẩm Accessories đều đang được bán");
  accessoriesProducts.forEach(p => {
    console.log(`   - ${p.name}: ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
  });
} else {
  console.log("False - Có sản phẩm Accessories không được bán:");
  accessoriesProducts.forEach(p => {
    console.log(`   - ${p.name}: ${p.isAvailable ? 'Đang bán' : 'Ngừng bán'}`);
  });
}
console.log("\n");

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalInventoryValue = products.reduce((total, p) => {
  return total + (p.price * p.quantity);
}, 0);
console.log("Câu 7 - Tổng giá trị kho hàng:");
console.log(totalInventoryValue.toLocaleString('vi-VN') + " VNĐ");
console.log("\n");

// Câu 8: Dùng for...of để duyệt mảng products và in ra: Tên sản phẩm - Danh mục - Trạng thái
console.log("Câu 8 - Danh sách sản phẩm:");
for (const product of products) {
  const status = product.isAvailable ? "Còn hàng" : "Hết hàng";
  console.log(`${product.name} - ${product.category} - ${status}`);
}
console.log("\n");

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng
console.log("Câu 9 - Thuộc tính của sản phẩm đầu tiên:");
for (const key in products[0]) {
  console.log(`${key}: ${products[0][key]}`);
}
console.log("\n");

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng
const availableInStockNames = products
  .filter(p => p.isAvailable === true && p.quantity > 0)
  .map(p => p.name);
console.log("Câu 10 - Sản phẩm đang bán và còn hàng:");
console.log(availableInStockNames);
