const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");
const orderProduct = document.querySelector("#orderProduct");
const optionFields = document.querySelector("#optionFields");
const orderQuantity = document.querySelector("#orderQuantity");
const selectedProductImage = document.querySelector("#selectedProductImage");
const priceOutput = document.querySelector("#priceOutput");
const productNote = document.querySelector("#productNote");
const addToCartButton = document.querySelector("#addToCartButton");
const viewCartButton = document.querySelector("#viewCartButton");
const cartButton = document.querySelector("#cartButton");
const cartCount = document.querySelector("#cartCount");
const cartOverlay = document.querySelector("#cartOverlay");
const cartPanel = document.querySelector("#cartPanel");
const closeCartButton = document.querySelector("#closeCartButton");
const cartItems = document.querySelector("#cartItems");
const cartTotal = document.querySelector("#cartTotal");
const checkoutForm = document.querySelector("#checkoutForm");
const checkoutStatus = document.querySelector("#checkoutStatus");
const purchaseOverlay = document.querySelector("#purchaseOverlay");
const purchasePanel = document.querySelector("#purchasePanel");
const closePurchaseButton = document.querySelector("#closePurchaseButton");
const purchaseSummary = document.querySelector("#purchaseSummary");
const purchaseCustomer = document.querySelector("#purchaseCustomer");
const purchaseTotal = document.querySelector("#purchaseTotal");
const paymentOptions = document.querySelector("#paymentOptions");
const placeOrderButton = document.querySelector("#placeOrderButton");
const backToCartButton = document.querySelector("#backToCartButton");
const purchaseStatus = document.querySelector("#purchaseStatus");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector("#formStatus");

