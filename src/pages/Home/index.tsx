import {
  Coffee,
  Minus,
  Package,
  Plus,
  ShoppingCartSimple,
  Timer,
} from "phosphor-react";
import cafe from "../../assets/logo.svg";
import hero from "../../assets/hero.png";

export function Home() {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul>
            <li>
              <ShoppingCartSimple /> Compra simples e segura
            </li>
            <li>
              <Timer /> Entrega rápida e rastreada
            </li>
            <li>
              <Package /> Embalagem mantém o café intacto
            </li>
            <li>
              <Coffee /> O café chega fresquinho até você
            </li>
          </ul>
        </div>
        <div>
          <img src={hero} alt="" />
        </div>
      </div>

      {/* inicio coffee list */}
      <div>
        <h1>Nossos cafés</h1>
        <div style={{ display: "flex" }}>
          <div>
            <img src={cafe} alt="" />
            <div>tradicional</div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <div>R$ 9,90</div>
              <div>
                <Minus />
                1
                <Plus />
              </div>
              <div>
                <ShoppingCartSimple />
              </div>
            </div>
          </div>
          <div>
            <img src={cafe} alt="" />
            <div>tradicional</div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <div>R$ 9,90</div>
              <div>
                <Minus />
                1
                <Plus />
              </div>
              <div>
                <ShoppingCartSimple />
              </div>
            </div>
          </div>
          <div>
            <img src={cafe} alt="" />
            <div>tradicional</div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <div>R$ 9,90</div>
              <div>
                <Minus />
                1
                <Plus />
              </div>
              <div>
                <ShoppingCartSimple />
              </div>
            </div>
          </div>
          <div>
            <img src={cafe} alt="" />
            <div>tradicional</div>
            <h1>Expresso Tradicional</h1>
            <p>O tradicional café feito com água quente e grãos moídos</p>
            <div>
              <div>R$ 9,90</div>
              <div>
                <Minus />
                1
                <Plus />
              </div>
              <div>
                <ShoppingCartSimple />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
