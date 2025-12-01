// styles


function IndexHeader() {
  return (
    <>
      <div className="page-header section-dark h-screen" style={{
  backgroundImage: "url(/images/hero/nordeste.jpg)",
}}>

  <div className="filter" />

  <div className="content-center relative z-10 h-screen">
    <div className="title-brand">
      <img src="/images/logo/logo.png" style={{ width: "70%", margin: "auto" }} />

      {/* Neblina aqui */}
      <div className="fog-low">
        <img src="/images/hero/fog-low.png" alt="fog" />
      </div>
    </div>

    <h2 className=" text-center text-white mt-4 text-17 font-light">
      Um projeto realizado pelo Grupo Marketing e Negócios
    </h2>
  </div>

  {/* Nuvens no fundo */}
  <div
    className="moving-clouds"
    style={{ backgroundImage: "url(/images/hero/clouds.png)" }}
  />

</div>

    </>
  );
}

export default IndexHeader;
