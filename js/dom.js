const container = document.querySelector("div.container");

const retornoVino = (producto) => {
  return `<div class="imag-1">
                <img src="./img/PREMIUM-MALBEC.png" alt="" class="vino1" />
                <p class="texto">Vino Malbec Cordoba</p>
                <div class="card-name">Vino</div>
                <p class="precio">$ 2500</p>
                <div class="card-button">
                    <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
                </div>
                </div>
                <div class="imag-2">
                <img src="./img/gran-enemigo.png" alt="" class="vino2" />
                <p class="texto">Vino Cabernet Franc El Gran Enemigo</p>
                <div class="card-name">Vino</div>
                <p class="precio">$ 4650</p>
                <div class="card-button">
                    <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
                </div>
                </div>
                <div class="imag-3">
                <img src="./img/reservabag.jpg" alt="" class="vino3" />
                <p class="texto">Vino Malbec Reserva Bag</p>
                <div class="card-name">Vino</div>
                <p class="precio">$ 3500</p>
                <div class="card-button">
                    <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
                </div>
                </div>
            </div>`
}

const container1 = document.querySelector("div.container1");

const retornoVino1 = (producto) => {
  return `
    <div class="imgPadre2">
            <div class="imag-4">
            <img src="./img/mm.jpeg" alt="" class="vino4" />
            <p class="texto">Vino Mosquita Muerta/p>
            <div class="card-name">Vino</div>
                <p class="precio">$ 4500</p>
            <div class="card-button">
                <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
            </div>
            </div>
            <div class="imag-5">
            <img src="./img/SaintFelicien.jpeg" alt="" class="vino5" />
            <p class="texto">Vino SaintFelicien Malbec</p>
            <div class="card-name">Vino</div>
            <p class="precio">$ 2500</p>
            <div class="card-button">
                <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
            </div>
            </div>
            <div class="imag-6">
            <img src="./img/rutini.jpeg" alt="" class="vino6" />
            <p class="texto">Vino Cabernet Rutini</p>
            <div class="card-name">Vino</div>
            <p class="precio">$ 3500</p>
            <div class="card-button">
                <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
            </div>
            </div>
        </div>`
}
const container2 = document.querySelector("div.container1");

const retornoVino2 = (producto) => {
  return `
    <div class="imgPadre3">
        <div class="img-7">
          <img src="./img/torrentes.jpg" loading="lazy" alt="" class="vino7" />
          <p class="texto">Vino Blanco Gata Flora Torrontes</p>
           <div class="card-name">Vino</div>
          <p class="precio">$ 1500</p>
          <div class="card-button">
            <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
          </div>
        </div>
        <div class="img-8">
          <img src="./img/gradum-carmenere.png" loading="lazy" alt="" class="vino8" />
          <p class="texto">Vino Vistades Gradum Carmenere</p>
           <div class="card-name">Vino</div>
          <p class="precio">$ 2800</p>
          <div class="card-button">
            <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
          </div>
        </div>
        <div class="img-9">
          <img src="./img/castizo.jpg" loading="lazy" alt="" class="vino9" />
          <p class="texto">Vino Cabernet Franc Castizo</p>
           <div class="card-name">Vino</div>
          <p class="precio">$ 1800</p>
          <div class="card-button">
            <button class="button button-outline button-add" id="idunico" title="Pulsa para agregar al carrito">+</button>
          </div>
        </div>
      </div>`
}

const cargarMisProductos = ()=> {
    debugger;
    container.HTML = ""
    cargarMisProductos.forEach(producto => {
        console.table(producto);
        container.HTML += retornoVino(producto)
    })
}
