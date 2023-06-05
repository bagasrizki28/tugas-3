import React from "react";

const products = [
  {
    id: 1,
    name: "Mie Ayam Polos",
    deskripsi: "Mie dengan potongan ayam yang enak dan nikmat! hanya Rp.20.000",
    price: "20.000",
    image:
      "https://awsimages.detik.net.id/community/media/visual/2022/10/12/resep-mie-ayam-kecap_43.jpeg?w=1200",
  },
  {
    id: 2,
    name: "Mie Ayam Bakso",
    deskripsi:
      "Perpaduan mie ayam dan bakso yang mengenyangkan, hanya Rp.25.000!",
    price: "25.000",
    image:
      "https://selerasa.com/wp-content/uploads/2015/05/images_mie_Mie_ayam_15-mie-ayam-bakso.jpg",
  },
  {
    id: 3,
    name: "Bakso Iga Seuhah",
    deskripsi:
      "Bakso dengan Daging tulang iga besar dan pedas! hanya Rp.30.000",
    price: "30.000",
    image:
      "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2023/03/08/4251615582.jpg",
  },
];

function App() {
  const handleProductClick = (name) => {
    alert(`Detail produk: ${name}`);
  };

  return (
    <div>
      <header>
        <h1>Bagas Rizky Herdiansyah Putra</h1>
      </header>
      <main>
        {products.map((product) => (
          <div
            key={product.id}
            className="card"
            onClick={() => handleProductClick(product.deskripsi)}
          >
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>Harga: Rp.{product.price}</p>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