const products = [
  {
    name: "Personalized Ornaments",
    price: "$6.00",
    options: [
      { label: "Style", values: ["Snowy City", "Santa's Snowman", "Christmas Tree Farm", "North Pole Forest", "Birch Tree Deer", "Santa's Sleigh", "Moonlight Christmas", "Christmas Cabin", "Dog Paw", "Running Deer", "Snowflake Deer", "Christmas Snowman"] },
      { label: "Amount", values: ["1 ($6)", "2($10)"] }
    ],
    fields: ["What names on the Ornament, if any?"],
    amountPrices: { "1 ($6)": "$6.00", "2($10)": "$10.00" }
  },
  {
    name: "Classic Ornaments",
    price: "$6.00",
    options: [
      { label: "Style", values: ["Blue Christmas", "Poinsettia", "Nativity Scene", "Bible Cross", "Folded Flag", "Black Snowflake", "Blue Silver"] },
      { label: "Amount", values: ["1 ($6)", "2($10)"] }
    ],
    amountPrices: { "1 ($6)": "$6.00", "2($10)": "$10.00" }
  },
  { name: "Mug Tree Holders", price: "$28.50", regularPrice: "$30.00", options: [{ label: "Style", values: ["Twisted Mug Tree", "Normal Mug Tree"] }] },
  { name: "Custom Photo Frame", price: "$55.00", fields: ["What would you like the frame to say?", "What names on the frame if any?"] },
  { name: "Layered Wooden Designs", price: "$15.00", options: [{ label: "Style", values: ["Highland Cow", "Train", "Deer ShadowBox", "Musical Guitar", "Lion", "Dragon"] }] },
  { name: "Emoji Earrings", price: "$6.00", options: [{ label: "Amount", values: ["1 Pair", "2 pairs"] }, { label: "Emoji", values: ["Cool Guy", "Heart Eyes", "Smile", "Feather", "Leaf"] }], amountPrices: { "1 Pair": "$6.00", "2 pairs": "$10.00" } },
  { name: "Heart Earrings", price: "$6.00", options: [{ label: "Amount", values: ["1 pair", "2 pairs"] }, { label: "Heart Style", values: ["Heart with arrow (Red)", "Heart with wings (Red)", "Heart with wings (Pink)", "Heart Key (Red)", "Heart Key (Pink)", "Heart Key (Blue)", "Heart"] }], amountPrices: { "1 pair": "$6.00", "2 pairs": "$10.00" } },
  { name: "Animal Earrings", price: "$6.00", options: [{ label: "Amount", values: ["1 Pair", "2 Pairs"] }, { label: "Animal", values: ["Chicken", "Dalmation", "Bunny (White)", "Bunny (Brown)", "Bumble Bee", "Dog Paw (Pink)", "Dog Paw (Black)"] }], amountPrices: { "1 Pair": "$6.00", "2 Pairs": "$10.00" } },
  { name: "Misc. Earrings", price: "$6.00", options: [{ label: "Amount", values: ["1 Pair", "2 pairs"] }, { label: "Foods", values: ["Mushroom", "Coffee Mug", "Pink Popcicles", "Purple Popcicles"] }], amountPrices: { "1 Pair": "$6.00", "2 pairs": "$10.00" } },
  { name: "Food Earrings", price: "$6.00", options: [{ label: "Amount", values: ["1 Pair", "2 Pairs"] }, { label: "Tasty Treats", values: ["Chocolate bar", "Toast", "Watermellon", "Avacodo", "To-Go-Cups", "Apple", "HotDogs"] }], amountPrices: { "1 Pair": "$6.00", "2 Pairs": "$10.00" } },
  { name: "Lily Earrings", price: "$6.00", options: [{ label: "Color", values: ["Pink/white", "White/Pink"] }, { label: "Amount", values: ["1 Pair", "2 Pairs"] }], amountPrices: { "1 Pair": "$6.00", "2 Pairs": "$10.00" } },
  { name: "Tulip Earings", price: "$6.00", options: [{ label: "Amount", values: ["1 Pair", "2 Pairs"] }, { label: "Color", values: ["Red/Orange", "Red/White", "Red/Yellow", "Yellow/Orange", "Purple/White"] }], amountPrices: { "1 Pair": "$6.00", "2 Pairs": "$10.00" } },
  { name: "Heirloom Rocking Horse", price: "$700.00", options: [{ label: "Wood Type", values: ["Pine", "White Oak", "Mapple", "Wallnut"] }], optionPrices: { "Wood Type=Pine": "$700.00", "Wood Type=White Oak": "$750.00", "Wood Type=Mapple": "$750.00", "Wood Type=Wallnut": "$900.00" } },
  { name: "Daisy Earings", price: "$6.00", options: [{ label: "Color", values: ["White", "Red", "Purple", "LightBlue"] }, { label: "Amount", values: ["1", "2"] }], amountPrices: { "1": "$6.00", "2": "$10.00" } },
  { name: "Rose Earings", price: "$6.00", options: [{ label: "Amount", values: ["1", "2"] }, { label: "Color", values: ["Yellow", "White", "Red", "Pink"] }], amountPrices: { "1": "$6.00", "2": "$10.00" } },
  { name: "Folded Flag", price: "$7.00", fields: ["What would you like on your flag?"] },
  { name: "Custom Canvas Art", price: "$32.00", regularPrice: "$40.00", options: [{ label: "Style", values: ["He is Risen", "Three Wooden Crosses"] }] },
  {
    name: "Wavy Flag",
    price: "$105.00",
    options: [
      { label: "Size", values: ['25" x 13"', '31" x 16.25"', '60" x 32.5"'] },
      { label: "Style", values: ["Rustic (Burnt)", "None"] }
    ],
    variantPrices: {
      'Size=25" x 13"|Style=Rustic (Burnt)': "$110.00",
      'Size=25" x 13"|Style=None': "$105.00",
      'Size=31" x 16.25"|Style=Rustic (Burnt)': "$170.00",
      'Size=31" x 16.25"|Style=None': "$165.00",
      'Size=60" x 32.5"|Style=Rustic (Burnt)': "$455.00",
      'Size=60" x 32.5"|Style=None': "$450.00"
    }
  },
  {
    name: "Standard American Flag",
    price: "$70.00",
    options: [
      { label: "Size", values: ['25" x 13"', '31" x 16.25"', '60" x 32.5"'] },
      { label: "Style", values: ["Rustic (Burnt)", "None"] }
    ],
    variantPrices: {
      'Size=25" x 13"|Style=Rustic (Burnt)': "$75.00",
      'Size=25" x 13"|Style=None': "$70.00",
      'Size=31" x 16.25"|Style=Rustic (Burnt)': "$155.00",
      'Size=31" x 16.25"|Style=None': "$150.00",
      'Size=60" x 32.5"|Style=Rustic (Burnt)': "$305.00",
      'Size=60" x 32.5"|Style=None': "$300.00"
    }
  },
  {
    name: "Premium Metal Business Cards",
    price: "$44.00",
    regularPrice: "$55.00",
    options: [
      { label: "Color", values: ["Red", "green", "black", "Blue", "Purple", "Yellow"] },
      { label: "Amount", values: ["50", "100", "150", "200", "250", "300"] }
    ],
    amountPrices: { "50": "$44.00", "100": "$67.60", "150": "$85.80", "200": "$103.20", "250": "$116.00", "300": "$134.00" }
  },
  { name: "Better with Dogs", price: "$15.00", regularPrice: "$20.00" },
  {
    name: "Scripture Wall Hanging",
    price: "$20.50",
    regularPrice: "$25.00",
    options: [{ label: "Stain color", values: ["Golden oak", "Walnut", "Mahogany", "english chestnut", "classic grey", "natural"] }],
    fields: ["What scripture would you like?"]
  },
  { name: "Pledge of Allegiance Board", price: "$16.20", regularPrice: "$18.00" },
  { name: "Nativity Silhuette", price: "$9.45", regularPrice: "$10.50" },
  { name: "Magnets", price: "$2.00", options: [{ label: "Amount", values: ["1", "3"] }], amountPrices: { "1": "$2.00", "3": "$5.00" } }
];

const paymentMethods = [
  {
    id: "stripe-card",
    provider: "stripe",
    name: "Credit or debit card",
    description: "Pay securely with card through Stripe Checkout."
  },
  {
    id: "stripe-apple-pay",
    provider: "stripe",
    name: "Apple Pay",
    description: "Opens Stripe Checkout. Apple Pay appears on supported Apple devices and Safari."
  },
  {
    id: "stripe-google-pay",
    provider: "stripe",
    name: "Google Pay",
    description: "Opens Stripe Checkout. Google Pay appears on supported Chrome/Android devices."
  },
  {
    id: "paypal",
    provider: "paypal",
    name: "PayPal",
    description: "Pay through PayPal's secure checkout."
  }
];

