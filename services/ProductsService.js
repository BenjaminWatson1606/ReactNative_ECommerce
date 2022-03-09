const PRODUCTS = [
    {
         id: 100,
        name: 'IPhone13 Pro',
        price: 999.99,
        image: require('../assets/products/IPhone13.jpg'),
        description: 'A much more powerful camera system. A screen so responsive that it renews your sensations with each interaction. The fastest smartphone chip in the world. Exceptional resistance. And a spectacular gain in autonomy.'
    },
    {
        id: 101,
       name: 'IPhone13',
       price: 799.99,
       image: require('../assets/products/IPhone13_2.jpg'),
       description: 'The iPhone 13 is equipped with a 6.1-inch 60Hz OLED screen, a 5G-compatible Apple A15 Bionic SoC (NR & Sub-6) and a dual 12+12 megapixel photo sensor (large- angle and ultra wide-angle) with OIS.'
    },
    {
        id: 102,
       name: 'IPhone12 Pro',
       price: 699.99,
       image: require('../assets/products/IPhone12_2.jpg'),
       description: "The iPhone 12 Pro doesn't stop progress. We speed it up. An A14 Bionic chip that clearly outdistances all other smartphone chips. A pro camera system that revolutionizes shooting in low light conditions. And the Ceramic Shield, which quadruples drop resistance. The first impression is excellent. Wait to see the sequel."
   },
    {
         id: 103,
        name: 'IPhone12',
        price: 599.99,
        image: require('../assets/products/IPhone12.jpg'),
        description: "5G speed. A14 Bionic chip, the fastest on a smartphone. Edge-to-edge OLED display. And Night mode on every camera.The best iPhone screen ever, for impeccable contrast and impressive resolution. Featuring Ceramic Shield, which quadruples drop resistance.Ultra-fast speeds. Ultra-low latency. For lightning fast downloads, higher quality streaming video, more responsive gaming and real-time interactions. The A14 Bionic chip is the fastest smartphone chip. With its 16-core Neural Engine, it performs trillions of operations per second. And because it's extremely energy-efficient, it gives you tremendous battery life. With iPhone 12, you can shoot, edit and view videos in Dolby Vision. Use AirPlay to stream them to your Apple TV or connected TV."
    },
   {
         id: 104,
        name: 'Samsung Galaxy S20 FE',
        price: 399.99,
        image: require('../assets/products/samsung_1.jpg'),
        description: 'Measured diagonally, the Galaxy S20 FEs screen measures 6.5" across the rectangle and 6.3" with the edges rounded. The actual display area is less due to the rounded edges and the front camera.Typical value tested in the laboratory by a third party. Typical value is the estimated average value considering the deviation in battery capacity among the samples tested under IEC 61960 standard. Rated (minimum) capacity is 4370mAh. The memory that the user has is less than the total memory of the terminal, because the operating system needs a part of it to function optimally. Actual available memory may vary depending on carrier and system updates. Network: Bandwidth supported by device may vary by region and carrier'
    },
    {
        id: 105,
        name: 'Samsung Galaxy S10 + ',
        price: 269.99,
        image: require('../assets/products/samsung_2.jpg'),
        description: 'Main Camera: Dual Sensor, Main Sensor: 12 MP Dual Pixel, Aperture f/1.5-f/2.4, Ultra Wide Angle Sensor: 16 MP, Aperture f/2.2, Flash, HDR10+, Quick Launch, Optical Stabilization - Action Cam, Scene optimizer (30), Intelligent professional framing, Front camera: 10 MP Dual Pixel, Aperture f/1.9, Autofocus, HDR10+, Motion control, Voice control, Front flash (screen), Floating key'
    },
    {
        id: 106,
        name: 'Schwerer Panzerspähwagen ',
        price: 420.69,
        image: require('../assets/products/troll_1.jpg'),
        description: 'This name was given to a group of 6 and 8-wheeled armored personnel carriers that were adept at moving infantry troops about on the battlefield. There were mostly deployed for reconnaissance missions but they often engaged in light infantry skirmishes where their armor plating gave them a distinct advantage.'
    },
    {
        id: 107,
        name: 'Honor 50 ',
        price: 499.99,
        image: require('../assets/products/honor_1.jpg'),
        description: '【64MP Quad Camera】: The 64MP photo sensor lets you take high-resolution photos for stunning C3:G3 day or night. The other three sensors allow stunning macro, ultra-wide angle and portrait mode photos.【6.67" FullView Screen】: The 6.67" screen takes up 94.4% of the front of the HONOR 50 Lite for total visual immersion. Eye comfort mode protects you from blue light emissions and reduces eye strain.【Long-lasting battery life and fast charging】: Long-lasting battery life with the 4300 mAh battery, which charges to 40% in just 10 minutes thanks to the HONOR SuperCharge 66W.【Incredible Performance】: The Qualcomm Snapdragon 662 processor enables solid performance, coupled with 6GB of RAM and 128GB of storage.【All Android 11 Experience】: MagicUI 4.2 interface based on Android 11, with all Google apps and Play Store, which brings you all your favorite apps.'
    },
    {
        id: 108,
        name: 'Huawei P20 Lite ',
        price: 199.99,
        image: require('../assets/products/honor_2.jpg'),
        description: 'The Huawei P20 Lite has similar features to the Huawei P20 with a better price: equipped with a Kirign 659 processor with 4 GB of RAM, 64 GB of storage and a 16 MP camera.'
    },

];
export function getProducts() {
   return PRODUCTS;
}
export function getProduct(id) {
   return PRODUCTS.find((product) => (product.id == id));
}