const productGroups = [
  {
    label: "Ornaments",
    products: ["Personalized Ornaments", "Classic Ornaments"]
  },
  {
    label: "Earrings",
    products: [
      "Emoji Earrings",
      "Heart Earrings",
      "Animal Earrings",
      "Misc. Earrings",
      "Food Earrings",
      "Lily Earrings",
      "Tulip Earings",
      "Daisy Earings",
      "Rose Earings"
    ]
  },
  {
    label: "Flags & Patriotic",
    products: ["Wavy Flag", "Standard American Flag", "Folded Flag", "Pledge of Allegiance Board"]
  },
  {
    label: "Home Decor & Gifts",
    products: [
      "Mug Tree Holders",
      "Layered Wooden Designs",
      "Custom Canvas Art",
      "Better with Dogs",
      "Scripture Wall Hanging",
      "Nativity Silhuette",
      "Magnets"
    ]
  },
  {
    label: "Custom & Engraved",
    products: ["Custom Photo Frame", "Premium Metal Business Cards"]
  },
  {
    label: "Heirloom Woodcraft",
    products: ["Heirloom Rocking Horse"]
  }
];

const productImages = {
  "Personalized Ornaments": "https://static.wixstatic.com/media/8a0e06_8caeddc9ea6a4e49b6cecb481c62d964~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
  "Classic Ornaments": "https://static.wixstatic.com/media/8a0e06_138314ec7c944b71a3310c7f4c396d5e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
  "Mug Tree Holders": "https://static.wixstatic.com/media/8a0e06_e9ed39470a504fa19648dd2d437fea1d~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Custom Photo Frame": "https://static.wixstatic.com/media/8a0e06_30c9cac01c1449a7a33658642d3493e9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Layered Wooden Designs": "https://static.wixstatic.com/media/8a0e06_6715aedbb6ce4f78b852139d2513702c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
  "Emoji Earrings": "https://static.wixstatic.com/media/8a0e06_d539e356ea9847bf8a0b33a86756733e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Heart Earrings": "https://static.wixstatic.com/media/8a0e06_6fe57c66727b44aa8c318aa4b1bc0953~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Animal Earrings": "https://static.wixstatic.com/media/8a0e06_e8ba61f8a6704b93aae52c441204996a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Misc. Earrings": "https://static.wixstatic.com/media/8a0e06_aa1a649879ce4b6e9939e8267ef42e90~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Food Earrings": "https://static.wixstatic.com/media/8a0e06_4c8d28d98a0a4f2c8b25fe494ec69841~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Lily Earrings": "https://static.wixstatic.com/media/8a0e06_19706844f99a4e9bb77204547900b0ee~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Tulip Earings": "https://static.wixstatic.com/media/8a0e06_b3ee811dbcff4a1c89e79ea854922678~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Heirloom Rocking Horse": "https://static.wixstatic.com/media/8a0e06_c66cf0c09dca4dd9b0a791cb53297bb5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Daisy Earings": "https://static.wixstatic.com/media/8a0e06_3278ee3377e54abd8fa5205050f3457e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Rose Earings": "https://static.wixstatic.com/media/8a0e06_3e7ab4ffab434e09980de569a3c1e958~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Folded Flag": "https://static.wixstatic.com/media/8a0e06_2d5cde6a199f424b93c35d79e54e1048~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Custom Canvas Art": "https://static.wixstatic.com/media/8a0e06_e4b75d4ccfaa4172aa1add0eabd7b7d1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Wavy Flag": "https://static.wixstatic.com/media/8a0e06_70eb536d774f4c8eab811ac2124c1e80~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Standard American Flag": "https://static.wixstatic.com/media/8a0e06_f1e383a4098e427492da8220f478fbdb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Premium Metal Business Cards": "https://static.wixstatic.com/media/8a0e06_bd5f93282dd2486a89f3aec3bb86fa8a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Better with Dogs": "https://static.wixstatic.com/media/8a0e06_95284e9a17db40ddb7ea3f129ac20197~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Scripture Wall Hanging": "https://static.wixstatic.com/media/8a0e06_69e4d12ce7524d4d83c88117214768f6~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
  "Pledge of Allegiance Board": "https://static.wixstatic.com/media/8a0e06_291cc35ec71c4d058afb6b3385779a23~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
  "Nativity Silhuette": "https://static.wixstatic.com/media/8a0e06_b254177b21454f4cb66488800d9ce74a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
};

const variantImages = {
  "Personalized Ornaments": {
    "Style=Snowy City": "https://static.wixstatic.com/media/8a0e06_8caeddc9ea6a4e49b6cecb481c62d964~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Santa's Snowman": "https://static.wixstatic.com/media/8a0e06_1c778982ca6540808f318972ba21d1d1~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Christmas Tree Farm": "https://static.wixstatic.com/media/8a0e06_7bb98e252f6c48ca81387006a671ed1e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=North Pole Forest": "https://static.wixstatic.com/media/8a0e06_84f815d67281457fb0ce51b2632a7c98~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Birch Tree Deer": "https://static.wixstatic.com/media/8a0e06_17e143baca6c43f9b4039e350f64dc2d~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Santa's Sleigh": "https://static.wixstatic.com/media/8a0e06_ee820cd97c5245cfa374e2cfb153348e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Moonlight Christmas": "https://static.wixstatic.com/media/8a0e06_f8a22456c5d04771a06b80dea21924ef~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Christmas Cabin": "https://static.wixstatic.com/media/8a0e06_1184c4c8f58d41418e85e5bcabf5cf8a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Dog Paw": "https://static.wixstatic.com/media/8a0e06_3300c9e08a6a42b3bee542b5c80f63bf~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Running Deer": "https://static.wixstatic.com/media/8a0e06_02be379e0aa940a5b85dfac505d3821a~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Snowflake Deer": "https://static.wixstatic.com/media/8a0e06_90d8b9faf8b9428b9fe15da2b4fd8ef4~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Christmas Snowman": "https://static.wixstatic.com/media/8a0e06_8373c53094cc481392e2f3137aa1f360~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
  },
  "Classic Ornaments": {
    "Style=Blue Christmas": "https://static.wixstatic.com/media/8a0e06_138314ec7c944b71a3310c7f4c396d5e~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Poinsettia": "https://static.wixstatic.com/media/8a0e06_a74e1791472e4a5fb4912847d3bf1b54~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Nativity Scene": "https://static.wixstatic.com/media/8a0e06_e18acad2e01e4a4db22887af7d92ed67~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Bible Cross": "https://static.wixstatic.com/media/8a0e06_48f97d8ee6774c0ba7d33b7b7ccfcb46~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Folded Flag": "https://static.wixstatic.com/media/8a0e06_60817f3d902c4eca8b5dd9626a21a600~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Black Snowflake": "https://static.wixstatic.com/media/8a0e06_3773fa333ba046d5ba5da7be13ed77fb~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Blue Silver": "https://static.wixstatic.com/media/8a0e06_fc3b7810d8ff4485a894e5d86c7b7fe1~mv2.png/v1/fit/w_500,h_500,q_90/file.png"
  },
  "Mug Tree Holders": {
    "Style=Twisted Mug Tree": "https://static.wixstatic.com/media/8a0e06_625886787d524feda7891d5ecac56174~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Normal Mug Tree": "https://static.wixstatic.com/media/8a0e06_69d3b2dfecec4f1e84911b891686096c~mv2.jpeg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Layered Wooden Designs": {
    "Style=Highland Cow": "https://static.wixstatic.com/media/8a0e06_6715aedbb6ce4f78b852139d2513702c~mv2.png/v1/fit/w_500,h_500,q_90/file.png",
    "Style=Train": "https://static.wixstatic.com/media/8a0e06_77232eb80aae4df88dd5d4879ce8cb22~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Deer ShadowBox": "https://static.wixstatic.com/media/8a0e06_d5be1ff1ed494e42b313d2a57e920786~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Musical Guitar": "https://static.wixstatic.com/media/8a0e06_87b3c052d81345a18df5dfc301e9de44~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Lion": "https://static.wixstatic.com/media/8a0e06_cad4fe31a16146bdaf18acb97f2c631f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Dragon": "https://static.wixstatic.com/media/8a0e06_6140081f04554c57b22cc7639beef9e2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Emoji Earrings": {
    "Emoji=Cool Guy": "https://static.wixstatic.com/media/8a0e06_d539e356ea9847bf8a0b33a86756733e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Emoji=Heart Eyes": "https://static.wixstatic.com/media/8a0e06_ee2b84da5abc4577aed49800799d8aef~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Emoji=Smile": "https://static.wixstatic.com/media/8a0e06_162868c14c664ab0b6343135555bd57f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Emoji=Feather": "https://static.wixstatic.com/media/8a0e06_7740c84b405940edbc386619bce6fe01~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Emoji=Leaf": "https://static.wixstatic.com/media/8a0e06_620907f28fe3475d980de2f5d3e5e06f~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Heart Earrings": {
    "Heart Style=Heart with arrow (Red)": "https://static.wixstatic.com/media/8a0e06_6fe57c66727b44aa8c318aa4b1bc0953~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart with wings (Red)": "https://static.wixstatic.com/media/8a0e06_0327cc7f8e5647ef9c102d40afc7f4a1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart with wings (Pink)": "https://static.wixstatic.com/media/8a0e06_70de65dfcea94ac986a46e8aeacb61fc~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart Key (Red)": "https://static.wixstatic.com/media/8a0e06_a9ed4f1f71a54a40973736806ab4aa7b~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart Key (Pink)": "https://static.wixstatic.com/media/8a0e06_e74e3a69555c4cebb623fe5b1fbf25b0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart Key (Blue)": "https://static.wixstatic.com/media/8a0e06_1dfa3667da9e4d58b32259dfd174f2f4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Heart Style=Heart": "https://static.wixstatic.com/media/8a0e06_63ff41db7c094ad580517dd3c83b8161~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Animal Earrings": {
    "Animal=Chicken": "https://static.wixstatic.com/media/8a0e06_e8ba61f8a6704b93aae52c441204996a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Dalmation": "https://static.wixstatic.com/media/8a0e06_5689e07342914475a15e259a1ee9de59~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Bunny(White)": "https://static.wixstatic.com/media/8a0e06_dc4ee2d45fc64d688d7f711be1d110a1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Bunny(Brown)": "https://static.wixstatic.com/media/8a0e06_90d5a84c13ac4394a3c2a377adf7e0f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Bunny (White)": "https://static.wixstatic.com/media/8a0e06_dc4ee2d45fc64d688d7f711be1d110a1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Bunny (Brown)": "https://static.wixstatic.com/media/8a0e06_90d5a84c13ac4394a3c2a377adf7e0f2~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Bumble Bee": "https://static.wixstatic.com/media/8a0e06_40e282d9cbe84b018528e103f2c6b543~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Dog Paw(Pink)": "https://static.wixstatic.com/media/8a0e06_b70b536cb5e34b0681bb1ebc5e7f01bf~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Dog Paw(Black)": "https://static.wixstatic.com/media/8a0e06_e35cd707d19b45c88f2b8b9e9951739e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Dog Paw (Pink)": "https://static.wixstatic.com/media/8a0e06_b70b536cb5e34b0681bb1ebc5e7f01bf~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Animal=Dog Paw (Black)": "https://static.wixstatic.com/media/8a0e06_e35cd707d19b45c88f2b8b9e9951739e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Misc. Earrings": {
    "Foods=Mushroom": "https://static.wixstatic.com/media/8a0e06_aa1a649879ce4b6e9939e8267ef42e90~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Foods=Muschroom": "https://static.wixstatic.com/media/8a0e06_aa1a649879ce4b6e9939e8267ef42e90~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Foods=Coffee Mug": "https://static.wixstatic.com/media/8a0e06_1d4daeb5d1b74cda8d3461bbd14ff015~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Foods=Pink Popcicles": "https://static.wixstatic.com/media/8a0e06_9d66f84338fe47d8b9999ade22137fd4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Foods=Purple Popcicles": "https://static.wixstatic.com/media/8a0e06_7494110eb30e46d2b3b8b9163a8c174c~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Food Earrings": {
    "Tasty Treats=Chocolate bar": "https://static.wixstatic.com/media/8a0e06_4c8d28d98a0a4f2c8b25fe494ec69841~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=Toast": "https://static.wixstatic.com/media/8a0e06_1c4d427566454b4d9190bd24fb5b78cb~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=Watermellon": "https://static.wixstatic.com/media/8a0e06_2438833a5f18451fbd3367375002ef43~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=Avacodo": "https://static.wixstatic.com/media/8a0e06_a91dc4e450f74750b711780cc68a10ea~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=To-Go-Cups": "https://static.wixstatic.com/media/8a0e06_82ac98c2c650460199dd8af9794a4c25~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=Apple": "https://static.wixstatic.com/media/8a0e06_4e01ebfb47334f2db8627dc04a15db12~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Tasty Treats=HotDogs": "https://static.wixstatic.com/media/8a0e06_4fa4fae033c84b55a69aa465e4718e60~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Lily Earrings": {
    "Color=Pink/white": "https://static.wixstatic.com/media/8a0e06_19706844f99a4e9bb77204547900b0ee~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=White/Pink": "https://static.wixstatic.com/media/8a0e06_d33c04dae6e34880b85a2547c4671491~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Tulip Earings": {
    "Color=Red/Orange": "https://static.wixstatic.com/media/8a0e06_ae30312783214aca90d2e532d3da65e9~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Red/White": "https://static.wixstatic.com/media/8a0e06_beeeb3ecddc64da8802cd38a0490d9f8~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Red/Yellow": "https://static.wixstatic.com/media/8a0e06_a5671e5580164650bd07f6f3a822614e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Yellow/Orange": "https://static.wixstatic.com/media/8a0e06_943e920571944964a3ffcb34d144e6ce~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Purple/White": "https://static.wixstatic.com/media/8a0e06_6489eee450ae46e8a33b0d9a22a54399~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Daisy Earings": {
    "Color=White": "https://static.wixstatic.com/media/8a0e06_3278ee3377e54abd8fa5205050f3457e~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Red": "https://static.wixstatic.com/media/8a0e06_ee85841b2e974d6a8402d4dc72141797~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Purple": "https://static.wixstatic.com/media/8a0e06_bf60640b7ef741458bd3979a9ef9ea0a~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=LightBlue": "https://static.wixstatic.com/media/8a0e06_41183e51f05048099867b5a72a6f2515~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Rose Earings": {
    "Color=Yellow": "https://static.wixstatic.com/media/8a0e06_f85911b14fc14b0683bac9aeb385ade0~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=White": "https://static.wixstatic.com/media/8a0e06_108bfa4221224916a2ab0bd8f8643f74~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Red": "https://static.wixstatic.com/media/8a0e06_942a56d24c2d46d0a1a91d62e41468e4~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Color=Pink": "https://static.wixstatic.com/media/8a0e06_ffa0cfb386b0486a857a4104db4ae655~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  },
  "Custom Canvas Art": {
    "Style=He is Risen": "https://static.wixstatic.com/media/8a0e06_e4b75d4ccfaa4172aa1add0eabd7b7d1~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg",
    "Style=Three Wooden Crosses": "https://static.wixstatic.com/media/8a0e06_82f6b24fd19c449bbd6a4fe29a39a538~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg"
  }
};

products.forEach((product) => {
  product.image = productImages[product.name] || "";
});

const updateHeader = () => {
  header.classList.toggle("scrolled", window.scrollY > 20);
};

const selectedProduct = () => products[Number(orderProduct.value)];
let cart = JSON.parse(localStorage.getItem("wabekesCart") || "[]");
let pendingOrder = null;
let selectedPaymentMethod = paymentMethods[0].id;

const optionControlId = (label) => `option-${label.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

const moneyToNumber = (value) => Number(String(value).replace(/[^0-9.]/g, "")) || 0;

const formatMoney = (value) => `$${value.toFixed(2)}`;

const hydrateCatalogImages = () => {
  document.querySelectorAll(".shop-grid article").forEach((card) => {
    const title = card.querySelector("h3")?.textContent.trim();
    const image = productImages[title];

    if (image) {
      const img = document.createElement("img");
      img.className = "shop-image";
      img.src = image;
      img.alt = title;
      card.prepend(img);
      return;
    }

    const fallback = document.createElement("div");
    fallback.className = "image-fallback";
    fallback.textContent = "Image coming soon";
    card.prepend(fallback);
  });
};

const selectedOptionValues = () => {
  const values = {};
  document.querySelectorAll("[data-product-option]").forEach((field) => {
    values[field.dataset.productOption] = field.value || "";
  });
  return values;
};

const normalizeVariantKey = (key) => key
  .toLowerCase()
  .replace(/\s+/g, "")
  .replace("muschroom", "mushroom");

const currentProductImage = (product) => {
  const images = variantImages[product.name];
  if (!images) {
    return product.image;
  }

  const values = selectedOptionValues();
  for (const [label, value] of Object.entries(values)) {
    const exactKey = `${label}=${value}`;
    if (images[exactKey]) {
      return images[exactKey];
    }

    const normalizedKey = normalizeVariantKey(exactKey);
    const matchedKey = Object.keys(images).find((key) => normalizeVariantKey(key) === normalizedKey);
    if (matchedKey) {
      return images[matchedKey];
    }
  }

  return product.image;
};

const renderSelectedProductImage = () => {
  const product = selectedProduct();
  const image = currentProductImage(product);

  if (image) {
    if (selectedProductImage.src !== image) {
      selectedProductImage.classList.add("image-changing");
      window.setTimeout(() => {
        selectedProductImage.src = image;
        selectedProductImage.alt = product.name;
        selectedProductImage.hidden = false;
        selectedProductImage.classList.remove("image-changing");
      }, 120);
    } else {
      selectedProductImage.alt = product.name;
      selectedProductImage.hidden = false;
    }
  } else {
    selectedProductImage.hidden = true;
    selectedProductImage.removeAttribute("src");
    selectedProductImage.alt = "";
  }
};

const currentProductPrice = (product) => {
  const values = selectedOptionValues();

  if (product.variantPrices) {
    const key = Object.entries(values)
      .filter(([, value]) => value)
      .map(([label, value]) => `${label}=${value}`)
      .join("|");

    if (product.variantPrices[key]) {
      return product.variantPrices[key];
    }
  }

  if (product.optionPrices) {
    for (const [label, value] of Object.entries(values)) {
      const key = `${label}=${value}`;
      if (product.optionPrices[key]) {
        return product.optionPrices[key];
      }
    }
  }

  if (product.amountPrices && values.Amount && product.amountPrices[values.Amount]) {
    return product.amountPrices[values.Amount];
  }

  return product.price;
};

const renderPrice = () => {
  const product = selectedProduct();
  const price = currentProductPrice(product);

  priceOutput.innerHTML = product.regularPrice && price === product.price
    ? `<span class="price-regular">${product.regularPrice}</span>${price}`
    : price;
};

const selectedCartLine = () => {
  const product = selectedProduct();
  const price = currentProductPrice(product);
  const quantity = Math.max(1, Number(orderQuantity.value) || 1);
  const options = [];

  document.querySelectorAll("[data-product-option]").forEach((field) => {
    options.push({
      label: field.dataset.productOption,
      value: field.value || "Not provided"
    });
  });

  return {
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    product: product.name,
    price,
    unitPrice: moneyToNumber(price),
    quantity,
    options,
    image: currentProductImage(product)
  };
};

const cartLineTotal = (item) => item.unitPrice * item.quantity;

const saveCart = () => {
  localStorage.setItem("wabekesCart", JSON.stringify(cart));
};

const finishPaidCheckout = (order, message) => {
  if (order) {
    const existingOrders = JSON.parse(localStorage.getItem("wabekesOrders") || "[]");
    existingOrders.push({
      ...order,
      paidAt: new Date().toISOString(),
      paymentStatus: "paid"
    });
    localStorage.setItem("wabekesOrders", JSON.stringify(existingOrders));
  }

  localStorage.removeItem("wabekesPendingCheckout");
  cart = [];
  saveCart();
  renderCart();
  checkoutStatus.textContent = message;
};

const handlePaymentReturn = async () => {
  const params = new URLSearchParams(window.location.search);
  const payment = params.get("payment");
  if (!payment) {
    return;
  }

  const storedOrder = JSON.parse(localStorage.getItem("wabekesPendingCheckout") || "null");

  if (payment === "stripe-success") {
    finishPaidCheckout(storedOrder, "Payment successful. Your order has been placed.");
  }

  if (payment === "paypal-success") {
    checkoutStatus.textContent = "Finalizing PayPal payment...";
    try {
      const response = await fetch("/.netlify/functions/capture-paypal-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orderID: params.get("token") })
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "PayPal payment could not be finalized.");
      }
      finishPaidCheckout(storedOrder, "PayPal payment successful. Your order has been placed.");
    } catch (error) {
      checkoutStatus.textContent = error.message;
    }
  }

  if (payment === "cancel") {
    checkoutStatus.textContent = "Payment was canceled. Your cart is still saved.";
  }

  window.history.replaceState({}, document.title, window.location.pathname + window.location.hash);
};

const renderCart = () => {
  cartCount.textContent = String(cart.reduce((sum, item) => sum + item.quantity, 0));
  cartTotal.textContent = formatMoney(cart.reduce((sum, item) => sum + cartLineTotal(item), 0));

  if (!cart.length) {
    cartItems.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    return;
  }

  cartItems.innerHTML = cart.map((item) => {
    const optionText = item.options.length
      ? item.options.map((option) => `<p>${option.label}: ${option.value}</p>`).join("")
      : '<p>No extra options selected.</p>';
    const image = item.image ? `<img class="cart-item-image" src="${item.image}" alt="${item.product}">` : "";

    return `
      <article class="cart-item">
        ${image}
        <h3>${item.product}</h3>
        ${optionText}
        <div class="cart-item-footer">
          <strong>${item.quantity} x ${item.price} = ${formatMoney(cartLineTotal(item))}</strong>
          <button type="button" data-remove-cart-item="${item.id}">Remove</button>
        </div>
      </article>
    `;
  }).join("");
};

const openCart = () => {
  renderCart();
  cartOverlay.hidden = false;
  cartPanel.classList.add("open");
  cartPanel.setAttribute("aria-hidden", "false");
};

const closeCart = () => {
  cartOverlay.hidden = true;
  cartPanel.classList.remove("open");
  cartPanel.setAttribute("aria-hidden", "true");
};

const openPurchase = () => {
  purchaseOverlay.hidden = false;
  purchasePanel.classList.add("open");
  purchasePanel.setAttribute("aria-hidden", "false");
};

const closePurchase = () => {
  purchaseOverlay.hidden = true;
  purchasePanel.classList.remove("open");
  purchasePanel.setAttribute("aria-hidden", "true");
};

const addSelectedProductToCart = () => {
  cart.push(selectedCartLine());
  saveCart();
  renderCart();
  productNote.textContent = "Added to cart. You can keep shopping or open the cart to checkout.";
  openCart();
};

const orderSummaryLines = () => {
  const lines = [];
  cart.forEach((item, index) => {
    lines.push(`${index + 1}. ${item.product}`);
    lines.push(`   Quantity: ${item.quantity}`);
    lines.push(`   Unit price: ${item.price}`);
    item.options.forEach((option) => {
      lines.push(`   ${option.label}: ${option.value}`);
    });
    lines.push(`   Line total: ${formatMoney(cartLineTotal(item))}`);
  });
  lines.push(`Order total: ${cartTotal.textContent}`);
  return lines;
};

const buildPendingOrder = () => {
  const formData = new FormData(checkoutForm);
  return {
    id: `WAB-${Date.now().toString().slice(-8)}`,
    createdAt: new Date().toISOString(),
    customer: {
      name: formData.get("name").trim(),
      email: formData.get("email").trim(),
      phone: formData.get("phone").trim(),
      method: formData.get("method"),
      address: formData.get("address").trim(),
      notes: formData.get("notes").trim()
    },
    items: cart.map((item) => ({ ...item })),
    total: cart.reduce((sum, item) => sum + cartLineTotal(item), 0)
  };
};

const renderPurchaseReview = () => {
  purchaseSummary.innerHTML = pendingOrder.items.map((item) => {
    const optionText = item.options.length
      ? item.options.map((option) => `${option.label}: ${option.value}`).join("<br>")
      : "No extra options";

    return `
      <div class="purchase-line">
        <strong>${item.product}</strong>
        <span>${optionText}</span>
        <span>${item.quantity} x ${item.price} = ${formatMoney(cartLineTotal(item))}</span>
      </div>
    `;
  }).join("");

  purchaseCustomer.innerHTML = `
    <p><strong>${pendingOrder.customer.name}</strong><br>${pendingOrder.customer.email}<br>${pendingOrder.customer.phone}</p>
    <p>${pendingOrder.customer.method}<br>${pendingOrder.customer.address || "No address or pickup notes provided."}</p>
    <p>${pendingOrder.customer.notes || "No order notes."}</p>
    <p><strong>Payment:</strong> ${selectedPayment().name}</p>
  `;

  purchaseTotal.textContent = formatMoney(pendingOrder.total);
  renderPaymentOptions();
};

const renderPaymentOptions = () => {
  paymentOptions.innerHTML = paymentMethods.map((method) => `
    <label class="payment-option">
      <input type="radio" name="paymentMethod" value="${method.id}" ${method.id === selectedPaymentMethod ? "checked" : ""}>
      <span>
        <strong>${method.name}</strong>
        <span>${method.description}</span>
      </span>
    </label>
  `).join("");
};

const savePlacedOrder = () => {
  const existingOrders = JSON.parse(localStorage.getItem("wabekesOrders") || "[]");
  existingOrders.push(pendingOrder);
  localStorage.setItem("wabekesOrders", JSON.stringify(existingOrders));
};

const selectedPayment = () => paymentMethods.find((method) => method.id === selectedPaymentMethod) || paymentMethods[0];

const checkoutEndpoint = (provider) => {
  if (provider === "stripe") {
    return "/.netlify/functions/create-stripe-checkout";
  }

  if (provider === "paypal") {
    return "/.netlify/functions/create-paypal-order";
  }

  return "";
};

const completeLocalOrder = (message) => {
  savePlacedOrder();
  cart = [];
  pendingOrder = null;
  saveCart();
  renderCart();
  checkoutForm.reset();
  purchaseSummary.innerHTML = "";
  purchaseCustomer.innerHTML = "";
  purchaseTotal.textContent = "$0.00";
  purchaseStatus.textContent = message;
};

const startOnlineCheckout = async () => {
  const payment = selectedPayment();

  if (payment.provider === "offline") {
    pendingOrder.paymentMethod = selectedPaymentMethod;
    completeLocalOrder("Order placed. You can pay when picking up in Hamilton, Michigan.");
    return;
  }

  const endpoint = checkoutEndpoint(payment.provider);
  if (!endpoint) {
    purchaseStatus.textContent = "This payment method is not configured yet.";
    return;
  }

  pendingOrder.paymentMethod = selectedPaymentMethod;
  pendingOrder.paymentName = payment.name;
  localStorage.setItem("wabekesPendingCheckout", JSON.stringify(pendingOrder));
  purchaseStatus.textContent = `Opening secure ${payment.name} checkout...`;
  placeOrderButton.disabled = true;

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ order: pendingOrder, paymentMethod: selectedPaymentMethod })
    });
    const rawResponse = await response.text();
    let data = {};

    try {
      data = rawResponse ? JSON.parse(rawResponse) : {};
    } catch {
      throw new Error(`Payment function did not return JSON. Check that Netlify Functions are deployed at ${endpoint}.`);
    }

    if (!response.ok || !data.url) {
      throw new Error(data.error || "Checkout could not be started.");
    }

    window.location.href = data.url;
  } catch (error) {
    placeOrderButton.disabled = false;
    purchaseStatus.textContent = error.message;
  }
};

const renderProductOptions = () => {
  const product = selectedProduct();
  optionFields.innerHTML = "";

  (product.options || []).forEach((option) => {
    const id = optionControlId(option.label);
    const label = document.createElement("label");
    const select = document.createElement("select");

    label.setAttribute("for", id);
    label.textContent = option.label;
    select.id = id;
    select.dataset.productOption = option.label;

    option.values.forEach((value) => {
      const choice = document.createElement("option");
      choice.value = value;
      choice.textContent = value;
      select.append(choice);
    });

    select.addEventListener("change", () => {
      renderPrice();
      renderSelectedProductImage();
    });
    optionFields.append(label, select);
  });

  (product.fields || []).forEach((fieldLabel) => {
    const id = optionControlId(fieldLabel);
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.setAttribute("for", id);
    label.textContent = fieldLabel;
    input.id = id;
    input.type = "text";
    input.dataset.productOption = fieldLabel;
    optionFields.append(label, input);
  });

  renderPrice();
  renderSelectedProductImage();

  const optionCount = (product.options || []).length + (product.fields || []).length;
  productNote.textContent = optionCount
    ? "Choose the available options, then contact Wabekes with the selected details."
    : "This item does not require extra options. Contact Wabekes to order or ask a question.";

};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
hydrateCatalogImages();

const revealTargets = document.querySelectorAll(
  ".intro-grid > *, .split-copy > *, .quote-panel, .shop-grid article, .gallery-band > *, .contact-section > *, .site-footer > *"
);

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach((target, index) => {
    target.classList.add("reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 8, 6) * 55}ms`);
    revealObserver.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

navToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

const renderProductDropdown = () => {
  const productIndexByName = new Map(products.map((product, index) => [product.name, index]));
  const groupedProducts = new Set();

  productGroups.forEach((group) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = group.label;

    group.products.forEach((productName) => {
      const index = productIndexByName.get(productName);
      if (index === undefined) {
        return;
      }

      const option = document.createElement("option");
      option.value = String(index);
      option.textContent = productName;
      optgroup.append(option);
      groupedProducts.add(productName);
    });

    if (optgroup.children.length) {
      orderProduct.append(optgroup);
    }
  });

  const ungrouped = products.filter((product) => !groupedProducts.has(product.name));
  if (ungrouped.length) {
    const optgroup = document.createElement("optgroup");
    optgroup.label = "More Items";

    ungrouped.forEach((product) => {
      const option = document.createElement("option");
      option.value = String(productIndexByName.get(product.name));
      option.textContent = product.name;
      optgroup.append(option);
    });

    orderProduct.append(optgroup);
  }
};

renderProductDropdown();

orderProduct.addEventListener("change", renderProductOptions);
orderQuantity.addEventListener("input", () => {
  if (Number(orderQuantity.value) < 1) {
    orderQuantity.value = 1;
  }
});
renderProductOptions();
renderCart();
handlePaymentReturn();

addToCartButton.addEventListener("click", addSelectedProductToCart);
viewCartButton.addEventListener("click", openCart);
cartButton.addEventListener("click", openCart);
closeCartButton.addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

cartItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove-cart-item]");
  if (!removeButton) {
    return;
  }

  cart = cart.filter((item) => item.id !== removeButton.dataset.removeCartItem);
  saveCart();
  renderCart();
});

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!cart.length) {
    checkoutStatus.textContent = "Add at least one item before checkout.";
    return;
  }

  pendingOrder = buildPendingOrder();
  pendingOrder.paymentMethod = selectedPaymentMethod;

  if (!pendingOrder.customer.name || !pendingOrder.customer.email || !pendingOrder.customer.phone) {
    checkoutStatus.textContent = "Please enter your name, email, and phone.";
    return;
  }

  checkoutStatus.textContent = "";
  purchaseStatus.textContent = "";
  renderPurchaseReview();
  closeCart();
  openPurchase();
});

placeOrderButton.addEventListener("click", async () => {
  if (!pendingOrder) {
    purchaseStatus.textContent = "No order is ready to place.";
    return;
  }

  await startOnlineCheckout();
});

backToCartButton.addEventListener("click", () => {
  closePurchase();
  openCart();
});

closePurchaseButton.addEventListener("click", closePurchase);
purchaseOverlay.addEventListener("click", closePurchase);

paymentOptions.addEventListener("change", (event) => {
  if (event.target.name === "paymentMethod") {
    selectedPaymentMethod = event.target.value;
    if (pendingOrder) {
      pendingOrder.paymentMethod = selectedPaymentMethod;
    }
  }
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const email = formData.get("email").trim();
  const project = formData.get("project").trim();
  const subject = encodeURIComponent(`Wabekes Woodcraft request from ${name}`);
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nProject details:\n${project}`);

  formStatus.textContent = "Opening an email draft with your project details.";
  window.location.href = `mailto:WabekesWoodcraftCreations@gmail.com?subject=${subject}&body=${body}`;
});
